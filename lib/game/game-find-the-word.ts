import { words, type Label, type Word } from "~/assets/word/words";
import { GameSaver, type GameSaving } from "./game-saver";
import { getRandomInt } from "../random";
import { GameError } from "./game.error";
import { isSameWord } from "../word";
import type {
	GameState,
	GameType,
	PreviousWordStatus,
	WordLanguageToFind,
} from "./game.type";

export class GameFindTheWord {
	private readonly saver: GameSaver;

	public readonly words: Word[];

	public state: GameState = "playing";
	public previousWords: (Word & { state: PreviousWordStatus })[] = [];
	public wordAvailables: Word[] = [];
	public successfullWord = 0;
	public completedWord = 0;
	public currentWord: Word | null = null;

	public record: GameSaving | null = null;

	constructor(
		private readonly name: GameType,
		private readonly wordLanguageToFind: WordLanguageToFind,
		readonly label: Label | null,
	) {
		this.saver = new GameSaver(this.name, label ?? "ALL");
		this.record = this.saver.get();

		if (label) {
			this.words = words.filter((word) => word.labels.includes(label));
		} else {
			this.words = words;
		}

		this.reset();
	}

	public play(userInput: string) {
		if (!this.currentWord) {
			throw new GameError("Game has not been initialized");
		}

		if (
			isSameWord(
				userInput,
				this.wordLanguageToFind === "french"
					? this.currentWord.wordInFrench
					: this.currentWord.wordInRussian,
			)
		) {
			this.successfullWord += 1;
			this.previousWords.push({ ...this.currentWord, state: "correct" });
		} else {
			this.previousWords.push({ ...this.currentWord, state: "incorrect" });
		}
		this.completedWord += 1;
		this.nextRound();
	}

	private nextRound() {
		if (this.isGameEnding()) {
			this.state = "finished";
			if (this.isNewRecord()) {
				this.saver.save(this.getGameSaving());
				this.record = this.getGameSaving();
			}
			return;
		}

		if (this.isGameOver()) {
			this.reset();
			return;
		}

		const newWordIndex = getRandomInt(this.wordAvailables.length - 1);
		this.currentWord = this.wordAvailables[newWordIndex];
		this.wordAvailables.splice(newWordIndex, 1);
	}

	private reset() {
		this.state = "playing";
		this.wordAvailables = [...this.words];
		this.completedWord = 0;
		this.successfullWord = 0;
		this.previousWords = [];
		this.nextRound();
	}

	private getGameSaving(): GameSaving {
		return {
			numberOfSucessfullWord: this.successfullWord,
			numberOfWord: this.words.length,
		};
	}

	private isNewRecord(): boolean {
		if (this.state !== "finished") {
			return false;
		}

		const currentRecord = this.saver.get();
		if (!currentRecord) {
			return true;
		}

		if (this.successfullWord > currentRecord.numberOfSucessfullWord) {
			return true;
		}

		return false;
	}

	private isGameEnding(): boolean {
		return this.state === "playing" && this.wordAvailables.length === 0;
	}

	private isGameOver(): boolean {
		return this.state === "finished";
	}
}

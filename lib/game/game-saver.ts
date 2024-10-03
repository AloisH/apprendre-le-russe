import { LocalStorageHelper } from "../local-storage.helper";
import type { GameType } from "./game.type";

export type GameSaving = {
	numberOfWord: number;
	numberOfSucessfullWord: number;
};

export class GameSaver {
	private readonly ls: LocalStorageHelper;

	constructor(
		private readonly gameType: GameType,
		private readonly gameName: string,
	) {
		this.ls = new LocalStorageHelper();
	}

	public get(): GameSaving | null {
		return this.ls.get(this.getLsKey());
	}

	public save(gameSaving: GameSaving): void {
		this.ls.set(this.getLsKey(), gameSaving);
	}

	private getLsKey(): string {
		return `${this.gameType}:${this.gameName}`;
	}
}

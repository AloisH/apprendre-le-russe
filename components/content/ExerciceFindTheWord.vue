<script setup lang="ts">
import type { RefSymbol } from '@vue/reactivity';
import { type Word, type Label, words } from '~/assets/word/words';
import { LocalStorageHelper } from '~/lib/local-storage.helper';
import { getRandomInt } from '~/lib/random';
import { isSameWord } from '~/lib/word';

type PreviousWordStatus = 'correct' | 'incorrect' | 'no-state'
type GameState = 'finish' | 'playing';
type GameRecord = {
    numberOfWord: number;
    numberOfSucessfullWord: number;
}

const { label } = defineProps<{
    label: Label;
}>();

const ls = new LocalStorageHelper();

const selectedWords = ref<Word[]>(words.filter((word) => word.labels.includes(label)));
const selectedWordsStillAvailable = ref<Word[]>([...selectedWords.value])

const completedWord = ref(0);
const successfullWord = ref(0);
const currentSelectedWord = ref<Word | null>();
const userInput = ref<string>("");
const previousWord = ref<Word | null>();
const isLastWordValidated = ref<PreviousWordStatus>('no-state');
const gameState = ref<GameState>('playing');
const gameRecord = ref<GameRecord | null>();

function playOneRound() {
    if (gameState.value === 'playing' && selectedWordsStillAvailable.value.length === 0) {
        gameState.value = 'finish';
        if (!gameRecord.value || gameRecord.value.numberOfSucessfullWord < successfullWord.value) {
            gameRecord.value = {
                numberOfSucessfullWord: successfullWord.value,
                numberOfWord: selectedWords.value.length,
            }
            ls.set(`exercice-find-the-word:${label ?? 'ALL'}`, gameRecord.value);
        }
        return;
    }

    if (gameState.value === 'finish') {
        completedWord.value = 0;
        successfullWord.value = 0;
        gameState.value = 'playing';
        selectedWordsStillAvailable.value = [...selectedWords.value];
        isLastWordValidated.value = 'no-state';
    }

    previousWord.value = currentSelectedWord.value;
    const newWordIndex = getRandomInt(selectedWordsStillAvailable.value.length - 1);
    currentSelectedWord.value = selectedWordsStillAvailable.value[newWordIndex];
    selectedWordsStillAvailable.value = selectedWordsStillAvailable.value.toSpliced(newWordIndex, 1);
    userInput.value = '';
}

function onClickValidate() {
    if (!currentSelectedWord.value) {
        throw new Error('Game has not started yet!');
    }

    if (isSameWord(currentSelectedWord.value.wordInFrench, userInput.value)) {
        isLastWordValidated.value = 'correct';
        successfullWord.value += 1;
    } else {
        isLastWordValidated.value = 'incorrect';
    }
    completedWord.value += 1;
    playOneRound();
}

onMounted(() => {
    playOneRound();

    gameRecord.value = ls.get<GameRecord>(`exercice-find-the-word:${label ?? 'ALL'}`);
});

</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button variant="outline">
                Trouve le mot
                <Badge v-if="gameRecord" class="mx-2 bg-green-500 hover:bg-green-400">
                    {{ gameRecord.numberOfSucessfullWord }} / {{ gameRecord.numberOfWord }}
                </Badge>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle class="px-4 flex justify-between">
                    Trouve le mot
                    <Badge>{{ completedWord }} / {{ selectedWords.length }}</Badge>
                </DialogTitle>
            </DialogHeader>
            <div class="flex flex-col items-center justify-center gap-4">
                <div v-if="gameState === 'playing'" class="text-xl">
                    {{ currentSelectedWord?.wordInRussian.toLowerCase() }}
                </div>
                <div>
                    <div v-if="gameState === 'playing'" class="flex flex-col gap-2 items-center justify-center">
                        <Input v-model="userInput"
                            :class="{ 'border-red-500': isLastWordValidated === 'incorrect', 'border-green-500': isLastWordValidated === 'correct' }"
                            autofocus placeholder="Trouver le mot" @keyup.enter="onClickValidate" />
                        <div v-if="isLastWordValidated !== 'no-state'" class="font-bold" :class="{
                            'text-red-500': isLastWordValidated === 'incorrect',
                            'text-green-500': isLastWordValidated === 'correct',
                        }">
                            {{ previousWord?.wordInFrench }}
                        </div>
                    </div>
                    <div v-else>
                        <div class="text-xl">
                            Bravo, vous avez trouvé
                            <Badge class="mx-2 text-lg bg-green-500 hover:bg-green-400">{{ successfullWord }}</Badge>
                            mots
                            sur {{ selectedWords.length }}
                        </div>
                    </div>
                </div>
                <Button @click="onClickValidate">{{ gameState === 'playing' ? 'Valider' : 'Rejouer' }}</Button>
            </div>
        </DialogContent>
    </Dialog>

</template>
<script setup lang="ts">
import type { Label } from "~/assets/word/words";
import { GameFindTheWord } from "~/lib/game/game-find-the-word";
import type { PinInputInput } from "../ui/pin-input";

const { label } = defineProps<{
    label: Label;
}>();

const userInput = ref<string[]>([]);
const pinInputKey = ref(0);
const game = ref<GameFindTheWord>(new GameFindTheWord('exercice-guest-the-word', 'russian', label));

async function onClickValidate() {
    game.value.play(userInput.value.join(''));
    userInput.value = [];
    pinInputKey.value += 1;
    await nextTick();
    const firstPinElt = document.getElementById('pinInputInput-0');
    firstPinElt?.focus();
}

</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button variant="outline">
                Trouve le mot russe
                <Badge v-if="game.record" class="mx-2 bg-green-500 hover:bg-green-400">
                    {{ game.record.numberOfSucessfullWord }} / {{ game.record.numberOfWord }}
                </Badge>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle class="px-4 flex justify-between">
                    Trouve le mot russe
                    <Badge>{{ game.completedWord }} / {{ game.words.length }}</Badge>
                </DialogTitle>
            </DialogHeader>
            <div class="flex flex-col items-center justify-center gap-4">
                <div v-if="game.state === 'playing'" class="text-xl">
                    {{ game.currentWord?.wordInFrench }}
                </div>
                <div>
                    <div v-if="game.state === 'playing'" class="flex flex-col gap-2 items-center justify-center">
                        <PinInput :key="pinInputKey" v-model="userInput" @keyup.enter="onClickValidate">
                            <PinInputInput v-for="(id, index) in game.currentWord?.wordInRussian.length" :key="id"
                                class="border-l" :id="index === 0 ? `pinInputInput-${index}` : undefined"
                                :class="{ 'border-red-500': game.previousWords[game.previousWords.length - 1]?.state === 'incorrect', 'border-green-500': game.previousWords[game.previousWords.length - 1]?.state === 'correct' }"
                                :index="index" />
                        </PinInput>
                        <div v-if="game.previousWords[game.previousWords.length - 1]" class="font-bold" :class="{
                            'text-red-500': game.previousWords[game.previousWords.length - 1].state === 'incorrect',
                            'text-green-500': game.previousWords[game.previousWords.length - 1].state === 'correct',
                        }">
                            {{ game.previousWords[game.previousWords.length - 1].wordInRussian }}
                        </div>
                    </div>
                    <div v-else>
                        <div class="text-xl">
                            Bravo, vous avez trouvé
                            <Badge class="mx-2 text-lg bg-green-500 hover:bg-green-400">{{ game.successfullWord }}
                            </Badge>
                            mots
                            sur {{ game.words.length }}
                        </div>
                    </div>
                </div>
                <Button @click="onClickValidate">{{ game.state === 'playing' ? 'Valider' : 'Rejouer' }}</Button>
            </div>
            <GameTableWithMistake :game="(game as GameFindTheWord)" />
        </DialogContent>
    </Dialog>
</template>
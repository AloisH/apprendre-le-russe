<script setup lang="ts">
import type { Label } from "~/assets/word/words";
import { GameFindTheWord } from "~/lib/game/game-find-the-word";

const { label } = defineProps<{
    label: Label;
}>();

const userInput = ref<string>('');
const game = ref<GameFindTheWord>(new GameFindTheWord('exercice-find-the-word', 'russian', label));

function onClickValidate() {
    game.value.play(userInput.value);
    userInput.value = '';
}
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button variant="outline">
                Trouve le mot
                <Badge v-if="game.record" class="mx-2 bg-green-500 hover:bg-green-400">
                    {{ game.record.numberOfSucessfullWord }} / {{ game.record.numberOfWord }}
                </Badge>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle class="px-4 flex justify-between">
                    Trouve le mot
                    <Badge>{{ game.completedWord }} / {{ game.words.length }}</Badge>
                </DialogTitle>
            </DialogHeader>
            <div class="flex flex-col items-center justify-center gap-4">
                <div v-if="game.state === 'playing'" class="text-xl">
                    {{ game.currentWord?.wordInRussian }}
                </div>
                <div>
                    <div v-if="game.state === 'playing'" class="flex flex-col gap-2 items-center justify-center">
                        <Input v-model="userInput"
                            :class="{ 'border-red-500': game.previousWord?.state === 'incorrect', 'border-green-500': game.previousWord?.state === 'correct' }"
                            autofocus placeholder="Trouver le mot" @keyup.enter="onClickValidate" />
                        <div v-if="game.previousWord" class="font-bold" :class="{
                            'text-red-500': game.previousWord.state === 'incorrect',
                            'text-green-500': game.previousWord.state === 'correct',
                        }">
                            {{ game.previousWord.wordInFrench }}
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
        </DialogContent>
    </Dialog>
</template>
<script lang="ts" setup>
import type { GameFindTheWord } from '~/lib/game/game-find-the-word';


defineProps<{ game: GameFindTheWord }>();
</script>

<template>
    <div v-if="game.state === 'finished'" class="max-h-96 overflow-auto">
        <div class="text-lg">
            Fautes:
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead class="text-lg">
                        Français
                    </TableHead>
                    <TableHead class="text-lg">
                        Russe
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <template v-for="word of game.previousWords">
                    <TableRow :key="`word_${word.wordInFrench}`" v-if="word.state === 'incorrect'">
                        <TableCell class="text-lg" :class="{ 'text-red-500': word.state === 'incorrect' }">
                            {{ word.wordInFrench }} </TableCell>
                        <TableCell class="text-lg" :class="{ 'text-red-500': word.state === 'incorrect' }">
                            {{ word.wordInRussian }}
                        </TableCell>
                    </TableRow>
                </template>
            </TableBody>
        </Table>
    </div>

</template>
<template>
    <Card class="mb-8">
        <CardHeader>
            <CardTitle>
                <h4>
                    {{ title }}
                </h4>
            </CardTitle>
        </CardHeader>
        <CardContent>
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
                    <TableRow v-for="word of selectedWords" :key="`word_${word.wordInFrench}`">
                        <TableCell class="text-lg">
                            {{ word.wordInFrench.toLowerCase() }}
                        </TableCell>
                        <TableCell class="text-lg">
                            {{ word.wordInRussian.toLocaleLowerCase() }}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
import { words, type Label, type Word } from '~/assets/word/words';

const { label } = defineProps<{
    title: string;
    label: Label;
}>();

const selectedWords = ref<Word[]>(words.filter((word) => {
    if (word.labels.includes(label)) {
        return true;
    }
    return false;
}));
</script>
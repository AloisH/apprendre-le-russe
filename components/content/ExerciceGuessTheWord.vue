<script setup lang="ts">
import type { Label } from '~/assets/word/words';

defineProps<{
    label: Label
}>();
</script>

<template>
    <ClientOnly>
        <GameGuessTheWord :label="label" />
    </ClientOnly>
</template>
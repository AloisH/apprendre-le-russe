<script setup lang="ts">
import { InfoCircledIcon } from '@radix-icons/vue';

defineProps<{
    title: string;
}>();
</script>

<template>
    <Alert variant="information" class="mt-4">
        <InfoCircledIcon />
        <AlertTitle>{{ title }}</AlertTitle>
        <AlertDescription>
            <slot></slot>
        </AlertDescription>
    </Alert>

</template>
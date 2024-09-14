<template>
    <Button as="a" :href="path">
        {{ label }}
    </Button>
</template>

<script setup lang="ts">
defineProps<{
    path: string;
    label: string;
}>();
</script>
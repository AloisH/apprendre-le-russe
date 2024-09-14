<script setup lang="ts">
const { isDesktop } = useDevice();
</script>

<template>
    <main class="flex" :class="{
        'flex-col': !isDesktop,
    }">
        <MainNavbar />
        <ContentDoc class="p-4" />
    </main>
</template>
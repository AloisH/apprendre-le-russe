<script setup lang="ts">
import { cn } from '@/lib/utils';
import { HamburgerMenuIcon } from '@radix-icons/vue';
import Separator from './ui/separator/Separator.vue';

const { isDesktop } = useDevice();
const isMobileMenuOpen = ref(false);
</script>

<template>
    <nav v-if="isDesktop"
        class="flex flex-col space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 border-r-2 min-h-screen min-w-80">
        <h3 class="text-3xl font-semibold pt-4 pb-4  pl-3 flex flex-col justify-center items-center">
            <NuxtImg width="128" height="128" src="/logo.svg" />
            Apprendre le russe
        </h3>
        <Navbar />
    </nav>
    <nav v-else>
        <div class="flex px-4 py-2 items-center gap-8 border-b-2">
            <HamburgerMenuIcon class="text-3xl" @click="isMobileMenuOpen = !isMobileMenuOpen" />
            <h3 class="text-xl font-semibold flex gap-1">
                <NuxtImg width="32" height="32" src="/logo.svg" />
                Apprendre le russe
            </h3>
        </div>
        <div v-if="isMobileMenuOpen" class="max-h-screen w-screen bg-background z-10">
            <Navbar />
            <Separator />
        </div>
    </nav>

</template>
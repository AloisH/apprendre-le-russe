<script setup lang="ts">
import { cn } from '@/lib/utils';
import { HamburgerMenuIcon } from '@radix-icons/vue';

const { isDesktop } = useDevice();
const isMobileMenuOpen = ref(false);
</script>

<template>
    <nav v-if="isDesktop" class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 border-r-2 min-h-screen min-w-80">
        <ContentNavigation v-slot="{ navigation }">
            <ul class="p-4">
                <li class="pb-8">
                    <h3 class="text-3xl font-semibold pt-4 pb-4  pl-3">
                        Apprendre le russe
                    </h3>
                </li>
                <li v-for="link of navigation" :key="link._path">
                    <template v-if="link.children">
                        <h3 class="text-xl font-medium pt-4 pb-2 pl-3">
                            {{ link.title }}
                        </h3>
                        <div v-for="linkChild of link.children" :key="linkChild._path">
                            <Button as="a" :href="linkChild._path" variant="ghost" :class="cn(
                                'w-full text-left text-lg justify-start',
                                $route.path === `${linkChild._path}` && 'bg-muted hover:bg-muted',
                            )">
                                {{ linkChild.title }}
                            </Button>
                        </div>
                    </template>
                    <template v-else>

                        <Button as="a" :href="link._path" variant="ghost" :class="cn(
                            'w-full text-left text-lg justify-start',
                            $route.path === `${link._path}` && 'bg-muted hover:bg-muted',
                        )">
                            {{ link.title }}
                        </Button>
                    </template>
                </li>
            </ul>
        </ContentNavigation>
    </nav>
    <nav v-else class="relative">
        <div class="flex px-4 py-2 items-center gap-8 border-b-2">
            <HamburgerMenuIcon class="text-3xl" @click="isMobileMenuOpen = !isMobileMenuOpen" />
            <h3 class="text-xl font-semibold">
                Apprendre le russe
            </h3>
        </div>
        <div v-if="isMobileMenuOpen" class="absolute h-screen w-screen bg-background z-10">
            <div>
                <ContentNavigation v-slot="{ navigation }">
                    <ul class="p-4">
                        <li v-for="link of navigation" :key="link._path">
                            <template v-if="link.children">
                                <h3 class="text-xl font-medium pt-4 pb-2 pl-3">
                                    {{ link.title }}
                                </h3>
                                <div v-for="linkChild of link.children" :key="linkChild._path">
                                    <Button as="a" :href="linkChild._path" variant="ghost" :class="cn(
                                        'w-full text-left text-lg justify-start',
                                        $route.path === `${linkChild._path}` && 'bg-muted hover:bg-muted',
                                    )">
                                        {{ linkChild.title }}
                                    </Button>
                                </div>
                            </template>
                            <template v-else>

                                <Button as="a" :href="link._path" variant="ghost" :class="cn(
                                    'w-full text-left text-lg justify-start',
                                    $route.path === `${link._path}` && 'bg-muted hover:bg-muted',
                                )">
                                    {{ link.title }}
                                </Button>
                            </template>
                        </li>
                    </ul>
                </ContentNavigation>
            </div>
        </div>
    </nav>

</template>
<script setup lang="ts">
import { cn } from '~/lib/utils';
</script>

<template>
    <ContentNavigation v-slot="{ navigation }">
        <ul class="p-4">
            <li v-for="link of navigation" :key="link._path">
                <template v-if="link.children">
                    <h3 class="text-xl font-medium pt-4 pb-2 pl-3">
                        {{ link.title }}
                    </h3>
                    <div class="pb-1" v-for="linkChild of link.children" :key="linkChild._path">
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
</template>
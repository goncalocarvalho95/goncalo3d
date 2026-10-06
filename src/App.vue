<script setup lang="ts">
import { ref } from 'vue'
import Banner from '@/components/Banner.vue'
import Extensions from '@/components/Extensions.vue'
import Flags from '@/components/Flags.vue'
import Links from '@/components/Links.vue'
import MLO from '@/components/MLO.vue'
import Props from '@/components/Props.vue'
import SearchBox from '@/components/SearchBox.vue'
import Shortcuts from '@/components/Shortcuts.vue'

const query = ref('')
</script>

<template>
  <main class="container mx-auto space-y-4 md:space-y-8 p-4 md:p-8 text-black dark:text-neutral-200">
    <Banner />
    <MLO />
    <Props />
    <Shortcuts :query="query" />
    <SearchBox v-model="query" />
    <Flags :query="query" />
    <Links />
    <Extensions />
  </main>
</template>

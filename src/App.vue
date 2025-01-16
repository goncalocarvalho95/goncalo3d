<script setup lang="ts">
import Banner from './components/Banner.vue';
import Extensions from './components/Extensions.vue';
import Flags from './components/Flags.vue';
import Links from './components/Links.vue';
import MLO from './components/MLO.vue';
import Props from './components/Props.vue';
import Shortcuts from './components/Shortcuts.vue';
</script>

<template>
  <div class="container mx-auto space-y-4 md:space-y-8 p-4 md:p-8 text-black dark:text-neutral-200">
    <Banner />
    <MLO />
    <Props />
    <Shortcuts />
    <Flags />
    <Links />
    <Extensions />
  </div>
</template>

<style scoped lang="scss"></style>

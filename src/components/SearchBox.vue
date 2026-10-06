<script setup lang="ts">
const query = defineModel<string>({ required: true })
</script>

<template>
  <div class="sticky top-2 z-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg p-4">
    <label for="search" class="sr-only">Search flags and shortcuts</label>
    <input
      id="search"
      v-model="query"
      type="search"
      autocomplete="off"
      spellcheck="false"
      placeholder="Search flags and shortcuts… e.g. 0x20, bevel, ctrl s"
      class="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-2 text-lg placeholder:text-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
    />
  </div>
</template>

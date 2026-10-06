<script setup lang="ts">
import { linkGroups } from '@/data/links'
</script>

<template>
  <section id="links" class="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg p-8">
    <div v-for="group in linkGroups" :key="group.title">
      <h2 class="text-2xl mb-4">{{ group.title }}</h2>
      <ul class="list-none list-inside space-y-2">
        <li v-for="link in group.links" :key="link.href" class="pl-4">
          <a class="link" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

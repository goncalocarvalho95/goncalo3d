<script setup lang="ts">
import { computed } from 'vue'
import { flagGroups, type Flag } from '@/data/flags'
import { matchesAll, normalize, tokenize } from '@/utils/search'

const props = defineProps<{ query: string }>()

// "0x00000020" is also searchable as "0x20", and FLAG_IS_FIXED as "flag is fixed".
function buildHaystack(flag: Flag): string {
  const hex = /0x([0-9a-f]+)/i.exec(flag.code)?.[1]
  const shortHex = hex ? `0x${hex.replace(/^0+(?=.)/, '')}` : ''
  return normalize(`${flag.code} ${shortHex} ${flag.name} ${flag.name.replace(/_/g, ' ')} ${flag.description}`)
}

const indexed = flagGroups.map((group) => ({
  title: group.title,
  entries: group.flags.map((flag) => ({ flag, haystack: buildHaystack(flag) })),
}))

const tokens = computed(() => tokenize(props.query))
const searching = computed(() => tokens.value.length > 0)

const groups = computed(() =>
  indexed
    .map((group) => ({
      title: group.title,
      flags: group.entries
        .filter((e) => !searching.value || matchesAll(e.haystack, tokens.value))
        .map((e) => e.flag),
    }))
    .filter((group) => group.flags.length > 0),
)
</script>

<template>
  <div id="flags" class="rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg p-8">
    <details class="space-y-4" :open="searching">
      <summary class="text-2xl">FLAGS</summary>
      <p v-if="searching && groups.length === 0" role="status">No flags match “{{ query }}”.</p>
      <details v-for="group in groups" :key="group.title" class="space-y-4 px-6" :open="searching">
        <summary class="text-xl">{{ group.title }}</summary>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <p
            v-for="flag in group.flags"
            :key="`${flag.code}|${flag.name}`"
            class="rounded-lg justify-center bg-neutral-200 dark:bg-neutral-800 shadow-lg p-4 break-words"
          >
            {{ flag.code }}<br /><br />
            {{ flag.name }}<br /><br />
            {{ flag.description }}
          </p>
        </div>
      </details>
    </details>
  </div>
</template>

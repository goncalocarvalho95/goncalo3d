<script setup lang="ts">
import { computed } from 'vue'
import { shortcuts } from '@/data/shortcuts'
import { matchesAll, normalize, tokenize } from '@/utils/search'

const props = defineProps<{ query: string }>()

const indexed = shortcuts.map((shortcut) => ({
  shortcut,
  haystack: normalize(`${shortcut.action} ${shortcut.keys.join(' ')}`),
}))

const tokens = computed(() => tokenize(props.query))
const searching = computed(() => tokens.value.length > 0)

const visible = computed(() =>
  indexed
    .filter((e) => !searching.value || matchesAll(e.haystack, tokens.value))
    .map((e) => e.shortcut),
)
</script>

<template>
  <div id="shortcuts" class="rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg p-8">
    <details class="space-y-4" :open="searching">
      <summary class="text-2xl">Blender Shortcuts</summary>
      <p v-if="searching && visible.length === 0" role="status">No shortcuts match “{{ query }}”.</p>
      <ul v-else class="list-none md:columns-3 md:gap-8">
        <li v-for="item in visible" :key="item.action" class="pl-4 mb-2 break-inside-avoid">
          {{ item.action }}:
          <template v-for="(keys, i) in item.keys" :key="keys"><template v-if="i > 0"> or </template><kbd>{{ keys }}</kbd></template>
        </li>
      </ul>
    </details>
  </div>
</template>

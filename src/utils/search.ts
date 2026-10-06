/** Lower-case, strip accents and tighten "ctrl + s" to "ctrl+s" so spacing doesn't matter. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s*\+\s*/g, '+')
}

export function tokenize(query: string): string[] {
  return normalize(query).split(/\s+/).filter(Boolean)
}

/** Every token must appear somewhere in the (already normalized) haystack. */
export function matchesAll(haystack: string, tokens: string[]): boolean {
  return tokens.every((token) => haystack.includes(token))
}

<template>
  <header id="banner" class="flex flex-col items-center rounded-lg bg-neutral-900 shadow-lg py-8">
    <h1 class="sr-only">Gonçalo MLO Tutorial</h1>
    <!-- Above the fold: load eagerly with high priority (it was lazy before, which delays the first paint) -->
    <img
      class="w-9/12 h-auto"
      src="../assets/img/banner.webp"
      alt="Tutorials"
      width="1748"
      height="416"
      fetchpriority="high"
      decoding="async"
    />
  </header>
</template>

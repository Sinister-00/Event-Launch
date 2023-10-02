export const frameworks = [
  "react",
  "chrome",
  "qwik",
  "safari",
  "tailwind",
  "vue",
  "desktop",
  "figma",
  "mobile",
  "svelte",
] as const;

export type Framework = typeof frameworks[number];
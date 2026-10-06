export interface LinkItem {
  label: string
  href: string
}

export interface LinkGroup {
  title: string
  links: LinkItem[]
}

export const linkGroups: LinkGroup[] = [
  {
    title: "Textures",
    links: [
      { label: "Poly Haven", href: "https://polyhaven.com/textures" },
      { label: "AmbientCG", href: "https://ambientcg.com" },
      { label: "3D Textures", href: "https://3dtextures.me/tag/floor/" },
      { label: "Texture Information", href: "https://altv.stuyk.com/docs/mapping/textures.html" },
    ],
  },
  {
    title: "Discord Servers",
    links: [
      { label: "CodeWalker", href: "https://discord.gg/codewalker" },
      { label: "Sollumz", href: "https://discord.gg/U6damJ24" },
      { label: "Pleb Masters", href: "https://discord.gg/kRDkheaf" },
      { label: "My Discord Name: Gonçalo", href: "https://discord.com/invite/goncalo0001" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { label: "Blender", href: "https://download.blender.org/release" },
      { label: "Sollumz", href: "https://github.com/Sollumz/Sollumz/releases" },
      { label: "Codewalker", href: "https://www.gta5-mods.com/tools/codewalker-gtav-interactive-3d-map" },
      { label: "Pleb Masters", href: "https://forge.plebmasters.de" },
      { label: "Machin3Tools - $4.99 - Optional", href: "https://blendermarket.com/products/machin3tools" },
      { label: "Blender Shortcuts", href: "https://hollisbrown.github.io/blendershortcuts" },
    ],
  },
]

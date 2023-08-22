export const buttonFilters: Array<ButtonFilter> = [
  {
    id: "FStyled",
    label: "Styled",
    icon: "i-tabler-palette",
    help: "Styled components come with opinated style. You usually customize them by overriding these styles.",
    autoDisable: "FUnstyled",
  },
  {
    id: "FUnstyled",
    label: "Unstyled",
    icon: "i-tabler-palette-off",
    help: "Unstyled components come with no style and force you to write your own.",
    autoDisable: "FStyled",
  },
  {
    id: "FComponents",
    label: "Components",
    icon: "i-icon-park-outline-components",
    help: "Provide Vue components handling both logic and stying (or logic only if unstyled), but it is coupled to the Vue framework.",
    autoDisable: "FCSS",
  },
  {
    id: "FCSS",
    label: "CSS only",
    icon: "i-ph-file-css",
    help: "Provide CSS classes to inject into your own Vue components. It can't provide some logic, but is not tied to a particular framework.",
    autoDisable: "FComponents",
  },
  {
    id: "FImported",
    label: "Imported",
    icon: "i-mdi-import",
    help: "You depends on an external library from which you import components. You benefits from library updates but can not directly customize components since it's not your own code.",
    autoDisable: "FPasted",
  },
  {
    id: "FPasted",
    label: "Pasted",
    icon: "i-mdi-content-paste",
    help: "You depends on no external library and need to copy paste component code into your own project. After pasting the code, it's yours and you can customize it as you want. However, you can't benefit from the updates automatically.",
    autoDisable: "FImported",
  },
  {
    id: "FTailwind",
    label: "Tailwind CSS",
    icon: "i-simple-icons-tailwindcss",
    help: "The library uses Tailwind CSS itself and allows you to use it to customize components. As a Tailwind CSS user, this allows to keep a unique tool for all your styling.",
  },
  {
    id: "FAccessible",
    label: "Fully Accessible",
    icon: "i-material-symbols-accessibility-new",
    help: "All components are designed with accessibility in mind.",
  },
  {
    id: "FFigma",
    label: "Figma files",
    icon: "i-ph-figma-logo",
    help: "Figma is the leading design tool. Figma files contain the same components that the UI Library, sothat designers can create designs without coding skills.",
  },
  {
    id: "FDarkMode",
    label: "Dark Mode",
    icon: "i-mdi-weather-night",
    help: "Components are designed tu support both a light and dark version.",
  },
  {
    id: "FFree",
    label: "Free",
    icon: "i-material-symbols-money-off",
    help: "The UI Library is entirely free for all available components.",
  },
  {
    id: "FRoadmap",
    label: "Public Roadmap",
    icon: "i-tabler-road",
    help: "A public roadmap is available to help you see next library features.",
  },
  {
    id: "FOfficial",
    label: "Official",
    icon: "i-solar-medal-ribbon-linear",
    help: "Made by a team responsible for managing a framework itself.",
  },
  {
    id: "FRTLSupport",
    label: "RTL support",
    icon: "i-material-symbols-keyboard-tab-rtl-rounded",
    help: "Ability to display text that is written from right to left (Arabic, Hebrew, etc.)",
  },
  {
    id: "FTyped",
    label: "Fully Typed",
    icon: "i-tabler-brand-typescript",
    help: "Provided components are all typed to help developpers with auto-completion and potential errors.",
  },
  {
    id: "FBuiltinThemes",
    label: "Built-in Themes",
    icon: "i-solar-palette-outline",
    help: "Provide different themes ready to be used.",
  },
  {
    id: "FThemeGenerator",
    label: "Theme Generator",
    icon: "i-fluent-wand-24-regular",
    help: "Provide a tool to help developpers generate new themes in an easy way.",
  },
  {
    id: "FSemanticColors",
    label: "Semantic Colors",
    icon: "i-mingcute-color-filter-line",
    help: "Colors can be associated with particular meanings, like 'primary', 'secondary', etc.",
  },
  {
    id: "FVue",
    label: "For Vue",
    icon: "i-mdi-vuejs",
    help: "Dedicated to Vue framework (can be used with Nuxt too)",
    autoDisable: "FNuxt",
  },
  {
    id: "FNuxt",
    label: "For Nuxt",
    icon: "i-simple-icons-nuxtdotjs",
    help: "Dedicated to Nuxt framework (can't be used with Vue)",
    autoDisable: "FVue",
  },
];

export const rangeFilters: Array<RangeFilter> = [
  {
    id: "FNbStars",
    leadingLabel: "More than",
    trailingLabel: "stars",
    icon: "i-mdi-star-outline",
    rangeMax: 35000,
    rangeStep: 1000,
  },
  {
    id: "FNbDownloads",
    leadingLabel: "More than",
    trailingLabel: "k npm DLs",
    icon: "i-material-symbols-download",
    rangeMax: 500,
    rangeStep: 5,
  },
  {
    id: "FNbComponents",
    leadingLabel: "More than",
    trailingLabel: "components",
    icon: "i-heroicons-square-3-stack-3d",
    rangeMax: 100,
    rangeStep: 5,
  },
];

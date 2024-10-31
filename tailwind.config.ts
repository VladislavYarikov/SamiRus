import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      fontFamily: {},
      boxShadow: {
        custom:
          "0px 7px 10px rgba(3, 39, 253, 0.15), 0px -7px 10px rgba(3, 39, 253, 0.15)",
      },
      dropShadow: {
        custom: [
          "7px 7px 10px rgba(3, 39, 253, 0.07)",
          "-7px 7px 10px rgba(3, 39, 253, 0.07)",
        ],
      },
      backgroundImage: {
        "radial-blue":
          "radial-gradient(circle closest-side at center, rgba(3, 39, 253, 0.7), #ffffff)",
        "linear-accent":
          "linear-gradient(to top, rgba(3, 39, 253, 0.7), #ffffff)",
        "linear-accent-sm":
          "linear-gradient(to top, rgba(3, 39, 253, 0.4), rgba(0, 0, 0, 0) 40%);",
      },
      colors: {
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [],
} as Config;

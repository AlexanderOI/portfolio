/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-gray": "#333333b2",
        "custom-gradiant": "linear-gradient(to right top, rgb(205, 214, 228), rgb(29, 7, 226))",
      },
      fontSize: {
        tiny: "10px",
      },
    },
  },
  plugins: [],
};

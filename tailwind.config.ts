import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: "rgb(var(--color-cream))",
                mint: {
                    500: "rgb(var(--color-mint-500))",
                },
                green: {
                    900: "rgb(var(--color-green-900))",
                },
                pink: {
                    500: "rgb(var(--color-pink-500))",
                },
                teal: {
                    300: "rgb(var(--color-teal-300))",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Tanker", "sans-serif"],
                accent: ["Homemade Apple", "cursive"],
            },
        },
    },
    plugins: [],
};
export default config;

import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],

	nitro: {
		preset: "static",
	},
	ssr: false,

	app: {
		baseURL: "/gabrielmaxgb-arena/",
	},

	vite: {
		plugins: [tailwindcss()],
	},

	fonts: {
		families: [
			{ name: "Chivo", provider: "google" },
			{ name: "Chakra Petch", provider: "google" },
			{ name: "Gloock", provider: "google" },
			{ name: "JetBrains Mono", provider: "google" },
			{ name: "Staatliches", provider: "google" },
			{ name: "Orbitron", provider: "google" },
		],
	},
	modules: [
		"@nuxt/content",
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxt/scripts",
		"@nuxt/test-utils",
		"@nuxt/ui",
	],
});

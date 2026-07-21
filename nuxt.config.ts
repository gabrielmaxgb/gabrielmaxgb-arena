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
		head: {
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/gabrielmaxgb-arena/favicon.ico",
				},
			],
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	fonts: {
		families: [
			{ name: "Mulish", provider: "google" },
			{ name: "Gloock", provider: "google" },
			{ name: "JetBrains Mono", provider: "google" },
			{ name: "Staatliches", provider: "google" },
			{ name: "Sacramento", provider: "google" },
			{ name: "Monoton", provider: "google" },
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
		"@nuxtjs/i18n",
	],

	i18n: {
		locales: [
			{ code: "pt-BR", iso: "pt-BR", name: "Português", file: "pt-BR.json" },
			{ code: "en", iso: "en-US", name: "English", file: "en.json" },
		],
		defaultLocale: "en",
		langDir: "locales",
		strategy: "no_prefix",
	},
});

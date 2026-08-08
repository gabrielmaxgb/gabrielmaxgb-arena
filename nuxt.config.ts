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
					type: "image/png",
					href: "/gabrielmaxgb-arena/favicon.png",
				},
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/gabrielmaxgb-arena/favicon.ico",
				},
				{
					rel: "apple-touch-icon",
					href: "/gabrielmaxgb-arena/apple-touch-icon.png",
				},
			],
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	fonts: {
		families: [
			{ name: "Syne", provider: "google", weights: [700, 800] },
			{
				name: "Newsreader",
				provider: "google",
				weights: [400, 500],
				styles: ["normal", "italic"],
			},
			{ name: "IBM Plex Mono", provider: "google", weights: [400, 500] },
			{ name: "Sacramento", provider: "google" },
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
			{ code: "en", iso: "en-US", name: "English", file: "en.json" },
			{ code: "pt-BR", iso: "pt-BR", name: "Português", file: "pt-BR.json" },
		],
		defaultLocale: "en",
		langDir: "locales",
		strategy: "no_prefix",
		detectBrowserLanguage: false,
	},
});

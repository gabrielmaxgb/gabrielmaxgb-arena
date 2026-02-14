const LOCALE_STORAGE_KEY = "nuxt-portfolio-locale";

export default defineNuxtPlugin((nuxtApp) => {
	const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
	if (stored !== "pt-BR" && stored !== "en") return;

	const i18n = nuxtApp.$i18n as { global: { locale: { value: string } } } | undefined;
	if (i18n?.global?.locale) {
		i18n.global.locale.value = stored;
	}
});

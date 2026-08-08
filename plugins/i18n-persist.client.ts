const LOCALE_STORAGE_KEY = "nuxt-portfolio-locale";

/** Portuguese toggle is disabled — keep English. */
export default defineNuxtPlugin((nuxtApp) => {
	localStorage.setItem(LOCALE_STORAGE_KEY, "en");

	const i18n = nuxtApp.$i18n as { global: { locale: { value: string } } } | undefined;
	if (i18n?.global?.locale) {
		i18n.global.locale.value = "en";
	}
});

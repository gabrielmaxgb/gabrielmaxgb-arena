<script setup lang="ts">
interface IHeaderLink {
	icon: string;
	labelKey: string;
	href?: string;
	routeName?: string;
	isLocaleSwitch?: boolean;
	subtle?: boolean;
}

const route = useRoute();
const { locale, setLocale, t } = useI18n();

const headerLinks: IHeaderLink[] = [
	{
		icon: "mdi:home",
		labelKey: "nav.home",
		routeName: "/",
	},
	{
		icon: "mdi:fountain-pen-tip",
		labelKey: "nav.blog",
		routeName: "blog",
	},
	{
		icon: "ion:language-outline",
		labelKey: "nav.switchLocale",
		isLocaleSwitch: true,
	},
	{
		icon: "lucide:github",
		labelKey: "nav.github",
		href: "https://github.com/gabrielmaxgb",
	},
	{
		icon: "simple-icons:linkedin",
		labelKey: "nav.linkedin",
		href: "https://www.linkedin.com/in/gabrielmaxgb/",
	},
	{
		icon: "entypo-social:instagram",
		labelKey: "nav.instagram",
		href: "https://www.instagram.com/maxdecoyer/",
	},
	{
		icon: "tabler:fish-christianity",
		labelKey: "nav.trip",
		routeName: "trip",
		subtle: true,
	},
];

const LOCALE_STORAGE_KEY = "nuxt-portfolio-locale";

function toggleLocale() {
	const nextLocale = locale.value === "pt-BR" ? "en" : "pt-BR";
	setLocale(nextLocale);
	if (import.meta.client) {
		localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
	}
}

function isActive(routeName?: string) {
	if (!routeName) return false;
	if (routeName === "/") {
		return route.name === "index" || route.path === "/";
	}
	return route.name === routeName;
}

const localeLabel = computed(() =>
	locale.value === "pt-BR" ? t("common.portuguese") : t("common.english"),
);
const switchLocaleAriaLabel = computed(() => t("nav.switchLocale"));

useHead(() => ({
	htmlAttrs: {
		lang: locale.value === "pt-BR" ? "pt-BR" : "en",
	},
}));
</script>

<template>
	<nav
		class="fixed top-0 inset-x-0 z-50 border-b border-amber-50/[0.06] bg-[#0c0c0b]/70 backdrop-blur-md"
	>
		<div
			class="mx-auto flex w-11/12 max-w-5xl items-center justify-between gap-4 py-4 md:py-5"
		>
			<NuxtLink
				to="/"
				class="font-script text-2xl md:text-3xl text-amber-50 hover:text-amber-100 transition-colors duration-200 shrink-0"
			>
				Gabrielmaxgb
			</NuxtLink>

			<div class="flex items-center gap-1 sm:gap-2">
				<template v-for="(link, index) in headerLinks" :key="index">
					<NuxtLink
						v-if="link.routeName && !link.isLocaleSwitch"
						:to="link.routeName"
						:aria-label="t(link.labelKey)"
						:title="t(link.labelKey)"
						:class="[
							'flex size-9 items-center justify-center rounded-md text-lg transition-colors duration-200',
							isActive(link.routeName)
								? 'text-amber-50 bg-amber-50/10'
								: link.subtle
									? 'text-amber-100/25 hover:text-amber-100/60'
									: 'text-amber-100/55 hover:text-amber-50 hover:bg-amber-50/[0.06]',
						]"
					>
						<UIcon :name="link.icon" />
					</NuxtLink>

					<a
						v-else-if="link.href"
						:href="link.href"
						target="_blank"
						rel="noopener noreferrer"
						:aria-label="t(link.labelKey)"
						:title="t(link.labelKey)"
						class="flex size-9 items-center justify-center rounded-md text-lg text-amber-100/55 hover:text-amber-50 hover:bg-amber-50/[0.06] transition-colors duration-200"
					>
						<UIcon :name="link.icon" />
					</a>

					<button
						v-else-if="link.isLocaleSwitch"
						type="button"
						:aria-label="switchLocaleAriaLabel"
						:title="`${localeLabel} — ${switchLocaleAriaLabel}`"
						class="inline-flex h-9 items-center gap-1.5 rounded-md px-2.5 text-xs font-medium tracking-wide text-amber-100/70 hover:text-amber-50 hover:bg-amber-50/[0.06] transition-colors duration-200"
						@click="toggleLocale"
					>
						<span aria-hidden="true">{{
							locale === "pt-BR" ? "PT" : "EN"
						}}</span>
					</button>
				</template>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
interface IHeaderLink {
	icon?: string;
	labelKey: string;
	href?: string;
	routeName?: string;
	isLocaleSwitch?: boolean;
	subtle?: boolean;
	textNav?: boolean;
}

const route = useRoute();
const { locale, setLocale, t } = useI18n();

const headerLinks: IHeaderLink[] = [
	{
		labelKey: "nav.home",
		routeName: "/",
		textNav: true,
	},
	{
		labelKey: "nav.blog",
		routeName: "blog",
		textNav: true,
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
		class="fixed top-0 inset-x-0 z-50 border-b border-dashed border-[var(--color-rule)] bg-[var(--color-surface)]/80 backdrop-blur-md"
	>
		<div
			class="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-6 md:px-8 py-4 md:py-5"
		>
			<NuxtLink to="/" class="masthead-wordmark shrink-0">
				{{ $t("nav.wordmark") }}
			</NuxtLink>

			<div class="flex items-center gap-0.5 sm:gap-1">
				<template v-for="(link, index) in headerLinks" :key="index">
					<NuxtLink
						v-if="link.routeName && !link.isLocaleSwitch && link.textNav"
						:to="link.routeName"
						:aria-label="t(link.labelKey)"
						:class="[
							'nav-bracket hidden sm:inline',
							isActive(link.routeName) && 'nav-bracket--active',
						]"
					>
						[ {{ t(link.labelKey) }} ]
					</NuxtLink>

					<NuxtLink
						v-else-if="link.routeName && !link.isLocaleSwitch"
						:to="link.routeName"
						:aria-label="t(link.labelKey)"
						:title="t(link.labelKey)"
						:class="[
							'nav-icon',
							link.subtle && 'opacity-35 hover:opacity-70',
							isActive(link.routeName) && '!text-[var(--color-flame)]',
						]"
					>
						<UIcon :name="link.icon!" />
					</NuxtLink>

					<a
						v-else-if="link.href"
						:href="link.href"
						target="_blank"
						rel="noopener noreferrer"
						:aria-label="t(link.labelKey)"
						:title="t(link.labelKey)"
						class="nav-icon"
					>
						<UIcon :name="link.icon!" />
					</a>

					<button
						v-else-if="link.isLocaleSwitch"
						type="button"
						:aria-label="switchLocaleAriaLabel"
						:title="`${localeLabel} — ${switchLocaleAriaLabel}`"
						class="nav-bracket"
						@click="toggleLocale"
					>
						[ {{ locale === "pt-BR" ? "pt" : "en" }} ]
					</button>
				</template>
			</div>
		</div>
	</nav>
</template>

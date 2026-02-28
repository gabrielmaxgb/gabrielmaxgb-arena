<script setup lang="ts">
interface IHeaderLink {
	icon: string;
	href?: string;
	routeName?: string;
	isLocaleSwitch?: boolean;
}

const { locale, setLocale, t } = useI18n();

const headerLinks: IHeaderLink[] = [
	{
		icon: "icon-park-twotone:eyes",
		routeName: "trip",
	},

	{
		icon: "mdi:home",
		routeName: "/",
	},
	{
		icon: "ion:language-outline",
		isLocaleSwitch: true,
	},
	{
		icon: "mdi:fountain-pen-tip",
		routeName: "blog",
	},
	{
		icon: "lucide:github",
		href: "https://github.com/gabrielmaxgb",
	},
	{
		icon: "simple-icons:linkedin",
		href: "https://www.linkedin.com/in/gabrielmaxgb/",
	},
	{
		icon: "entypo-social:instagram",
		href: "https://www.instagram.com/maxdecoyer/",
	},
];

const LOCALE_STORAGE_KEY = "nuxt-portfolio-locale";

// function openLink(href: string) {
// 	window.open(href, "_blank", "noopener,noreferrer");
// }

function toggleLocale() {
	const nextLocale = locale.value === "pt-BR" ? "en" : "pt-BR";
	setLocale(nextLocale);
	if (import.meta.client) {
		localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
	}
}

// function handleLinkClick(link: IHeaderLink) {
// 	if (link.isLocaleSwitch) {
// 		toggleLocale();
// 		return;
// 	}
// 	if (link.href) {
// 		openLink(link.href);
// 		return;
// 	}
// 	if (link.routeName) {
// 		navigateTo(link.routeName);
// 	}
// }

const localeLabel = computed(() =>
	locale.value === "pt-BR" ? t("common.portuguese") : t("common.english"),
);
const switchLocaleAriaLabel = computed(() => t("nav.switchLocale"));
</script>

<template>
	<nav
		class="text-amber-50 fixed top-0 w-full py-6 flex items-center justify-center z-50 top-nav backdrop-blur-xs"
	>
		<div class="w-11/12">
			<div
				class="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between"
			>
				<NuxtLink to="/" class="">
					<h1 class="text-3xl font-script">Gabrielmaxgb</h1>
				</NuxtLink>
				<div class="flex items-center gap-4">
					<template v-for="(link, index) in headerLinks" :key="index">
						<NuxtLink
							v-if="link.routeName && !link.isLocaleSwitch"
							:to="link.routeName"
							class="text-xl hover:text-amber-200 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
						>
							<UIcon :name="link.icon" />
						</NuxtLink>
						<a
							v-else-if="link.href"
							:href="link.href"
							target="_blank"
							rel="noopener noreferrer"
							class="text-xl hover:text-amber-200 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
						>
							<UIcon :name="link.icon" />
						</a>
						<button
							v-else-if="link.isLocaleSwitch"
							type="button"
							:aria-label="switchLocaleAriaLabel"
							:title="`${localeLabel} — ${switchLocaleAriaLabel}`"
							class="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-sm font-medium bg-amber-50/10 text-amber-100 border border-amber-50/20 hover:bg-amber-50/20 hover:text-amber-50 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
							@click="toggleLocale"
						>
							<UIcon name="ion:language-outline" class="text-base" />
							<span aria-hidden="true">{{
								locale === "pt-BR" ? "PT" : "EN"
							}}</span>
						</button>
					</template>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped></style>

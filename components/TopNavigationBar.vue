<script setup lang="ts">
interface IHeaderLink {
	icon: string;
	href?: string;
	routeName?: string;
}

const headerLinks: IHeaderLink[] = [
	{
		icon: "mdi:home",
		routeName: "/",
	},
	{
		icon: "ion:language-outline",
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
		href: "https://www.instagram.com/gabrielmaxgb/",
	},
];

// Method to open the link
const openLink = (href: string) => {
	window.open(href, "_blank");
};
</script>

<template>
	<nav
		class="text-amber-50 fixed top-0 w-full py-6 flex items-center justify-center z-50 top-nav backdrop-blur-xs"
	>
		<div class="w-11/12">
			<div class="flex items-center justify-between">
				<NuxtLink to="/" class="">
					<h1 class="text-3xl font-script">Gabrielmaxgb</h1>
				</NuxtLink>
				<div class="flex items-center gap-4">
					<UIcon
						v-for="(link, index) in headerLinks"
						:key="index"
						:name="link.icon"
						class="text-xl hover:text-amber-200 transition-colors duration-200 cursor-pointer"
						@click="
							() =>
								link.href
									? openLink(link.href)
									: link.routeName
									? navigateTo(link.routeName)
									: null
						"
					/>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped></style>

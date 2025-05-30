<script setup lang="ts">
interface IHeaderLink {
	icon: string;
	href?: string;
	routeName?: string;
}

const headerLinks: IHeaderLink[] = [
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
		href: "https://www.instagram.com/_gabriellmax/",
	},
];

// Method to open the link
const openLink = (href: string) => {
	window.open(href, "_blank");
};
</script>

<template>
	<nav
		class="text-amber-50 fixed top-0 left-0 w-full h-16 py-12 flex items-center justify-center z-50 top-nav"
	>
		<div class="w-11/12 md:w-5/12 px-2">
			<div class="flex items-center justify-between">
				<NuxtLink to="/">
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
								link.href ? openLink(link.href) : navigateTo(link.routeName)
						"
					/>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.top-nav {
	/* background: radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%); */
	/* background: linear-gradient(
		180deg,
		rgba(10, 10, 10, 0.8) 0%,
		rgba(10, 10, 10, 0.5) 100%
	);
	backdrop-filter: blur(10px);
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
}
</style>

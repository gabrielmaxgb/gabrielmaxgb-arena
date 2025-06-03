<script setup lang="ts">
import MainSection from "./MainSection.vue";

const props = defineProps<{
	url?: string;
	title: string;
	readTimeMinutes: number | string;
	publishedAt: string;
	language: string;
}>();

const handleArticleClick = () => {
	if (props.url) {
		window.open(props.url, "_blank");
	}
};
</script>

<template>
	<MainSection
		class="flex flex-col text-amber-100 hover:text-amber-50 gap-0 md:w-8/12 bg-amber-50/5 p-4 rounded-lg cursor-pointer transition-all duration-500 ease-in-out hover:bg-amber-50/1 hover:shadow-lg hover:backdrop-blur-sm hover:scale-[1.015] hover:ring-1 hover:ring-amber-100/20"
		@click="handleArticleClick"
	>
		<div class="w-full">
			<UIcon
				name="mdi:book-open-page-variant"
				class="text-amber-50/70"
				size="1.5rem"
			/>
		</div>
		<span class="text-center text-2xl mb-3 py-2">
			{{ props.title }}
		</span>
		<div class="w-full flex gap-2">
			<UBadge class="bg-amber-50/10 text-amber-50/70 w-fit" size="lg">
				<small class="text-gray-400">
					{{ props.readTimeMinutes }} min read
				</small>
			</UBadge>
			<UBadge class="bg-amber-50/10 text-amber-50/70 w-fit" size="lg">
				<small class="text-gray-400">
					{{ props.publishedAt }}
				</small>
			</UBadge>
			<UBadge class="bg-amber-50/10 text-amber-50/70 w-fit" size="lg">
				<small class="text-gray-400">
					{{ props.language }}
				</small>
			</UBadge>
		</div>
	</MainSection>
</template>

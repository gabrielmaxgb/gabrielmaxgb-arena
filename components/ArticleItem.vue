<script setup lang="ts">
import MainSection from "./MainSection.vue";

const props = defineProps<{
	url?: string;
	title: string;
	readTimeMinutes: number | string;
	publishedAt: string;
	language: string;
}>();
</script>

<template>
	<MainSection class="flex flex-col gap-0">
		<a :href="props.url" target="_blank" class="flex gap-2">
			<UIcon
				name="ph:article-ny-times-duotone"
				class="text-amber-50/30 text-2xl mb-4"
			/>
			{{ props.title }}
		</a>
		<div class="w-full flex gap-2">
			<UBadge class="bg-amber-50/10 text-amber-50/70 w-fit">
				<small class="text-gray-400">
					{{ props.readTimeMinutes }} min read
				</small>
			</UBadge>
			<UBadge class="bg-amber-50/10 text-amber-50/70 w-fit">
				<small class="text-gray-400">
					{{ props.publishedAt }}
				</small>
			</UBadge>
			<UBadge class="bg-amber-50/10 text-amber-50/70 w-fit">
				<small class="text-gray-400">
					{{ props.language }}
				</small>
			</UBadge>
		</div>
	</MainSection>
</template>

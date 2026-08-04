<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";

const props = defineProps<{
	title?: string;
	eyebrow?: string;
	compact?: boolean;
	solo?: boolean;
	showIndex?: boolean;
}>();
</script>

<template>
	<section
		:class="
			twMerge(
				'w-full',
				$attrs.class as ClassNameValue,
			)
		"
	>
		<header
			v-if="props.eyebrow || props.title"
			:class="[
				'section-header',
				props.compact && 'section-header--compact',
				props.solo && 'section-header--solo',
			]"
		>
			<span
				v-if="props.showIndex !== false && !props.solo"
				class="section-index"
				aria-hidden="true"
			/>
			<p v-if="props.eyebrow" class="section-eyebrow">
				{{ props.eyebrow }}
			</p>
			<h2 v-if="props.title" class="section-title">
				{{ props.title }}
			</h2>
		</header>
		<slot />
	</section>
</template>

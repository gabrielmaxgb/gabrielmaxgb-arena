<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";

const props = defineProps<{
	title?: string;
	eyebrow?: string;
}>();
</script>

<template>
	<section
		:class="
			twMerge(
				'w-11/12 max-w-2xl md:w-7/12 md:max-w-none px-1',
				$attrs.class as ClassNameValue,
			)
		"
	>
		<header v-if="props.eyebrow || props.title" class="mb-8">
			<p v-if="props.eyebrow" class="section-eyebrow mb-3">
				{{ props.eyebrow }}
			</p>
			<h2 v-if="props.title" class="section-title">
				{{ props.title }}
			</h2>
		</header>
		<slot />
	</section>
</template>

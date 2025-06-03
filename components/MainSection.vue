<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";

const props = defineProps<{
	title?: string;
}>();
</script>

<template>
	<section
		:class="twMerge('w-11/12 md:w-7/12 px-2', $attrs.class as ClassNameValue)"
	>
		<h2 v-if="props.title" class="text-4xl font-script mb-2">
			{{ props.title }}
		</h2>
		<slot />
	</section>
</template>

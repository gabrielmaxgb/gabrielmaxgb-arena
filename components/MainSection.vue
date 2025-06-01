<script setup lang="ts">
const props = defineProps<{
	title?: string;
}>();
</script>

<template>
	<!-- class="relative flex items-center justify-center z-10 max-w-[100vw] min-w-[100vw] w-full text-amber-50" -->
	<section class="w-11/12 md:w-5/12 px-2" :class="$attrs.class">
		<!-- <div class="w-11/12 md:w-6/12 px-2"> -->
		<h2 v-if="props.title" class="text-4xl font-script mb-2">
			{{ props.title }}
		</h2>
		<slot />
		<!-- </div> -->
	</section>
</template>

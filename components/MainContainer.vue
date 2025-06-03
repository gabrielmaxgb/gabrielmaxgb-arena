<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";
</script>

<template>
	<div
		:class="twMerge('w-full flex flex-col items-center gap-24 py-6 text-amber-50', $attrs.class as ClassNameValue)"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";
</script>

<template>
	<div
		:class="
			twMerge(
				'editorial-flow mx-auto w-full max-w-3xl md:max-w-4xl px-6 md:px-8 flex flex-col items-stretch gap-28 md:gap-36 pt-28 md:pt-32 pb-10 md:pb-14',
				$attrs.class as ClassNameValue,
			)
		"
	>
		<slot />
	</div>
</template>

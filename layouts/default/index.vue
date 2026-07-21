<script setup lang="ts"></script>

<template>
	<ClientOnly>
		<ThreeScene />
		<div
			class="relative z-10 flex w-full items-start justify-center overflow-y-auto pt-24 md:pt-28 pb-40 md:pb-56"
		>
			<TopNavigationBar />
			<slot />
		</div>
	</ClientOnly>
</template>

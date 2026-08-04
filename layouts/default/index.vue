<script setup lang="ts"></script>

<template>
	<ClientOnly>
		<ThreeScene />
		<div class="editorial-canvas relative z-10 w-full min-h-dvh pt-0 pb-44 md:pb-60">
			<TopNavigationBar />
			<slot />
		</div>
		<CustomCursor />
	</ClientOnly>
</template>

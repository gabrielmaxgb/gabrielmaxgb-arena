<script setup lang="ts"></script>

<template>
	<ClientOnly>
		<ThreeScene />
		<div
			class="relative flex items-start justify-center z-10 max-w-[100vw] min-w-[100vw] overflow-y-auto w-full pt-20"
		>
			<TopNavigationBar />
			<slot />
		</div>
	</ClientOnly>
</template>

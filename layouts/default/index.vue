<script setup lang="ts"></script>

<template>
	<ClientOnly>
		<div
			class="relative flex items-start justify-center z-10 max-w-[100vw] min-w-[100vw] w-full pt-28"
		>
			<TopNavigationBar />
			<ThreeScene />
			<slot />
		</div>
	</ClientOnly>
</template>

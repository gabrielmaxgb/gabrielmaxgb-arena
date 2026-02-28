<script setup lang="ts"></script>

<template>
	<ClientOnly>
		<ThreeScene />
		<div
			class="relative flex items-start justify-center z-10 w-full overflow-y-auto pt-36 md:pt-20 pb-60"
		>
			<TopNavigationBar />
			<slot />
		</div>
	</ClientOnly>
</template>

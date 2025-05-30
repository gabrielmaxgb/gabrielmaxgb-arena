<script setup lang="ts"></script>

<template>
	<ClientOnly>
		<div class="w-[100vw] h-[100vh] bg-black/60 overflo-y-auto">
			<slot />
		</div>
	</ClientOnly>
</template>

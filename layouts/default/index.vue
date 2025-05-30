<script setup lang="ts"></script>

<template>
	<ClientOnly>
		<div class="w-[100vw] h-[100vh] overflo-y-auto">
			<slot />
		</div>
	</ClientOnly>
</template>

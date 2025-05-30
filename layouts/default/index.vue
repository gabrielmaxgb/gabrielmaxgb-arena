<script setup lang="ts"></script>

<template>
	<ClientOnly>
		<div class="relative pt-28">
			<TopNavigationBar />
			<ThreeScene />
			<slot />
		</div>
	</ClientOnly>
</template>

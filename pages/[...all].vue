<script setup lang="ts">
useHead(() => ({
	title: "404",
}));
</script>

<template>
	<MainContainer>
		<MainSection
			class="section--silent flex flex-col justify-center min-h-[62vh] md:min-h-[72vh]"
			:show-index="false"
		>
			<p class="section-eyebrow mb-6">404</p>
			<h1 class="display-title !text-[clamp(2.5rem,7vw,4.5rem)] max-w-lg mb-8">
				{{ $t("notFound.title") }}
			</h1>
			<p class="prose-muted mb-12 max-w-md">
				{{ $t("notFound.description") }}
			</p>
			<NuxtLink to="/" class="btn-primary w-fit">
				{{ $t("notFound.cta") }}
			</NuxtLink>
		</MainSection>
	</MainContainer>
</template>

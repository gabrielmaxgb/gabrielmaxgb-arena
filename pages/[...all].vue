<script setup lang="ts">
useHead(() => ({
	title: "404",
}));
</script>

<template>
	<MainContainer>
		<MainSection
			class="flex flex-col justify-center min-h-[60vh] md:min-h-[70vh]"
		>
			<p class="section-eyebrow mb-5">404</p>
			<h1
				class="font-serif text-5xl sm:text-6xl md:text-7xl text-amber-50 leading-[0.95] tracking-tight max-w-lg mb-6"
			>
				{{ $t("notFound.title") }}
			</h1>
			<p class="prose-muted mb-10">
				{{ $t("notFound.description") }}
			</p>
			<NuxtLink
				to="/"
				class="inline-flex w-fit items-center gap-2 rounded-md px-5 py-3 text-sm font-medium bg-amber-100 text-[var(--color-ink)] hover:bg-amber-50 transition-colors duration-200"
			>
				{{ $t("notFound.cta") }}
				<UIcon name="ion:arrow-forward" class="size-4" />
			</NuxtLink>
		</MainSection>
	</MainContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
	url?: string;
	title: string;
	readTimeMinutes: number | string;
	publishedAt: string;
	language: string;
}>();

const handleArticleClick = () => {
	if (props.url) {
		window.open(props.url, "_blank", "noopener,noreferrer");
	}
};

const languageLabel = props.language === "pt-BR" ? "Português" : "English";
</script>

<template>
	<article
		role="link"
		tabindex="0"
		:aria-label="`Ler artigo: ${title}`"
		class="group relative w-11/12 md:w-8/12 max-w-2xl rounded-xl overflow-hidden transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#252523]"
		@click="handleArticleClick"
		@keydown.enter="handleArticleClick"
		@keydown.space.prevent="handleArticleClick"
	>
		<!-- Subtle gradient border on hover -->
		<div
			class="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-200/10 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 pointer-events-none"
			aria-hidden="true"
		/>
		<div
			class="relative flex flex-col gap-4 p-5 md:p-6 bg-amber-50/[0.04] border border-amber-50/10 rounded-xl cursor-pointer transition-all duration-300 ease-out hover:bg-amber-50/[0.08] hover:border-amber-100/20 hover:shadow-[0_8px_32px_-8px_rgba(251,191,36,0.12)] hover:shadow-amber-950/20 hover:-translate-y-0.5 active:translate-y-0"
		>
			<!-- Top row: icon + external link hint -->
			<div class="flex items-start justify-between gap-3">
				<div
					class="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-100/10 text-amber-200/90 transition-colors duration-300 group-hover:bg-amber-100/15"
					aria-hidden="true"
				>
					<UIcon
						name="mdi:book-open-page-variant"
						class="text-xl"
					/>
				</div>
				<UIcon
					name="mdi:arrow-top-right"
					class="size-5 text-amber-100/40 shrink-0 transition-all duration-300 group-hover:text-amber-200/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					aria-hidden="true"
				/>
			</div>

			<!-- Title -->
			<h3
				class="text-lg md:text-xl font-medium text-amber-50 leading-snug tracking-tight transition-colors duration-300 group-hover:text-amber-100 pr-6"
			>
				{{ title }}
			</h3>

			<!-- Meta row: badges -->
			<div class="flex flex-wrap items-center gap-2">
				<span
					class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50/10 text-amber-200/80 border border-amber-50/10"
				>
					<UIcon name="mdi:clock-outline" class="size-3.5 opacity-80" />
					{{ readTimeMinutes }} min
				</span>
				<span
					class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50/10 text-amber-200/80 border border-amber-50/10"
				>
					<UIcon name="mdi:calendar-outline" class="size-3.5 opacity-80" />
					{{ publishedAt }}
				</span>
				<span
					class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50/10 text-amber-200/80 border border-amber-50/10"
				>
					<UIcon name="mdi:translate" class="size-3.5 opacity-80" />
					{{ languageLabel }}
				</span>
			</div>
		</div>
	</article>
</template>

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

const { t } = useI18n();
const languageLabel = computed(() =>
	props.language === "pt-BR" ? t("common.portuguese") : t("common.english"),
);
const ariaLabel = computed(() => `${t("blog.readArticle")}: ${props.title}`);
</script>

<template>
	<article
		role="link"
		tabindex="0"
		:aria-label="ariaLabel"
		class="list-row group w-full cursor-pointer border-b border-amber-50/10 last:border-b-0"
		@click="handleArticleClick"
		@keydown.enter="handleArticleClick"
		@keydown.space.prevent="handleArticleClick"
	>
		<div class="flex flex-col min-w-0 flex-1 gap-3 py-1">
			<h3
				class="text-lg md:text-xl font-medium text-amber-50 leading-snug tracking-tight group-hover:text-amber-100 transition-colors"
			>
				{{ title }}
			</h3>
			<div
				class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-wide text-amber-100/35"
			>
				<span>{{ readTimeMinutes }} {{ $t("blog.minRead") }}</span>
				<span aria-hidden="true" class="text-amber-100/20">·</span>
				<span>{{ publishedAt }}</span>
				<span aria-hidden="true" class="text-amber-100/20">·</span>
				<span>{{ languageLabel }}</span>
			</div>
		</div>
		<UIcon
			name="mdi:arrow-top-right"
			class="size-4 text-amber-100/20 group-hover:text-amber-200/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1.5"
			aria-hidden="true"
		/>
	</article>
</template>

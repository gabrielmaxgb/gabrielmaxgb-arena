<script setup lang="ts">
const props = defineProps<{
	url?: string;
	title: string;
	readTimeMinutes: number | string;
	publishedAt: string;
	language: string;
	index?: number;
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

const displayIndex = computed(() =>
	props.index != null ? String(props.index + 1).padStart(2, "0") : null,
);
</script>

<template>
	<article
		role="link"
		tabindex="0"
		:aria-label="ariaLabel"
		class="list-row group w-full cursor-pointer"
		@click="handleArticleClick"
		@keydown.enter="handleArticleClick"
		@keydown.space.prevent="handleArticleClick"
	>
		<span
			v-if="displayIndex"
			class="list-index"
			aria-hidden="true"
		>
			{{ displayIndex }}
		</span>

		<div class="flex flex-col min-w-0 flex-1 gap-2.5">
			<h3
				class="text-lg md:text-[1.25rem] font-medium text-[var(--color-parchment)] leading-snug tracking-tight group-hover:text-[var(--color-accent)] transition-colors duration-300"
			>
				{{ title }}
			</h3>
			<div class="meta-text flex flex-wrap items-center gap-x-3 gap-y-1">
				<span>{{ readTimeMinutes }} {{ $t("blog.minRead") }}</span>
				<span aria-hidden="true">—</span>
				<span>{{ publishedAt }}</span>
				<span aria-hidden="true">—</span>
				<span>{{ languageLabel }}</span>
			</div>
		</div>

		<UIcon
			name="mdi:arrow-top-right"
			class="size-4 text-[var(--color-parchment-faint)] group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1"
			aria-hidden="true"
		/>
	</article>
</template>

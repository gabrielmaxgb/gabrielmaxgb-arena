<script setup lang="ts">
const articles: {
	title: string;
	url: string;
	readTimeMinutes: number;
	publishedAt: string;
	language: string;
}[] = [
	{
		title: "Quero estudar programação. Pra quê Linux?",
		url: "https://medium.com/@gabriellmax/quero-estudar-programa%C3%A7%C3%A3o-pra-qu%C3%AA-linux-bb5312b02f1c",
		readTimeMinutes: 7,
		publishedAt: "oct 9, 2020",
		language: "pt-BR",
	},
	{
		title:
			"A Montanha Sem Placas: Quando o Front-End Ignora as Regras de Negócio",
		url: "https://medium.com/@gabrielmaxgb/a-montanha-sem-placas-quando-o-front-end-ignora-as-regras-de-neg%C3%B3cio-84bba4299a6c",
		readTimeMinutes: 6,
		publishedAt: "may 3, 2025",
		language: "pt-BR",
	},
	{
		title: "The Unmarked Mountain: When Front-End Ignores Business Rules",
		url: "https://gabrielmaxgb.medium.com/the-unmarked-mountain-when-front-end-ignores-business-rules-bd5f1f55bafe",
		readTimeMinutes: 6,
		publishedAt: "may 3, 2025",
		language: "en-US",
	},
	{
		title: "Princípios de Design de Software aplicados ao Front-end",
		url: "https://medium.com/@gabrielmaxgb/princ%C3%ADpios-de-design-de-software-aplicados-ao-front-end-7beb86594ca2",
		readTimeMinutes: 6,
		publishedAt: "aug 25, 2025",
		language: "pt-BR",
	},
];
</script>

<template>
	<MainContainer class="gap-8">
		<ArticleItem
			v-for="(article, index) in articles"
			:key="index"
			:url="article.url"
			:title="article.title"
			:read-time-minutes="article.readTimeMinutes"
			:published-at="article.publishedAt"
			:language="article.language"
		/>
	</MainContainer>
</template>

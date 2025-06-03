<script setup lang="ts">
const articles = [
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
	// {
	// 	title: "Quero estudar programação. Pra quê Linux?",
	// 	url: "https://medium.com/@gabriellmax/quero-estudar-programa%C3%A7%C3%A3o-pra-qu%C3%AA-linux-bb5312b02f1c",
	// 	readTimeMinutes: 7,
	// 	publishedAt: "oct 9, 2020",
	// 	language: "pt-BR",
	// },
	// {
	// 	title:
	// 		"A Montanha Sem Placas: Quando o Front-End Ignora as Regras de Negócio",
	// 	url: "https://medium.com/@gabriellmax/a-montanha-sem-placas-quando-o-front-end-ignora-as-regras-de-neg%C3%B3cio-2f0b1c6d7a4e",
	// 	readTimeMinutes: 6,
	// 	publishedAt: "may 3, 2025",
	// 	language: "pt-BR",
	// },
	// {
	// 	title: "The Unmarked Mountain: When Front-End Ignores Business Rules",
	// 	url: "https://gabrielmaxgb.medium.com/the-unmarked-mountain-when-front-end-ignores-business-rules-bd5f1f55bafe",
	// 	readTimeMinutes: 6,
	// 	publishedAt: "may 3, 2025",
	// 	language: "en-US",
	// },
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

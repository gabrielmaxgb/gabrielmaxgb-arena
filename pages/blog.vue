<script setup lang="ts">
const articles = [
	{
		title: "Quero estudar programação. Pra quê Linux?",
		url: "https://medium.com/@gabriellmax/quero-estudar-programa%C3%A7%C3%A3o-pra-qu%C3%AA-linux-bb5312b02f1c",
		readTimeMinutes: 7,
		publishedAt: "oct 9, 2020",
		language: "pt-BR",
	},
];
</script>

<template>
	<MainContainer>
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

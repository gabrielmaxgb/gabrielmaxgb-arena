<script setup lang="ts">
import p4nLogo from "~/public/p4n-logo.svg";
import guardainLogo from "~/public/guardadin-logo.png";
import minhaChurchLogo from "~/public/minhachurch-logo.png";
import profileImage from "~/public/profile.png";
import p4nScreenshot from "~/public/projects/pros4noobs.png";
import guardadinScreenshot from "~/public/projects/guardadin.png";
import minhaChurchScreenshot from "~/public/projects/minhachurch.png";

const { t } = useI18n();

const badgeItems = computed(() => [
	{ label: t("index.badgeYears") },
	{ label: t("index.badgeLead") },
]);

const projects = computed(() => [
	{
		name: "Pros4Noobs",
		domain: "pros4noobs.com",
		href: "https://pros4noobs.com",
		logo: p4nLogo,
		screenshot: p4nScreenshot,
		description: t("index.projectP4n"),
	},
	{
		name: "Guardadin",
		domain: "guardadin.com.br",
		href: "https://guardadin.com.br",
		logo: guardainLogo,
		screenshot: guardadinScreenshot,
		description: t("index.projectGuardadin"),
	},
	{
		name: "Minha Church",
		domain: "minhachurch.com",
		href: "https://www.minhachurch.com/",
		logo: minhaChurchLogo,
		screenshot: minhaChurchScreenshot,
		description: t("index.projectMinhaChurch"),
	},
]);

const currentWork = computed(() => [
	{
		name: "Selby Lane Digital",
		href: "https://selbylane.com/",
		active: true,
	},
	{
		name: "Wizhats",
		href: "",
		active: false,
	},
]);

const journeyCount = 8;

function jobKey(index: number, field: "Period" | "Title" | "Description") {
	return `index.job${index}${field}` as const;
}
</script>

<template>
	<div class="page-home">
		<MainContainer>
			<MainSection
				class="hero-block section--silent flex flex-col justify-center min-h-[72vh] md:min-h-[78vh]"
				:data-edition="$t('index.heroEdition')"
				:show-index="false"
			>
				<div class="flex flex-col min-w-0 max-w-2xl">
					<p class="hero-fade hero-role mb-8">
						{{ $t("index.heroRole") }}
					</p>

					<div class="hero-fade hero-delay-1">
						<h1 class="display-title">
							{{ $t("index.heroRealName") }}
						</h1>
						<p class="hero-real-name mt-4">
							{{ $t("index.heroName") }}
						</p>
					</div>

					<p class="hero-fade hero-delay-2 mt-12 lead-text">
						{{ $t("index.heroHeadline") }}
					</p>

					<p class="hero-fade hero-delay-3 mt-6 prose-muted text-base max-w-md">
						{{ $t("index.heroSupport") }}
					</p>

					<div
						class="hero-fade hero-delay-4 mt-14 flex flex-wrap items-center gap-x-5 gap-y-4"
					>
						<a href="mailto:gmaxgomes@gmail.com" class="btn-primary">
							{{ $t("index.ctaEmail") }}
						</a>
						<a
							href="https://www.linkedin.com/in/gabrielmaxgb/"
							target="_blank"
							rel="noopener noreferrer"
							class="btn-ghost"
						>
							linkedin
						</a>
					</div>

					<div
						class="hero-fade hero-delay-5 mt-16 meta-text flex flex-wrap items-center gap-x-3 gap-y-2"
					>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.google.com/maps/place/Bras%C3%ADlia+-+DF/@-15.7756577,-48.1267645,137253m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935a3d18e45b91a3:0x24e8d3620bd85d7f!8m2!3d-15.7975174!4d-47.8918881!16s%2Fg%2F1ypvssh2c?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
							class="hover:text-[var(--color-cream-muted)] transition-colors"
						>
							{{ $t("index.intro10") }}
						</a>
						<span aria-hidden="true">·</span>
						<span
							v-for="(item, index) in badgeItems"
							:key="index"
							class="contents"
						>
							<span>{{ item.label }}</span>
							<span v-if="index < badgeItems.length - 1" aria-hidden="true"
								>·</span
							>
						</span>
					</div>
				</div>
			</MainSection>
		</MainContainer>

		<ProjectCarousel :projects="projects" />

		<div class="page-home__rest">
			<MainContainer>
			<MainSection :eyebrow="$t('index.aboutEyebrow')" :title="$t('index.aboutTitle')">
				<div
					class="grid w-full gap-10 md:gap-14 md:grid-cols-[auto_minmax(0,1fr)] md:items-start"
				>
					<figure class="profile-portrait profile-portrait--section mx-auto md:mx-0">
						<img
							:src="profileImage"
							:alt="$t('index.profileAlt')"
							class="profile-portrait__image"
							width="681"
							height="1024"
							loading="lazy"
						/>
					</figure>

					<div class="flex flex-col gap-6 prose-muted min-w-0">
						<p>{{ $t("index.intro5") }}</p>
						<p>
							{{ $t("index.intro6") }}
							<NuxtLink to="/blog" class="prose-link">
								{{ $t("index.intro7") }}
							</NuxtLink>
							.
						</p>
					</div>
				</div>
			</MainSection>

			<MainSection :eyebrow="$t('index.purposeEyebrow')" :title="$t('index.purposeTitle')">
				<blockquote class="pull-quote">
					{{ $t("index.purpose") }}
				</blockquote>
			</MainSection>

			<MainSection :eyebrow="$t('index.pushingEyebrow')" :title="$t('index.pushingTitle')">
				<ul class="editorial-list">
					<li v-for="item in currentWork" :key="item.name">
						<a
							v-if="item.active"
							:href="item.href"
							target="_blank"
							rel="noopener noreferrer"
							class="list-row group"
						>
							<span class="status-dot status-dot--live" aria-hidden="true" />
							<span
								class="flex-1 font-medium text-[var(--color-parchment)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
							>
								{{ item.name }}
							</span>
							<UIcon
								name="mdi:arrow-top-right"
								class="size-4 text-[var(--color-parchment-faint)] group-hover:text-[var(--color-accent)] transition-all shrink-0"
							/>
						</a>
						<div
							v-else
							class="list-row opacity-45 cursor-default"
						>
							<span class="status-dot status-dot--idle" aria-hidden="true" />
							<span class="flex-1 font-medium text-[var(--color-parchment-muted)]">{{
								item.name
							}}</span>
							<span class="meta-text uppercase tracking-[0.18em]">
								{{ $t("index.comingSoon") }}
							</span>
						</div>
					</li>
				</ul>
			</MainSection>

			<MainSection :eyebrow="$t('index.journeyEyebrow')" :title="$t('index.journeyTitle')">
				<div class="flex flex-col gap-6 prose-muted mb-16">
					<p>{{ $t("index.journey1") }}</p>
					<p>{{ $t("index.journey2") }}</p>
					<p>
						{{ $t("index.journey3") }}
						<a
							href="https://www.linkedin.com/in/gabrielmaxgb/"
							class="prose-link"
							target="_blank"
							rel="noopener noreferrer"
							>{{ $t("index.journey4") }}</a
						>{{ $t("index.journeyProfile") }}
					</p>
				</div>

				<p class="section-eyebrow mb-10">{{ $t("index.briefSummary") }}</p>

				<ol class="editorial-timeline">
					<li
						v-for="i in journeyCount"
						:key="i"
						class="timeline-item"
					>
						<span class="timeline-marker" aria-hidden="true" />
						<p class="meta-text mb-2.5">
							{{ $t(jobKey(i - 1, "Period")) }}
						</p>
						<h3 class="text-base md:text-lg font-medium text-[var(--color-parchment)] mb-2.5 tracking-tight">
							{{ $t(jobKey(i - 1, "Title")) }}
						</h3>
						<p class="prose-muted text-sm md:text-base !max-w-none">
							{{ $t(jobKey(i - 1, "Description")) }}
						</p>
					</li>
				</ol>
			</MainSection>
			</MainContainer>
		</div>
	</div>
</template>

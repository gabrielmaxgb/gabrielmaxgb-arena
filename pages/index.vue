<script setup lang="ts">
import p4nLogo from "~/public/p4n-logo.svg";
import guardainLogo from "~/public/guardadin-logo.png";
import minhaChurchLogo from "~/public/minhachurch-logo.png";

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
		description: t("index.projectP4n"),
	},
	{
		name: "Guardadin",
		domain: "guardadin.com.br",
		href: "https://guardadin.com.br",
		logo: guardainLogo,
		description: t("index.projectGuardadin"),
	},
	{
		name: "Minha Church",
		domain: "minhachurch.com",
		href: "https://www.minhachurch.com/",
		logo: minhaChurchLogo,
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

function padIndex(n: number) {
	return String(n).padStart(2, "0");
}
</script>

<template>
	<MainContainer>
		<MainSection
			class="hero-block flex flex-col justify-center min-h-[70vh] md:min-h-[75vh]"
		>
			<p class="hero-fade section-eyebrow mb-5">
				{{ $t("index.heroRole") }}
			</p>

			<h1
				class="hero-fade hero-delay-1 font-serif text-5xl sm:text-6xl md:text-8xl text-amber-50 leading-[0.92] tracking-tight max-w-xl"
			>
				{{ $t("index.heroName") }}
			</h1>

			<p
				class="hero-fade hero-delay-2 mt-8 max-w-md text-xl md:text-2xl text-amber-50/85 leading-snug"
			>
				{{ $t("index.heroHeadline") }}
			</p>

			<p class="hero-fade hero-delay-3 mt-4 max-w-sm prose-muted text-base">
				{{ $t("index.heroSupport") }}
			</p>

			<div class="hero-fade hero-delay-4 mt-10 flex flex-wrap items-center gap-3">
				<a
					href="mailto:gmaxgomes@gmail.com"
					class="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium bg-amber-100 text-[var(--color-ink)] hover:bg-amber-50 transition-colors duration-200"
				>
					{{ $t("index.ctaEmail") }}
					<UIcon name="ion:arrow-forward" class="size-4" />
				</a>
				<a
					href="https://www.linkedin.com/in/gabrielmaxgb/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-3 py-3 text-sm text-amber-100/55 hover:text-amber-100 transition-colors duration-200 rounded"
				>
					LinkedIn
					<UIcon name="mdi:arrow-top-right" class="size-3.5 opacity-60" />
				</a>
			</div>

			<div
				class="hero-fade hero-delay-5 mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs tracking-wide text-amber-100/35"
			>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.google.com/maps/place/Bras%C3%ADlia+-+DF/@-15.7756577,-48.1267645,137253m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935a3d18e45b91a3:0x24e8d3620bd85d7f!8m2!3d-15.7975174!4d-47.8918881!16s%2Fg%2F1ypvssh2c?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
					class="hover:text-amber-100/60 transition-colors"
				>
					{{ $t("index.intro10") }}
				</a>
				<span aria-hidden="true" class="text-amber-100/20">·</span>
				<span v-for="(item, index) in badgeItems" :key="index" class="contents">
					<span>{{ item.label }}</span>
					<span
						v-if="index < badgeItems.length - 1"
						aria-hidden="true"
						class="text-amber-100/20"
						>·</span
					>
				</span>
			</div>
		</MainSection>

		<MainSection :eyebrow="$t('index.projectsEyebrow')" :title="$t('index.projectsTitle')">
			<ul class="flex flex-col divide-y divide-amber-50/10">
				<li v-for="(project, index) in projects" :key="project.href">
					<a
						:href="project.href"
						target="_blank"
						rel="noopener noreferrer"
						class="list-row group"
					>
						<span
							class="font-mono text-xs text-amber-100/25 pt-1.5 w-6 shrink-0"
							aria-hidden="true"
						>
							{{ padIndex(index + 1) }}
						</span>
						<img
							:src="project.logo"
							:alt="project.name"
							class="w-10 h-10 object-contain shrink-0 mt-0.5 opacity-90 group-hover:opacity-100 transition-opacity"
						/>
						<div class="flex flex-col min-w-0 flex-1 gap-1">
							<span
								class="font-medium text-amber-50 group-hover:text-amber-100 transition-colors"
							>
								{{ project.name }}
							</span>
							<span class="text-sm prose-muted leading-snug">
								{{ project.description }}
							</span>
							<span
								class="text-xs text-amber-100/25 font-mono tracking-wide mt-0.5"
							>
								{{ project.domain }}
							</span>
						</div>
						<UIcon
							name="mdi:arrow-top-right"
							class="size-4 text-amber-100/20 group-hover:text-amber-200/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1"
						/>
					</a>
				</li>
			</ul>
		</MainSection>

		<MainSection :eyebrow="$t('index.aboutEyebrow')" :title="$t('index.aboutTitle')">
			<div class="flex flex-col gap-5 prose-muted">
				<p>{{ $t("index.intro5") }}</p>
				<p>
					{{ $t("index.intro6") }}
					<NuxtLink to="/blog" class="prose-link">
						{{ $t("index.intro7") }}
					</NuxtLink>
					.
				</p>
			</div>
		</MainSection>

		<MainSection :eyebrow="$t('index.purposeEyebrow')" :title="$t('index.purposeTitle')">
			<p class="prose-muted">{{ $t("index.purpose") }}</p>
		</MainSection>

		<MainSection :eyebrow="$t('index.pushingEyebrow')" :title="$t('index.pushingTitle')">
			<ul class="flex flex-col divide-y divide-amber-50/10">
				<li v-for="item in currentWork" :key="item.name">
					<a
						v-if="item.active"
						:href="item.href"
						target="_blank"
						rel="noopener noreferrer"
						class="list-row group"
					>
						<span
							class="mt-1.5 size-1.5 rounded-full bg-emerald-400/80 shrink-0"
							aria-hidden="true"
						/>
						<span
							class="flex-1 font-medium text-amber-50 group-hover:text-amber-100 transition-colors"
						>
							{{ item.name }}
						</span>
						<UIcon
							name="mdi:arrow-top-right"
							class="size-4 text-amber-100/20 group-hover:text-amber-200/70 transition-all shrink-0"
						/>
					</a>
					<div
						v-else
						class="flex items-center gap-4 px-3 py-5 -mx-3 opacity-40"
					>
						<span
							class="size-1.5 rounded-full bg-amber-100/30 shrink-0"
							aria-hidden="true"
						/>
						<span class="flex-1 font-medium text-amber-100/80">{{
							item.name
						}}</span>
						<span
							class="text-[10px] tracking-[0.2em] uppercase text-amber-100/50"
						>
							{{ $t("index.comingSoon") }}
						</span>
					</div>
				</li>
			</ul>
		</MainSection>

		<MainSection :eyebrow="$t('index.journeyEyebrow')" :title="$t('index.journeyTitle')">
			<div class="flex flex-col gap-5 prose-muted mb-14">
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

			<p class="section-eyebrow mb-8">{{ $t("index.briefSummary") }}</p>

			<ol class="relative flex flex-col gap-0 border-l border-amber-50/10 ml-1.5">
				<li
					v-for="i in journeyCount"
					:key="i"
					class="relative pl-8 md:pl-10 pb-12 last:pb-0"
				>
					<span
						class="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-amber-100/40 ring-4 ring-[#0c0c0b]"
						aria-hidden="true"
					/>
					<p class="font-mono text-xs tracking-wide text-amber-100/35 mb-2">
						{{ $t(jobKey(i - 1, "Period")) }}
					</p>
					<h3 class="text-base md:text-lg font-medium text-amber-50 mb-2">
						{{ $t(jobKey(i - 1, "Title")) }}
					</h3>
					<p class="prose-muted text-sm md:text-base">
						{{ $t(jobKey(i - 1, "Description")) }}
					</p>
				</li>
			</ol>
		</MainSection>
	</MainContainer>
</template>

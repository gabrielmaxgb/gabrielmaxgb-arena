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

const journeyCount = 8;

function jobKey(index: number, field: "Period" | "Title" | "Description") {
	return `index.job${index}${field}` as const;
}
</script>

<template>
	<MainContainer>
		<MainSection class="flex flex-col gap-6">
			<p class="text-lg md:text-xl leading-relaxed text-amber-50">
				{{ $t("index.intro1") }}
			</p>
			<p class="text-amber-100/70 leading-relaxed">
				{{ $t("index.intro8") }}
			</p>

			<div class="flex flex-wrap items-center gap-3">
				<a
					href="mailto:gmaxgomes@gmail.com"
					class="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-amber-100/15 text-amber-50 border border-amber-100/25 hover:bg-amber-100/25 hover:border-amber-100/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/40"
				>
					<UIcon name="ion:mail-outline" class="size-4" />
					{{ $t("index.ctaEmail") }}
				</a>
				<a
					href="https://www.linkedin.com/in/gabrielmaxgb/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-amber-100/70 border border-amber-50/15 hover:text-amber-50 hover:border-amber-50/30 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/40"
				>
					<UIcon name="simple-icons:linkedin" class="size-4" />
					LinkedIn
				</a>
			</div>

			<div class="flex flex-wrap gap-2">
				<UBadge
					v-for="(item, index) in badgeItems"
					:key="index"
					variant="soft"
					class="w-fit text-xs bg-amber-100/10 text-amber-100 h-fit"
					size="sm"
				>
					{{ item.label }}
				</UBadge>
			</div>

			<p class="flex items-center gap-2 text-sm text-amber-100/50">
				<UIcon name="ion:location-outline" class="inline text-amber-100/60" />
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.google.com/maps/place/Bras%C3%ADlia+-+DF/@-15.7756577,-48.1267645,137253m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935a3d18e45b91a3:0x24e8d3620bd85d7f!8m2!3d-15.7975174!4d-47.8918881!16s%2Fg%2F1ypvssh2c?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
					class="font-medium text-amber-100/80 hover:text-amber-100 transition-colors"
				>
					{{ $t("index.intro10") }}
				</a>
			</p>

			<div class="mt-6 w-full">
				<p class="text-sm text-amber-100/40 mb-5 tracking-wide">
					{{ $t("index.projectsTitle") }}
				</p>
				<ul class="flex flex-col gap-2">
					<li v-for="project in projects" :key="project.href">
						<a
							:href="project.href"
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-start gap-4 rounded-xl px-3 py-3 -mx-3 transition-all duration-300 hover:bg-amber-50/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/40"
						>
							<img
								:src="project.logo"
								:alt="project.name"
								class="w-11 h-11 object-contain transition-all duration-300 mt-0.5"
							/>
							<div class="flex flex-col min-w-0 flex-1 gap-0.5">
								<span
									class="font-medium text-amber-50 group-hover:text-amber-100 transition-colors"
								>
									{{ project.name }}
								</span>
								<span class="text-sm text-amber-100/45 leading-snug">
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
			</div>
		</MainSection>

		<MainSection class="flex flex-col gap-4">
			<p>{{ $t("index.intro5") }}</p>
			<p>
				{{ $t("index.intro6") }}
				<NuxtLink
					to="/blog"
					class="font-semibold cursor-pointer text-amber-100"
				>
					{{ $t("index.intro7") }}
				</NuxtLink>
				.
			</p>
		</MainSection>

		<MainSection :title="$t('index.purposeTitle')">
			<p>{{ $t("index.purpose") }}</p>
		</MainSection>

		<MainSection :title="$t('index.pushingTitle')">
			<div class="flex flex-col gap-2">
				<span>
					-
					<a
						href="https://selbylane.com/"
						class="font-semibold cursor-pointer text-amber-100"
						target="_blank"
						rel="noopener noreferrer"
						>Selby Lane Digital</a
					>
				</span>
				<span class="opacity-40 text-amber-100/80">
					-
					<span class="font-semibold">Wizhats</span>
					<span class="text-xs ml-1.5 tracking-wide uppercase">{{
						$t("index.comingSoon")
					}}</span>
				</span>
			</div>
		</MainSection>

		<MainSection :title="$t('index.journeyTitle')">
			<div class="flex flex-col gap-5">
				<p>{{ $t("index.journey1") }}</p>
				<p>{{ $t("index.journey2") }}</p>
				<p>
					{{ $t("index.journey3") }}
					<a
						href="https://www.linkedin.com/in/gabrielmaxgb/"
						class="text-amber-100 font-semibold cursor-pointer"
						target="_blank"
						rel="noopener noreferrer"
						>{{ $t("index.journey4") }}</a
					>
					{{ $t("index.journeyProfile") }}
				</p>
			</div>

			<h2 class="mt-12">{{ $t("index.briefSummary") }}</h2>

			<section class="w-full flex flex-col gap-16 mt-8">
				<div v-for="i in journeyCount" :key="i" class="w-full pt-8">
					<div
						class="w-full flex justify-end items-center opacity-30 text-2xl md:text-5xl font-script"
					>
						{{ $t(jobKey(i - 1, "Period")) }}
					</div>
					<div class="flex gap-3">
						<div>
							<UIcon
								name="mdi:code-block-tags"
								class="text-amber-100/30 text-xl md:text-2xl"
							/>
						</div>
						<div>
							<h3 class="font-semibold text-amber-100">
								{{ $t(jobKey(i - 1, "Title")) }}
							</h3>
							<p>
								{{ $t(jobKey(i - 1, "Description")) }}
							</p>
						</div>
					</div>
				</div>
			</section>
		</MainSection>
	</MainContainer>
</template>

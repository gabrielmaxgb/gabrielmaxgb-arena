<script setup lang="ts">
export interface ProjectItem {
	name: string;
	domain: string;
	href: string;
	logo: string;
	screenshot: string;
	description: string;
}

const props = defineProps<{
	projects: ProjectItem[];
}>();

const root = ref<HTMLElement | null>(null);
const viewport = ref<HTMLElement | null>(null);
const track = ref<HTMLElement | null>(null);

/** 0 → 1 overall scroll through the runway */
const progress = ref(0);
const active = ref(0);

const count = computed(() => props.projects.length);
const last = computed(() => Math.max(0, count.value - 1));

function pad(n: number) {
	return String(n).padStart(2, "0");
}

function layoutSlides() {
	const vp = viewport.value;
	const rail = track.value;
	if (!vp || !rail || count.value < 1) return { step: 0, offset: 0 };

	const card = rail.querySelector<HTMLElement>(".projects-scroll__card");
	if (!card) return { step: 0, offset: 0 };

	const gap = 20;
	const cardW = card.getBoundingClientRect().width || Math.min(vp.clientWidth - 48, 736);
	const step = Math.ceil(cardW + gap);
	const offset = Math.max(0, (vp.clientWidth - cardW) / 2);
	const slides = rail.querySelectorAll<HTMLElement>(".projects-scroll__slide");

	slides.forEach((slide) => {
		slide.style.flex = `0 0 ${step}px`;
		slide.style.width = `${step}px`;
		slide.style.minWidth = `${step}px`;
		slide.style.maxWidth = `${step}px`;
	});

	rail.style.width = `${step * count.value + offset * 2}px`;
	return { step, offset };
}

function updateFromScroll() {
	const el = root.value;
	const rail = track.value;
	if (!el || !rail || count.value < 1) return;

	const { step, offset } = layoutSlides();
	if (step <= 0) return;

	if (count.value === 1) {
		progress.value = 0;
		active.value = 0;
		rail.style.transform = `translate3d(${offset}px, 0, 0)`;
		return;
	}

	const rect = el.getBoundingClientRect();
	const total = el.offsetHeight - window.innerHeight;

	if (total <= 0) {
		progress.value = 0;
		active.value = 0;
		rail.style.transform = `translate3d(${offset}px, 0, 0)`;
		return;
	}

	const raw = Math.min(1, Math.max(0, -rect.top / total));
	progress.value = raw;
	active.value = Math.min(last.value, Math.round(raw * last.value));

	const x = offset - raw * last.value * step;
	rail.style.transform = `translate3d(${x}px, 0, 0)`;
}

let ticking = false;
function onScrollOrResize() {
	if (ticking) return;
	ticking = true;
	requestAnimationFrame(() => {
		updateFromScroll();
		ticking = false;
	});
}

onMounted(() => {
	document.querySelectorAll(".pin-spacer").forEach((node) => {
		const child = node.firstElementChild;
		if (child) node.parentNode?.insertBefore(child, node);
		node.remove();
	});

	updateFromScroll();
	window.addEventListener("scroll", onScrollOrResize, { passive: true });
	window.addEventListener("resize", onScrollOrResize, { passive: true });
});

onBeforeUnmount(() => {
	window.removeEventListener("scroll", onScrollOrResize);
	window.removeEventListener("resize", onScrollOrResize);
});
</script>

<template>
	<section
		ref="root"
		class="projects-scroll"
		:style="{ '--projects-count': Math.max(1, count) }"
	>
		<div class="projects-scroll__sticky">
			<header class="projects-scroll__header">
				<p class="section-eyebrow">{{ $t("index.projectsEyebrow") }}</p>
				<h2 class="section-title">{{ $t("index.projectsTitle") }}</h2>
			</header>

			<div ref="viewport" class="projects-scroll__viewport">
				<div ref="track" class="projects-scroll__track">
					<article
						v-for="(project, index) in projects"
						:key="project.href"
						class="projects-scroll__slide"
						:class="{ 'is-active': index === active }"
						:aria-hidden="index !== active"
					>
						<a
							:href="project.href"
							target="_blank"
							rel="noopener noreferrer"
							class="projects-scroll__card"
							:tabindex="index === active ? 0 : -1"
						>
							<div class="projects-scroll__frame">
								<div class="projects-scroll__chrome" aria-hidden="true">
									<span class="projects-scroll__dot projects-scroll__dot--accent" />
									<span class="projects-scroll__dot" />
									<span class="projects-scroll__dot" />
									<span class="projects-scroll__url">{{ project.domain }}</span>
								</div>
								<div class="projects-scroll__media">
									<img
										:src="project.screenshot"
										:alt="`${project.name} — ${$t('index.projectScreenshotAlt')}`"
										class="projects-scroll__shot"
										width="1440"
										height="900"
										:loading="index === 0 ? 'eager' : 'lazy'"
									/>
								</div>
							</div>

							<div class="projects-scroll__meta">
								<div class="projects-scroll__identity">
									<span class="projects-scroll__index">{{ pad(index + 1) }}</span>
									<img
										:src="project.logo"
										alt=""
										class="projects-scroll__logo"
									/>
									<h3 class="projects-scroll__name">{{ project.name }}</h3>
								</div>
								<p class="projects-scroll__desc">{{ project.description }}</p>
								<span class="projects-scroll__visit meta-text">
									{{ $t("index.projectVisit") }} ↗
								</span>
							</div>
						</a>
					</article>
				</div>
			</div>

			<div class="projects-scroll__footer">
				<div
					class="projects-scroll__bar"
					role="progressbar"
					:aria-valuenow="Math.round(progress * 100)"
					aria-valuemin="0"
					aria-valuemax="100"
				>
					<div
						class="projects-scroll__bar-fill"
						:style="{ transform: `scaleX(${progress})` }"
					/>
				</div>
				<p class="projects-scroll__hint meta-text">
					{{ $t("index.projectScrollHint") }}
					<span aria-hidden="true"> · </span>
					{{ pad(active + 1) }} / {{ pad(count) }}
					<span aria-hidden="true"> · </span>
					{{ Math.round(progress * 100) }}%
				</p>
			</div>
		</div>
	</section>
</template>

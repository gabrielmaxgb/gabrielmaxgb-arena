<script setup lang="ts">
const enabled = ref(false);
const visible = ref(false);
const hovering = ref(false);
const pressing = ref(false);
const label = ref("");

const x = ref(0);
const y = ref(0);
const tx = ref(0);
const ty = ref(0);

let raf = 0;
let reduceMotion = false;

const INTERACTIVE =
	'a, button, [role="button"], input, textarea, select, summary, label, .projects-scroll__card, .list-row, .btn-primary, .btn-ghost, .prose-link, .nav-bracket, .nav-icon, .masthead-wordmark';

function readLabel(el: Element | null): string {
	if (!el) return "";
	const host = el.closest<HTMLElement>(INTERACTIVE);
	if (!host) return "";

	const explicit =
		host.getAttribute("data-cursor") ||
		host.getAttribute("aria-label") ||
		host.getAttribute("title");
	if (explicit) return explicit.slice(0, 16).toLowerCase();

	if (host.tagName === "A") {
		const text = host.textContent?.trim();
		if (text && text.length <= 16) return text.toLowerCase();
		if (host.getAttribute("target") === "_blank") return "venture";
		return "enter";
	}
	if (host.tagName === "BUTTON") return "cast";
	return "inspect";
}

function onMove(e: PointerEvent) {
	x.value = e.clientX;
	y.value = e.clientY;
	if (!visible.value) visible.value = true;

	const target = e.target as Element | null;
	const isInteractive = Boolean(target?.closest(INTERACTIVE));
	hovering.value = isInteractive;
	label.value = isInteractive ? readLabel(target) : "";
}

function onDown() {
	pressing.value = true;
}

function onUp() {
	pressing.value = false;
}

function onLeave() {
	visible.value = false;
	hovering.value = false;
	label.value = "";
}

function tick() {
	const ease = reduceMotion ? 1 : 0.16;
	tx.value += (x.value - tx.value) * ease;
	ty.value += (y.value - ty.value) * ease;
	raf = requestAnimationFrame(tick);
}

onMounted(() => {
	const fine = window.matchMedia("(pointer: fine)").matches;
	const hover = window.matchMedia("(hover: hover)").matches;
	reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	if (!fine || !hover) return;

	enabled.value = true;
	document.documentElement.classList.add("has-custom-cursor");

	window.addEventListener("pointermove", onMove, { passive: true });
	window.addEventListener("pointerdown", onDown, { passive: true });
	window.addEventListener("pointerup", onUp, { passive: true });
	window.addEventListener("pointerleave", onLeave, { passive: true });
	document.body.addEventListener("mouseleave", onLeave, { passive: true });

	raf = requestAnimationFrame(tick);
});

onBeforeUnmount(() => {
	document.documentElement.classList.remove("has-custom-cursor");
	window.removeEventListener("pointermove", onMove);
	window.removeEventListener("pointerdown", onDown);
	window.removeEventListener("pointerup", onUp);
	window.removeEventListener("pointerleave", onLeave);
	document.body.removeEventListener("mouseleave", onLeave);
	cancelAnimationFrame(raf);
});
</script>

<template>
	<div
		v-if="enabled"
		class="site-cursor"
		:class="{
			'is-visible': visible,
			'is-hover': hovering,
			'is-press': pressing,
		}"
		aria-hidden="true"
	>
		<!-- lagged: wax-seal ring (no crosshair) -->
		<div
			class="site-cursor__orbit"
			:style="{ transform: `translate3d(${tx}px, ${ty}px, 0)` }"
		>
			<span class="site-cursor__seal" />
			<span class="site-cursor__rune" />
		</div>

		<!-- tip: ember gem -->
		<div
			class="site-cursor__tip"
			:style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
		>
			<span class="site-cursor__ember" />
			<span v-if="label" class="site-cursor__label">
				<span class="site-cursor__glyph" aria-hidden="true">✦</span>
				{{ label }}
			</span>
		</div>
	</div>
</template>

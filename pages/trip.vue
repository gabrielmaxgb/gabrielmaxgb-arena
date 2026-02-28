<script setup lang="ts">
const SECRET_CODE = [
	"j",
	"e",
	"s",
	"u",
	"s",
	" ",
	"c",
	"h",
	"r",
	"i",
	"s",
	"t",
];

// Each slide is an array of lines revealed automatically.
// After all lines appear, "[ espaço para continuar ]" is shown.
const slides: string[][] = [
	[
		"// ACCESS GRANTED",
		"",
		"ἐγώ εἰμι τὸ Ἄλφα καὶ τὸ Ὦ",
		"",
		'"Eu sou o Alfa e o Ômega,',
		"o que é, o que era",
		"e o que há de vir,",
		'o Todo-Poderoso."',
		"",
		"— Apocalipse 1:8",
	],
	[
		"mas quem é ele, afinal?",
		"",
		'"Porque Deus amou o mundo de tal maneira',
		"que deu o seu Filho unigênito,",
		"para que todo aquele que nele crê",
		'não pereça, mas tenha a vida eterna."',
		"",
		"— João 3:16",
	],
	[
		"e o que fazer com isso?",
		"",
		'"Se confessares com a tua boca',
		"que Jesus é Senhor,",
		"e creres no teu coração",
		"que Deus o ressuscitou dos mortos,",
		'serás salvo."',
		"",
		"— Romanos 10:9",
	],
	[
		'"Eu sou o caminho, a verdade e a vida.',
		"Ninguém vem ao Pai",
		'senão por mim."',
		"",
		"— João 14:6",
	],
	[
		'"Eis que estou à porta e bato.',
		"Se alguém ouvir a minha voz",
		"e abrir a porta,",
		"entrarei em sua casa",
		"e cearei com ele,",
		'e ele comigo."',
		"",
		"— Apocalipse 3:20",
	],
	[
		"// fim da transmissão",
		"",
		"se algo aqui tocou você,",
		"não foi coincidência.",
		"",
		"ele está batendo à sua porta agora.",
		"",
	],
];

type Phase = "idle" | "revealing" | "waiting" | "finished";

const phase = ref<Phase>("idle");
const codeProgress = ref(0);
const slideIndex = ref(0);
const visibleLines = ref<string[]>([]);

let revealTimer: ReturnType<typeof setTimeout> | null = null;

function handleKey(e: KeyboardEvent) {
	if (phase.value === "finished") return;

	if (phase.value === "idle") {
		const expected = SECRET_CODE[codeProgress.value];
		if (e.key === expected) {
			codeProgress.value++;
			if (codeProgress.value === SECRET_CODE.length) {
				phase.value = "revealing";
				revealSlide(0);
			}
		} else {
			codeProgress.value = 0;
			if (e.key === SECRET_CODE[0]) codeProgress.value = 1;
		}
		return;
	}

	if (phase.value === "waiting" && e.key === " ") {
		e.preventDefault();
		const next = slideIndex.value + 1;
		if (next >= slides.length) {
			phase.value = "finished";
		} else {
			slideIndex.value = next;
			visibleLines.value = [];
			phase.value = "revealing";
			revealSlide(next);
		}
	}
}

function revealSlide(index: number) {
	const lines = slides[index];
	let i = 0;
	function next() {
		if (i < lines.length) {
			visibleLines.value.push(lines[i]);
			i++;
			revealTimer = setTimeout(next, 160);
		} else {
			phase.value = "waiting";
		}
	}
	next();
}

const isLastSlide = computed(() => slideIndex.value === slides.length - 1);

onMounted(() => window.addEventListener("keydown", handleKey));
onUnmounted(() => {
	window.removeEventListener("keydown", handleKey);
	if (revealTimer) clearTimeout(revealTimer);
});
</script>

<template>
	<div
		class="fixed inset-0 flex flex-col items-center justify-center select-none px-6"
	>
		<!-- idle state -->
		<Transition name="fade">
			<div
				v-if="phase === 'idle'"
				class="flex flex-col items-center gap-10 text-center"
			>
				<div class="relative flex items-center justify-center">
					<span class="text-7xl font-serif text-amber-100/10 tracking-widest"
						>Α</span
					>
					<span
						class="mx-6 text-amber-50/5 text-xs tracking-[0.5em] uppercase font-mono"
						>∴</span
					>
					<span class="text-7xl font-serif text-amber-100/10 tracking-widest"
						>Ω</span
					>
				</div>
				<p
					class="text-xs text-amber-50/15 tracking-[0.3em] uppercase font-mono"
				>
					o início e o fim
				</p>
				<p class="text-xs text-amber-50/10 tracking-widest font-mono mt-2">
					ele tem um nome.
				</p>
			</div>
		</Transition>

		<!-- code progress dots -->
		<Transition name="fade">
			<div
				v-if="phase === 'idle' && codeProgress > 0"
				class="absolute bottom-10 flex gap-1.5"
			>
				<span
					v-for="(_, i) in SECRET_CODE"
					:key="i"
					:class="[
						'w-1.5 h-1.5 rounded-full transition-all duration-200',
						i < codeProgress ? 'bg-amber-300' : 'bg-amber-50/20',
					]"
				/>
			</div>
		</Transition>

		<!-- slide content -->
		<Transition name="fade">
			<div
				v-if="
					phase === 'revealing' || phase === 'waiting' || phase === 'finished'
				"
				class="font-mono text-sm text-amber-100/90 max-w-md w-full"
			>
				<TransitionGroup name="line" tag="div" class="flex flex-col gap-0.5">
					<p
						v-for="(line, i) in visibleLines"
						:key="`${slideIndex}-${i}`"
						:class="[
							'whitespace-pre-wrap',
							line.startsWith('//') ? 'text-amber-300' : '',
							line.startsWith('—') ? 'text-amber-100/40 italic mt-4' : '',
							line.startsWith('—') && line.includes('gmaxgb')
								? 'text-amber-100/30'
								: '',
							line === '' ? 'h-3' : '',
						]"
					>
						{{ line }}
					</p>
				</TransitionGroup>

				<!-- blinking cursor while revealing -->
				<span
					v-if="phase === 'revealing'"
					class="inline-block w-2 h-4 bg-amber-300/60 animate-pulse mt-1"
				/>

				<!-- continue prompt -->
				<Transition name="fade">
					<p
						v-if="phase === 'waiting' && !isLastSlide"
						class="mt-8 text-xs text-amber-50/20 tracking-widest animate-pulse"
					>
						[ espaço para continuar ]
					</p>
				</Transition>

				<!-- final prompt on last slide before finishing -->
				<Transition name="fade">
					<p
						v-if="phase === 'waiting' && isLastSlide"
						class="mt-8 text-xs text-amber-50/25 tracking-widest animate-pulse"
					>
						[ espaço ]
					</p>
				</Transition>
			</div>
		</Transition>

		<!-- final state: slide counter fades out, only silence remains -->
		<Transition name="fade">
			<p
				v-if="phase === 'finished'"
				class="absolute bottom-10 text-xs text-amber-50/10 tracking-widest font-mono"
			>
				✝
			</p>
		</Transition>
	</div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.line-enter-active {
	transition: all 0.3s ease;
}
.line-enter-from {
	opacity: 0;
	transform: translateX(-8px);
}
</style>

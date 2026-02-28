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
	],
];

const installLogs = [
	"$ sudo install jesus-christ --global",
	"",
	"> connecting to kingdom.heaven...",
	"> authenticating via blood covenant... ✓",
	"> removing sin.exe............................... ✓",
	"> patching guilt.dll.............................. ✓",
	"> installing grace@∞.............................. ✓",
	"> installing mercy@∞.............................. ✓",
	"> installing purpose.pkg.......................... ✓",
	"> writing new_identity to /soul/core.............. ✓",
	"> scheduling eternal_life.cron.................... ✓",
	"",
	"installation complete.",
	"",
	"// reboot required.",
];

type Phase =
	| "idle"
	| "error"
	| "revealing"
	| "waiting"
	| "terminal"
	| "declined"
	| "installing"
	| "rebooted";

const declinedLines = ref<string[]>([]);

const phase = ref<Phase>("idle");
const typed = ref("");
const slideIndex = ref(0);
const visibleLines = ref<string[]>([]);
const installLines = ref<string[]>([]);

const SECRET_STR = SECRET_CODE.join("");

let revealTimer: ReturnType<typeof setTimeout> | null = null;
let errorTimer: ReturnType<typeof setTimeout> | null = null;
let installTimer: ReturnType<typeof setTimeout> | null = null;

function handleKey(e: KeyboardEvent) {
	if (phase.value === "rebooted" || phase.value === "error") return;

	if (phase.value === "idle") {
		if (e.key.length !== 1) return;
		typed.value += e.key;
		if (typed.value.length === SECRET_STR.length) {
			if (typed.value === SECRET_STR) {
				phase.value = "revealing";
				revealSlide(0);
			} else {
				phase.value = "error";
				errorTimer = setTimeout(() => {
					typed.value = "";
					phase.value = "idle";
				}, 1800);
			}
		}
		return;
	}

	if (phase.value === "waiting" && e.key === " ") {
		e.preventDefault();
		const next = slideIndex.value + 1;
		if (next >= slides.length) {
			phase.value = "terminal";
			startTerminalPrompt();
		} else {
			slideIndex.value = next;
			visibleLines.value = [];
			phase.value = "revealing";
			revealSlide(next);
		}
		return;
	}

	if (phase.value === "terminal") {
		if (e.key === "y" || e.key === "Y") {
			phase.value = "installing";
			runInstall();
		} else if (e.key === "n" || e.key === "N") {
			decline();
		}
		return;
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

const terminalLines = ref<string[]>([]);
const showPrompt = ref(false);

function startTerminalPrompt() {
	const intro = [
		"",
		"───────────────────────────────",
		"",
		"$ whoami",
		"> user: unknown",
		"> soul: searching",
		"",
		"$ ping jesus-christ",
		"> PONG. latency: 0ms. sempre disponível.",
		"",
		"você quer aceitar a conexão?",
	];
	let i = 0;
	function next() {
		if (i < intro.length) {
			terminalLines.value.push(intro[i]);
			i++;
			revealTimer = setTimeout(next, 120);
		} else {
			showPrompt.value = true;
		}
	}
	next();
}

let declineTimer: ReturnType<typeof setTimeout> | null = null;

function decline() {
	phase.value = "declined";
	declinedLines.value = [];
	showPrompt.value = false;
	const msgs = ["> n", "", "a porta continua aberta."];
	let i = 0;
	function next() {
		if (i < msgs.length) {
			declinedLines.value.push(msgs[i]);
			i++;
			declineTimer = setTimeout(next, 200);
		} else {
			declineTimer = setTimeout(() => {
				declinedLines.value.push("", "...");
				declineTimer = setTimeout(() => {
					declinedLines.value = [];
					phase.value = "terminal";
					showPrompt.value = true;
				}, 1200);
			}, 2000);
		}
	}
	next();
}

function runInstall() {
	showPrompt.value = false;
	terminalLines.value.push("", "> y");
	let i = 0;
	function next() {
		if (i < installLogs.length) {
			installLines.value.push(installLogs[i]);
			i++;
			const delay = installLogs[i - 1]?.includes("...") ? 280 : 100;
			installTimer = setTimeout(next, delay);
		} else {
			setTimeout(() => {
				phase.value = "rebooted";
			}, 1200);
		}
	}
	setTimeout(next, 400);
}

const isLastSlide = computed(() => slideIndex.value === slides.length - 1);

onMounted(() => window.addEventListener("keydown", handleKey));
onUnmounted(() => {
	window.removeEventListener("keydown", handleKey);
	if (revealTimer) clearTimeout(revealTimer);
	if (errorTimer) clearTimeout(errorTimer);
	if (installTimer) clearTimeout(installTimer);
	if (declineTimer) clearTimeout(declineTimer);
});
</script>

<template>
	<div class="fixed inset-0 overflow-y-auto select-none">
		<div
			class="min-h-full flex flex-col items-center justify-center px-6 py-16"
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
					<p class="text-xs text-amber-50/20 tracking-widest font-mono mt-2">
						ele tem um nome.
					</p>
				</div>
			</Transition>

			<!-- live typed input -->
			<Transition name="fade">
				<div
					v-if="phase === 'idle' && typed.length > 0"
					class="absolute bottom-10 flex flex-col items-center gap-3"
				>
					<p class="font-mono text-sm text-amber-100/50 tracking-widest">
						{{ typed }}<span class="animate-pulse">_</span>
					</p>
					<div class="flex gap-1.5">
						<span
							v-for="(_, i) in SECRET_CODE"
							:key="i"
							:class="[
								'w-1.5 h-1.5 rounded-full transition-all duration-200',
								i < typed.length ? 'bg-amber-300/60' : 'bg-amber-50/10',
							]"
						/>
					</div>
				</div>
			</Transition>

			<!-- error state -->
			<Transition name="fade">
				<div
					v-if="phase === 'error'"
					class="absolute bottom-10 flex flex-col items-center gap-3"
				>
					<p class="font-mono text-sm text-red-400/80 tracking-widest">
						{{ typed }}
					</p>
					<p
						class="font-mono text-xs text-red-500/50 tracking-[0.2em] uppercase"
					>
						// acesso negado
					</p>
				</div>
			</Transition>

			<!-- slides -->
			<Transition name="fade">
				<div
					v-if="phase === 'revealing' || phase === 'waiting'"
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
								line === '' ? 'h-3' : '',
							]"
						>
							{{ line }}
						</p>
					</TransitionGroup>

					<span
						v-if="phase === 'revealing'"
						class="inline-block w-2 h-4 bg-amber-300/60 animate-pulse mt-1"
					/>

					<p
						v-if="phase === 'waiting' && !isLastSlide"
						class="mt-8 text-xs text-amber-50/20 tracking-widest animate-pulse"
					>
						[ espaço para continuar ]
					</p>
					<p
						v-if="phase === 'waiting' && isLastSlide"
						class="mt-8 text-xs text-amber-50/20 tracking-widest animate-pulse"
					>
						[ espaço ]
					</p>
				</div>
			</Transition>

			<!-- terminal + install -->
			<Transition name="fade">
				<div
					v-if="
						phase === 'terminal' ||
						phase === 'installing' ||
						phase === 'declined' ||
						phase === 'rebooted'
					"
					class="font-mono text-sm text-amber-100/80 max-w-md w-full"
				>
					<!-- slide final lines still visible -->
					<div class="flex flex-col gap-0.5 mb-0">
						<p
							v-for="(line, i) in visibleLines"
							:key="`final-${i}`"
							:class="[
								'whitespace-pre-wrap',
								line.startsWith('//') ? 'text-amber-300' : '',
								line.startsWith('—') ? 'text-amber-100/40 italic mt-4' : '',
								line === '' ? 'h-3' : '',
							]"
						>
							{{ line }}
						</p>
					</div>

					<!-- terminal intro lines -->
					<TransitionGroup name="line" tag="div" class="flex flex-col gap-0.5">
						<p
							v-for="(line, i) in terminalLines"
							:key="`term-${i}`"
							:class="[
								'whitespace-pre-wrap',
								line.startsWith('$') ? 'text-amber-300 mt-2' : '',
								line.startsWith('>') ? 'text-amber-100/60' : '',
								line.startsWith('─') ? 'text-amber-50/10' : '',
								line === '' ? 'h-2' : '',
							]"
						>
							{{ line }}
						</p>
					</TransitionGroup>

					<!-- Y/N prompt -->
					<Transition name="fade">
						<p
							v-if="showPrompt && phase === 'terminal'"
							class="mt-4 text-amber-300 animate-pulse tracking-widest"
						>
							[Y/N]<span class="ml-2 text-amber-100/30">_</span>
						</p>
					</Transition>

					<!-- install logs -->
					<TransitionGroup
						name="line"
						tag="div"
						class="flex flex-col gap-0.5 mt-2"
					>
						<p
							v-for="(line, i) in installLines"
							:key="`install-${i}`"
							:class="[
								'whitespace-pre-wrap text-xs',
								line.startsWith('$') ? 'text-amber-300 text-sm mt-2' : '',
								line.includes('✓')
									? 'text-emerald-400/70'
									: 'text-amber-100/50',
								line.startsWith('>') && !line.includes('✓')
									? 'text-amber-100/40'
									: '',
								line === 'installation complete.'
									? 'text-emerald-300 text-sm mt-2'
									: '',
								line.startsWith('//') ? 'text-amber-300 text-sm' : '',
								line === '' ? 'h-2' : '',
							]"
						>
							{{ line }}
						</p>
					</TransitionGroup>

					<!-- rebooted message -->
					<Transition name="fade">
						<div v-if="phase === 'rebooted'" class="mt-8 flex flex-col gap-3">
							<p
								class="font-mono text-xs text-emerald-400/40 tracking-[0.4em] uppercase"
							>
								system rebooted
							</p>
							<p class="text-4xl text-amber-50/15 font-serif mt-2">✝</p>
							<p
								class="font-mono text-xs text-amber-50/20 tracking-widest mt-1"
							>
								bem-vindo à nova criação.
							</p>
							<p class="font-mono text-xs text-amber-50/15 tracking-widest">
								— 2 Coríntios 5:17
							</p>
						</div>
					</Transition>

					<!-- declined -->
					<TransitionGroup
						name="line"
						tag="div"
						class="flex flex-col gap-0.5 mt-4"
					>
						<p
							v-for="(line, i) in declinedLines"
							:key="`declined-${i}`"
							:class="[
								'whitespace-pre-wrap text-xs',
								line.startsWith('>') ? 'text-amber-100/30' : '',
								line === '...' ? 'text-amber-50/15 tracking-widest' : '',
								line === 'a porta continua aberta.'
									? 'text-amber-50/25 tracking-widest mt-1'
									: '',
								line === '' ? 'h-2' : '',
							]"
						>
							{{ line }}
						</p>
					</TransitionGroup>
				</div>
			</Transition>
		</div>
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

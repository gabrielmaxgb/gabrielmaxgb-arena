<script setup lang="ts">
import p4nLogo from "~/public/p4n-logo.svg";

const badgeItems: { label: string; iconRef?: string }[] = [
	{
		label: "6+ years coding",
	},
	{
		label: "Lead Dev in 2 teams",
	},
	{
		label: "Author of ******",
	},
	{
		label: "Founder/Creator of Pros4Noobs",
		iconRef: p4nLogo,
	},
];

const myJourney = [
	{
		period: "Jul 2023 - Present",
		title: "Frontend Engineer Lead @Selby Lane Digital",
		description:
			"Led the front-end team, scaled the platform from scratch, implemented a reusable component library (NPM), and improved workflows. Stack: Vue.js, TypeScript, TailwindCSS, Pinia, TanStack Query.",
	},
	{
		period: "Feb 2023 - Sep 2023",
		title: "Contract Full Stack Engineer @PrimeUp",
		description:
			"Built features and fixed production issues using React.js and Node.js. Refactored backend endpoints and collaborated with PMs/designers.",
	},
	{
		period: "Oct 2022 - Feb 2023",
		title: "Contract Frontend Engineer @Pride Innovations",
		description:
			"Delivered highly interactive UIs using React.js. Collaborated with QA and design teams, optimized rendering, and supported sprints.",
	},
	{
		period: "May 2022 - Aug 2022",
		title: "Contract Frontend Engineer @Webera",
		description:
			"Integrated front-end modules into microservices architecture. Developed scalable UI using React and Next.js.",
	},
	{
		period: "Mar 2022 - May 2022",
		title: "Frontend Engineer @Novatics",
		description:
			"Contributed to enterprise front-end solutions in React.js within cross-functional teams, with agile methodologies.",
	},
	{
		period: "Dec 2021 - May 2022",
		title: "Frontend Developer @Sambatech",
		description:
			"Implemented product features, resolved UI bugs, and supported UX improvements and onboarding.",
	},
	{
		period: "Jan 2021 - Dec 2021",
		title: "Frontend Developer @Fan Projects",
		description:
			"Worked on UI enhancements, feature delivery and pair programming. Contributed to product development under senior mentorship.",
	},
	{
		period: "May 2019 - May 2021",
		title: "Frontend Developer Intern @Caixa Econômica Federal",
		description:
			"Built Angular components for internal systems and modernized legacy structures through incremental improvements.",
	},
];
</script>

<template>
	<MainContainer>
		<MainSection class="flex flex-col gap-5">
			<!--     -->
			<p class="">
				Hey, I’m Gabriel Max — a software engineer driven by the joy of creating
				thoughtful, user-centered experiences. I specialize in front-end
				development and love transforming complexity into simplicity through
				intuitive, beautiful interfaces.
			</p>
			<p>
				Most of my work revolves around building tools and platforms that
				empower others — especially beginners in tech. I’m the creator of
				<a
					href="https://pros4noobs.com"
					class="text-primary font-semibold cursor-pointer"
					target="_blank"
					>Pros4Noobs</a
				>, a free mentoring platform where I help newcomers grow with guidance,
				clarity, and purpose.
			</p>
			<p>
				Beyond code, I enjoy jamming on the drums, skating with friends, lifting
				weights with my wife, and diving into all things nerdy — from games to
				books to random rabbit holes of curiosity.
			</p>
			<p>
				Sometimes, I write about what I learn, thinking out loud
				<NuxtLink to="/blog" class="font-semibold cursor-pointer text-amber-100"
					>here</NuxtLink
				>
			</p>
			<p class="">
				Let’s connect and explore how we can build something remarkable
				together.
			</p>
			<p>
				<UIcon name="ion:location-outline" class="inline text-amber-100/80" />
				I’m currently based in
				<a
					target="_blank"
					href="https://www.google.com/maps/place/Bras%C3%ADlia+-+DF/@-15.7756577,-48.1267645,137253m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935a3d18e45b91a3:0x24e8d3620bd85d7f!8m2!3d-15.7975174!4d-47.8918881!16s%2Fg%2F1ypvssh2c?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
					class="font-semibold cursor-pointer text-amber-100"
					>Brasília, Brazil</a
				>
				— if you're nearby or just wanna chat about faith, code, or life, let’s
				grab a coffee (virtual or not). Always up for good conversations and
				cool ideas.
			</p>
			<p class="flex items-center gap-2">
				<UIcon name="ion:mail-outline" class="inline text-amber-100/80" />
				<span class="font-semibold italic text-amber-100"
					>gmaxgomes@gmail.com</span
				>
			</p>
			<div class="flex flex-col gap-1">
				<div
					v-for="(item, index) in badgeItems"
					:key="index"
					class="flex gap-2"
				>
					<UBadge
						variant="soft"
						class="w-fit text-xs bg-amber-100/10 text-amber-100 h-fit"
						size="sm"
					>
						{{ item.label }}
					</UBadge>
					<img
						v-if="item.iconRef"
						:src="item.iconRef"
						alt="Gabriel Max Gomes"
						class="w-6 h-6 rounded-full object-cover"
					/>
				</div>
			</div>
		</MainSection>
		<MainSection title="Purpose">
			<p class="">
				I believe sharing knowledge is a responsibility. That’s why I offer free
				mentorship through
				<a
					href="https://pros4noobs.com"
					class="text-primary font-semibold cursor-pointer"
					target="_blank"
					>Pros4Noobs</a
				>
				— helping beginners navigate the tech world with clarity, kindness, and
				purpose.
			</p>
		</MainSection>
		<MainSection title="I'm currently pushing to">
			<div class="flex flex-col gap-2">
				<span>
					-
					<a
						href="https://selbylane.com/"
						class="font-semibold cursor-pointer text-amber-100"
						target="_blank"
						>Selby Lane Digital</a
					>
				</span>
				<span>
					-
					<a
						href=""
						class="opacity-30 font-semibold cursor-not-allowed text-amber-100"
						target="_blank"
						>Wizhats</a
					>
				</span>
			</div>
		</MainSection>

		<MainSection title="My journey so far">
			<div class="flex flex-col gap-5">
				<p class="">
					I started my career in 2019, and since then, I’ve worked with various
					technologies and companies, always focusing on front-end development.
					From Angular to React, Vue.js to TypeScript, I’ve built a solid
					foundation in creating user-friendly interfaces and scalable
					applications.
				</p>
				<p class="">
					My journey has taken me through different roles, from intern to lead
					developer, allowing me to grow my skills and contribute to meaningful
					projects. I’m passionate about mentoring others and sharing what I’ve
					learned along the way.
				</p>
				<p class="">
					You can find more about my professional journey on my
					<a
						href="https://www.linkedin.com/in/gabrielmaxgb/"
						class="text-amber-100 font-semibold cursor-pointer"
						target="_blank"
						>LinkedIn</a
					>
					profile.
				</p>
			</div>

			<h2 class="mt-12">Brief summary:</h2>

			<section class="w-full flex flex-col gap-16 mt-8">
				<div
					v-for="(item, index) in myJourney"
					:key="index"
					class="w-full pt-8"
				>
					<div
						class="w-full flex justify-end items-center opacity-30 text-2xl md:text-5xl font-script"
					>
						{{ item.period }}
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
								{{ item.title }}
							</h3>
							<p class="">
								{{ item.description }}
							</p>
						</div>
					</div>
				</div>
			</section>
		</MainSection>

		<!-- <MainSection>
			<p class="">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente velit
				dolores distinctio asperiores nihil tenetur ipsum sequi, repellendus
				molestiae hic, reprehenderit quibusdam unde rerum in ea nobis quidem
				esse neque?
			</p>
		</MainSection>
		<MainSection>
			<p class="">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente velit
				dolores distinctio asperiores nihil tenetur ipsum sequi, repellendus
				molestiae hic, reprehenderit quibusdam unde rerum in ea nobis quidem
				esse neque?
			</p>
		</MainSection>
		<MainSection>
			<p class="">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente velit
				dolores distinctio asperiores nihil tenetur ipsum sequi, repellendus
				molestiae hic, reprehenderit quibusdam unde rerum in ea nobis quidem
				esse neque?
			</p>
		</MainSection>
		<MainSection>
			<p class="">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente velit
				dolores distinctio asperiores nihil tenetur ipsum sequi, repellendus
				molestiae hic, reprehenderit quibusdam unde rerum in ea nobis quidem
				esse neque?
			</p>
		</MainSection>
		<MainSection>
			<p class="">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente velit
				dolores distinctio asperiores nihil tenetur ipsum sequi, repellendus
				molestiae hic, reprehenderit quibusdam unde rerum in ea nobis quidem
				esse neque?
			</p>
		</MainSection>
		<MainSection>
			<p class="">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente velit
				dolores distinctio asperiores nihil tenetur ipsum sequi, repellendus
				molestiae hic, reprehenderit quibusdam unde rerum in ea nobis quidem
				esse neque?
			</p>
		</MainSection>
		<MainSection>
			<p class="">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente velit
				dolores distinctio asperiores nihil tenetur ipsum sequi, repellendus
				molestiae hic, reprehenderit quibusdam unde rerum in ea nobis quidem
				esse neque?
			</p>
		</MainSection>
		<MainSection>
			<p class="">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente velit
				dolores distinctio asperiores nihil tenetur ipsum sequi, repellendus
				molestiae hic, reprehenderit quibusdam unde rerum in ea nobis quidem
				esse neque?
			</p>
		</MainSection> -->
	</MainContainer>
</template>

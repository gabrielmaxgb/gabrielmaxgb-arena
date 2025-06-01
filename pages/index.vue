<script setup lang="ts">
const badgeItems = [
	"6+ years coding",
	"Lead Dev in 2 teams",
	"Author of ******",
	"Founder/Creator of Pros4Noobs",
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
				<NuxtLink to="/blog" class="font-semibold cursor-pointer"
					>here</NuxtLink
				>
			</p>
			<p class="">
				Let’s connect and explore how we can build something remarkable
				together.
			</p>
			<p>
				I’m currently based in
				<a
					target="_blank"
					href="https://www.google.com/maps/place/Bras%C3%ADlia+-+DF/@-15.7756577,-48.1267645,137253m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935a3d18e45b91a3:0x24e8d3620bd85d7f!8m2!3d-15.7975174!4d-47.8918881!16s%2Fg%2F1ypvssh2c?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
					class="font-semibold cursor-pointer"
					>Brasília, Brazil</a
				>
				— if you're nearby or just wanna chat about faith, code, or life, let’s
				grab a coffee (virtual or not). Always up for good conversations and
				cool ideas.
			</p>
			<p>
				You can reach out to me through my best email
				<span class="font-semibold italic">gmaxgomes@gmail.com</span>
			</p>
			<div class="flex flex-col gap-2">
				<UBadge
					v-for="(item, index) in badgeItems"
					:key="index"
					:label="item"
					variant="soft"
					class="w-fit text-xs bg-amber-100/10 text-amber-100"
					size="sm"
				/>
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
						href="https://pros4noobs.com"
						class="font-semibold cursor-pointer"
						target="_blank"
						>Selby Lane Digital</a
					>
				</span>
				<span>
					-
					<a
						href=""
						class="opacity-30 font-semibold cursor-not-allowed"
						target="_blank"
						>Wizhats</a
					>
				</span>
			</div>
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
		</MainSection>
		<MainSection>
			<p class="">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente velit
				dolores distinctio asperiores nihil tenetur ipsum sequi, repellendus
				molestiae hic, reprehenderit quibusdam unde rerum in ea nobis quidem
				esse neque?
			</p>
		</MainSection>
	</MainContainer>
</template>

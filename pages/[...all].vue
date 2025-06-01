<template>
	<MainContainer class="pt-28">
		<MainSection class="flex flex-col items-center justify-center gap-4">
			<UIcon name="ic:twotone-wrong-location" class="text-amber-50 text-5xl" />
			<span class="">Nothing here</span>
			<span class="text-amber-100/80">
				<NuxtLink to="/" class="text-amber-100">
					<UButton
						variant="soft"
						class="bg-amber-100/10 text-amber-50 cursor-pointer hover:bg-amber-100/20 trans"
						:ui="{
							base: 'bg-amber-100/10 text-amber-50 cursor-pointer',
						}"
					>
						Home Page
					</UButton>
				</NuxtLink>
			</span>
		</MainSection>
	</MainContainer>
</template>

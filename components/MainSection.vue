<template>
	<section
		class="relative flex items-center justify-center z-10 max-w-[100vw] min-w-[100vw] w-full text-amber-50"
		:class="$attrs.class"
	>
		<div class="w-11/12 md:w-5/12 px-2">
			<slot />
		</div>
	</section>
</template>

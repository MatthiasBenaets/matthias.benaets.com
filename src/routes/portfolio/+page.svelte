<script lang="ts">
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Seo from '../seo.svelte';
	import Gallery from './gallery.svelte';
</script>

<Seo
	title="Portfolio"
	description="Portfolio Matthias Benaets"
	keywords="Portfolio Images Photo Foto Matthias Benaets"
	canonical="https://benaets.com/portfolio"
	author="Matthias Benaets"
	name="Matthias Benaets"
/>

<div class="flex flex-col items-center justify-center mb-10">
	<div transition:scale={{ duration: 1200, easing: quintOut }} class="flex uppercase mt-14 mb-5">
		<h1
			class="cursor-default text-4xl text-[#111111] font-extrabold stroke stroke-neutral-100 sm:text-5xl md:text-7xl transition-all duration-200 ease-in-out"
		>
			Portfolio
		</h1>
	</div>
</div>

<Gallery />

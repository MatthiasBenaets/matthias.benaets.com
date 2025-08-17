<script lang="ts">
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Seo from '../seo.svelte';
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

<svelte:head>
	<script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
</svelte:head>
<a
	data-flickr-embed="true"
	data-header="false"
	data-footer="false"
	href="https://www.flickr.com/photos/benaets/albums/72157720201914534"
	title="Wildlife"
>
	<img
		src="https://live.staticflickr.com/65535/51722993255_1438c27658_c.jpg"
		width="800"
		height="600"
		alt="Wildlife"
	/>
</a>

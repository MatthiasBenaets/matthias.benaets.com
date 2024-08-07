<script lang="ts">
	import Seo from '../seo.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { backOut, quintOut } from 'svelte/easing';
	import { skills } from '$lib/data/skills';

	let ready = $state(false);

	$effect(() => {
		ready = true;
	});
</script>

<Seo
	title="About"
	description="About Matthias Benaets"
	keywords="About Over Matthias Benaets"
	canonical="https://benaets.com/about"
	author="Matthias Benaets"
	name="Matthias Benaets"
/>

{#if ready}
	<div class="sm:w-[640px] mx-auto px-5 sm:px-0">
		<div class="flex flex-col items-center justify-center mb-10">
			<div
				transition:scale={{ duration: 1200, easing: quintOut }}
				class="flex uppercase mt-14 mb-5"
			>
				<h1
					class="cursor-default text-4xl text-[#111111] font-extrabold stroke stroke-neutral-100 sm:text-5xl md:text-7xl transition-all duration-200 ease-in-out"
				>
					About
				</h1>
				&nbsp&nbsp
				<h1
					class="cursor-default text-4xl font-extrabold text-neutral-100 hover:text-purple-400 sm:text-5xl md:text-7xl transition-all duration-200 ease-in-out"
				>
					Me
				</h1>
			</div>
		</div>

		<div class="text-neutral-100">
			<img
				in:fly={{ y: -50, duration: 300, delay: 800, easing: backOut }}
				class="float-right h-36 rounded-2xl active:pointer-events-none hover:rounded-xl pointer-events-none"
				src="avatar.webp"
				alt="Matthias Benaets"
				style="aspect-ratio: 1/1"
			/>
			<p class="mb-2" in:fly={{ y: 30, duration: 300, delay: 400, easing: backOut }}>
				My name is Matthias Benaets, I currently reside in <a
					href="https://www.google.com/maps/place/3570+Alken/@50.8820253,5.2970649,13z/data=!3m1!4b1!4m6!3m5!1s0x47c118c17acd03cf:0xba0a56b07a363d7f!8m2!3d50.8891784!4d5.306758!16zL20vMDE3bl9n?entry=ttu"
					target="_blank">Alken, Limburg, Belgium</a
				>.
			</p>
			<p class="mb-2" in:fly={{ y: 30, duration: 300, delay: 500, easing: backOut }}>
				I’m a certified Secondary Education Teacher specialised in IT/Computer Science, the English
				language and ICT-Coordination.<br />
				Currently I work as an ICT Officer at
				<a href="https://www.uhasselt.be/en" target="_blank">University Hasselt</a>.
			</p>
			<p class="mb-2" in:fly={{ y: 30, duration: 300, delay: 600, easing: backOut }}>
				I’m an avid cyclist, love the outdoors and enjoy wildlife photography. You can follow my
				adventures on <a href="https://www.strava.com/athletes/14868815" target="_blank">Strava</a>
				and view some of my images on
				<a href="https://www.flickr.com/photos/142503919@N05/" target="_blank">Flickr</a>.<br />
				At home I like to tinker with my homelab, self-hosting, open-source projects and containerisation.
			</p>
		</div>

		<div class="my-10" transition:fade={{ duration: 800, delay: 1200 }}>
			<svg
				class="-mt-3 -mb-5 text-neutral-400 opacity-5"
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path
					d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
				/>
				<path
					d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
				/>
			</svg>
			<p class="flex flex-col italic text-neutral-400">
				If I have to describe myself in a couple words:<br />
				<span class="text-sm pl-5"> enthusiastic • teamplayer • creative • pragmatic </span>
				<span class="text-sm pl-5"> deliberate • independent • meticulous • positive </span>
			</p>
		</div>

		<div
			class="text-neutral-100 mb-10"
			in:fly={{ y: 30, duration: 300, delay: 800, easing: backOut }}
		>
			<h2
				class="mb-5 text-2xl font-medium text-neutral-100"
				transition:fade={{ duration: 500, delay: 500 }}
			>
				Skills
			</h2>
			<p class="text-neutral-100">
				Much of my professional background centers around teaching and didactical IT. However, I
				possess a diverse skill set that extends beyond my work into my personal projects.<br />
				Below is a list of tools and technologies that I am proficient in, and that I use on a daily
				basis in both my personal life and profession:
			</p>
		</div>

		<div class="text-neutral-100" transition:fade={{ duration: 800, delay: 1000, easing: backOut }}>
			<div class="flex">
				<div
					class="w-0 sm:w-1/12 flex items-center justify-center border-r-2 border-neutral-100 opacity-0 sm:opacity-100"
				>
					<p class="rotate-[270deg] tracking-[1rem] text-xl text-neutral-100">Experience</p>
				</div>
				<div class="sm:w-11/12">
					{#each skills as _, index}
						{#if index % 3 === 0}
							<div class="flex flex-col sm:flex-row text-neutral-100 text-sm sm:my-5">
								{#each skills.slice(index, index + 3) as { category, field }}
									<div class="w-[33%] sm:mx-auto flex flex-col my-5 sm:my-0 sm:ml-5">
										<h3 class="text-xl text-neutral-100">
											{category}
										</h3>
										{#each field as _, index}
											<span>{@html field[index]}</span>
										{/each}
									</div>
								{/each}
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	a {
		text-decoration: underline;
	}
	a:hover {
		color: rgb(192 132 252);
	}
</style>

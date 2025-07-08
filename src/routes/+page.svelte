<script lang="ts">
	import Seo from './seo.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { backOut, quintOut } from 'svelte/easing';

	let ready = $state(false);
	let mail = $state(false);
	let copy = $state(false);

	const d = new Date();
	const options: Intl.DateTimeFormatOptions = {
		timeZone: 'Europe/Brussels',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	};
	const dateTime = d.toLocaleDateString('ja-JP', options);
	const [date, time] = dateTime.split(' ');
	const formattedTime = `${time} - ${date}`;

	const em = 'bWF0dGhpYXNAYmVuYWV0cy5jb20=';

	function copyToClipboard() {
		navigator.clipboard.writeText(atob(em));
		copy = true;
	}

	$effect(() => {
		ready = true;
	});
</script>

<Seo
	description="Hi 👋, I’m Matthias"
	keywords="Matthias Benaets"
	canonical="https://benaets.com"
	author="Matthias Benaets"
	name="Matthias Benaets"
/>

{#if ready}
	<div class="flex flex-col items-center justify-center">
		<div class="m-5">
			<img
				in:fly={{ y: 50, duration: 300, delay: 500, easing: backOut }}
				out:fade
				class="h-36 rounded-full active:pointer-events-none hover:rounded-xl pointer-events-none"
				style="aspect-ratio: 1/1;"
				src="avatar.webp"
				alt="Matthias Benaets"
			/>
		</div>
		<div in:fly={{ y: -50, duration: 300, delay: 700, easing: backOut }} out:fade class="flex">
			<svg
				class="mr-2 text-neutral-100"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle
					cx="12"
					cy="10"
					r="3"
				/></svg
			>
			<span class="cursor-default text-xs text-neutral-400">
				Alken, BE &nbsp | &nbsp{formattedTime}
			</span>
		</div>
		<div
			transition:scale={{ duration: 1200, easing: quintOut }}
			class="flex flex-col sm:flex-row items-center justify-center uppercase mt-14 mb-5"
		>
			<h1
				class="cursor-default text-4xl text-[#111111] font-extrabold stroke stroke-neutral-100 sm:text-5xl md:text-7xl transition-all duration-200 ease-in-out"
			>
				Matthias
			</h1>
			<span class="hidden sm:inline-block"> &nbsp&nbsp </span>
			<h1
				class="cursor-default text-4xl font-extrabold text-neutral-100 hover:text-purple-400 sm:text-5xl md:text-7xl transition-all duration-200 ease-in-out"
			>
				Benaets
			</h1>
		</div>
		<div class="mb-14 text-neutral-500 text-2xl">
			<span>Didactic IT - Teacher<span> </span></span>
		</div>
	</div>

	<ul class="max-w-screen-sm flex mx-auto text-neutral-100">
		<li
			in:fly={{ x: -30, duration: 300, delay: 900, easing: backOut }}
			class="mx-auto hover:text-purple-400"
		>
			<button onclick={() => (mail = true)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-mail"
				>
					<rect width="20" height="16" x="2" y="4" rx="2" />
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
				</svg>
				<span class="text-neutral-400">Mail</span>
			</button>
		</li>
		<li
			in:fly={{ x: -30, duration: 300, delay: 1000, easing: backOut }}
			class="mx-auto hover:text-purple-400"
		>
			<a href="https://linkedin.com/in/matthias-benaets" target="_blank">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-linkedin"
				>
					<path
						d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
					/>
					<rect width="4" height="12" x="2" y="9" />
					<circle cx="4" cy="4" r="2" />
				</svg>
				<span class="text-neutral-400">LinkedIn</span>
			</a>
		</li>
		<li
			in:fly={{ x: -30, duration: 300, delay: 1100, easing: backOut }}
			class="mx-auto hover:text-purple-400"
		>
			<a href="https://github.com/MatthiasBenaets" target="_blank">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-github"
				>
					<path
						d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
					/>
					<path d="M9 18c-4.51 2-5-2-7-2" />
				</svg>
				<span class="text-neutral-400">GitHub</span>
			</a>
		</li>
		<li
			in:fly={{ x: -30, duration: 300, delay: 1200, easing: backOut }}
			class="mx-auto hover:text-purple-400"
		>
			<a href="https://www.youtube.com/@matthiasbenaets" target="_blank">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-youtube"
				>
					<path
						d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
					/>
					<path d="m10 15 5-3-5-3z" />
				</svg>
				<span class="text-neutral-400">YouTube</span>
			</a>
		</li>
	</ul>

	<div class="flex items-center justify-center text-center mt-10 text-neutral-100 px-5 sm:px-0">
		<span in:fly={{ y: 30, duration: 300, delay: 1100, easing: backOut }}>
			Welcome 👋, I’m Matthias
			<span>
				<br /><br />
				<span in:fly={{ y: 30, duration: 300, delay: 1200, easing: backOut }}>
					I’m currenlty employed at University Hasselt as an ICT officer. My main goal is to
					didactically and technologically improve the courses, lectures and infrastructure for the
					Master program of Statistics and Data Science, DSI and CenStat.
					<span>
						<br /><br />
						<span in:fly={{ y: 30, duration: 300, delay: 1300, easing: backOut }}>
							I love tech and like to explore and learn about various open-source technologies and
							projects. This website will mainly be used to track my career, experience and as a
							personal knowledge base.
						</span>
					</span></span
				></span
			></span
		>
	</div>

	{#if mail}
		<div in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
			<div class="fixed inset-0 bg-black/90">
				<button
					onclick={() => (mail = false)}
					class="fixed top-5 right-5 text-white hover:text-purple-400"
					aria-label="Close"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
					>
				</button>
			</div>
			<div
				class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
			>
				<div class="flex flex-col items-center justify-center">
					<a href="mailto:{atob(em)}" target="_blank" class="text-white hover:text-purple-400 m-1">
						{atob(em)}
					</a>
					<button
						onclick={() => copyToClipboard()}
						class="bg-purple-400 rounded-sm text-black hover:bg-purple-500 px-2 py-1 duration-500 transition-colors ease-in-out m-1 min-w-20"
					>
						{#if !copy}
							Copy to clipboard
						{:else}
							Copied
						{/if}
					</button>
				</div>
			</div>
		</div>
	{/if}
{/if}

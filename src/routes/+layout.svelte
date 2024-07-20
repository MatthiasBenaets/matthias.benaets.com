<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import '../app.css';

	let { children, data } = $props();
	let isHomePage: boolean = $state(false);
	let ready: boolean = $state(false);

	$effect(() => {
		ready = true;
		isHomePage = $page.url.pathname === '/';
	});
</script>

<div class="min-w-[320px] h-screen" data-sveltekit-prefetch>
	{#if ready && isHomePage}
		<div in:fade={{ delay: 1500, duration: 500 }}>
			<Header />
		</div>
	{:else if ready}
		<Header />
	{/if}
	<main class="max-w-screen md:max-w-3xl mx-auto">
		{#key data.url}
			<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
				{@render children()}
			</div>
		{/key}
	</main>
	<Footer />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Sen&display=swap');
	:global(html) {
		font-family: 'Poppins', sans-serif;
	}

	:global(::-webkit-scrollbar) {
		width: 10px;
	}
	:global(::-webkit-scrollbar-track) {
		background: #f1f1f1;
	}
	:global(::-webkit-scrollbar-thumb) {
		background: #888;
	}
	:global(::-webkit-scrollbar-thumb:hover) {
		background: #555;
	}
</style>

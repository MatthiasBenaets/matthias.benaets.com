<script lang="ts">
	import { slide } from 'svelte/transition';

	let showMenu: boolean = $state(false);
	let innerWidth: number = $state(0);
	let isMobile: boolean = $state(false);

	function toggleNavbar() {
		showMenu = !showMenu;
	}

	$effect(() => {
		isMobile = innerWidth < 640;
	});
</script>

<svelte:window bind:innerWidth />

<div class="relative w-full">
	<button
		type="button"
		tabIndex="0"
		class="text-neutral-100 hover:text-gray-400 focus:outline-none sm:hidden absolute top-4 right-4"
		aria-label="Toggle navigation"
		onclick={toggleNavbar}
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
			stroke-linejoin="round"
		>
			<line x1="21" x2="3" y1="6" y2="6" />
			<line x1="21" x2="9" y1="12" y2="12" />
			<line x1="21" x2="7" y1="18" y2="18" />
		</svg>
	</button>
	<nav class="max-w-screen-xl p-4 mx-auto">
		{#if !isMobile || showMenu}
			<div
				class="flex-col mt-8 space-y-4 items-center justify-center sm:flex sm:flex-row sm:space-y-0 sm:space-x-10 sm:mt-0 text-xl bg-transparent"
				class:flex={showMenu || !isMobile}
				class:hidden={!showMenu && isMobile}
				transition:slide={{ duration: 300 }}
			>
				<a class="text-neutral-100 hover:text-purple-400" href="/" onclick={toggleNavbar}> Home </a>
				<a class="text-neutral-100 hover:text-purple-400" href="/about" onclick={toggleNavbar}>
					About
				</a>
				<a class="text-neutral-100 hover:text-purple-400" href="/cv" onclick={toggleNavbar}> CV </a>
				<a class="text-neutral-100 hover:text-purple-400" href="/portfolio" onclick={toggleNavbar}>
					Portfolio
				</a>
			</div>
		{/if}
	</nav>
</div>

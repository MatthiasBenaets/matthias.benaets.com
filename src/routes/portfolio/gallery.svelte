<script lang="ts">
	import { swipe, type SwipeCustomEvent } from 'svelte-gestures';
	import { fade } from 'svelte/transition';
	import type { Image } from '$lib/types';

	let images: Image[] = $state([]);
	let selectedImage: Image | null = $state(null);
	let selectedIndex: number = $state(-1);

	async function loadImages() {
		try {
			const imageContext = import.meta.glob('/static/img/*.(webp|png|jpg|jpeg|gif|svg)');
			const imagePromises = Object.entries(imageContext).map(async ([path]) => {
				const src = path.replace('/static', '');
				const alt = path.split('/').pop() || '';
				const img = new Image();
				img.src = src;
				return new Promise<Image | null>((resolve) => {
					img.onload = () => {
						resolve({
							src,
							alt,
							width: img.width,
							height: img.height
						});
					};
					img.onerror = () => {
						console.error(`Failed to load image: ${src}`);
						resolve(null);
					};
				});
			});
			const loadedImages = await Promise.all(imagePromises);
			return loadedImages
				.filter((img): img is Image => img !== null)
				.sort(() => Math.random() - 0.5);
		} catch (error) {
			console.error('Error loading images:', error);
			return [];
		}
	}

	function openImage(image: Image) {
		selectedImage = image;
		selectedIndex = images.findIndex((img) => img.src === image.src);
	}

	function closeImage() {
		selectedImage = null;
		selectedIndex = -1;
	}

	function navigateImages(direction: number) {
		if (selectedIndex === -1) return;
		let newIndex = (selectedIndex + direction + images.length) % images.length;
		selectedImage = images[newIndex];
		selectedIndex = newIndex;
	}

	function handleKeyboard(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeImage();
		} else if (event.key === 'ArrowLeft') {
			navigateImages(-1);
		} else if (event.key === 'ArrowRight') {
			navigateImages(1);
		}
	}

	function handleSwipe(event: SwipeCustomEvent) {
		if (event.detail.direction === 'left') {
			navigateImages(-1);
		} else if (event.detail.direction === 'right') {
			navigateImages(1);
		}
	}

	$effect(() => {
		loadImages().then((loadedImages) => {
			images = loadedImages;
		});

		window.addEventListener('keydown', handleKeyboard);
		return () => {
			window.removeEventListener('keydown', handleKeyboard);
		};
	});
</script>

<div class="grid grid-cols-2 gap-2 md:gap-4 p-4">
	{#each images as image (image.src)}
		<div
			class="relative cursor-pointer overflow-hidden"
			class:row-span-2={image.height > image.width}
			onclick={() => openImage(image)}
			onkeydown={(e) => e.key === 'Enter' && openImage(image)}
			role="button"
			tabindex="0"
		>
			<img
				src={image.src}
				alt={image.alt}
				class="w-full h-full object-cover rounded"
				in:fade={{ delay: Math.floor(Math.random() * 500) }}
			/>
		</div>
	{/each}
</div>

{#if selectedImage}
	<div
		class="fixed inset-0 h-screen bg-black bg-opacity-75 overflow-auto z-50"
		role="dialog"
		aria-modal="true"
		in:fade={{ duration: 500 }}
		out:fade={{ duration: 200 }}
		use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }}
		onswipe={handleSwipe}
	>
		<div class="flex items-center justify-center h-full p-4">
			<img
				src={selectedImage.src}
				alt={selectedImage.alt}
				class="max-w-full sm:pb-0 pointer-events-none max-h-[90%] object-contain"
			/>
			<button
				class="absolute left-[5%] sm:left-5 sm:top-1/2 sm:-translate-y-1/2 w-12 h-12 bg-trasparent text-white text-4xl border-none rounded-full outline-none hover:bg-black/60 transition-all duration-300 focus:outline-none"
				onclick={() => navigateImages(-1)}
			>
				&lt;
			</button>
			<button
				class="absolute right-[5%] sm:right-5 sm:top-1/2 sm:-translate-y-1/2 w-12 h-12 bg-transparent text-white text-4xl border-none rounded-full outline-none hover:bg-black/60 transition-all duration-300 focus:outline-none"
				onclick={() => navigateImages(1)}
			>
				&gt;
			</button>
			<button
				class="absolute right-5 top-5 w-10 h-10 text-white text-2xl border-none outline-none bg-transparent"
				onclick={() => closeImage()}
			>
				&#x2715;
			</button>
		</div>
	</div>
{/if}

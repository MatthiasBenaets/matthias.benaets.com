<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.status === 404}
	<div class="mt-56 flex flex-row items-center justify-center">
		<img class="h-40 sm:pr-10" src="/castle.svg" alt="castle" style="aspect-ratio: 1/1;" />
		<div>
			<h1 class="text-4xl text-neutral-100">
				{$page.status}
				{#if $page.error?.message}
					{$page.error.message}
				{/if}
			</h1>
			<p class="text-neutral-400">
				Thank you visitor! <br /> But our princess is in another castle
			</p>
		</div>
	</div>
{:else if $page.status === 500}
	<div class="mt-56 flex flex-row items-center justify-center">
		<img
			class="h-40 sm:pr-10"
			src="/dog.svg"
			alt="Dog ready to fix the problem"
			style="aspect-ratio: 1/1;"
		/>
		<div>
			<h1 class="pt-10 text-4xl text-neutral-100">
				{$page.status}
				{#if $page.error?.message}
					{$page.error.message}
				{/if}
			</h1>
			<p class="text-neutral-400">Whoops. That wasn't supposed to happen!</p>
		</div>
	</div>
{/if}

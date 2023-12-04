<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, scale, slide } from 'svelte/transition';
  import { backOut, quintOut } from 'svelte/easing';
  import * as config from "$lib/config";
  import { experience } from "$lib/data/experience";
  import { education } from "$lib/data/education";

  let ready = false;

  onMount(() => ready = true);

  function toggleVisible(index: number) {
     experience[index].visible = !experience[index].visible
  }
</script>

<svelte:head>
  <title>CV | {config.title}</title>
  <meta name="description" content="Curriculum Vitae | Matthias Benaets" />
  <meta property="og:description" content="Curriculum Vitae | Matthias Benaets" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="CV | {config.title}" />
</svelte:head>

{#if ready}
  <div class="flex flex-col items-center justify-center mb-10">
    <div transition:scale={{ duration: 1200, easing: quintOut }} class="flex uppercase mt-14 mb-5">
      <h1 class="cursor-default text-4xl text-[#111111] font-extrabold stroke stroke-neutral-100 sm:text-5xl md:text-7xl transition-all duration-200 ease-in-out">
        Curriculum
      </h1>
      &nbsp&nbsp
      <h1 class="cursor-default text-4xl font-extrabold text-neutral-100 hover:text-purple-400 sm:text-5xl md:text-7xl transition-all duration-200 ease-in-out">
        Vitae
      </h1>
    </div>
  </div>

  <div class="sm:w-[640px] mx-auto px-5 sm:px-0">
    <h2 class="mb-5 text-2xl font-medium text-neutral-100" transition:fade={{ duration: 500, delay: 300 }}>
      Career
    </h2>
    {#each experience as { period, name, company, link, tasks, visible}, index}
      <div class="flex flex-col sm:flex-row text-sm mb-10" in:fly|global={{ x: -30, duration: 300, delay: 400+(100*index), easing: backOut }}>
        <div class="w-3/12">
          <span class="text-neutral-400 text-[18px] tracking-wider mono">
            {period}
          </span>
        </div>
        <div class="flex flex-col w-9/12">
          <span class="text-neutral-100 text-[18px]">
            {name}
          </span>
          <a href={link} class="flex text-neutral-400 text-[14px] hover:text-purple-400" target="_blank">
            {company}
            &nbsp
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-1"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
          </a>
          <div class="pt-3">
            {#if visible}
              <div class="pb-4 text-neutral-400" transition:slide>
                {@html tasks}
              </div>
            {/if}
            {#if tasks}
            <button class="text-start text-neutral-400 hover:text-purple-400" on:click= {() => toggleVisible(index)}>
              {visible ? 'Show less' : 'Show more...'}
            </button>
            {/if}
          </div>
        </div>
      </div>
    {/each}
    <h2 class="mb-5 text-2xl font-medium text-neutral-100" transition:fade={{ duration: 500, delay: 500 }}>
      Education
    </h2>
    {#each education as { period, name, honor, school, link }, index}
      <div class="flex flex-col sm:flex-row text-sm mb-10" in:fly|global={{ x: -30, duration: 300, delay: 800+(100*index), easing: backOut }}>
        <div class="flex flex-col w-3/12">
          <span class="text-neutral-400 text-[18px] tracking-wider mono">
            {period}
          </span>
          {#if honor}
            <span class="text-neutral-400">
              {honor}
            </span>
          {/if}
        </div>
        <div class="flex flex-col w-9/12">
          <span class="text-neutral-100 text-[18px]">
            {@html name}
          </span>
          <a href={link} class="flex text-neutral-400 text-[14px] hover:text-purple-400" target="_blank">
            {school}
            &nbsp
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-1"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
          </a>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style>
  .mono {
    font-family: 'Sen', sans-serif;
  }
</style>

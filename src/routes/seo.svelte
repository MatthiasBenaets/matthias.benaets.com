<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '$lib/config';
	import type { Seo } from '$lib/types';

	let {
		title = '',
		description = '',
		keywords = '',
		canonical = '',
		siteName = config.title,
		imageURL = '',
		logo = '',
		author = '',
		name = '',
		index = true,
		twitter = true,
		openGraph = true,
		schemaOrg = true,
		schemaType = ['Person', 'Organization'],
		socials = [],
		jsonld = {},
		children
	}: Seo = $props();

	let Ld = {
		'@context': 'https://schema.org',
		'@type': schemaType.length > 1 ? schemaType : schemaType[0],
		name: name,
		url: $page.url.origin,
		image: imageURL,
		logo: {
			'@type': 'ImageObject',
			url: $page.url.origin + logo,
			width: 48,
			height: 48
		},
		sameAs: socials
	};
	Ld = { ...Ld, ...jsonld };
	let LdScript = `<script type="application/ld+json">${JSON.stringify(Ld)}${'<'}/script>`;
</script>

<svelte:head>
	{#if title !== ''}
		{#if imageURL}
			<meta name="robots" content={index ? 'index, follow, max-image-preview:large' : 'noindex'} />
		{:else}
			<meta name="robots" content={index ? 'index, follow' : 'noindex'} />
		{/if}
		<title>{title + ' | ' + config.title}</title>
		<link rel="canonical" href={canonical === '' ? $page.url.href : canonical} />
	{/if}

	{#if description !== ''}
		<meta name="description" content={description} />
	{/if}

	{#if keywords !== ''}
		<meta name="keywords" content={keywords} />
	{/if}

	{#if author !== ''}
		<meta name="author" content={author} />
	{/if}

	{#if openGraph}
		{#if siteName !== ''}
			<meta property="og:site_name" content={siteName} />
		{/if}

		<meta property="og:url" content={$page.url.href} />
		<meta property="og:type" content="website" />
		{#if title !== ''}
			<meta property="og:title" content={title + ' | ' + config.title} />
		{:else}
			<meta property="og:title" content={config.title} />
		{/if}
		{#if description !== ''}
			<meta property="og:description" content={description} />
		{/if}
		{#if imageURL !== ''}
			<meta property="og:image" content={$page.url.origin + imageURL} />
		{/if}
		{#if logo !== ''}
			<meta property="og:logo" content={$page.url.origin + logo} />
		{/if}
	{/if}

	{#if twitter}
		<meta name="twitter:card" content="summary_large_image" />
		<meta property="twitter:domain" content={$page.url.host} />
		<meta property="twitter:url" content={$page.url.href} />
		{#if title !== ''}
			<meta name="twitter:title" content={title + ' | ' + config.title} />
		{:else}
			<meta name="twitter:title" content={config.title} />
		{/if}
		{#if description !== ''}
			<meta name="twitter:description" content={description} />
		{/if}
		{#if imageURL !== ''}
			<meta name="twitter:image" content={$page.url.origin + imageURL} />
		{/if}
	{/if}

	{#if children}
		{@render children()}
	{/if}

	{#if schemaOrg || socials[0] !== undefined || logo !== '' || name !== ''}
		{@html LdScript}
	{/if}
</svelte:head>

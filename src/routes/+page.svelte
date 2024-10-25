<script>
	import MainSection from './main-section.svelte';
	import CategoriesSection from './categories-section.svelte';
	import AppSection from './app-section.svelte';
	import AboutSection from './about-section.svelte';
	import DownloadSection from './download-section.svelte';
	import AppSectionLaptop from './app-section-laptop.svelte';
	import { onDestroy, onMount } from 'svelte';

let isMobile = false;

const checkDevice = () => {
	if (typeof window !== 'undefined') {
		isMobile = window.matchMedia("(max-width: 812px)").matches;
	}
};

onMount(() => {
	checkDevice(); // Initial check
	if (typeof window !== 'undefined') {
		window.addEventListener('resize', checkDevice);
	}
});

onDestroy(() => {
	if (typeof window !== 'undefined') {
		window.removeEventListener('resize', checkDevice);
	}
});

</script>

<MainSection/>
<CategoriesSection/>
{#if isMobile}
  <AppSection />
{:else}
  <AppSectionLaptop />
{/if}
<AboutSection/>
<DownloadSection/>

<style>
	@media only screen 
	and (max-device-width: 812px) {
		.mobile {
			
		}
	}
</style>
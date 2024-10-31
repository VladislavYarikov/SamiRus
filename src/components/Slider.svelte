<script lang="ts">
	import { cn } from '@/lib';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { onMount, type Snippet } from 'svelte';

	let {
		children,
		class: className,
		sliderClass,

		currentSlide = $bindable(0),
		slides = 0
	}: {
		children?: Snippet<[]>;
		class?: string;
		sliderClass?: string;

		currentSlide?: number;
		slides?: number;
	} = $props();

	let slider: HTMLDivElement;
	let scrollPosition = $state(0);

	const calculateCurrentSlide = () => {
		if (!slider) return 0;
		const { width: slideWidth } = slider.getBoundingClientRect();
		return Math.round(scrollPosition / slideWidth);
	};

	const scrollToSlide = (index: number) => {
		if (index < 0 || index >= slides) return;
		if (!slider) return;
		const realSlide = calculateCurrentSlide();
		if (realSlide === index) return;

		const { width: slideWidth } = slider.getBoundingClientRect();
		slider.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
	};

	let currentTimeout: number;
	const onScroll = async () => {
		if (!slider) return;
		if (currentTimeout) clearTimeout(currentTimeout);
		currentTimeout = setTimeout(() => {
			currentSlide = calculateCurrentSlide();
		}, 100);

		scrollPosition = slider.scrollLeft;
		currentSlide = calculateCurrentSlide();
	};

	$effect(() => {
		// add .active class to [data-slide]="currentSlide" element
		const activeSlide = slider.querySelector(`[data-slide="${currentSlide}"]`);
		if (activeSlide) {
			const active = slider.querySelector('.active');
			if (active) active.classList.remove('active');
			activeSlide.classList.add('active');
		}

		// set [data-slide-indicator]="true" content to currentSlide
		const slideIndicator = document.querySelector('[data-slide-indicator]');
		if (slideIndicator) slideIndicator.textContent = `0${currentSlide + 1}`;
	})

	onMount(() => {
		const children = slider.children[0].children;

		// add mouseover event listener to each slide to make it active
		for (let i = 0; i < children.length; i++) {
			const slide = children[i];
			slide.addEventListener('mouseover', () => {
				currentSlide = i;
			});
		}
	})
</script>

<!-- Slider container -->
<div class={cn('relative', className)}>
	<!-- Buttons -->
	<div class="contents text-white/80 laptop:hidden">
		<!-- Previous button -->
		<button
			class={cn('center absolute bottom-0 left-0 top-0 z-10 flex', currentSlide === 0 && 'hidden')}
			onclick={() => scrollToSlide(currentSlide - 1)}
			aria-label="Предыдущий слайд"
		>
			<ChevronLeft class="size-11" />
		</button>
		<!-- Next button -->
		<button
			class={cn(
				'center absolute bottom-0 right-0 top-0 z-10 flex',
				currentSlide === slides - 1 && 'hidden'
			)}
			onclick={() => scrollToSlide(currentSlide + 1)}
			aria-label="Следующий слайд"
		>
			<ChevronRight class="size-11" />
		</button>
	</div>

	<!-- Slider -->
	<div
		class={cn(
			'hide-scrollbar relative flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden',
			sliderClass
		)}
		bind:this={slider}
		onscroll={onScroll}
	>
		<!-- Slides -->
		{@render children?.()}
	</div>
</div>

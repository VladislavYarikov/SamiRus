<script lang="ts">
	import { cn } from '@/lib';
	import { ChevronDown } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className,
		title,

		isExpanded = $bindable(false)
	}: {
		children?: Snippet<[]>;
		class?: string;
		title: string;

		isExpanded?: boolean;
	} = $props();
</script>

<!-- Accordion container -->
<div
	class={cn('relative rounded-2xl px-2 py-8 pb-10 shadow-custom w-full', className)}
	onclick={() => (isExpanded = !isExpanded)}
	onkeydown={(e) => e.key === 'Enter' && (isExpanded = !isExpanded)}
	role="button"
	tabindex="0"
>
	<!-- Title -->
	<h3 class="text-center text-xl font-semibold text-black">
		{title}
	</h3>
	<!-- Content-->
	<div
		class={cn('grid transition-[grid-template-rows] duration-300 ease-out px-4 pt-0')}
		style:grid-template-rows={isExpanded ? '1fr' : '0fr'}
	>
		<div class={cn('overflow-hidden')}>
			{@render children?.()}
		</div>
	</div>

	<!-- Handle -->
	<div class="center absolute flex w-full" style="bottom: -1.5rem;">
		<button class="rounded-full bg-linear-accent p-2 text-white" aria-label="Открыть">
			<ChevronDown
				class={cn(
					'size-8 translate-y-1 stroke-2 transition-transform duration-300 ease-out',
					isExpanded && 'scale-y-[-1]'
				)}
			/>
		</button>
	</div>
</div>

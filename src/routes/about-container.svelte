<script>
	import { onMount } from "svelte";

    export let title;
    export let description;

    let isExpanded = false;
    let descriptionHeight = 0;
    let descriptionRef;

    let itemRef;

    onMount(()=> {
        itemRef.style.boxShadow = "7px 7px 10px rgba(3, 39, 253, 0.07), -7px 7px 10px rgba(3, 39, 253, 0.07)";
    })

    function toggleExpand() {
        itemRef.style.boxShadow = "";
        if (!isExpanded) {
            // Measure the height of the content when fully expanded
            descriptionHeight = descriptionRef.scrollHeight;
        } else {
            // Collapse back to zero height
            descriptionHeight = 0;
        }
        isExpanded = !isExpanded;
        
        setTimeout(() => {
            itemRef.style.boxShadow = "7px 7px 10px rgba(3, 39, 253, 0.07), -7px 7px 10px rgba(3, 39, 253, 0.07)";
        }, 200);
    }
</script>

<div class="about-container">
    <div class="about-item" on:click={toggleExpand} bind:this={itemRef}>
        <div class="about-title">
            <h1>{title}</h1>
        </div>
        <div 
            class="about-description" 
            bind:this={descriptionRef} 
            style="max-height: {descriptionHeight}px;"
        >
            {@html description}
        </div>
        <button>
            {#if isExpanded}
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m5 15 7-7 7 7"/>
            </svg>
            {/if}
            {#if !isExpanded}
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m19 9-7 7-7-7"/>
            </svg> 
            {/if}
        </button>
    </div>
</div>

<style>
    .about-container {
        display: flex;
        flex-direction: column;
        width: 550px;
        align-items: center;
    }

    .about-item {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: center;
        width: 100%;

        padding:  20px;
        padding-top: 40px;
        padding-bottom: 0px;
        background-color: white;
        border-radius: 20px;

        transition: box-shadow 3s ease;

        text-align: center;
        font-family: 'Montserrat', sans-serif;
    }

    .about-title * {
        color: #6077FE;
        font-weight: 600;
        font-size: clamp(18px, calc(1vh + 1vw), 50px);
    }

    .about-description {
        overflow: hidden;
        transition: max-height 0.4s ease-in-out; 
        text-align: start;
        
        color: black;
        font-weight: 500;
        font-size: 15px;
        width: 100%;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        color: inherit;
        font: inherit;
        text-align: inherit;
        cursor: pointer;
        width: calc(1.5vh + 1.5vw);
        height: calc(1.5vh + 1.5vw);
        min-width: 40px;
        min-height: 40px;
        background: linear-gradient(to top, #526BFD, #FFFFFF);
        color: white;
        border-radius: 100%;
        transform: translateY(50%);
        bottom: 0;
    }

    button svg {
        width: calc(1vh + 1vw);
        height: calc(1vh + 1vw);
        min-width: 28px;
        min-height: 28px;
    }
</style>
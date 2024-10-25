<script>
    export let title;
    export let description;

    let isExpanded = false;
    let descriptionHeight = 0;
    let descriptionRef;

    function toggleExpand() {
        if (!isExpanded) {
            // Measure the height of the content when fully expanded
            descriptionHeight = descriptionRef.scrollHeight;
        } else {
            // Collapse back to zero height
            descriptionHeight = 0;
        }
        isExpanded = !isExpanded;
    }
</script>

<div class="about-container">
    <div class="about-item">
        <div class="about-title">
            <h1>{title}</h1>
        </div>
        <div 
            class="about-description" 
            bind:this={descriptionRef} 
            style="max-height: {descriptionHeight}px;"
        >
            <h1>{description}</h1>
        </div>
        <button on:click={toggleExpand}>
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
        width: 100%;
        align-items: center;
    }

    .about-item {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: center;

        padding:  clamp(10px, calc(3vh + 3vw), 80px)  clamp(10px, calc(3vh + 3vw), 80px);
        width: 80vw;
        max-width: 1500px;
        background-color: white;
        filter: drop-shadow(7px 7px 10px rgba(3, 39, 253, 0.07)) drop-shadow(-7px 7px 10px rgba(3, 39, 253, 0.07));
        border-radius: 2vh;

        text-align: center;
        font-family: 'Montserrat', sans-serif;
    }

    .about-title {
        margin-bottom: clamp(16px, calc(1vh + 1vw), 40px);
    }

    .about-title * {
        color: #6077FE;
        font-weight: 600;
        font-size: clamp(18px, calc(1vh + 1vw), 50px);
    }

    .about-description {
        overflow: hidden;
        transition: max-height 0.2s ease-in-out; 
    }
    .about-description * {
        text-align: start;
        color: black;
        font-weight: 500;
        font-size: clamp(16px, calc(0.7vh + 0.7vw), 40px);
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
        position: absolute;
        transform: translateY(+50%);
        bottom: 0;
    }

    button svg {
        width: calc(1vh + 1vw);
        height: calc(1vh + 1vw);
        min-width: 28px;
        min-height: 28px;
    }
</style>
<script>
	import { onMount } from "svelte";

// @ts-nocheck

let descriptionArr = [
    'Вы заказчик или исполнитель? Дайте знать, нажав на соответствувющую кнопку. Создайте личный профиль, чтобы иметь возможность создавать и открывать метки на карте.',
    'На карте отображаются только актуальные предложения от исполнителей и заявки от заказчиков. Если нет подходящих меток, то вы можете создать собственную, по которой ваше предложение обязательно увидят.',
    'Чтобы найти именно ту спецтехнику, которая вам необходима, используйте фильтр, расположенный в правом верхнем углу. В открывшемся меню выбирайте нужные пункты. Вся прочая техника, кроме выбранной, на карте отображаться не будет.',
    'Номера телефонов заказчиков или исполнителей можно увидеть, кликнув на заинтересовавшую метку. Сами обговаривайте детали, уточняйте время, договаривайтесь о ценах.'
]

let slider;
let page = 0;

const PAGE_NUMBER = 4;
const SCROLL_NUMBER = 20;

const pageHandler = (number) => {
    
    console.log(number)
    slider.style.transition = 'transform 0.5s ease';
    if ((page + number) < PAGE_NUMBER && (page + number) > -1) {  
        page += number;
    }
    
    moveX = null;
    updateSliderPosition();
}

function updateSliderPosition() {
    const offset = -page * 100 + moveX; // Сдвиг слайдов в зависимости от текущего слайда
    slider.style.transform = `translateX(${offset}vw)`;
}

// Переменные для отслеживания свайпа
let startX = 0;
let currentX = 0;
let moveX = 0;

let isDragging = false;


// Touch event handlers
const touchStartHandler = (event) => {
    startX = event.touches[0].clientX;
    isDragging = true;
    slider.style.transition = '';
    event.preventDefault();
};

const touchMoveHandler = (event) => {
    if (!isDragging) return;
    currentX = event.touches[0].clientX;
    moveX = (currentX - startX) / window.innerWidth * 100; // Move relative to viewport width
    updateSliderPosition(); // Update the slider position dynamically
    event.preventDefault();
};

const touchEndHandler = () => {
    isDragging = false;
    
    // Calculate if the swipe distance is enough to change page
    if (Math.abs(moveX) > SCROLL_NUMBER) {
        pageHandler(-Math.sign(moveX));
    } else {
        moveX = null;
        pageHandler(0); // Snap back to current page
    }
    
    // Reset moveX after swipe
    moveX = 0;
};

// Attach touch events
const bindTouchEvents = () => {
    slider.addEventListener('touchstart', touchStartHandler);
    slider.addEventListener('touchmove', touchMoveHandler);
    slider.addEventListener('touchend', touchEndHandler);
};

onMount(() => {
    bindTouchEvents();
})

</script>

<section class="app-section">
    <div class="header title">
        <h1>Шаг {page+1}</h1>
        <h1>0{page+1}/04</h1>
    </div>

    <div class="slider-container">
        <div class="button-container">
            <div class="button-placement">
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button on:click={() => pageHandler(-1)} class={page === 0 ? 'disabled' : 'prev'}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" />
                    </svg
                  ></button>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button on:click={() => pageHandler(1)} class={page+1 == PAGE_NUMBER ? 'disabled' : 'next'}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg
                    >
                </button>
            </div>
        </div>
        <div bind:this={slider} class="slider">
            <div class="phone">
                <img src="/screens/1.png" alt="">
            </div>
            <div class="phone">
                <img src="/screens/2.png" alt="">
            </div>
            <div class="phone">
                <img src="/screens/3.png" alt="">
            </div>
            <div class="phone">
                <img src="/screens/4.png" alt="">
            </div>
        </div>
    </div>

    <div class="description title">
        <h1>{descriptionArr[page]}</h1>
    </div>
</section>

<style>
    .disabled {
        opacity: 0%;
    }
    .app-section {
        display: flex;
        overflow: hidden;
        padding-bottom: 25px;
        scroll-snap-type: x mandatory;
        flex-direction: column;
        justify-content: space-between;
        min-height: 90vh;
        background: linear-gradient(to top, rgba(3, 39, 253, 0.7), #FFFFFF 90%);
        border-radius: 35px;
        box-sizing: border-box;
        }

        .header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            color: #4A60DF;
			font-size: 16px;
            }

            .header :last-child {
                font-weight: 550;
            }

        .slider-container {
            display: flex;
            position: relative;
            max-height: 50vh;
            margin: 0px auto;
            height: 100%;
            }

            .slider {
                display: flex;
                width: 100%;
                align-items: center;
                }

                .phone {
                    display: flex;
                    height: 100%;
                    width: 100vw;
                    align-items: center;
                    justify-content: center;
                    }

                    .phone img {
                        height: inherit;
                        object-fit: contain;
                    }

        .description {
            display: flex;
            align-items: center;
            color: white;
            font-size: 11px;
            }

            .description * {
                font-weight: 400;
            }
    
    .title {
        padding: 0px 30px;
        font-family: 'Montserrat', sans-serif;
    }

    .button-container {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 100vw;

        top: 50%;
        z-index: 100;
        transform: translateY(-50%);
        }

        .button-placement {
            display: flex;
            width: 95%;
            justify-content: space-between;
        }

        .button-container button {
            background-color: rgba(0, 0, 0, 0.0);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
</style>

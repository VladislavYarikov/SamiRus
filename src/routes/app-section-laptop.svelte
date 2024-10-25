<script>
    let hoveredCategory = 0;

    const categories = [
        { title: "Шаг 1. Регистрируйтесь", description: "Вы заказчик или исполнитель? Дайте знать, нажав на соответствующую кнопку. Создайте личный профиль, чтобы иметь возможность создавать и открывать метки на карте." },
        { title: "Шаг 2. Ищите предложения рядом или ставьте метки", description: "На карте отображаются только актуальные предложения от исполнителей и заявки от заказчиков. Если нет подходящих меток, то вы можете создать собственную, по которой ваше предложение обязательно увидят." },
        { title: "Шаг 3. Воспользуйтесь фильтром", description: "Чтобы найти именно ту спецтехнику, которая вам необходима, используйте фильтр, расположенный в правом верхнем углу. В открывшемся меню выбирайте нужные пункты. Вся прочая техника, кроме выбранной, на карте отображаться не будет." },
        { title: "Шаг 4. Договаривайтесь о сотрудничестве", description: "Номера телефонов заказчиков или исполнителей можно увидеть, кликнув на заинтересовавшую метку. Сами обговаривайте детали, уточняйте время, договаривайтесь о ценах." },
    ];

    $: console.log(hoveredCategory);
</script>

<section>
    <div class="phone-container">
        {#each categories as category, index}
            {#if hoveredCategory === index}
                <div class="phone"><img src="/screens/{index+1}.png" alt=""></div>
            {/if}
        {/each}
    </div>
    <div class="content-container">
        {#each categories as category, index}
            <div class="category-container"
                 on:mouseenter={() => hoveredCategory = index}>
                <div class="title"><h1>{category.title}</h1></div>
                <div class="category-description"><h1>{category.description}</h1></div>
            </div>
        {/each}
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        columns: 2;
        align-items: center;
        position: relative;
        min-height: 512px;
        padding: 100px;
        padding-top: 0px;
    }

    .phone-container {
        display: flex;
        flex:1.5;
		background: radial-gradient(circle 15vw at center, rgba(3, 39, 253, 0.7), #FFFFFF);
        width: fit-content;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .phone {
        position: absolute;
    }

    .phone img {
        height: 512px;
    }

    .content-container {
        flex:2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .content-title {
        color:#4A60DF;
    }

    .category-container {
        display: flex;
        flex-direction: column;
        border-radius: 10px;   
        padding: 20px;
        background-color: white;
        filter: drop-shadow(7px 7px 10px rgba(3, 39, 253, 0.07)) 
					drop-shadow(-7px 7px 10px rgba(3, 39, 253, 0.07));  
    }

    .title h1 {
        font-family: 'Montserrat', sans-serif;
        color: black;
        font-size: large;
    }

    .category-description h1 {
        font-family: 'Montserrat', sans-serif;
        color: black;
        font-size: 15px;
        font-weight: 500;
    }
</style>
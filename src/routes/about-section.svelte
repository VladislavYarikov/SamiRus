<script>
	import AboutContainer from "./about-container.svelte";
    let titles = [
        'Что мне нужно знать, прежде чем скачать приложение?',
        'Почему мне нужно это приложение?',
        'Как создать профиль?'
    ];

    let descriptions = [
        'Мобильное приложение Сами создано для того, чтобы заказчики и исполнители быстрее находили друг друга и сотрудничали на более выгодных условиях.',
        'Мобильное приложение Сами – это облегчение и ускорение процесса по подбору и поиску необходимой спецтехники. Создание метки занимает менее одной минуты. Кроме того, вы можете выбирать среди уже созданных предложений именно ту категорию, что подходит вам больше всего.',
        'Просто создай'
    ]
</script>

<section>
    <div class="title">
        <h1>Информация об использовании</h1>
    </div>
    <div class="about-section">
        <AboutContainer title={titles[0]} description={descriptions[0]}/>
        <AboutContainer title={titles[1]} description={descriptions[1]}/>
        <AboutContainer title={titles[2]} description={descriptions[2]}/>
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: clamp(50px, calc(2vh + 2vw), 200px);
        padding: 0px 10vw;
    }

    .title {
        display: flex;
        width: 100%;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        color: black;
    }
    
    .title * {
        text-align: center;
        font-size: clamp(30px, calc(2vh + 2vw), 100px);
    }

    .about-section {
        display: flex;
        flex-direction: column;
        gap: clamp(45px, calc(3vh + 3vw), 150px);
    }
</style>

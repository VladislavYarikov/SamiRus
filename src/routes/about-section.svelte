<script>
	import AboutContainer from "./about-container.svelte";
    let titles = [
        'Что мне нужно знать, прежде чем скачать приложение?',
        'Почему мне нужно это приложение?',
        'Как создать профиль?',
        'Как заказать технику в приложении?',
        'Как сдать в аренду технику через приложение?',
        'Я исполнитель, но мне нужно заказать спецтехнику. Могу ли я это сделать?'
    ];

    let descriptions = [
        `<p>Мобильное приложение Сами создано для того, чтобы заказчики и исполнители быстрее находили друг друга и сотрудничали на более выгодных условиях.</p>
        <p>Что это значит?</p>
        <ol>
              <li><span></span>Удобное создание меток на карте в два шага</li>
              <li><span>Доступ ко всей базе заказчиков и исполнителей</span></li>
              <li><span>Удобный поиск меток на карте</span></li>
            </ol>
            <p>Попробуйте Сами – <a href="https://play.google.com/store/apps/details?id=ru.sami.app">Скачать для Android из Google play;</a> <a href="https://trk.mail.ru/c/me10h4?bundle_id=ru.sami.app">Скачать для Android из Rustore;</a> <a href="https://apps.apple.com/ru/app/сами/id1549192749?ign-itsct=apps_box&amp;ign-itscg=30200">Скачать для IOS</a> </p>`,
        `<p>Мобильное приложение Сами – это облегчение и ускорение процесса по подбору и поиску необходимой спецтехники. Создание метки занимает менее одной минуты. Кроме того, вы можете выбирать среди уже созданных предложений именно ту категорию, что подходит вам больше всего.</p>`,
        `<ol>
              <li><span>Нажмите на «+»</span></li>
              <li><span>Введите номер телефона</span></li>
              <li><span>Укажите свое имя</span></li>
              <li><span>Нажмите «Сохранить»</span></li>
            </ol>`,
        `<ol>
              <li><span>Нажмите на «+»</span></li>
              <li><span>Поставьте метку на карте, куда необходима техника</span></li>
              <li><span>Вы можете добавить время подачи</span></li>
              <li><span>Нажмите на кнопку «Сохранить»</span></li>
              <li><span>Ждите звонка от исполнителя</span></li>
            </ol>`,
        `<ol>
              <li><span>Нажмите на «+»</span></li>
              <li><span>Поставьте метку на карте или укажите адрес на карте, где бы вы хотели, чтобы вашу технику видел заказчик</span></li>
              <li><span>Выберете категорию техники, которую добавляете на карту</span></li>
              <li><span>Вы можете добавить фото и описание. Это даст возможность заказчику ознакомиться с вашим предложением и выбрать именно вас</span></li>
              <li><span>Вы можете поставить не более двух меток в каждой категории в любое место на карте, чтобы ваше предложение увидело как можно больше заказчиков.</span></li>
            </ol>`,
        `Конечно! При нажатии на «+» у вас появится окно с вопросом «Какую метку вы хотите поставить». Нажмите на кнопку «Ищу технику» и создавайте заказ.`
    ]
</script>

<section>
    <div class="title">
        <h1>Часто задаваемые вопросы</h1>
    </div>
    <div class="about-section">
        <AboutContainer title={titles[0]} description={descriptions[0]}/>
        <AboutContainer title={titles[1]} description={descriptions[1]}/>
        <AboutContainer title={titles[2]} description={descriptions[2]}/>
        <AboutContainer title={titles[3]} description={descriptions[3]}/>
        <AboutContainer title={titles[4]} description={descriptions[4]}/>
        <AboutContainer title={titles[5]} description={descriptions[5]}/>
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
        width: 100%;

        display: flex;                  /* Enable Flexbox */
        flex-wrap: wrap;               /* Allow items to wrap to the next line */
        gap: 30px;           
		justify-content:space-around; 
    }
</style>

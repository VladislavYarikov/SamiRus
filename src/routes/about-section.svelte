<script>
	import AboutContainer from "./about-container.svelte";
    let titles = [
        'Почему мне нужно это приложение?',
        'Как создать профиль?',
        'Как заказать технику в приложении?',
        'Как сдать в аренду технику через приложение?',
        'Я исполнитель, но мне нужно заказать спецтехнику. Могу ли я это сделать?',
        'Что мне нужно знать, прежде чем скачать приложение?'
    ];

    let descriptions = [
        `<p>Мобильное приложение Сами – это ускорение процесса по подбору необходимой спецтехники и заказов. Добавление метки занимает менее одной минуты.</p>`,
        `<ol>
              <li><span>Нажмите на <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30"
style="fill:#228BE6; transform: translateY(25%)">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
</svg></span></li>
              <li><span>Введите номер телефона.</span></li>
              <li><span>Укажите свое имя.</span></li>
              <li><span>Введите номер телефона.</span></li>
              <li><span>Выберите регион.</span></li>
              <li><span>Выберите форму рассчета.</span></li>
              <li><span>Нажмите «Сохранить».</span></li>
            </ol>`,
        `<ol>
              <li><span>Нажмите на <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30"
style="fill:#228BE6; transform: translateY(25%)">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
</svg></span></li>
              <li><span>Поставьте метку на карте, куда необходима техника.</span></li>
              <li><span>Вы добавить описание и фото к заказу.</span></li>
              <li><span>Нажмите на кнопку «Сохранить».</span></li>
              <li><span>Ожидайте звонка исполнителя.</span></li>
            </ol>`,
        `<ol>
              <li><span>Нажмите на <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30"
style="fill:#228BE6; transform: translateY(25%)">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
</svg></span></li>
              <li><span>Поставьте метку на карте или укажите адрес на карте, где бы вы хотели, чтобы вашу технику видели заказчики.</span></li>
              <li><span>Выберете категорию техники, которую добавляете на карту.</span></li>
              <li><span>Обязательно добавьте фото и описание. Это даст возможность заказчику ознакомиться с вашим предложением и выбрать именно Вас.</span></li>
            </ol>`,
        `<p>Конечно! При нажатии на <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30"
style="fill:#228BE6; transform: translateY(25%)">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
</svg> выберите пункт - «Добавить заказ», выберите необходимую категорию техники, добавьте описание заказа. При необходимости измените свой номер телефона на номер заказчика в нижнем поле. Выберите необходимое место на карте и нажмите кнопку «Далее».</p>`,
        `<p>Мобильное приложение Сами создано для того, чтобы заказчики и исполнители быстрее находили друг друга и сотрудничали на более выгодных условиях.</p>
        <p>Что это значит?</p>
        <ol>
              <li><span></span>Удобное создание меток на карте в два шага.</li>
              <li><span>Доступ ко всей базе заказчиков и исполнителей.</span></li>
              <li><span>Удобный поиск меток на карте.</span></li>
            </ol>
            <p>Попробуйте Сами.</p>`
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

    .about-section :first {
        filter: drop-shadow(7px 7px 10px rgba(3, 39, 253, 0.07)) drop-shadow(-7px 7px 10px rgba(3, 39, 253, 0.07));
    }
</style>

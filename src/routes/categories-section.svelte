<section class="categories-section">
	<div class="category-container">
		<div class="icon-container">
			<img src="/icons/Кошелек.png" alt="Кошелек">
		</div>
		<div class="title category-script">
			<h1>Без комиссии</h1>
		</div>
		<div class="title category-description">
			<h1>Мы не берем комиссию за заключение сделки. Вы Сами договариваетесь об удобной форме оплаты и сроках выполнения заказа</h1>
		</div>
	</div>

	<div class="category-container">
		<div class="icon-container">
			<img src="/icons/Ракета.png" alt="Кошелек">
		</div>
		<div class="title category-script">
			<h1>Быстрая регистрация</h1>
		</div>
		<div class="title category-description">
			<h1>Регистрируйтесь в два клика по номеру телефона. Вводите полученный код и давайте разрешение на использование</h1>
		</div>
	</div>

	<div class="category-container">
		<div class="icon-container">
			<img src="/icons/Телефон.png" alt="Кошелек">
		</div>
		<div class="title category-script">
			<h1>Понятный интерфейс</h1>
		</div>
		<div class="title category-description">
			<h1>Вы Сами разберетесь в приложении, даже не являясь опытным пользователем смартфона, без обучения и посторонней помощи</h1>
		</div>
	</div>

	<div class="category-container">
		<div class="icon-container">
			<img src="/icons/Лупа.png" alt="Кошелек">
		</div>
		<div class="title category-script">
			<h1>Поиск по карте</h1>
		</div>
		<div class="title category-description">
			<h1>Вся имеющаяся техника отмечена на карте. Вы можете связаться с исполнителем или заказчиком по телефону, указанному в метке</h1>
		</div>
	</div>
</section>

<style>
	.title {
		display: flex;
		flex-direction: column;
		justify-content: center;
        align-items: center; /* Centers vertically */
		}

		.title * {
			text-align: center;
			font-family: 'Montserrat', sans-serif;
			align-items: center;
		}
        
		.categories-section {
            display: flex;                  /* Enable Flexbox */
            flex-wrap: wrap;               /* Allow items to wrap to the next line */
            gap: 30px;                     /* Space between items */
            padding:0px 5vw;  
			padding-bottom: 50px;
			justify-content:space-around; 
        }

        .category-container {
			padding: 30px;  
			width: 220px;             /* Fixed width for each category */
            height: auto;                 /* Fixed height for demonstration */
            background-color: white  ;   /* Optional border for visibility */
            border-radius: 15px;   
			gap: 20px;         /* Optional rounded corners */
            display: flex;   
			justify-content: space-between;
			flex-direction: column; 
			align-items: center;    /* Center horizontally */
			
			filter: drop-shadow(7px 7px 10px rgba(3, 39, 253, 0.07)) 
					drop-shadow(-7px 7px 10px rgba(3, 39, 253, 0.07));     
		}

		.icon-container {
			position: relative;
			background: linear-gradient(to top, rgba(3, 39, 253, 0.4), rgba(0, 0, 0, 0.0) 40%);
			border-radius: 18px;
			filter:  drop-shadow(0px 0px 6px rgba(3, 39, 253, 0.4));
		}
		.icon-container img {
			width: 110px; /* Set width to 104px */
    		height: 110px;
		}

		.category-script h1 {
			color: #6077FE;
			font-size: 20px;
			font-weight: 600;
		}
		.category-description h1 {
			color: black;
			font-size: 12px;
			font-weight: 500;
		}

		@media only screen 
		and (max-device-width: 812px) {
			.title {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center; /* Centers vertically */
			}

			.title * {
				text-align: center;
				font-family: 'Montserrat', sans-serif;
				align-items: center;
			}
			
			.categories-section {
				display: flex;                  /* Enable Flexbox */
				flex-wrap: wrap;               /* Allow items to wrap to the next line */
				gap: 40px;                     /* Space between items */
				padding: 4vh 15vw;  
				justify-content:space-around; 
			}

			.category-container {
				padding: clamp(14px, calc(4vh + 4vw), 50px);
				max-width: 400px;  
				width: 100%;             /* Fixed width for each category */
				height: auto;                 /* Fixed height for demonstration */
				background-color: white  ;   /* Optional border for visibility */
				border-radius: 15px;   
				gap: 30px;         /* Optional rounded corners */
				display: flex;   
				justify-content: space-between;
				flex-direction: column; 
				align-items: center;    /* Center horizontally */
				
				filter: drop-shadow(7px 7px 10px rgba(3, 39, 253, 0.07)) 
						drop-shadow(-7px 7px 10px rgba(3, 39, 253, 0.07));     
			}

			.icon-container {
				position: relative;
				background: linear-gradient(to top, rgba(3, 39, 253, 0.4), rgba(0, 0, 0, 0.0) 40%);
				border-radius: 18px;
				filter:  drop-shadow(0px 0px 6px rgba(3, 39, 253, 0.4));
			}
			.icon-container img {
				width: calc(5vh + 5vw); /* Set width to 104px */
				height: calc(5vh + 5vw);
				min-width: 100px;
				min-height: 100px; 
				max-width: 250px;
				max-height: 250px;
			}

			.category-script h1 {
				color: #6077FE;
				font-size: clamp(16px, calc(2vh + 2vw), 36px);
				font-weight: 600;
			}
			.category-description h1 {
				color: black;
				font-size: clamp(14px, calc(1.2vh + 1.2vw), 28px);
				font-weight: 500;
			}
		} 
</style>
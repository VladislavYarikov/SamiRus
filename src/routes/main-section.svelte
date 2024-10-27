<script>
	function scrollToBottom() {
   		window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  	}
</script>

<section class="main-section">
	<div class="title main-script">
		<h2>
			Экскаватор-погрузчик
		</h2>
		<h2>
			за 1 минуту
		</h2>
	</div>

	<div class="phone">
		<img src="/Iphone.png" alt="iPhone Image">
	</div>

	<div class="shields">
        <div class="bange"><a href="https://play.google.com/store/apps/details?id=ru.sami.app"><img src="/badges/googleplay.png" alt=""></a></div>
        <div class="bange"><a href="https://apps.apple.com/ru/app/%D1%81%D0%B0%D0%BC%D0%B8/id1549192749"><img src="/badges/appstore.png" alt=""></a></div>
        <div class="bange"><a href="https://trk.mail.ru/c/me10h4?bundle_id=ru.sami.app"><img src="/badges/rustore.png" alt=""></a></div>
    </div>

	<div class="title main-description">
		<h2>
			Удобный поиск заказчиков и исполнителей в бесплатном мобильном приложении.
		</h2>
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
			margin: 0 auto;

			text-align: center;
			font-family: 'Montserrat', sans-serif;
		}
	
	.main-section {
		position: relative;
		background: radial-gradient(circle 350px at center, rgba(3, 39, 253, 0.7), #FFFFFF);
		padding-bottom: 50px;
		border-radius: 0 0 50px 50px;
	}

	.main-script {
		color: #4A60DF;
		font-size: 2rem;
        font-weight: 700;
	}

	.main-description {
		padding: 0px 5vw;
		margin-top: 20px;
		}
		.main-description h2{
			color: #4A60DF;
			font-size: 20px;
			font-weight: 600;
		}

	.phone {
		display: flex;
		width: 100%;
		justify-content: center;
		text-align: center;
		overflow: hidden;
		padding-top: 30px;
		padding-bottom: 20px;
	}

	.phone img {
		display: block;   /* The image will take the full width of its parent */
		width: 600px;   /* Height adjusts automatically to maintain the aspect ratio */
	}

	.tech-block {
		position: absolute;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		padding: 15px;
		top: 159px;
		left: 50vw;
		transform: translateX(-113px);
		width: 130px;
		height: 130px;
		border-radius: 0 15px 0 15px;
		background-color: white;
		box-shadow: -4px -4px 10px rgba(96, 119, 254, 0.35);
		}

		.tech-block .title {
			color: black;
			font-size: 7px;
			font-weight: 400;
		}

		.tech-block .order-button {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 25px;
			background: linear-gradient(to bottom, #396AFC, rgba(41, 72, 255, 0.7));
			border-radius: 0 5px 0 5px;
			}

			.tech-block .order-button .title {
				color: white;
				font-size: 15px;
				font-weight: 500;
				text-decoration: none;
				font-family: 'Montserrat', sans-serif;
			}
	
	.shields {
		padding: 0 2vw;
		padding-top: 15px;
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
		
		display: none;
    }

    .bange {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45vw;
    }

    .bange img {
		width: 100%;
        object-fit: contain;
    }

	
	@media only screen 
	and (max-device-width: 812px) { 
		.shields {
			display: flex;
		}
		.bange img{
			border-radius: 10px;
			box-shadow: -4px -4px 10px rgba(96, 119, 254, 0.6), 4px -4px 10px rgba(96, 119, 254, 0.6);
		}
		.main-section {
			position: relative;
			background: linear-gradient(to top, rgba(3, 39, 253, 0.7), #FFFFFF);
			padding-bottom: 30px;
			border-radius: 0 0 50px 50px;
		}
		.main-script {
			color: black;
			font-size: 1.1rem;
			font-weight: 700;
		}
		.main-description h2{
			color: white;
			font-size: 20px;
			font-weight: 400;
		}

		.tech-block {
			padding: 15px;
			top: 100px;
			left: 50vw;
			transform: translateX(-118px);
			width: 130px;
			height: 110px;
			border-radius: 0 15px 0 15px;
			box-shadow: -4px -4px 10px rgba(96, 119, 254, 0.35);
			z-index: 100;
		}

		.tech-block .title {
			color: black;
			font-size: 7px;
			font-weight: 400;
		}
		
		.tech-block .order-button .title {
			color: white;
			font-size: 15px;
			font-weight: 500;
			text-decoration: none;
			font-family: 'Montserrat', sans-serif;
		}

		.phone img { /* Ensures no extra space from inline elements */
			width: 346px	;    /* The image will take the full width of its parent */
			height: auto; 
			transform: translateX(7px); 
		}
	}
</style>
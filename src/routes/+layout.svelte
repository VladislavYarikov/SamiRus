<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="app">
	<header>
		<span>
			Сами
		</span>
	</header>

	<main>
		<slot />
	</main>

    <footer>
        <div class="links">
            <a href="https://sami.plus/user-agreement.pdf" class="link">Пользовательское соглашение</a>
            <a href="https://sami.plus/user-agreement.pdf" class="link">Политика конфидициальности</a>
            <a href="https://sami.plus/public-offer.pdf" class="link">Публичная оферта</a>
            <a href="https://sami.plus/digital-services.pdf" class="link">Список цифровых услуг</a>
        </div>
        <span data-v-6c6d36f5>© 2021 Сами. Почта sami.plus@list.ru</span>
    </footer>
</div>

<style>

	main {
		display: flex; /* Enable flexbox layout */
        flex-direction: column; /* Change to 'column' for vertical layout */
		justify-content: space-between;
        gap: 10vh;
	}

	header {
            height: 50px;
            overflow: hidden; /* Ensures no overflow */
			margin-bottom: 20px;
        }

        header::before {
            content: ""; /* Creates a pseudo-element */
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
			height: 50px;
            background-image: url('/Header.png'); /* Background image */
            background-size: cover;
            background-position: bottom;
            z-index: 0; /* Send the background behind other elements */
        }

        header span {
            position: relative; /* Positioning relative to the header */
			display: flex;
            z-index: 1; /* Ensure text is above the background */
            padding-top: 10px;
			padding-left: 15px;
            font-family: 'Montserrat', sans-serif;
            font-size: 32px;
            font-weight: 700; /* Black weight */
            color: #5870FF; /* Sets the text color */
        }

    footer {
        display: flex;
        padding: 20px;
        justify-content: center;
        flex-direction: column;
        gap: 25px;
    }

    footer span {
        text-align: center;
    }

    .links {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }

    .link {
        width: 40vw;
        max-width: 300px;
    }
</style>

<section>
    <div class="title">
        <h1>Скачивайте в Google play, App store и Rustore</h1>
    </div>
    <div class="shields">
        <div class="bange"><img src="/badges/googleplay.png" alt=""></div>
        <div class="bange"><img src="/badges/rustore.png" alt=""></div>
        <div class="bange"><img src="/badges/appstore.png" alt=""></div>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        padding: 7vh 25px;
        gap: 10vh;
        align-items: center;
        background: linear-gradient(to top, rgba(3, 39, 253, 0.7), #FFFFFF 60%);
        border-radius: 7vh;
    }

    .title {
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        padding: 0px 5vw;
    }

    .title * {
        color: black;
        font-size: calc(3vw + 3vh);
    }

    .shields {
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
    }

    .bange {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25vw;
        min-width: 250px;
    }

    .bange img {
        width: 100%;
        object-fit: contain;
    }

</style>
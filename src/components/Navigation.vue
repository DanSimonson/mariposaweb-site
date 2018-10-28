<template>
    <div class="home">
        <header class="header">
            <nav v-on:click="displayMe = !displayMe" class="hamburger">
                <button class="hamburger__button">
                    <span class="hamburger__button--bar"></span>
                    <span class="hamburger__button--bar"></span>
                    <span class="hamburger__button--bar"></span>
                </button>
            </nav>
            <nav class="desktop">
                <div class="desktop__navigation">
                    <router-link to="/" tag="div">Home</router-link>
                    <router-link to="/blog/" tag="div">Blog</router-link>
                    <router-link to="/contact/" tag="div">Contact</router-link>
                    <!--<a href="/">
                        <div>Home</div>
                    </a>
                    <a href="/blog/">
                        <div>Blog</div>
                    </a>
                    <a href="/contact/">
                        <div>Contact</div>
                    </a>-->
                </div>
            </nav>
        </header>
        <transition name="slide-fade">
            <nav v-if="displayMe" class="mobile">
                <ul class="mobile__items">
                    <router-link to='/' tag='span'>
                        <li class="nav-links">
                            <strong>Home </strong></li>
                    </router-link>
                    <router-link to='/blog/' tag='span'>
                        <li class="nav-links">Blog</li>
                    </router-link>
                    <router-link to='/contact/' tag='span'>
                        <li class="nav-links">Contact</li>
                    </router-link>
                </ul>
            </nav>
        </transition>
        <!--<main class="background">
            <div class="background__image"></div>
        </main>
        <footer>
            <div>Yummy!</div>
        </footer>-->
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        data() {
            return {
                displayMe: false
            }
        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Hind|Indie+Flower');

    body {
        margin: 0;
        font-family: 'Hind', sans-serif;
    }

    nav div {
        color: #BDBDBD;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        font-weight: 900;
        text-decoration: none;
        font-size: 1.2rem;
    }

    .header {
        /*background: rgb(24, 109, 24);*/
        background: #01579B;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        padding: 5px 20px;
    }

    /*hamburger icon*/
    .hamburger {
        display: flex;
        align-items: center;
        z-index: 2;
    }

    .hamburger__button {
        width: 3rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding-top: 0;
        padding-bottom: 0;

    }

    .hamburger__button:focus {
        outline: none;
    }

    .hamburger__button--bar {
        width: 100%;
        height: 0.2rem;
        background: white;
        display: block;
        margin: 0.6rem 0;
    }

    /*desktop*/
    .desktop__navigation {
        display: flex;
        justify-content: flex-end;
    }

    .desktop__navigation div {
        padding-left: 20px;
        display: none;
    }

    /*background*/
    .background__image {
        background: url("https://res.cloudinary.com/dmglopmul/image/upload/v1539799606/projectPhotos/side-nav/background.jpg");
        width: 100vw;
        height: 40vh;
        background-size: cover;
        background-position: center;
    }

    /*footer*/
    footer div {
        color: gray;
        font-family: 'Indie Flower', sans-serif;
        font-size: 60px;
        width: 80vw;
        margin: auto;
        text-align: center;
        padding: 100px 0;
    }

    .mobile {
        position: fixed;
        top: 0;
        background: rgba(90, 90, 90, 0.9);
        width: 80vw;
        height: 100vh;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        z-index: 1;
    }

    .mobile__items {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 2rem;
    }

    nav div:hover {
        cursor: pointer;
        /*animation: bounce 1s;*/
        color: wheat;
    }

    @keyframes bounce {

        0%,
        20%,
        60%,
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }

        40% {
            -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
        }

        80% {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
        }
    }



    .slide-fade-enter-active {
        transition: all .6s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter,
    .slide-fade-leave-to

    /* .slide-fade-leave-active below version 2.1.8 */
        {
        transform: translateX(10px);
        opacity: 0;
    }

    /*media queries*/
    @media (min-width: 40rem) {
        .hamburger__button {
            display: none;
        }

        .desktop__navigation div {
            display: block;
            padding-left: 20px;
        }
    }

    /*@media (min-width: 768px) {
        .hamburger__button {
            display: none;
        }

        .desktop__navigation div {
            display: block;
        }
    }*/
</style>
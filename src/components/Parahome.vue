<template>
    <div id="parahome">
        <!--<app-header></app-header>-->
        <v-parallax dark :src="image1">
            <v-layout align-center column justify-center>
                <h1 class="display-2 font-weight-thin mb-3 white--text">Build Your Application Today</h1>
                <h3 class="white--text"> ______________________ </h3>
                <h3 class="display-2 font-weight-thin mt-3 white--text">MARIPOSAWEB DEVELOPMENT</h3>

            </v-layout>
        </v-parallax>
        <div class="dividertwo"></div>
        <div class="container-fluid" id="two">
            <h1 class='title-text'>Vue.js Projects</h1>
            <div class="row">
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="../assets/onlineStore1.jpg" alt="">
                            <a href="https://vue-blog-ed03b.firebaseapp.com/" target="_blank" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">Online Store</span>
                            <p>A Vue.js online store using vuex for state
                                management and firebase as database.</p>
                        </div>
                        <div class="card-action">
                            <a class="increase" href="https://vue-blog-ed03b.firebaseapp.com/" target="_blank">See More</a>
                        </div>
                    </div>
                </div>
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537108170/projectPhotos/hackerNews.png"
                                alt="">
                            <a href='http://extra-small-stick.surge.sh' target="_blank" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">Hacker-News Clone</span>
                            <p>A Hacker-News Clone, utilizing Vue, Axios, Firestore, JavaScript,
                                ES6.</p>
                        </div>
                        <div class="card-action">
                            <a class="tilt" href='http://extra-small-stick.surge.sh' target="_blank">See More</a>
                        </div>
                    </div>
                </div>
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="../assets/customerInformation.jpg" alt="">
                            <a href='https://human-resources-cb42b.firebaseapp.com/' target="_blank" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">Customer Information</span>
                            <p>A create, read, update, delete applictions with Vue, Firestore,
                                Bootstrap 4.</p>
                        </div>
                        <div class="card-action">
                            <a href='https://human-resources-cb42b.firebaseapp.com/' target="_blank"><span class="spin">See
                                    More</span></a>
                            <!--<a href="">View Ingredients</a>-->
                        </div>
                    </div>
                </div>
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src='https://res.cloudinary.com/dmglopmul/image/upload/v1537116190/projectPhotos/recipeBox.jpg'
                                alt="">
                            <a href='https://recipes-ddb43.firebaseapp.com/#/' target="_blank" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">A Recipe Box</span>
                            <p>User can create, edit, delete and save recipes, powered with Vue, Firestore</p>
                        </div>
                        <div class="card-action">
                            <a class="border" href='https://recipes-ddb43.firebaseapp.com/#/' target="_blank">See
                                More</a>
                            <!--<a href="">View Ingredients</a>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="dividertwo"></div>

        <v-parallax dark :src="imagetwo" height="380"></v-parallax>

        <div class="dividertwo"></div>

        <div class="container-fluid" id="three">
            <h1 class='title-text'>Javascript Projects</h1>
            <div class="row">
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537117177/projectPhotos/simon.jpg"
                                alt="">
                            <a href='https://dansimonson.github.io/simongame/' target="_blank" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">Simon Game</span>
                            <p>An application simulating the 70's simon game, created with vanilla
                                Javascript, CSS3, HTML.</p>
                        </div>
                        <div class="card-action">
                            <a class="tilt" href='https://dansimonson.github.io/simongame/' target="_blank">See More</a>

                        </div>
                    </div>
                </div>
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537118049/projectPhotos/wikipedia.jpg"
                                alt="">
                            <a href='https://dansimonson.github.io/wikiviewer/' target="_blank" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">Wikipedia Search</span>
                            <p>A Wikipedia search engine that uses the Wikipedia API, vanilla
                                Javascript, CSS3, HTML.</p>
                        </div>
                        <div class="card-action">
                            <a class="border" href='https://dansimonson.github.io/wikiviewer/' target="_blank">See More</a>

                        </div>
                    </div>
                </div>
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537118827/projectPhotos/twitch.png"
                                alt="">
                            <a href='https://dansimonson.github.io/twitchtv/' target="_blank" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">Twitch</span>
                            <p>An application using the twitch API for live streaming, applying
                                Javascript, CSS3, HTML.</p>
                        </div>
                        <div class="card-action">
                            <a class="increase" href='https://dansimonson.github.io/twitchtv/' target="_blank">See More</a>
                            <!--<a href="">View Ingredients</a>-->
                        </div>
                    </div>
                </div>
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src='https://res.cloudinary.com/dmglopmul/image/upload/v1529504760/calculator.jpg' alt="">
                            <a href='https://dansimonson.github.io/calculator/' target="_blank" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">Calculator</span>
                            <p>A fully functioning calculator made with JavaScript, Jquery, Bootstrap.</p>
                        </div>
                        <div class="card-action">
                            <a href='https://dansimonson.github.io/calculator/' target="
                                _blank"><span
                                    class="spin">See
                                    More</span></a>
                            <!--<a href="">View Ingredients</a>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <v-parallax dark :src="imagethree" height="300"></v-parallax>


        <div class="row" id="last-row">
            <div style="background: #2193b0;font-family: 'Abril Fatface', cursive;font-weight: bold;font-size: 18px;align-items: center;justify-content: center;"
                class="col s4 promoBox">
                Web Development with an emphasis on designing, building, and managing web solutions

            </div>
            <div style="background: #00B4DB;font-family: 'Abril Fatface', cursive;font-weight: bold;font-size: 20px;align-items: center;justify-content: center;"
                class="col s4 promoBoxMiddle">
                We are passionate about the digital experience, creating stuff real people will really love.
            </div>
            <div style="background: #2193b0;font-family: 'Abril Fatface', cursive;font-weight: bold;font-size: 20px;align-items: center;justify-content: center;"
                class="col s4 promoBox">
                We offer a visually rich, engaging interactive experience
            </div>
        </div>
        <div class="dividertwo"></div>


        <!--<app-footer></app-footer>-->
    </div>



</template>

<script>
    import image1 from "../assets/butterfly.jpg"
    import imagetwo from "../assets/butterfly2.jpg"
    import imagethree from "../assets/butterfly3.jpg"
    //import { Carousel, CarouselItem, CarouselCaption, Container, Row, Column, Card, CardImg, CardBody, CardTitle, CardText, Btn } from 'mdbvue';


    export default {
        name: 'Parahome',
        components: {

        },
        data() {
            return {
                image1: image1,
                imagetwo: imagetwo,
                imagethree: imagethree
            }
        },
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Gravitas+One');
    @import url('https://fonts.googleapis.com/css?family=Abril+Fatface');

    * {
        border: 0;
        margin: 0;
        padding: 0;
    }

    .card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {
        color: #0D47A1;
        font-size: 16px;
        font-weight: 400;
    }

    .tilt {
        display: inline-block;
        transition: .3s;
        text-decoration: none;
    }

    .tilt:hover {
        transform: rotate(15deg);
        color: green;
    }

    .border {
        color: #0083B0;
        font-weight: 500;
        -webkit-transition: -webkit-transform 0.2s;
        transition: transform 0.2s;
        display: inline-block;
        text-decoration: none;
        position: relative;
    }

    .border:hover {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }

    .border::before {
        position: absolute;
        top: -2px;
        left: -7px;
        box-sizing: content-box;
        padding: 0 5px;
        width: 100%;
        height: 100%;
        border: 2px solid #0083B0;
        content: '';
        opacity: 0;
        -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;
        transition: opacity 0.2s, transform 0.2s;
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }

    .border:hover::before {
        opacity: 1;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }

    .increase {
        display: inline-block;

        transition: .3s;
        font-weight: bold;
        text-decoration: none;
    }

    .increase:hover {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }

    .spin {
        display: inline-block;
        color: #0D47A1;
        font-size: 16px;


    }

    .spin {
        transition: all 1s ease-in-out;
    }

    .spin:hover {
        -webkit-transform: rotateX(360deg);
        transform: rotateX(360deg);
    }

    #last-row {
        margin: 0;
    }

    .card {
        opacity: 0.8;
        transition: height 0.3s, box-shadow 0.3s
    }

    .card:hover {
        opacity: 1;
        cursor: pointer;
        height: 410px;
        box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5);
    }


    /*@media screen and (min-width: 500px) {
        *[data-v-6c4fdd22] {
            font-size: 14px;
        }
    }*/

    .dividertwo {
        height: 2px;
        background: #00d2ff;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #928DAB, #00d2ff);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #928DAB, #00d2ff);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }


    .title-text {
        font-family: 'Gravitas One', cursive;
        font-weight: 700;
        color: #E3F2FD;
        font-size: 24px;
        margin-bottom: 30px;
    }

    .card {
        margin: 5px 5px;
    }

    #two {
        padding: 20px;
        background: #00B4DB;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #0083B0, #00B4DB);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    #three {
        padding: 20px;
        background: #000046;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #1CB5E0, #000046);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #1CB5E0, #000046);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



    }

    promoBox {
        /*background: #926239;*/
        font-family: 'Abril Fatface',
            cursive;
        font-weight: bold;
        font-size: 20px;
        height: 200px;
        background: #2193b0;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #6dd5ed, #2193b0);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        align-items: center;
        justify-content: center;

    }

    promoBoxMiddle {
        /*background: #f9f9f9;*/
        font-family: 'Abril Fatface', cursive;
        font-weight: bold;
        font-size: 20px;
        color: #fff;
        background: #00B4DB;
        /* fallback for old browsers 
        background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);*/
        /* Chrome 10-25, Safari 5.1-6 
        background: linear-gradient(to right, #0083B0, #00B4DB);*/
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        align-items: center;
        justify-content: center;

    }

    .btn {
        margin-bottom: 5px;
        padding: 5px 5px;
        font-size: 16px;
    }


    #section-c div {
        padding: 20px;
    }

    #section-c .box-1,
    #section-c .box-3 {
        font-family: 'Abril Fatface', cursive;
        font-weight: bold;
        font-size: 14px;
        height: 200px;
        background: #2193b0;
    }

    #section-c .box-2 {
        background: #f9f9f9;
        font-family: 'Abril Fatface', cursive;
        font-weight: bold;
        font-size: 14px;
        color: #fff;
        background: #00B4DB;
    }
</style>
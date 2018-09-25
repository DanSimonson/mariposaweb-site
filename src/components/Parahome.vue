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
            <h1 class='title-text'>Portfolio Projects</h1>
            <div class="row">
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="https://cdn.buttercms.com/OUEb12H8TT6nV2fOPPSE" alt="">
                            <a href="" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">Mango & Chickpea Curry</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci.
                                Orci
                                varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>
                        <div class="card-action">
                            <a href="">More details</a>
                            <a href="">View Ingredients</a>
                        </div>
                    </div>
                </div>
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537108170/projectPhotos/hackerNews.png"
                                alt="">
                            <a href="" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">Rainbow Pasta Salad</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci.
                                Orci
                                varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>
                        <div class="card-action">
                            <a href="">More details</a>
                            <a href="">View Ingredients</a>
                        </div>
                    </div>
                </div>
                <div class="col s12 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537109174/projectPhotos/mariposaImageP.jpg"
                                alt="">
                            <a href="" class="halfway-fab btn-floating pink pulse">
                                <i class="material-icons">favorite</i>
                            </a>
                        </div>
                        <div class="card-content">
                            <span class="card-title">Mango & Chickpea Curry</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci.
                                Orci
                                varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>
                        <div class="card-action">
                            <a href="">More details</a>
                            <a href="">View Ingredients</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--<div class="container" id="two">
            <h1 class='title-text'>Portfolio Projects</h1>
            <div class="row">
                <div class="col l4">
                    <div class="card  small blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>-->

        <!--<container mt-5 mb-5 style="display: inline-block;">
                <carousel :interval=" 8000" showControls multi slide>
                    <carousel-item>
                        <row>
                            <column md="4">
                                <card class="mb-2">
                                    <card-img src="https://cdn.buttercms.com/OUEb12H8TT6nV2fOPPSE" alt="Card image cap"
                                        waves></card-img>
                                    <card-body>
                                        <card-title>Online Store</card-title>
                                        <card-text>A Vue.js online store using vuex for state
                                            management and firebase as database.</card-text>
                                        <btn tag="a" href="https://vue-blog-ed03b.firebaseapp.com/" target="_blank"
                                            color="primary">See
                                            More</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://cdn.buttercms.com/HLQMv1cGTneIExzArt8j" alt="Card image cap"
                                        waves></card-img>
                                    <card-body>
                                        <card-title>Trump News</card-title>
                                        <card-text>A news list about President Trump, utilizing news API,vue.js,
                                            Vuetify and Javascript.</card-text>
                                        <btn tag="a" href='http://agonizing-shirt.surge.sh/#/' target="_blank" color="primary">See
                                            More</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537108170/projectPhotos/hackerNews.png"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Hacker-News Clone</card-title>
                                        <card-text>A Hacker-News Clone, utilizing Vue, Axios, Firestore, JavaScript,
                                            ES6.</card-text>
                                        <btn tag="a" href='http://extra-small-stick.surge.sh' target="_blank" color="primary">See
                                            More</btn>
                                    </card-body>
                                </card>
                            </column>
                        </row>
                    </carousel-item>
                    <carousel-item>
                        <row>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537109174/projectPhotos/mariposaImageP.jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Client information</card-title>
                                        <card-text>A create, read, update, delete applictions with Vue, Firestore,
                                            Bootstrap 4.</card-text>
                                        <btn tag="a" href='https://human-resources-cb42b.firebaseapp.com/' target="_blank"
                                            color="primary">See More</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src='https://res.cloudinary.com/dmglopmul/image/upload/v1537109939/projectPhotos/aspa.jpg'
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Spa Business Website</card-title>
                                        <card-text>A Spa Business Website with Vue, Firestore, Firestore
                                            Authentication, MaterializeCSS, Vuetify, JavaScript.</card-text>
                                        <btn tag="a" href='https://user-info-ee17c.firebaseapp.com/' target="_blank"
                                            color="primary">See
                                            More</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537116190/projectPhotos/recipeBox.jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Recipe Box</card-title>
                                        <card-text>An Application that creates, reads, updates, deletes recipes,
                                            powered with Vue, Firestore, MaterializeCSS.</card-text>
                                        <btn tag="a" href='https://recipes-ddb43.firebaseapp.com/#/' target="_blank"
                                            color="primary">See
                                            More</btn>
                                    </card-body>
                                </card>
                            </column>
                        </row>
                    </carousel-item>
                    <carousel-item>
                        <row>
                            <column md="4">
                                <card class="mb-2">
                                    <card-img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537117177/projectPhotos/simon.jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Simon Game</card-title>
                                        <card-text>An application simulating the 70's simon game, created with vanilla
                                            Javascript, CSS3, HTML.</card-text>
                                        <btn tag="a" href='https://dansimonson.github.io/simongame/' target="_blank"
                                            color="primary">See
                                            More</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537118049/projectPhotos/wikipedia.jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Wikipedia Search</card-title>
                                        <card-text>A Wikipedia search engine that uses the Wikipedia API, vanilla
                                            Javascript, CSS3, HTML.</card-text>
                                        <btn tag="a" href='https://dansimonson.github.io/wikiviewer/' target="_blank"
                                            color="primary">See
                                            More</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537118827/projectPhotos/twitch.png"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Twitch</card-title>
                                        <card-text>An application using the twitch API for live streaming, applying
                                            Javascript, CSS3, HTML.</card-text>
                                        <btn tag="a" href='https://dansimonson.github.io/twitchtv/' target="_blank"
                                            color="primary">See
                                            More</btn>
                                    </card-body>
                                </card>
                            </column>
                        </row>
                    </carousel-item>
                </carousel>
            </container>-->

        <div class="dividertwo"></div>

        <v-parallax dark :src="imagetwo" height="380"></v-parallax>

        <div class="dividertwo"></div>
        <!--<div id="four">
            <p>Web Development Design, build, and manage web solutions for growing businesses. CREATIVE INSIGHTS,
                PERSPECTIVES, AND MORE… Passionate about the digital experience. Creating stuff real people will really
                love. Offering a visually rich, engaging interactive experience </p>
        </div>-->
        <!--<section id="section-c">
            <div class="box-1">
                Web Development with an emphasis on designing, building, and managing web solutions for growing
                businesses.
            </div>
            <div class="box-2">
                We are passionate about the digital experience. Creating stuff real people will really
                love.
            </div>
            <div class="box-3">
                We Offer a visually rich, engaging interactive experience
            </div>

        </section>-->
        <div class="row">
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
    //import { Carousel, CarouselItem, CarouselCaption, Container, Row, Column, Card, CardImg, CardBody, CardTitle, CardText, Btn } from 'mdbvue';


    export default {
        name: 'Parahome',
        components: {
            /* Carousel,
             CarouselItem,
             CarouselCaption,
             Container,
             Row,
             Column,
             Card,
             CardImg,
             CardBody,
             CardTitle,
             CardText,
             Btn*/
        },
        data() {
            return {
                image1: image1,
                imagetwo: imagetwo,
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

    .col {
        display: inline-block
    }

    #two {
        background: #00B4DB;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #0083B0, #00B4DB);
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

    /*
    #one {
        /*background-image: url(../assets/mariposaweb1.jpg);
        background-size: cover;
    display: flex;
    /*align-items: center;
        justify-content: center;
        font-weight: bold;
        font-family: big john;
        width: 100%;
        height: 100vh;
    }*/
    /*
#three {
background-image: url(../assets/butterfly2.jpg);
background-size: cover;
height: 400px;
background-attachment: fixed;
}*/

    /*
#four {
display: flex;
align-items: center;
justify-content: center;
font-family: 'Abril Fatface', cursive;
font-weight: bold;
font-size: 20px;
/*font-family: big john;*/
    /*width: 100%;
/*height: 100vh;*/
    /*height: 400px;
background: #2193b0;
/* fallback for old browsers */
    /*background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
/* Chrome 10-25, Safari 5.1-6 */
    /*background: linear-gradient(to right, #6dd5ed, #2193b0);
/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+

}*/

    /*
#section-c {
display: flex;

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
/* fallback for old browsers
background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
/* Chrome 10-25, Safari 5.1-6
background: linear-gradient(to right, #6dd5ed, #2193b0);
/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+
align-items: center;justify-content: center;
margin-bottom: 2px;
}

#section-c .box-2 {
background: #f9f9f9;
font-family: 'Abril Fatface', cursive;
font-weight: bold;
font-size: 14px;
color: #fff;
background: #00B4DB;
/* fallback for old browsers
background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);*/
    /* Chrome 10-25, Safari 5.1-6
background: linear-gradient(to right, #0083B0, #00B4DB);
/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+
align-items: center;
justify-content: center;
margin-bottom: 2px;
}*/
</style>
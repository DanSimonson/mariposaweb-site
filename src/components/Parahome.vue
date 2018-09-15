<template>
    <div id="parahome">
        <app-header></app-header>
        <v-parallax dark :src="image1">
            <v-layout align-center column justify-center>
                <h1 class="display-2 font-weight-thin mb-3 white--text">Build Your Application Today</h1>
                <h3 class="white--text"> ______________________ </h3>
                <h3 class="display-2 font-weight-thin mt-3 white--text">MARIPOSAWEB DEVELOPMENT</h3>

            </v-layout>
        </v-parallax>
        <div id="two" style="text-align: center;">
            <h1 class='title-text'>Portfolio Projects</h1>
            <container class=" mt-5 mb-5" style="display: inline-block;">
                <carousel :interval="8000" showControls showIndicators multi slide>
                    <carousel-item>
                        <row>
                            <column md="4">
                                <card class="mb-2">
                                    <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Card title</card-title>
                                        <card-text>Some quick example text to build on the card title and make up the
                                            bulk of the card's content.</card-text>
                                        <btn color="primary">Button</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Card title</card-title>
                                        <card-text>Some quick example text to build on the card title and make up the
                                            bulk of the card's content.</card-text>
                                        <btn color="primary">Button</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Card title</card-title>
                                        <card-text>Some quick example text to build on the card title and make up the
                                            bulk of the card's content.</card-text>
                                        <btn color="primary">Button</btn>
                                    </card-body>
                                </card>
                            </column>
                        </row>
                    </carousel-item>
                    <carousel-item>
                        <row>
                            <column md="4">
                                <card class="mb-2">
                                    <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Card title</card-title>
                                        <card-text>Some quick example text to build on the card title and make up the
                                            bulk of the card's content.</card-text>
                                        <btn color="primary">Button</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Card title</card-title>
                                        <card-text>Some quick example text to build on the card title and make up the
                                            bulk of the card's content.</card-text>
                                        <btn color="primary">Button</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Card title</card-title>
                                        <card-text>Some quick example text to build on the card title and make up the
                                            bulk of the card's content.</card-text>
                                        <btn color="primary">Button</btn>
                                    </card-body>
                                </card>
                            </column>
                        </row>
                    </carousel-item>
                    <carousel-item>
                        <row>
                            <column md="4">
                                <card class="mb-2">
                                    <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Card title</card-title>
                                        <card-text>Some quick example text to build on the card title and make up the
                                            bulk of the card's content.</card-text>
                                        <btn color="primary">Button</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Card title</card-title>
                                        <card-text>Some quick example text to build on the card title and make up the
                                            bulk of the card's content.</card-text>
                                        <btn color="primary">Button</btn>
                                    </card-body>
                                </card>
                            </column>
                            <column md="4" class="clearfix d-none d-md-block">
                                <card class="mb-2">
                                    <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg"
                                        alt="Card image cap" waves></card-img>
                                    <card-body>
                                        <card-title>Card title</card-title>
                                        <card-text>Some quick example text to build on the card title and make up the
                                            bulk of the card's content.</card-text>
                                        <btn color="primary">Button</btn>
                                    </card-body>
                                </card>
                            </column>
                        </row>
                    </carousel-item>
                </carousel>
            </container>
        </div>

        <v-parallax dark :src="imagetwo" height="380"></v-parallax>
        <div id="four">
            <p>Web Development</p>
            <p>Design, build, and manage web solutions for growing businesses. </p>
            <p>CREATIVE INSIGHTS, PERSPECTIVES, AND MORE…</p>
            <p>Passionate about the digital experience. Creating stuff real people will really love.</p>
            <p>Offering a visually rich, engaging interactive experience </p>
        </div>
        <app-footer></app-footer>
    </div>

</template>

<script>
    import image1 from "../assets/butterfly.jpg"
    import imagetwo from "../assets/butterfly2.jpg"
    import { Carousel, CarouselItem, CarouselCaption, Container, Row, Column, Card, CardImg, CardBody, CardTitle, CardText, Btn } from 'mdbvue';


    export default {
        name: 'Parahome',
        components: {
            Carousel,
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
            Btn
        },
        data() {
            return {
                image1: image1,
                imagetwo: imagetwo,

            }
        },
        mounted() {

        },
        destroyed() {

        },
        methods: {
            handleScroll() {
            }
        }
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

    .title-text {
        font-family: 'Gravitas One', cursive;
        font-weight: 700;
        color: #E3F2FD;
    }


    #one {
        /*background-image: url(../assets/mariposaweb1.jpg);
        background-size: cover;*/
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-family: big john;
        width: 100%;
        height: 100vh;
    }

    #two {
        background: #00B4DB;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #0083B0, #00B4DB);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    }

    #three {
        /*background-image: url(../assets/butterfly2.jpg);
        background-size: cover;
        height: 400px;
        background-attachment: fixed;*/
    }

    #four {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Abril Fatface', cursive;
        font-weight: bold;
        font-size: 20px;
        /*font-family: big john;*/
        width: 100%;
        /*height: 100vh;*/
        height: 400px;
        background: #2193b0;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #6dd5ed, #2193b0);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
</style>
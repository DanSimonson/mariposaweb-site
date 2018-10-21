<template>
    <div class='carousel-view'>
        <div class='button-prev' @click="arrowLeft" name='fade'></div>
        <transition-group class='carousel' tag="div">
            <div v-for="(slide, index) in slides" class='slide' :key="slide.id" :style="{backgroundImage: 'url(' + slides[index].imgLink + ')'}">
                <!--<img :src='slide.imgLink'>
                <h4> {{ slide.title }} </h4>-->
            </div>
        </transition-group>

        <div class='carousel-controls'>
            <div class='squares'>
                <div v-for="(slide, index) in slides" :key="slide.id">
                    <!--</div> :style="{backgroundImage: 'url(' + slides[index].imgLink + ')'}">-->
                    <!--<h4 style="color:black">{{slide.title}}</h4>
                    <a :href="`${slide.url}`">See More...</a>-->
                </div>
                <p class="pSlide-one" style="display:inline-block;">{{ slides[currentMsg].title }}</p>
                <p class="pslide-two" style="display:inline-block;">{{ slides[currentMsg].description }}</p>
                <a style="display:inline-block;" :href="`${slides[currentMsg].url}`" target="__blank">See
                    More...</a>
            </div>

        </div>
        <div class='button-next' @click="arrowRight"></div>
    </div>
</template>

<script>
    export default {
        name: 'Slide',
        data() {
            return {
                slides: [
                    {
                        imgLink: require('../assets/vueProjects/hand.jpg'),
                        title: 'Spa Business Website',
                        description: 'Spa website using Vue, Firestore Authentication, Route Guards, CSS Grid, Flexbox.',
                        id: 1,
                        url: 'https://user-info-ee17c.firebaseapp.com/'
                    },
                    {
                        imgLink: require('../assets/vueProjects/onlineStore.jpg'),
                        title: 'Online Store',
                        description: 'A Vue.js online store using vuex for state management and firebase as database.',
                        id: 2,
                        url: 'https://vue-blog-ed03b.firebaseapp.com/'
                    },
                    {
                        imgLink: require('../assets/vueProjects/hackerNews.png'),
                        title: 'Hacker-News Clone',
                        description: 'A Hacker-News Clone, utilizing Vue, Axios, Firestore, JavaScript, ES6.',
                        id: 3,
                        url: 'http://extra-small-stick.surge.sh'
                    },
                    {
                        imgLink: require('../assets/vueProjects/crud.jpg'),
                        title: 'Customer Information Application',
                        description: 'Customer Information create, read, update, delete app using Vue, Firestore, Bootstrap 4.',
                        id: 4,
                        url: 'https://human-resources-cb42b.firebaseapp.com/'
                    },
                    /*{
                        imgLink: require('../assets/vueProjects/recipeBox.jpg'),
                        title: 'Recipe Box',
                        description: 'Application that can create, edit, delete and save recipes, taking advantage of Vue, Firestore, MaterializeCSS, JavaScript.',
                        id: 5,
                        url: 'https://recipes-ddb43.firebaseapp.com/#/'
                    },*/
                    {
                        imgLink: require('../assets/vueProjects/childrenKusina2.jpg'),
                        title: 'Cucina Ni Nanay',
                        description: 'Filipino cuisine restaurant, taking advantage Vue, CSS Grid and Flexbox',
                        id: 6,
                        url: 'http://quickest-sneeze.surge.sh/#/'
                    }
                ],
                stopMe: null,
                stopMsg: null,
                currentMsg: ''
            }
        },
        created() {
            let selfie = this;
            this.stopMe = setInterval(() => {
                selfie.next();
            }, 4000)
            this.stopMsg = setTimeout(() => {
                this.nextSlide();
            }, 4000)
            this.nextSlide()
        },
        methods: {
            nextSlide() {
                if (this.currentMsg + 1 < this.slides.length) {
                    this.currentMsg++;
                } else {
                    this.currentMsg = 0
                }
            },
            next() {
                const first = this.slides.shift()
                this.slides = this.slides.concat(first)
            },
            previous() {
                const last = this.slides.pop()
                this.slides = [last].concat(this.slides)
            },
            arrowLeft() {
                clearInterval(this.stopMe);
                this.previous();
                let selfie = this;
                this.stopMe = setInterval(() => {
                    selfie.previous()
                }, 4000)
            },
            arrowRight() {
                clearInterval(this.stopMe);
                this.next();
                let selfie = this;
                this.stopMe = setInterval(() => {
                    selfie.next()
                }, 4000)
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Nixie+One');
    @import url('https://fonts.googleapis.com/css?family=Quattrocento+Sans');
    @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Nixie+One');

    h4 {
        color: #fff;
    }

    .myBtn {
        color: white;
        /*#BDBDBD;*/
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        font-weight: 900;
    }

    .carousel-view {
        position: relative;
        height: 600px;
        /*border: 5px solid green;*/
    }

    .carousel-view .button-prev,
    .carousel-view .button-next {
        /*background-color: yellow;*/
        position: absolute;
        top: 50%;
        border: 12px solid transparent;
        /*border-left-color: transparent;
          border-right-color: purple;
          border-bottom-color: violet;
          border-top-color: crimson;
          */
    }

    .carousel-view .button-prev {
        border-right-color: white;
        transform: rotate(-3deg);
        z-index: 1;
    }

    .carousel-view .button-next {
        border-left-color: white;
        /*transform: rotate(0deg);*/
        left: 97%;
    }

    .carousel {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 100%;
        min-height: 63%;
        /*border: 5px solid red*/
    }

    .carousel-controls {
        /*border: 5px solid mediumslateblue;*/
        position: relative;
        height: 180px;
        /*200px;*/
        ;
    }

    .carousel-controls .squares {
        position: absolute;
        /*color: white;
        font-size: 1.5em;*/
        font-family: 'Libre Baskerville', serif;
        line-height: 1.2;
        color: white;
        /*font-weight: 700;
        font-family: 'Quattrocento Sans', sans-serif;*/
        /*border: 5px solid yellow;*/
        height: 200px;
        width: 400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2px;
    }

    p.pSlide-one {
        /*font-family: 'Libre Baskerville', serif;
        line-height: 1 !important;
        padding-bottom: 0;*/
        font-size: 1.5em;
    }

    p.pslide-two {
        /*font-family: 'Libre Baskerville', serif;
        padding-top: 0;
        line-height: 1 !important;*/
        font-size: 1.3em;
    }

    .carousel-controls .squares a {
        /*font-family: 'Quattrocento Sans', sans-serif;
        font-size: 1em;*/
        margin-bottom: 20px;
        font-size: 1.3em;
        color: white;

    }

    .carousel-controls .squares a:hover {
        color: wheat;
        text-decoration: none;
    }

    .slide {
        flex: 0 0 20em;
        height: 20em;
        margin: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.1em solid #000;
        border-radius: 50%;
        transition: transform 0.3s ease-in-out;
    }

    .slide:first-of-type {
        opacity: 0;
    }

    .slide:last-of-type {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.8s ease;
        overflow: hidden;
        visibility: visible;
        opacity: 1;
        position: absolute;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        visibility: hidden;
    }

    /*media queries*/
    @media screen and (max-width: 320px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            /*right: 3%;
            padding: 2px;*/
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {
            padding: 2px;
        }

        .carousel-controls .squares .pslide-one p {
            font-size: 1em;
        }

        .carousel-controls .squares .pslide-two p {
            font-size: 1em;
        }

        .carousel-controls .squares a {
            font-size: 1em;
        }
    }

    /*media queries*/
    @media screen and (max-width: 375px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            /* right: 3%;
            margin-left: -12px;*/
        }

        .carousel-controls {}

        .carousel-view .button-prev {}

        .carousel-controls .squares {
            width: 250px;
        }

        .carousel-controls .squares .pslide-one p {
            font-size: 1em;
        }

        .carousel-controls .squares .pslide-two p {
            font-size: 1em;
        }

        .carousel-controls .squares a {
            font-size: 1em;
        }
    }

    @media screen and (max-width: 425px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            /*right: 3%;
            margin-left: -12px;*/
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {
            padding: 2px;
            font-size: 1em;
            line-height: 1;
        }
    }

    @media screen and (max-width: 768px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            /*right: 3%;
            padding: 2px;*/
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {}
    }

    @media screen and (max-width: 1024px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            /*right: 3%;
            margin-left: -8px;*/
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {}
    }

    @media screen and (max-width: 1440px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            /*right: 3%;
            margin-left: 3px;*/
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {}
    }

    @media screen and (max-width: 2560px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            /*right: 3%;
            padding: 2px;*/
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {}
    }
</style>
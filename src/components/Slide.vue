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
                <p style="display:inline-block;">{{ slides[currentMsg].title }}</p>
                <p style="display:inline-block;">{{ slides[currentMsg].description }}</p>
                <a style="display:inline-block;" :href="`${slides[currentMsg].url}`" target="__blank">See More...</a>
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
                vueExamples: [
                    {
                        imgLink: require('../assets/vueProjects/hand.jpg'),
                        title: 'Spa Business Website',
                        description: 'Spa website using Vue, Firestore Authentication, Route Guards, featuring CSS Grid & Flexbox',
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
                        description: 'A create, read, update, delete appliction to keep track of customer information using Vue, Firestore, Bootstrap 4',
                        id: 4,
                        url: 'https://human-resources-cb42b.firebaseapp.com/'
                    }
                ],

                slides: [
                    {
                        imgLink: require('../assets/vueProjects/hand.jpg'),
                        title: 'Spa Business Website',
                        description: 'Spa website using Vue, Firestore Authentication, Route Guards, featuring CSS Grid & Flexbox',
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
                        description: 'A create, read, update, delete appliction to keep track of customer information using Vue, Firestore, Bootstrap 4',
                        id: 4,
                        url: 'https://human-resources-cb42b.firebaseapp.com/'
                    },
                    {
                        imgLink: require('../assets/vueProjects/recipeBox.jpg'),
                        title: 'Recipe Box',
                        description: 'Application that can create, edit, delete and save recipes, taking advantage of Vue, Firestore, MaterializeCSS, JavaScript',
                        id: 5,
                        url: 'https://recipes-ddb43.firebaseapp.com/#/'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Quattrocento+Sans');

    h4 {
        color: #fff;
    }

    /*.flex1 {
        flex: 1 1 20em;
    }

    .flex2 {
        flex: 2 2 20em;
    }*/

    .carousel-view {
        position: relative;
        width: 100%;
        height: 100%;
        /*border: 5px solid black;*/

    }

    .carousel-view .button-prev,
    .carousel-view .button-next {
        /*height: 20px;
          width: 20px;
          background-color: yellow;*/
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
        border-right-color: black;
        transform: rotate(-3deg);
        z-index: 1;

    }


    .carousel-view .button-next {
        border-left-color: black;
        transform: rotate(3deg);
        left: 98%;
    }

    .carousel-controls .squares {
        font-family: 'Quattrocento Sans', sans-serif;
        position: absolute;
        color: white;
        top: 79%;
        left: 50%;
        width: 60%;
        padding: 10px;
        transform: translate(-50%, -50%);
        font-size: 1.5em;
        /*border: 5px solid yellow;*/
    }

    .carousel-controls .squares a {
        font-family: 'Quattrocento Sans', sans-serif;
        font-size: 1em;
        color: #fff;

    }

    .carousel-controls .squares div {
        /*position: absolute;
        height: 40px;
        width: 40px;
        margin-right: 10px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        top: 70%;
        left: 70%;
        transform: translate(-50%, -50%);*/

    }

    .carousel {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 100%;
        min-height: 70%;
        /*border: 1px solid transparent;*/

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
    /*
    @media screen and (max-width: 320px) {
        .slide {
            height: 21em;
            flex: 0 0 21em;
        }

        .carousel-view .button-next {
            right: 3%;
            padding: 2px;
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {

            left: 30%;
        }


    }

    @media screen and (max-width: 375px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            right: 3%;
            padding: 2px;
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {

            left: 30%;
        }
    }

    @media screen and (max-width: 425px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            right: 3%;
            padding: 2px;
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {

            left: 30%;
        }
    }
    
    @media screen and (max-width: 768px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            right: 3%;
            padding: 2px;
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {

            left: 30%;
        }
    }

    @media screen and (max-width: 1024px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            right: 3%;
            padding: 2px;
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {
            left: 30%;
        }
    }

    @media screen and (max-width: 1440px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            right: 3%;
            padding: 2px;
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {
            left: 30%;
        }
    }

    @media screen and (max-width: 2560px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            right: 3%;
            padding: 2px;
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {
            left: 30%;
        }
    }*/
</style>
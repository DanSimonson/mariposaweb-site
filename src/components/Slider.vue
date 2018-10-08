<template>
    <div>
        <transition name="fade" mode="out-in" tag="div">
            <div id="slider" :style="{backgroundImage: 'url(' + images[index].url + ')'}">
                <header id="showcase">
                    <div>
                        <transition appear appear-name="custom-classes-transition" appear-active-class="animated rubberBand">
                            <h1 v-if="showh1">Welcome To The Mariposaweb</h1>

                        </transition>
                        <transition appear appear-name="custom-classes-transition" appear-active-class="animated jello">
                            <p v-if="showp"> modern web development using the latest JavaScript techniques and Vue.</p>
                        </transition>
                    </div>


                </header>
                <!--<div id="content">
                    <div class="one"><i class="material-icons">
                            spa
                        </i>relax</div>
                    <div class="two"><i class="material-icons">
                            sentiment_very_satisfied
                        </i>play</div>
                    <div class="three"><i class="material-icons">
                            local_dining
                        </i>eat</div>
                    <div class="four"><i class="material-icons">
                            contact_mail
                        </i> book</div>
                    <div class="five">5</div>
                                                        <div class="six">6</div>
            </div>-->
            </div>
        </transition>
    </div>
</template>
<script>
    //import Slides from './Slides.vue'
    export default {
        name: 'Slider',
        /*components: {
            Slides
        },*/
        data() {
            return {
                images: [
                    {
                        id: 0,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1539010572/projectPhotos/mariposaweb/network.jpg'
                    },
                    {
                        id: 1,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1539010600/projectPhotos/mariposaweb/ufo.jpg'
                    },
                    {
                        id: 2,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1539010588/projectPhotos/mariposaweb/syntax.jpg'
                    },
                    {
                        id: 3,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1539010561/projectPhotos/mariposaweb/internet.jpg'
                    },
                    {
                        id: 4,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1539010548/projectPhotos/mariposaweb/code.jpg'
                    }
                ],
                index: 0,
                showh1: true,
                showp: true

            }
        },
        created() {
            //set proxy so vue can see "this" object when using move() method
            let self = this;
            setInterval(() => {
                self.move();
            }, 6000)

        },
        computed: {

        },
        methods: {
            move() {
                let indexFlag = this.index;
                indexFlag++;
                if (indexFlag >= this.images.length) {
                    indexFlag = 0
                }
                this.index = indexFlag;
            }
        }
    }
</script>
<style scoped>
    #slider {
        display: flex;
        flex-direction: column-reverse;
        height: 100vh;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .fade-enter-active {
        animation-name: fadeEnter;
        animation-duration: 2s;
        animation-iteration-count: 1;
    }

    .fade-move {
        transition: all 1s;
    }

    .fade-leave-active {
        animation-name: fadeLeave;
        animation-duration: 2s;
        animation-iteration-count: 1;
        position: absolute;
    }

    @keyframes fadeEnter {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeLeave {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    #content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, minmax(100px, auto));
        grid-gap: 1px;
        /*max-width: 960px;
        margin: 0 auto;*/
        margin-top: 200px;
        opacity: .5;
        height: 75px;
        overflow: hidden;
        color: oldlace;
        text-align: center;
    }

    #content div {
        /*background: #3bbced;*/
        padding: 30px;
        margin-top: 1px;

    }

    #content div:nth-child(even) {
        /*background: #777;*/
        padding: 30px;
        margin-top: 1px;

    }

    .one {
        background: blue;
    }

    .two {
        background: indigo;
    }

    .three {
        background: green;
    }

    .four {
        background: red;
    }

    #showcase {
        /*background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1537088446/background2.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /*color: black;
    #8D6E63;*/
    }

    #showcase:before {
        /*background: #E8EAF6;*/
    }

    #showcase p {
        animation-delay: 1s;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        font-size: 21px;
        font-weight: 900;
        text-shadow: 0 1px #808d93,
            -1px 0 #cdd2d5,
            -1px 2px #808d93,
            -2px 1px #cdd2d5,
            -2px 3px #808d93,
            -3px 2px #cdd2d5,
            -3px 4px #808d93,
            -4px 3px #cdd2d5,
            -4px 5px #808d93,
            -5px 4px #cdd2d5,
            -5px 6px #808d93,
            -6px 5px #cdd2d5,
            -6px 7px #808d93,
            -7px 6px #cdd2d5,
            -7px 8px #808d93,
            -8px 7px #cdd2d5;
    }


    #showcase h1 {
        font-size: 3em;
        animation-delay: 1s;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        font-weight: 500;
        /*text-shadow: 2px 2px 4px #000000;*/
        text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee,
            2px 1px 1px #ccc, 1px 2px 1px #eee,
            3px 2px 1px #ccc, 2px 3px 1px #eee,
            4px 3px 1px #ccc, 3px 4px 1px #eee,
            5px 4px 1px #ccc, 4px 5px 1px #eee,
            6px 5px 1px #ccc, 5px 6px 1px #eee,
            7px 6px 1px #ccc;
    }
</style>
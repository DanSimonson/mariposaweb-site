<template>
    <div>
        <transition name="fade">
            <div id="slider" :style="{backgroundImage: 'url(' + images[index].url + ')'}">
                <header id="showcase">
                    <div class='gradientMe'>
                        <p>{{ msgs[currentMsg].msg }}</p>
                    </div>
                </header>
            </div>
        </transition>

        <!--<transition name="slide-anim">
        <div id="slider" :style="{backgroundImage: 'url(' + images[index].url + ')'}">
            <header id="showcase">
                <div class='gradientMe'>
                    <P>{{ msgs[currentMsg].msg }}</P>
                </div>
            </header>
        </div>
        </transition>-->
    </div>
</template>
<script>
    export default {
        name: 'Slider',

        data() {
            return {
                msgs: [
                    { msg: 'We Focus on solving complex problems with clear and effective solutions.' },
                    { msg: 'We create custom solutions – be it during design, development or deployment.' },
                    { msg: 'We build a digital E-Commerce bridge between products and customers. ' },
                    { msg: 'We leverage the capabilities of Vue.js and JavaScript to fit needs.' },
                    { msg: 'Transforming ideas. Digitally. We look for ways to provide better solutions.' },
                ],
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
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1539023410/projectPhotos/mariposaweb/syntax.jpg'
                    },
                    {
                        id: 3,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1539022882/projectPhotos/mariposaweb/internet.jpg'
                    },
                    {
                        id: 4,
                        url: 'https://res.cloudinary.com/dmglopmul/image/upload/v1539024962/projectPhotos/mariposaweb/code.jpg'
                    }
                ],
                index: 0,
                showh1: true,
                showp: true,
                currentMsg: 0

            }
        },
        created() {
            //set proxy so vue can see "this" object when using move method
            var self = this;
            setInterval(() => {
                self.move();
            }, 6000)
            //recursive continuous call for msg on front page
            setInterval(() => {
                self.next();
            }, 6000)
            self.next()

            /*function recursiveArray() {
                //console.log("five");
                if (this.dataSoon.length) {
                    this.data.push(this.dataSoon.shift());
                } else {
                    clearInterval(this.interval);
                }
            }

            self.interval = setInterval(() => {
                if (this.data.length) {
                    this.data.push(this.dataSoon.shift());
                } else {
                    clearInterval(this.interval);
                }
            }, 2000)*/

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
            },

            next: function () {
                if (this.currentMsg + 1 < this.msgs.length) {
                    this.currentMsg++;
                } else {
                    this.currentMsg = 0
                }

            }

        }
    }
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Gravitas+One');

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

    .seeMeList {
        font-size: 21px;
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

    .fade-enter,
    .fade-leave-to {
        opacity: 0;

    }

    .fade-enter-to,
    .fade-leave {
        opacity: 1;
    }

    .fade-enter-active .fade-leave-active {
        transition: opacity transform 200ms ease-out;
    }



    /*.msgMe-enter-active {
        animation: fade 3s;
        animation-delay: .5s;
    }

    .msgMe-leave-active {
        animation: fade 3s;
    }

    .slide-anim-enter-active- {
        animation: coming 1s;
        animation-delay: .5s;
        opacity: 0;
    }

    .slide-anim-leave-active {
        animation: going 1s;
    }

    @keyframes coming {
        from {
            transform: translateX(-50px);
            /*opacity: 0;
        }

        to {
            transform: translateX(0px);
            /*opacity: 1;
        }
    }

    @keyframes coming {
        0% {
            transform: scale(0);
            opacity: 0;

        }

        50% {
            transform: scale(1.5);
            opacity: .5;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes going {
        0% {
            transform: scale(1);
            opacity: 1;
        }

        50% {
            transform: scale(1.5);
            opacity: .5;
        }

        100% {
            transform: scale(0);
            opacity: 0;
        }
    }*/

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
    }


    .gradientMe {
        background: linear-gradient(rgba(20, 20, 20, .03),
            rgba(20, 20, 20, .03));
        border-radius: 16px;

    }

    #showcase p {
        font-family: 'Gravitas One', cursive;
        color: white;
        /*#BDBDBD;*/
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        font-size: 1.5em;
        text-decoration: none;

    }



    #showcase p {
        /*animation-duration: 4s;
        /*animation-delay: 1s;
        animation-duration: 5s;
        animation-iteration-count: infinite;*/
        /*font-size: 2em;
        letter-spacing: 0.1em;
        color: #FAFAFA;
        text-decoration: underline;
        text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
            0px 8px 13px rgba(0, 0, 0, 0.7),
            0px 18px 23px rgba(0, 0, 0, 0.7);
        /*text-shadow: 0 1px #808d93,
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
            -8px 7px #cdd2d5;*/

    }

    #showcase h1 {
        /*font-size: 2.5em;
        animation-duration: 4s;
        color: #FAFAFA;
        text-decoration: underline;
        text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
            0px 8px 13px rgba(0, 0, 0, 0.7),
            0px 18px 23px rgba(0, 0, 0, 0.7);
        /*animation-delay: 1s;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        font-weight: 500;
        /*text-shadow: 2px 2px 4px #000000;
        text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee,
            2px 1px 1px #ccc, 1px 2px 1px #eee,
            3px 2px 1px #ccc, 2px 3px 1px #eee,
            4px 3px 1px #ccc, 3px 4px 1px #eee,
            5px 4px 1px #ccc, 4px 5px 1px #eee,
            6px 5px 1px #ccc, 5px 6px 1px #eee,
            7px 6px 1px #ccc;*/
    }

    /*media queries*/
    @media screen and (max-width: 320px) {}

    @media screen and (max-width: 375px) {}

    @media screen and (max-width: 425px) {
        #showcase p {
            margin-top: 2px;
            font-size: 1.5em;
            line-height: 1.2 !important;
        }
    }
</style>
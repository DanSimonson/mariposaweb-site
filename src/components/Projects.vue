<template>
    <div class='page'>
        <app-header></app-header>
        <v-app id="inspire">
            <div id='spacer'></div>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <v-flex class='card-border' d-flex xs12 md6 mt-3 v-for="card in cards" v-bind="{ [`xs${card.flex}`]: true }" :key="card.title">
                        <v-card>
                            <v-card-media :src="card.src" height="200px"></v-card-media>
                            <v-card-actions>
                                <v-btn ripple flat class='cardBtn'>{{card.title}}</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn class='btnStrng' color="blue-grey" dark v-on:click.native="display(card)">View
                                    <v-icon dark right>laptop_chromebook</v-icon>
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn icon @click.native="show = !show">
                                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-slide-y-transition>
                                <v-card-text v-show="show">
                                    {{card.text}}
                                </v-card-text>
                            </v-slide-y-transition>

                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
            <div id='footSpace'></div>
            <app-footer></app-footer>
        </v-app>
    </div>
    <!--<div>
        <app-header></app-header>
        <div id="app">
            <div id='spacer'></div>
            <v-app id="inspire">
                <v-layout column>
                    -->
    <!--<v-flex d-flexx xs12 sm6 md4>
                        <br>
                        <v-card>
                            <v-container fluid grid-list-md>
                                <v-layout row wrap>
                                    <v-flex d-flex v-for="card in cards" v-bind="{ [`xs${card.flex}`]: true }" :key="card.title">
                                        <v-card>
                                            <v-card-media :src="card.src" height="200px">
                                                <v-container fill-height fluid>
                                                    <v-layout fill-height>
                                                        <v-flex xs12 align-end flexbox>
                                                            <!--<span class="headline strngBtn" v-text="card.title"></span>-->
    <!--</v-flex>
                                                    </v-layout>
                                                </v-container>
                                            </v-card-media>
                                            <v-card-actions>
                                                <v-btn ripple flat class='cardBtn'>{{card.title}}</v-btn>
                                                <v-spacer></v-spacer>
                                                <v-btn class='btnStrng' color="blue-grey" dark v-on:click.native="display(card)">View
                                                    <v-icon dark right>laptop_chromebook</v-icon>
                                                </v-btn>
                                                <v-spacer></v-spacer>
                                                <v-btn icon @click.native="show = !show">
                                                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                            <v-slide-y-transition>
                                                <v-card-text v-show="show">
                                                    {{card.text}}
                                                </v-card-text>
                                            </v-slide-y-transition>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-app>
        </div>
        <div id='footSpace'></div>
        <app-footer></app-footer>
    </div>-->
</template>
<script>
    export default {
        name: 'projects',
        data() {
            return {
                show: false,
                lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam 
                ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim
                in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
                cards: [
                    {
                        title: 'Trump News', link: 'http://agonizing-shirt.surge.sh/#/',
                        text: 'Goal: Build a news list about President Trump. Technologies: Vue, Vue-Resource, Vuetify, JavaScript, ES6',
                        src: "https://cdn.buttercms.com/gRQpSAHmToKvahSVWxsA", flex: 6

                    },
                    {
                        title: 'vue/axios', link: 'http://extra-small-stick.surge.sh',
                        text: 'Goal: Build Hacker-News Clone. Technologies: Vue, Axios, Firestore, JavaScript, ES6',
                        src: "https://cdn.buttercms.com/cJPqFLNdSyaK30Bw7kbN", flex: 6

                    },
                    {
                        title: 'CRUD App', link: 'https://human-resources-cb42b.firebaseapp.com/',
                        text: 'Goal: Store and update client information. Technologies: Vue, Firestore, Bootstrap 4, JavaScript, ES6',
                        src: "https://res.cloudinary.com/dmglopmul/image/upload/v1531890965/mariposaImageP.jpg", flex: 6

                    },
                    {
                        title: 'Spa Website', link: 'https://user-info-ee17c.firebaseapp.com/',
                        text: 'Goal: User can view spa business website. Technologies: Vue, Firestore, MaterializeCSS, Vuetify, JavaScript, ES6',
                        src: "https://res.cloudinary.com/dmglopmul/image/upload/v1530327261/aspa.jpg", flex: 6
                    },
                    {
                        title: 'Recipe Box', link: 'https://recipes-ddb43.firebaseapp.com/#/',
                        text: 'Goal: User can create, edit, delete and save recipes. Technologies: Vue, Firestore, MaterializeCSS, JavaScript, ES6',
                        src: "https://res.cloudinary.com/dmglopmul/image/upload/v1529491072/recipeBox.jpg", flex: 6
                    },
                    {
                        title: 'Markdown Peek', link: "http://mellow-sock.surge.sh/",
                        text: "Goal: User can type GitHub-flavored Markdown into a text area. User can see a preview of the output of his or her markdown that is updated as he or she types Technologies: ES6, React, CSS3, Javascript",
                        src: 'https://res.cloudinary.com/dmglopmul/image/upload/v1529501983/markdown.png', flex: 6
                    },
                    {
                        title: 'Calculator', link: 'https://dansimonson.github.io/calculator/',
                        text: 'Goal: A fully functioning calculator Technologies: JavaScript, Jquery, Bootstrap',
                        src: 'https://res.cloudinary.com/dmglopmul/image/upload/v1529504760/calculator.jpg', flex: 6
                    },
                    {
                        title: 'Simon Game', link: 'https://dansimonson.github.io/simongame/',
                        text: 'Goal: Simulate the simon game online  Technologies: Javascript, CSS3, HTML',
                        src: 'https://res.cloudinary.com/dmglopmul/image/upload/v1529505532/simon.jpg', flex: 6

                    },
                    {
                        title: 'Wikipedia Search', link: 'https://dansimonson.github.io/wikiviewer/',
                        text: 'Goal: Learn new stuff with a wikipedia search engine that uses the Wikipedia api Technologies: Javascript, CSS3, HTML',
                        src: 'https://res.cloudinary.com/dmglopmul/image/upload/v1529506690/wikipedia.jpg', flex: 6
                    },
                    {
                        title: 'Twitch', link: 'https://dansimonson.github.io/twitchtv/',
                        text: 'Goal: Use the Twitch api for streaming shows Technologies: Javascript, CSS3, HTML',
                        src: 'https://res.cloudinary.com/dmglopmul/image/upload/v1529506574/twitch.png', flex: 6
                    },
                    {
                        title: 'Local Weather', link: 'https://dansimonson.github.io/localweather/',
                        text: 'Goal: Access a weather api to find the local weather Technologies: Javascript, CSS3, HTML',
                        src: 'https://res.cloudinary.com/dmglopmul/image/upload/v1529508180/weather.jpg', flex: 6
                    },
                    {
                        title: 'Pomodoro Clock', link: 'https://dansimonson.github.io/pomodoro/',
                        text: 'Goal: A Pomodoro clock to help with time management. Technologies: Javascript, CSS3, HTML',
                        src: 'https://res.cloudinary.com/dmglopmul/image/upload/v1529508744/pomodoro.png', flex: 6

                    },
                    {
                        title: 'Tictactoe Game', link: 'https://dansimonson.github.io/tictactoe/',
                        text: 'Goal: An online TicTacToe game Technologies: Javascript, CSS3, HTML',
                        src: 'https://res.cloudinary.com/dmglopmul/image/upload/v1529508887/tictactoe.jpg', flex: 6
                    },
                    {
                        title: 'Random Quotes', link: 'https://dansimonson.github.io/randomquotemachine/#',
                        text: 'Goal: An online random quote generator that can tweet. Technologies: Javascript, CSS3, HTML',
                        src: 'https://res.cloudinary.com/dmglopmul/image/upload/v1529509063/quote.jpg', flex: 6
                    },
                    {
                        title: 'todo list', link: 'https://todolistforprocrastinators.herokuapp.com/todo',
                        text: 'Goal: Full stack app with Javascript on the front end and Express and MongoDB running in the background. App deployed on Heroku. Technologies: Javascript, CSS3, HTML',
                        src: 'https://res.cloudinary.com/dmglopmul/image/upload/v1529509174/todoList.jpg', flex: 6
                    }
                ]
            }
        },
        methods: {
            display(card) {
                console.log(card.link)
                var win = window.open(card.link, '_blank');
                win.focus();
            }
        }
    }

</script>
<style>
    .card-border {
        border: 1px solid gray
    }

    #inspire {
        background-color: #E8EAF6;
    }

    #inspire:before {
        background: #E8EAF6;
    }

    .btnStrng {
        box-shadow: inset 5px 5px 10px #000000,
        inset -5px -5px 10px blue;
    }

    .cardBtn {
        /*
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
        -8px 7px #cdd2d5;*/
    }

    .strngBtn {
        color: #BDBDBD;
        font-weight: 900;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }

    #footSpace {
        height: 100px;
    }

    #spacer {
        height: 70px;
    }

    .page {
        position: fixed;
        width: inherit;
    }
</style>
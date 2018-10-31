<template>
    <div>
        <div v-if="showLogo" id="divfix">MariposaWeb</div>
        <Navigation></Navigation>
        <div class='container'>
            <div class='wrapper'>
                <div class="contain">
                    <form action="https://formspree.io/dansimonson@mariposaweb.net" method="POST">
                        <ul class="flex-outer">
                            <li>
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="">
                            </li>
                            <li>
                                <label for="email">Email</label>
                                <input name="email" type="email" id="email" placeholder="">
                            </li>
                            <li>
                                <label for="message">Message</label>
                                <textarea style='border: 1px solid #333;' rows="6" id="message" name="message"
                                    placeholder=""></textarea>
                            </li>
                            <li>
                                <button type="submit">Submit</button>
                            </li>
                        </ul>
                    </form>
                </div>
                <div class="grid">
                    <div class='box'>
                        <img src="../assets/me.jpg">
                        <span> I grew up in silicon valley with a dream to
                            become a computer programmer. I've spent a great deal of time thinking about the technical
                            aspects of web development so you don't have to. Build your brand. Get new business.
                            Email me to get started.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%20silang&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://www.maps-erstellen.de"></a>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
    <!--<div id='outer'>
        <div v-if="showLogo" id="divfix">MariposaWeb</div>
        <Navigation></Navigation>
        <!--<nav-bar></nav-bar>
        <div id='spacer'></div>
        <v-container class='bordered'>

            <div id='spacer'></div>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <h4>Contact</h4>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                    <v-form action="https://formspree.io/dansimonson@mariposaweb.net" method="POST" v-model="valid">
                        <v-text-field name="nm" v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
                        <v-text-field name="_replyto" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                        <v-text-field name="MSG" label="Message" multi-line v-model="message" required></v-text-field>
                        <v-flex s12 sm6 offset-sm3>
                            <v-btn type="submit" value="Send">Submit</v-btn>
                        </v-flex>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%20silang&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://www.maps-erstellen.de"></a>
            </div>
        </div>
        <div id='footSpace'></div>
        <app-footer></app-footer>
    </div>-->

</template>
<script>
    export default {
        data: () => ({
            valid: false,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            showLogo: true
        }),
        methods: {
            handleScroll() {
                if (window.scrollY > 30) {
                    this.showLogo = false;
                } else {
                    this.showLogo = true;
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Kalam');

    .container {
        /*border: 5px solid aquamarine;*/
        margin-top: 20px;

    }

    /*wrap my form and image/text sections*/
    .wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        /*border: 5px solid brown;*/
        max-width: 960px;
        margin: 20px auto;
        background: url('../assets/wrinkle.jpg');
        background-repeat: no-repeat;
        background-position: cover;
        border-radius: 4px;
    }

    /*form*/
    .contain {
        /*border: 5px solid black;*/
        max-width: 500px;
        padding: 5px 0;
    }

    textarea {
        width: 350px;
    }

    .flex-outer li {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        flex: 0 1 auto;
        flex-direction: column;
        font-family: 'Kalam', cursive;
    }

    .flex-outer li button {
        border: none;
        background: #333;
        color: #f2f2f2;
        text-transform: uppercase;
        letter-spacing: .09em;
        border-radius: 2px;
        font-family: 'Kalam', cursive;
    }

    .flex-outer li button:active,
    .flex-outer li button:hover {
        /*border: none;*/
        color: #333;
        background: white;
        /*text-transform: uppercase;
        letter-spacing: .09em;
        border-radius: 2px;
        font-family: 'Kalam', cursive;*/
    }


    /*image and text*/
    .grid {
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        align-items: center;
        flex-wrap: wrap;
        /*border: 5px solid green;*/
    }

    .box {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        margin: 3px;
        padding: 10px 2px 2px 10px;
        text-align: justify;
    }

    .box img {
        flex-grow: 0;
        flex-shrink: 0;
        border-radius: 50%;
        max-width: 100px;
        max-height: 100px;
    }

    span {
        padding-left: 5px;
        font-family: 'Kalam', cursive;
        font-size: 1.2em;
    }

    #divfix {
        font-family: 'Great Vibes', cursive;
        top: 6px;
        left: 75px;
        position: fixed;
        z-index: 3000;
        color: #FFE082;
        padding: 5px;
        font-size: 2em;

    }

    #name,
    #email,
    #message {
        border: 1px solid #333;
    }

    /*media Queries*/
    @media only screen and (max-width: 700px) {
        .wrapper {
            display: grid;
            grid-template-columns: 1fr;
            /*grid-column-gap: 10px;
            border: 5px solid yellow;*/
        }

        .container {
            width: 768px;
        }


    }

    /* old content*/
    /*
    #divfix {
        font-family: 'Great Vibes', cursive;
        top: 6px;
        left: 75px;
        /*bottom: 0;
        right: 0;*/
    /*position: fixed;
        z-index: 3000;
        color: #FFE082;
        padding: 5px;
        font-size: 2em;
    }
    #outer {
        background-color: #CFD8DC;
        ;
    }

    #footSpace {
        height: 100px;
    }

    #spacer {
        height: 100px;
    }

    .mapouter {
        text-align: right;
        height: 500px;
        width: 600px;
        margin: 0 auto;
    }

    .gmap_canvas {
        height: 500px;
        width: 600px;
    }

    .bordered {
        border: 10px outset burlywood;
        border-radius: 8px;
        background: #E8EAF6;
        margin-bottom: 10px;
    }*/
</style>
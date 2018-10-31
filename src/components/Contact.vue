<template>
    <div id='outer'>
        <div v-if="showLogo" id="divfix">MariposaWeb</div>
        <Navigation></Navigation>
        <!--<nav-bar></nav-bar>-->
        <div id='spacer'></div>
        <v-container class=''>

            <div id='spacer'></div>
            <v-layout row>
                <v-flex lg6>
                    <!-- xs12 sm6 offset-sm3>-->
                    <!---->
                    <h4>Contact</h4>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex lg6>
                    <!--xs12 sm6 offset-sm3-->
                    <v-form action="https://formspree.io/dansimonson@mariposaweb.net" method="POST" v-model="valid">
                        <v-textarea name="nm" v-model="name" :rules="nameRules" :counter="10" label="Name" required>
                        </v-textarea>
                        <!--v-text-field-->
                        <v-textarea name="_replyto" v-model="email" :rules="emailRules" label="E-mail" required>
                        </v-textarea>
                        <v-textarea name="MSG" label="Message" multi-line v-model="message" required>
                        </v-textarea>
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
    </div>

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
            showLogo: true,
            name: '',
            message: ''
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
    v.container.bordered {
        max-width: 400px;
    }

    div.layout {
        max-width: 400px;
    }

    #divfix {
        font-family: 'Great Vibes', cursive;
        top: 6px;
        left: 75px;
        /*bottom: 0;
        right: 0;*/
        position: fixed;
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
    }
</style>
<template>
    <div id='outer'>
        <Navigation></Navigation>
        <!--<nav-bar></nav-bar>-->
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
            ]
        })
    }

</script>
<style scoped>
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
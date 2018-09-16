<script>
    export default {
        data: () => ({
            icons: ['fab fa-github', 'fab fa-facebook', 'fab fa-linkedin', 'fab fa-twitter'],
            rows: [
                {
                    title: 'Company Name',
                    children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
                },
                {
                    title: 'Products',
                    children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
                },
                {
                    title: 'Useful Links',
                    children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
                }
            ]
        }),
        methods: {
            show(anIcon) {
                console.log(anIcon.link)
                if (anIcon === 'fab fa-github') {
                    var win = window.open('https://github.com/DanSimonson/', '_blank');
                    win.focus();
                } else if (anIcon === 'fab fa-facebook') {
                    var win = window.open("https://www.facebook.com/simonsondan", '_blank');
                    win.focus();
                } else if (anIcon === 'fab fa-linkedin') {
                    var win = window.open('https://www.linkedin.com/in/dansimonsonmariposaweb/', '_blank');
                    win.focus();
                } else if (anIcon === 'fab fa-twitter') {
                    var win = window.open("https://twitter.com/simonsondan?lang=en", '_blank');
                    win.focus();
                }
            }
        }
    }
</script>

<template>
    <v-footer height="auto" id='show'>
        <v-card flat tile class="flex blue-grey darken-3 myBtn ">
            <v-card-text class="text-xs-center">
                <strong class="subheading">This site is powered with <a style="color:#BDBDBD;text-decoration: none;font-weight: bold"
                        href="https://buttercms.com/" target="_blank">Buttercms</a>
                    and <a style="color:#BDBDBD;text-decoration: none;font-weight: bold" href="https://vuejs.org/"
                        target="_blank">Vue</a>.
                    Get connected with me on social networks!</strong>
                <v-spacer></v-spacer>
                <v-btn v-for="icon in icons" :key="icon" icon dark class="mx-3" v-on:click.native="show(icon)">
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-text class="justify-center myBtn">
            <!--grey lighten-2-->
            <!--""-->
            &copy;2018 — mariposaweb
            </v-card-actions>
        </v-card>
    </v-footer>
</template>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    #show {
        background-color: #1B5E20;
    }

    .myBtn {
        color: #BDBDBD;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        font-weight: 900;
    }
</style>
<script>
    export default {
        data() {
            return {
                drawer: null,
                items: [
                    { title: 'Home', icon: 'home', link: '/' },
                    { title: 'Projects', icon: 'build', link: '/projects' },
                    { title: 'Blog', icon: 'message', link: '/blog/' },
                    { title: 'Contact', icon: 'message', link: '/contact/' }
                ]
            }
        }
    }
</script>
<template>
    <div>
        <v-navigation-drawer v-model="drawer" temporary absolute height='400px' class='grey darken-4 white--text'>
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://cdn.buttercms.com/lEfaO9dLTOWcieVcTL7a">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Dan Simonson</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <v-list-tile v-for="item in items" :key="item.title" router :to="item.link">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar>
            <!--class='white black--text'>-->
            <!--class='grey lighten-4 black-text'-->
            <v-toolbar-side-icon @click.stop="drawer= !drawer" class='strngBtn'></v-toolbar-side-icon>
            <router-link to='/' tag='span' style='cursor:pointer'>
                <v-toolbar-title class='strngBtn'>mariposaweb</v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <div class="hidden-sm-and-down">
                <router-link to='/' tag='span'>
                    <v-btn class='strngBtn' flat>home</v-btn>
                </router-link>
                <router-link to='/projects' tag='span'>
                    <v-btn class='strngBtn' flat>projects</v-btn>
                </router-link>
                <router-link to='/blog/' tag='span'>
                    <v-btn class='strngBtn' flat>blog</v-btn>
                </router-link>
                <router-link to='/contact/' tag='span'>
                    <v-btn class='strngBtn' flat>contact</v-btn>
                </router-link>
            </div>
        </v-toolbar>
    </div>


</template>
<style scoped>
    /*this button background style controls the background for all button on site since 
    it is not scoped*/

    /*.btn__content::before {
        background: black;
        border-radius: 8px;
    }*/

    .strngBtn {
        color: #BDBDBD;
        font-weight: 900;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
</style>
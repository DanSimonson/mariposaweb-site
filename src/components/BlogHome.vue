<script>
    import butter from '@/buttercms'
    export default {
        name: 'blog-home',
        data() {
            return {
                page_title: 'Blog',
                posts: []
            }
        },
        methods: {
            getPosts() {
                butter.post.list({
                    page: 1,
                    page_size: 10
                }).then((res) => {
                    // console.log(res.data)
                    this.posts = res.data.data
                })
            }
        },
        created() {
            this.getPosts()
        }
    }
    /*
    function changeColor() {
        let animation = document.getElementById('jumboAnimation');

        setTimeout(function () {
            animation.style.color = "red";
        }, 1000);
        setTimeout(function () {
            animation.style.color = "white";
        }, 2000);
        setTimeout(function () {
            animation.style.color = "yellow";
        }, 3000);
        setTimeout(function () {
            animation.style.color = "#00BFFF";
        }, 4000);
        setTimeout(function () {
            animation.style.color = "#1B5E20"//"#83f52c"
        }, 5000);
    }
    //call animation
    changeColor();
    //Animate every 6 seconds
    setInterval(changeColor, 6000);
    */
</script>

<template>
    <div>
        <nav-bar></nav-bar>
        <div id="blog-home">

            <!--<div id='container' class="hidden-md-and-down">
                <div class="circleBase type1" id='jumboAnimation'>
                    Blogging
                </div>
            </div>-->
            <div class='spacing'></div>
            <!--<h1>{{ page_title }}</h1>-->
            <div class='grey lighten-3' style="max-width: 600px; margin: auto;">
                <v-layout row wrap>
                    <v-flex xs12>
                        <!-- Create v-for and apply a key for Vue. Example is using a combination of the slug and index -->
                        <div v-for="(post,index) in posts" :key="post.slug + '_' + index">
                            <v-card raised color="grey lighten-3">
                                <!--hover-->
                                <v-container fluid style="min-height: 0;" grid-list-lg>
                                    <router-link style="text-decoration: none; color: black " :to=" '/blog/' + post.slug ">
                                        <article class="media" style="display: inline-block">
                                            <figure>
                                                <!-- Bind results using a ':' -->
                                                <!--Use a v-if/else if their is a featured_image -->
                                                <img v-if="post.featured_image " :src="post.featured_image " alt=" ">
                                                <img v-else src="http://via.placeholder.com/250x250 " alt=" ">
                                            </figure>
                                            <v-card-text>
                                                <h2>{{ post.title }}</h2>
                                                <p>{{ post.summary }}</p>
                                                <v-btn flat dark>Read More</v-btn>
                                            </v-card-text>
                                        </article>
                                    </router-link>
                                </v-container>
                            </v-card>
                        </div>
                    </v-flex>
                </v-layout>
            </div>
        </div>
        <div id='footSpace'></div>
        <app-footer></app-footer>
    </div>
    <!-- Create v-for and apply a key for Vue. Example is using a combination of the slug and index -->
    <!--<div v-for="(post,index) in posts " :key="post.slug + '_' + index ">
            <router-link :to=" '/blog/' + post.slug ">
                <article class="media ">
                    <figure>
                        <!-- Bind results using a ':' -->
    <!--Use a v-if/else if their is a featured_image -->
    <!--<img v-if="post.featured_image " :src="post.featured_image " alt=" ">
                        <img v-else src="http://via.placeholder.com/250x250 " alt=" ">
                    </figure>
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.summary }}</p>
                </article>
            </router-link>
        </div>-->
</template>
<style scoped>
    #blog-home {
        font-size: 18px;
        /*background-image: url('https://cdn.buttercms.com/NEBq1OoETYqRORb8rQo3');
        background-size: cover;
        background-position: center;
        /*height: 100vh;*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #CFD8DC;
    }

    #jumboAnimation {
        color: red;
        text-align: center;
        background-color: transparent;
        font-weight: 600;
        font-size: 3rem;
        margin: 0;
    }

    #container {
        border-radius: 50%;
        background: transparent;
        width: 400px;
        height: 100px;
        margin: 5px auto;
    }

    #footSpace {
        height: 40px;
        background-color: #CFD8DC;
    }

    .spacing {
        background-color: black;
        height: 75px;

    }

    /*
    .circleBase {
        border-radius: 50%;
        background-color: transparent;
        /*behavior: url(PIE.htc);
         remove if you don't care about IE8
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    */

    .strngBtn {
        color: #BDBDBD;
        font-weight: 900;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }

    .v-btn {
        color: black
    }

    .v-btn[data-v-648d5f51] {
        color: black;
    }
</style>
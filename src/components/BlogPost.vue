<script>
    import butter from '@/buttercms'
    import {
        Facebook,
        Twitter,
        Linkedin,
        Pinterest,
        Reddit,
        Telegram,
        WhatsApp,
        Email,
        Google
    } from "vue-socialmedia-share"

    export default {
        name: 'blog-post',
        components: {
            Facebook,
            Twitter,
            Linkedin,
            Pinterest,
            Reddit,
            Telegram,
            WhatsApp,
            Email,
            Google
        },
        data() {
            return {
                post: {},
                page_id: '',
                url: '',
                showLogo: true
            }
        },
        methods: {
            getPost() {
                butter.post.retrieve(this.$route.params.slug)
                    .then((res) => {
                        //console.log(res.data)
                        this.post = res.data
                    }).catch((res) => {
                        console.log(res)
                    })
            },
            handleScroll() {
                if (window.scrollY > 30) {
                    this.showLogo = false;
                } else {
                    this.showLogo = true;
                }
            }
        },
        watch: {
            $route(to, from) {
                this.getPost()
            }
        },
        created() {
            this.getPost();
            this.page_id = this.$route.params.slug;
            window.addEventListener('scroll', this.handleScroll);
            /*var url = "https://mariposaweb.net"
            var slug = window.location.pathname;
            var urlSlug = url + slug;*/
            //console.log('my slug: ' + this.page_id);
        }
    }
</script>
<template>
    <div>
        <div v-if="showLogo" id="divfix">MariposaWeb</div>
        <div id="blog-post">
            <!--<nav-bar></nav-bar>-->

            <navigation></navigation>
            <h1>{{ post.data.title }}</h1>
            <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
            <div v-html="post.data.body"></div>

            <router-link style="text-decoration: none" v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug"
                class="button">
                <!--{{ post.meta.previous_post.title }}-->Previous&nbsp
            </router-link>
            <router-link style="text-decoration: none" v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug"
                class="button">
                <!--{{ post.meta.next_post.title }}-->Next
            </router-link>
        </div>
        <div id='spacing-me'></div>
        <span id='hover'>
            <i class="fas fa-share"></i>
            <facebook :url="url" scale="3"></facebook>
            <twitter :url="url" title="Check me on Github" scale="3"></twitter>
            <linkedin :url="url" scale="3"></linkedin>
            <pinterest :url="url" scale="3"></pinterest>
            <reddit :url="url" scale="3" title="My Github"></reddit>
            <google :url="url" scale="3"></google>
        </span>

        <div class="comments">
            <vue-disqus shortname="mariposaweb" :identifier="page_id" url="http://mariposaweb.net/blog"></vue-disqus>
        </div>

    </div>

</template>
<style scoped>
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

    #hover {
        color: lightblue;
        font-size: 3em;
    }

    #hover:hover {
        cursor: pointer;
    }

    #spacing-me {
        height: 5px;
    }

    #blog-post {
        font-size: 20px;
    }

    #spacing-me {
        height: 50px;
    }
</style>
<template>

    <div class="navbar">
        <nav class="transparent z-depth-0">
            <ul>
                <router-link to='/' tag='span'>
                    <li class="nav-links">Home</li>
                </router-link>
                <router-link to='/blog/' tag='span'>
                    <li class="nav-links">Blog</li>
                </router-link>
                <router-link to='/contact/' tag='span'>
                    <li class="nav-links">Contact</li>
                </router-link>
            </ul>

        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
<style scoped>
    .navbar {
        position: absolute;
        z-index: 999999999;
        margin-bottom: 20px;

    }

    .nav-links {
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 18px;

        /* HOVER OFF*/
        -webkit-transition: padding 2s;

        color: #BDBDBD;
        font-weight: 900;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }

    .nav-links:hover {
        cursor: pointer;
        padding: .5px;
        border-radius: 15px;

        /* HOVER ON */
        -webkit-transition: border-radius 2s;

    }

    @media (max-width: 40rem) {
        .nav-links {
            margin: 5px;
        }
    }
</style>
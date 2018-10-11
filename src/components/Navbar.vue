<template>
    <div class="navbar">
        <nav class="transparent z-depth-0">
            <div class="nav-wrapper">
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons strngBtn">menu</i></a>
                <a href="#!" class="brand-logo"></a>
                <ul class="right hide-on-med-and-down">
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
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
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
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            // M.AutoInit();
        }
    }
</script>
<style scoped>
    .strngBtn {
        color: white;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }

    .nav-links {
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 18px;

        /* HOVER OFF */
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

    .navbar {
        position: absolute;
        z-index: 999999999;
    }

    .nav-invisible {
        background-color: rgba(255, 255, 255, 0.5);
        background: transparent;
        /* Background color white with 50% opacity */
        /*background: rgba(255, 255, 255, 0.5);*/
    }
</style>
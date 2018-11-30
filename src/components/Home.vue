<script>
  import butter from '@/buttercms';
  import Parallax from "vue-parallaxy";
  import Slider from './Slider'
  import SideDrawer from './SideDrawer'

  export default {
    name: 'customer-page',
    components: {
      Parallax,
      Slider,
      SideDrawer
    },
    data() {
      return {
        showh1: true,
        showp: true,
        showLogo: true,
        page: {
          fields: {}
        },
      }
    },
    methods: {
      getPage() {
        butter.page.retrieve('*', 'homepage')
          .then((res) => {
            //console.log(res.data.data)
            this.page = res.data.data
          }).catch((res) => {
            console.log(res)
          })
      },
      goBlog() {
        this.$router.push({
          name: 'blog-home'
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
    created() {
      this.getPage();
      window.addEventListener('scroll', this.handleScroll);
    }
  }

</script>

<template>
  <div id="customer-page">
    <!--<Navigation></Navigation> -->
    <Slider></Slider>
    <div v-if="showLogo" id="divfix">MariposaWeb</div>
    <div class="divider"></div>
    <SideDrawer></SideDrawer>
    <para-home />
    <app-footer></app-footer>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Great+Vibes|Montserrat');

  * {
    margin: 0;
    padding: 0;
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

  .divider {
    height: 2px;
    background: #000428;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #004e92, #000428);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #004e92, #000428);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }



  body {
    /*margin: 0;*/
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 17px;
    line-height: 1.6;
  }

</style>

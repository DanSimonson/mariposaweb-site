<script>
  //const butter = Butter('34d3d54d8f742ba36133328ca6b67a50a85ddfe1');
  //import { butter } from '@/buttercms'
  //var butter = Butter('34d3d54d8f742ba36133328ca6b67a50a85ddfe1');
  import butter from '@/buttercms';
  import Parallax from "vue-parallaxy";

  export default {
    name: 'customer-page',
    components: {
      Parallax
    },
    data() {
      return {
        showh1: true,
        showp: true,
        page: {
          fields: {}
        }
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
        this.$router.push({ name: 'blog-home' })
      }
    },
    created() {
      this.getPage()
    }
  }
</script>

<template>

  <div id="customer-page">
    <app-header></app-header>
    <header id="showcase">
      <!--<button @click="show = !show">
        Toggle render
      </button>-->
      <div>
        <transition appear appear-name="custom-classes-transition" appear-active-class="animated rubberBand">
          <h1 v-if="showh1">Welcome To The Mariposaweb</h1>

        </transition>
        <transition appear appear-name="custom-classes-transition" appear-active-class="animated jello">
          <p v-if="showp"> modern web development using the latest JavaScript techniques and Vue.</p>
        </transition>
      </div>

      <!--
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
      <a href="#" class="button">Read More</a>
      -->
    </header>
    <div class="divider"></div>
    <para-home />

    <!--<parallax :speed-factor="0.3" breakpoint="(min-width: 80px)">
        <img :src="image" />
      </parallax>
      <parallax :fixed='true'>
        <img :src="image" />
      </parallax>-->
    <app-footer></app-footer>
  </div>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
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
    margin: 0;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 17px;
    /*color: white;
    #926239*/
    line-height: 1.6;
  }

  header {
    margin-bottom: 0;
  }

  .strngBtn {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }

  #section-a {
    padding: 20px;
    background: #926239;
    color: #fff;
    text-align: center;
  }

  #section-c {
    padding: 20px;
    background: #f4f4f4;
    text-align: center;
  }

  img {
    width: 500px;
    max-height: 400px;
  }

  #showcase {
    background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1537088446/background2.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    /*color: black;
    #8D6E63;*/
  }

  #showcase:before {
    background: #E8EAF6;
  }

  #showcase p {
    animation-delay: 1s;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    font-size: 21px;
    font-weight: 900;
    text-shadow: 0 1px #808d93,
      -1px 0 #cdd2d5,
      -1px 2px #808d93,
      -2px 1px #cdd2d5,
      -2px 3px #808d93,
      -3px 2px #cdd2d5,
      -3px 4px #808d93,
      -4px 3px #cdd2d5,
      -4px 5px #808d93,
      -5px 4px #cdd2d5,
      -5px 6px #808d93,
      -6px 5px #cdd2d5,
      -6px 7px #808d93,
      -7px 6px #cdd2d5,
      -7px 8px #808d93,
      -8px 7px #cdd2d5;
  }


  #showcase h1 {
    font-size: 3em;
    animation-delay: 1s;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    font-weight: 500;
    /*text-shadow: 2px 2px 4px #000000;*/
    text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee,
      2px 1px 1px #ccc, 1px 2px 1px #eee,
      3px 2px 1px #ccc, 2px 3px 1px #eee,
      4px 3px 1px #ccc, 3px 4px 1px #eee,
      5px 4px 1px #ccc, 4px 5px 1px #eee,
      6px 5px 1px #ccc, 5px 6px 1px #eee,
      7px 6px 1px #ccc;
  }


  #showcase .button {
    font-size: 18px;
    text-decoration: none;
    color: #926239;
    border: #926239 1px solid;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 20px;
  }

  #showcase .button:hover {
    background: #926239;
    color: #fff;
  }

  #section-a {
    padding: 20px;
    background: #926239;
    color: #fff;
    text-align: center;
  }

  #section-b {
    padding: 20px;
    background: #f4f4f4;
    text-align: center;
  }

  #section-c {
    display: flex;
  }

  #section-c div {
    padding: 20px;
  }

  #section-c .box-1,
  #section-c .box-3 {
    background: #926239;
    color: #fff;
  }

  #section-c .box-2 {
    background: #f9f9f9;
  }

  .page {
    position: fixed;
    width: inherit;
  }


  /*
  main {}

  figure {
    margin: 50px;
  }

  ul {
    margin: 50px;
  }*/
</style>
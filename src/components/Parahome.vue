<template>
  <div id="parahome">
    <v-parallax dark :src="image1">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3 white--text">Build Your Application Today</h1>
        <h3 class="white--text"> ______________________ </h3>
        <h3 class="display-2 font-weight-thin mt-3  white--text">MARIPOSAWEB DEVELOPMENT</h3>

      </v-layout>
    </v-parallax>
    <div class="dividertwo"></div>
    <div class="container vueProjects">
      <h1 class='myBtn'>Featured Vue.js Projects</h1>
      <Slide></Slide>
    </div>

    <div class="dividertwo"></div>
    <v-parallax dark :src="imagetwo" height="380"></v-parallax>

    <div class="dividertwo"></div>
    <p class="myBtn">Javascript Projects</p>
    <div class="grid myBtn">
      <div class="flex-card">
        <!-- image container -->
        <div class="flex-card-image">
          <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1541889537/scrabbleResize.jpg" />
        </div>
        <!-- content container -->
        <div class="flex-card-content">
          <h3 class="flex-card-heading">Spelling Game</h3>
          <p>A spelling game to practice spelling and have fun, powered with Vanilla Javascript.</p>
          <a href='https://dansimonson.github.io/spelling-game/' target="
                            _blank" class="flex-card-button"><span
              class="spin myBtn">See
              More</span></a>
        </div>
      </div>
      <div class="flex-card">
        <!-- image container -->
        <div class="flex-card-image">
          <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537117177/projectPhotos/simon.jpg" />
        </div>
        <!-- content container -->
        <div class="flex-card-content">
          <h3 class="flex-card-heading">Simon Game</h3>
          <p>An application simulating the 70's simon game, created with vanilla
            Javascript, CSS3, HTML.</p>
          <a href='https://dansimonson.github.io/simongame/' target="_blank" class="flex-card-button"><span class="spin">See
              More</span></a>
        </div>
      </div>
      <div class="flex-card">
        <!-- image container -->
        <div class="flex-card-image">
          <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537118049/projectPhotos/wikipedia.jpg" />
        </div>
        <!-- content container -->
        <div class="flex-card-content">
          <h3 class="flex-card-heading">Wikipedia Search</h3>
          <p>A Wikipedia search engine that uses the Wikipedia API, vanilla
            Javascript, CSS3, HTML.</p>
          <a href='https://dansimonson.github.io/wikiviewer/' target="_blank" class="flex-card-button tilt myBtn">See
            More</a>
        </div>
      </div>
      <div class="flex-card">
        <!-- image container -->
        <div class="flex-card-image">
          <img src="https://res.cloudinary.com/dmglopmul/image/upload/v1537118827/projectPhotos/twitch.png" />
        </div>
        <!-- content container -->
        <div class="flex-card-content">
          <h3 class="flex-card-heading">Twitch</h3>
          <p>An application using the twitch API for live streaming, applying
            Javascript, CSS3, HTML.</p>
          <a href='https://dansimonson.github.io/twitchtv/' target="_blank" class="flex-card-button increase myBtn">See
            More</a>
        </div>
      </div>
    </div>

    <v-parallax dark :src="imagethree" height="300"></v-parallax>

    <!--bootstrap row replaced with new grid boxes-->
    <!--<div class="row" id="last-row">
            <div style="background: #2193b0;font-family: 'Abril Fatface', cursive;font-weight: bold;font-size: 18px;align-items: center;justify-content: center;"
                class="col s4 promoBox">
                Web Development with an emphasis on designing, building, and managing web solutions

            </div>
            <div style="background: #00B4DB;font-family: 'Abril Fatface', cursive;font-weight: bold;font-size: 20px;align-items: center;justify-content: center;"
                class="col s4 promoBoxMiddle">
                We are passionate about the digital experience, creating stuff real people will really love.
            </div>
            <div style="background: #2193b0;font-family: 'Abril Fatface', cursive;font-weight: bold;font-size: 20px;align-items: center;justify-content: center;"
                class="col s4 promoBox">
                We offer a visually rich, engaging interactive experience
            </div>
        </div>-->
    <!--end old bootstrap row-->
    <div class="last-row">
      <div class='left'>
        <p>Web Development with an emphasis on designing, building, and managing web solutions</p>
      </div>
      <div class='center'>
        <p>We are passionate about the digital experience, creating stuff real people will really love</p>
      </div>
      <div class='right'>
        <p>We offer a visually rich, engaging interactive experience that focuses on user experience</p>
      </div>
    </div>
    <div class="dividertwo"></div>
  </div>
  </div>
</template>

<script>
  import image1 from "../assets/butterfly.jpg"
  import imagetwo from "../assets/butterfly2.jpg"
  import imagethree from "../assets/butterfly3.jpg"
  import Slide from './Slide.vue'
  export default {
    name: 'Parahome',
    components: {
      Slide
    },
    data() {
      return {
        image1: image1,
        imagetwo: imagetwo,
        imagethree: imagethree,
      }
    }
  }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Gravitas+One');
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface');

  * {
    border: 0;
    margin: 0;
    padding: 0;
  }

  .myBtn {
    color: white;
    /*#BDBDBD;*/
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-weight: 900;
  }

  p.myBtn {
    font-size: 2.5em;
  }

  #parahome {
    background: #00B4DB;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0083B0, #00B4DB);
  }

  .vueProjects {
    /*padding: 20px;*/
    background: #00B4DB;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0083B0, #00B4DB);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /*border: 5px solid black;*/
    height: 600px;
    margin: 0 auto;
    padding: 5px
  }

  /*javascript cards*/
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 5px;
    margin-top: 20px;
  }

  img {
    height: 50%;
    width: 50%;
    border-radius: 16%;
  }

  .flexbox .flex-card {
    display: flex;
    flex-direction: column;
  }

  flex-card-content p {
    margin: 5px;
  }

  span.spin {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-weight: 900;
    font-size: 1em;
  }

  span.spin:hover {
    color: wheat;
  }

  .flex-card-button {
    width: 115px;
    height: 25px;
    padding-top: 2px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 15px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 1.2em;
  }

  .flex-card-button:hover {
    color: wheat;
  }

  a.flex-card-button.tilt.myBtn:hover {
    color: wheat
  }

  /*******************/

  /*animated button*/
  .card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {
    color: #0D47A1;
    font-size: 16px;
    font-weight: 400;
  }

  .tilt {
    display: inline-block;
    transition: .3s;
    text-decoration: none;
  }

  .tilt:hover {
    transform: rotate(15deg);
    color: #78909C;
  }

  .border {
    color: #0083B0;
    font-weight: 500;
    -webkit-transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    display: inline-block;
    text-decoration: none;
    position: relative;
  }

  .border:hover {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .border::before {
    position: absolute;
    top: -2px;
    left: -7px;
    box-sizing: content-box;
    padding: 0 5px;
    width: 100%;
    height: 100%;
    border: 2px solid #0083B0;
    content: '';
    opacity: 0;
    -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;
    transition: opacity 0.2s, transform 0.2s;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .border:hover::before {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .increase {
    display: inline-block;
    transition: .3s;
    font-weight: bold;
    text-decoration: none;
  }

  .increase:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .spin {
    display: inline-block;
    color: #0D47A1;
    font-size: 16px;
  }

  .spin {
    transition: all 1s ease-in-out;
  }

  .spin:hover {
    -webkit-transform: rotateX(360deg);
    transform: rotateX(360deg);
  }

  /*end javascript card stuff*/

  /*#last-row {
        margin: 0;
    }*/

  .dividertwo {
    height: 2px;
    background: #00d2ff;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #928DAB, #00d2ff);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #928DAB, #00d2ff);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  /*** boxes replaced with grid boxes***/
  /*promoBox {
    font-family: 'Abril Fatface',
      cursive;
    font-weight: bold;
    font-size: 20px;
    height: 200px;
    background: #2193b0;
    /* fallback for old browsers 
    background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
    /* Chrome 10-25, Safari 5.1-6 
    background: linear-gradient(to right, #6dd5ed, #2193b0);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ 
    align-items: center;
    justify-content: center;
  }*/

  /*promoBoxMiddle {
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    background: #00B4DB;
    /* Chrome 10-25, Safari 5.1-6 
    background: linear-gradient(to right, #0083B0, #00B4DB);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ 
    align-items: center;
    justify-content: center;
  }*/

  .btn {
    margin-bottom: 5px;
    padding: 5px 5px;
    font-size: 16px;
  }

  .last-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #333;
    align-items: center;
  }

  .left {
    font-family: 'Abril Fatface',
      cursive;
    font-weight: bold;
    font-size: 20px;
    background: #2193b0;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6dd5ed, #2193b0);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 5px;
  }

  .center {
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
    font-size: 20px;
    background: #00B4DB;
    padding: 5px;

  }

  .right {
    font-family: 'Abril Fatface',
      cursive;
    font-weight: bold;
    font-size: 20px;
    background: #2193b0;
    padding: 5px;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6dd5ed, #2193b0);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }


  /*media queries*/
  @media only screen and (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }

    .last-row {
      grid-template-columns: 1fr;

    }
  }

  @media only screen and (max-width: 500px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

</style>

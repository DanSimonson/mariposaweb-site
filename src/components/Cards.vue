<template>
  <div class="cards">
    <div v-if="showLogo" id="divfix">MariposaWeb</div>
    <Navigation></Navigation>
    <div class="wrap">
      <div id="slide">
        <transition appear name="bounce"> <h1>ALL PROJECTS</h1> </transition>
      </div>
    </div>
    <!-- Boxes Section -->
    <section class="boxes">
      <div
        class="box hover-animation"
        v-for="(card, index) in cards"
        :style="{backgroundImage: 'url(' + cards[index].src + ')'}"
      >
        <!-- <i class="fas fa-chart-pie fa-4x"></i> -->
        <h3>{{ card.title }}</h3>
        <p>{{ card.text }}</p>
        <!-- <button class="suit_and_tie">See More</button> -->
        <a :href="card.link" target="_blank" class="suit_and_tie">See More</a>
      </div>
      <!--
        <div class="box">
            <i class="fas fa-globe fa-4x"></i>
            <h3>Marketing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>
        <div class="box">
            <i class="fas fa-cog fa-4x"></i>
            <h3>Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>
        <div class="box">
            <i class="fas fa-users fa-4x"></i>
            <h3>Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>
        <div class="box">
            <i class="fas fa-users fa-4x"></i>
            <h3>Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>
        <div class="box">
            <i class="fas fa-users fa-4x"></i>
            <h3>Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>
        <div class="box">
            <i class="fas fa-users fa-4x"></i>
            <h3>Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>
      -->
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
  export default {
    name: "cards",
    data() {
      return {
        showLogo: true,
        cards: [
          {
            title: "Spelling Game",
            link: "https://dansimonson.github.io/spelling-game/",
            text:
              "Goal: Create a Spelling game with some animations that is fun. Technologies: Javascript, Browserify, RapidAPI, UNIREST, CSS GRID, Flexbox, CSS3, HTML",
            src: require("../assets/muted/diagnol.jpg"),
            flex: 6
            //'https://res.cloudinary.com/dmglopmul/image/upload/v1529509174/todoList.jpg'
          },
          {
            title: "GitHub Search",
            link: "http://ruddy-amount.surge.sh/?#/",
            text:
              "Goal: Build a GitHub search engine to find user profiles and recent repositories. Technologies: Vue, Axios, GitHub API, CSS Grid, Flexbox, JavaScript",
            src: require("../assets/muted/polkadot.jpg"),
            flex: 6
            //https://cdn.buttercms.com/OUEb12H8TT6nV2fOPPSE
          },
          {
            title: "Filipino Restaurant",
            link: "http://aberrant-tendency.surge.sh/#/",
            text:
              "Goal: Build a Vue.js Restaurant Website. Technologies: Vue, CSS Grid, Flexbox, JavaScript",
            src: require("../assets/muted/zigzag.jpg"),
            flex: 6

            //https://cdn.buttercms.com/OUEb12H8TT6nV2fOPPSE
          },
          {
            title: "Spa Website",
            link: "https://user-info-ee17c.firebaseapp.com/",
            text:
              "Goal: User can view spa business website. Technologies: Vue, Firestore, authentication, route guards, CSS Grid, Flexbox, JavaScript",
            src: require("../assets/muted/polygon.jpg"),
            flex: 6
            //"https://res.cloudinary.com/dmglopmul/image/upload/v1530327261/aspa.jpg"
          },
          {
            title: "Online Store",
            link: "https://vue-blog-ed03b.firebaseapp.com/",
            text:
              "Goal: Build a Vue.js online store while using vuex for state management and firebase as database. Technologies: Vue, Vuex, Firebase Realtime Database, MaterializeCSS, Vuetify, JavaScript, ES6",
            src: require("../assets/muted/blue.jpg"),
            flex: 6

            //https://cdn.buttercms.com/OUEb12H8TT6nV2fOPPSE
          },
          {
            title: "Hacker-News Clone",
            link: "http://extra-small-stick.surge.sh",
            text:
              "Goal: Build Hacker-News Clone. Technologies: Vue, Axios, Firestore, JavaScript, ES6",
            src: require("../assets/muted/pink.jpg"),
            flex: 6
            //https://cdn.buttercms.com/cJPqFLNdSyaK30Bw7kbN
          },
          {
            title: "Customer Information",
            link: "https://human-resources-cb42b.firebaseapp.com/",
            text:
              "Goal: Store and update client information. Technologies: Vue, Firestore, Bootstrap 4, JavaScript, ES6",
            src: require("../assets/muted/purple.jpg"),
            flex: 6
            //"https://res.cloudinary.com/dmglopmul/image/upload/v1531890965/mariposaImageP.jpg"
          },
          {
            title: "Recipe Box",
            link: "https://recipes-ddb43.firebaseapp.com/#/",
            text:
              "Goal: User can create, edit, delete and save recipes. Technologies: Vue, Firestore, MaterializeCSS, JavaScript, ES6",
            src: require("../assets/muted/raindrop.jpg"),
            flex: 6
            //"https://res.cloudinary.com/dmglopmul/image/upload/v1529491072/recipeBox.jpg"
          },
          {
            title: "Markdown Peek",
            link: "http://mellow-sock.surge.sh/",
            text:
              "Goal: User can type GitHub-flavored Markdown into a text area that updates as he types Technologies: ES6, React, CSS3, Javascript",
            src: require("../assets/muted/darkblue.jpg"),
            flex: 6
            //'https://res.cloudinary.com/dmglopmul/image/upload/v1529501983/markdown.png'
          },
          {
            title: "Calculator",
            link: "https://dansimonson.github.io/calculator/",
            text:
              "Goal: A fully functioning calculator Technologies: JavaScript, Jquery, Bootstrap",
            src: require("../assets/muted/3d.jpg"),
            flex: 6
            //'https://res.cloudinary.com/dmglopmul/image/upload/v1529504760/calculator.jpg'
          },
          {
            title: "Simon Game",
            link: "https://dansimonson.github.io/simongame/",
            text:
              "Goal: Simulate the simon game online  Technologies: Javascript, CSS3, HTML",
            src: require("../assets/muted/purpleconcrete.jpg"),
            flex: 6
            //'https://res.cloudinary.com/dmglopmul/image/upload/v1529505532/simon.jpg'
          },
          {
            title: "Wikipedia Search",
            link: "https://dansimonson.github.io/wikiviewer/",
            text:
              "Goal: Learn new stuff with a wikipedia search engine that uses the Wikipedia api Technologies: Javascript, CSS3, HTML",
            src: require("../assets/muted/blueconcrete.jpg"),
            flex: 6
            //'https://res.cloudinary.com/dmglopmul/image/upload/v1529506690/wikipedia.jpg'
          },
          {
            title: "Twitch",
            link: "https://dansimonson.github.io/twitchtv/",
            text:
              "Goal: Use the Twitch api for streaming shows Technologies: Javascript, CSS3, HTML",
            src: require("../assets/muted/wall.jpg"),
            flex: 6
            //'https://res.cloudinary.com/dmglopmul/image/upload/v1529506574/twitch.png'
          },
          {
            title: "Local Weather",
            link: "https://dansimonson.github.io/localweather/",
            text:
              "Goal: Access a weather api to find the local weather Technologies: Javascript, CSS3, HTML",
            src: require("../assets/muted/vibrant.jpg"),
            flex: 6
            //'https://res.cloudinary.com/dmglopmul/image/upload/v1529508180/weather.jpg'
          },
          {
            title: "Pomodoro Clock",
            link: "https://dansimonson.github.io/pomodoro/",
            text:
              "Goal: A Pomodoro clock to help with time management. Technologies: Javascript, CSS3, HTML",
            src: require("../assets/muted/wave.jpg"),
            flex: 6
            //'https://res.cloudinary.com/dmglopmul/image/upload/v1529508744/pomodoro.png'
          },
          {
            title: "Tictactoe Game",
            link: "https://dansimonson.github.io/tictactoe/",
            text:
              "Goal: An online TicTacToe game Technologies: Javascript, CSS3, HTML",
            src: require("../assets/muted/dot.jpg"),
            flex: 6
            //'https://res.cloudinary.com/dmglopmul/image/upload/v1529508887/tictactoe.jpg'
          },
          {
            title: "Trump News",
            link: "http://agonizing-shirt.surge.sh/#/",
            text:
              "Goal: Build a news list about President Trump. Technologies: Vue, Vue-Resource, Vuetify, JavaScript, ES6",
            src: require("../assets/muted/green.jpg"),
            flex: 6
            //"https://cdn.buttercms.com/gRQpSAHmToKvahSVWxsA"
          },
          {
            title: "Random Quotes",
            link: "https://dansimonson.github.io/randomquotemachine/#",
            text:
              "Goal: An online random quote generator that can tweet. Technologies: Javascript, CSS3, HTML",
            src: require("../assets/muted/virtual.jpg"),
            flex: 6
            //'https://res.cloudinary.com/dmglopmul/image/upload/v1529509063/quote.jpg'
          }
        ]
      };
    },
    methods: {
      handleScroll() {
        if (window.scrollY > 30) {
          this.showLogo = false;
        } else {
          this.showLogo = true;
        }
      }
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    }
  };
</script>
<style scoped>
  #divfix {
    font-family: "Great Vibes", cursive;
    top: 6px;
    left: 75px;
    /*bottom: 0;
        right: 0;*/
    position: fixed;
    z-index: 3000;
    color: #ffe082;
    padding: 5px;
    font-size: 2em;
  }

  .wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
    /*600px;*/
    height: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
    /*border: 1px solid black;*/
  }

  #slide {
    position: absolute;
    left: -600px;
    width: 600px;
    height: 100%;
    background: blue;
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slide 2.5s forwards;
    animation-delay: 2s;
  }

  #slide h1 {
    margin-top: 5%;
    color: #fff;
  }

  /*@-webkit-keyframes slide {
        100% {
            left: 0;
            /*transform: translate(-50%, -50%);
        }
    }*/

  @keyframes slide {
    100% {
      left: 50%;
      transform: translate(-50%, 0%);
    }
  }

  .bounce-enter-active {
    animation: bounce-in 2.5s;
    animation-delay: 4s;
    animation-direction: alternate;
  }

  .bounce-leave-active {
    animation: bounce-in 2.5s reverse;
    animation-delay: 2s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
      color: aqua;
      /*background-color: green;*/
      transform: rotateX(180deg);
    }

    50% {
      transform: scale(1.5);
      color: orange;
      /*background-color: goldenrod;*/
    }

    100% {
      transform: scale(1);
      color: #81c784;
      /*background-color: indianred;*/
    }
  }

  .boxes {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    background-size: cover;
    background-position: center;
    color: #fff;
    margin-bottom: 10px;
    /*border: 5px solid brown;*/
  }

  .box {
    /*background: var(--primary);*/
    text-align: center;
    padding: 1.5rem 2rem;
    box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
    background-color: linear-gradient(
      rgba(20, 20, 20, 0.5),
      rgba(20, 20, 20, 0.5)
    );
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .box:hover {
  }

  /*hover animation*/
  .hover-animation {
    animation-name: hover-out;
    -webkit-animation-duration: 0.9s;
    animation-duration: 0.9s;
  }

  .hover-animation:hover {
    animation-iteration-count: 2;
    transform: scale(1);
    -webkit-animation-name: hover-in;
    animation-name: hover-in;
    -webkit-animation-duration: 0.9s;
    animation-duration: 0.9s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: 2;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
  }

  @keyframes hover-in {
    from {
      -webkit-transform: scale(1);
    }

    to {
      -webkit-transform: scale(1.1);
    }
  }

  @keyframes hover-out {
    from {
      -webkit-transform: scale(1.1);
    }

    to {
      -webkit-transform: scale(1);
    }
  }

  .box h3 {
    font-size: 3em;
  }

  .box p {
    font-size: 1.8em;
  }

  /*button*/
  .suit_and_tie {
    color: black;
    font-size: 20px;
    font-family: helvetica;
    text-decoration: none;
    border: 2px solid white;
    border-radius: 20px;
    transition-duration: 0.2s;
    -webkit-transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
    background-color: white;
    padding: 4px 30px;
  }

  .suit_and_tie:hover {
    color: white;
    background-color: black;
    transition-duration: 0.2s;
    -webkit-transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
  }
</style>

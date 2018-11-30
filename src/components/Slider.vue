<template>
  <div>
    <div id="slider" :style="{backgroundImage: 'url(' + images[index].url + ')'}">
      <header id="showcase">
        <div class="gradientMe">
          <p class="rotating">{{ msgs[currentMsg].msg }}</p>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Slider",

    data() {
      return {
        msgs: [{
            msg: "We Focus on solving complex problems with clear and effective solutions."
          },
          {
            msg: "We create custom solutions – be it during design, development or deployment."
          },
          {
            msg: "We build a digital E-Commerce bridge between products and customers. "
          },
          {
            msg: "We leverage the capabilities of Vue.js and JavaScript to fit needs."
          },
          {
            msg: "Transforming ideas. Digitally. We look for ways to provide better solutions."
          }
        ],
        images: [{
            id: 0,
            url: "https://res.cloudinary.com/dmglopmul/image/upload/v1539010572/projectPhotos/mariposaweb/network.jpg"
          },
          {
            id: 1,
            url: "https://res.cloudinary.com/dmglopmul/image/upload/v1539010600/projectPhotos/mariposaweb/ufo.jpg"
          },
          {
            id: 2,
            url: "https://res.cloudinary.com/dmglopmul/image/upload/v1539023410/projectPhotos/mariposaweb/syntax.jpg"
          },
          {
            id: 3,
            url: "https://res.cloudinary.com/dmglopmul/image/upload/v1539022882/projectPhotos/mariposaweb/internet.jpg"
          },
          {
            id: 4,
            url: "https://res.cloudinary.com/dmglopmul/image/upload/v1539024962/projectPhotos/mariposaweb/code.jpg"
          }
        ],
        index: 0,
        showh1: true,
        showp: true,
        currentMsg: 0
      };
    },
    created() {

      var self = this;
      setInterval(() => {
        self.move();
      }, 6000);
      //recursive continuous call for msg on front page
      setInterval(() => {
        self.next();
      }, 6000);
      self.next();
    },
    computed: {},
    methods: {
      move() {
        let indexFlag = this.index;
        indexFlag++;
        if (indexFlag >= this.images.length) {
          indexFlag = 0;
        }
        this.index = indexFlag;
      },

      next: function () {
        if (this.currentMsg + 1 < this.msgs.length) {
          this.currentMsg++;
        } else {
          this.currentMsg = 0;
        }
      }
    }
  };

</script>
<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Gravitas+One");

  #slider {
    display: flex;
    flex-direction: column-reverse;
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .seeMeList {
    font-size: 21px;
    font-weight: 500;
    text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc,
      1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc,
      3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc,
      5px 6px 1px #eee, 7px 6px 1px #ccc;
  }

  #content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, minmax(100px, auto));
    grid-gap: 1px;
    margin-top: 200px;
    opacity: 0.5;
    height: 75px;
    overflow: hidden;
    color: oldlace;
    text-align: center;
  }

  #content div {
    padding: 30px;
    margin-top: 1px;
  }

  #content div:nth-child(even) {
    padding: 30px;
    margin-top: 1px;
  }

  #showcase {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .gradientMe {
    background: linear-gradient(rgba(20, 20, 20, 0.03), rgba(20, 20, 20, 0.03));
    border-radius: 16px;
  }

  #showcase p {
    font-family: "Gravitas One", cursive;
    /*color: white;*/
    color: #FFE082;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-size: 1.5em;
    text-decoration: none;
  }

  #showcase p:hover {
    animation-name: wow;
    animation-duration: 3s;
    animation-delay: 1s;
    cursor: crosshair;
  }

  @keyframes wow {
    0% {
      transform: scale(0);
      color: aqua;
    }

    50% {
      transform: scale(1.5);
      color: red;
    }

    100% {
      transform: scale(1);
      color: yellow;
    }
  }

  p.rotating {
    transition: transform 1s ease-in-out;
  }

  p.rotating:hover {
    transform: rotateX(360deg);
  }

  /*media queries*/
  @media screen and (max-width: 425px) {
    #showcase p {
      margin-top: 2px;
      font-size: 1.5em;
      line-height: 1.2 !important;
    }
  }

</style>

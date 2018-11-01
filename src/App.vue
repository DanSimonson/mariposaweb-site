<template>
  <div id="app">

    <transition name='transitionMe' enter-active-class='animated fadeIn' leave-active-class='animated fadeOut' mode='out-in'
      :duration="500">
      <!--</transition>"router-anim">-->
      <router-view />
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style>
  /*.enter-active-class {
    animation-duration: 1s;
    animation-delay: 1s;
    opacity: 0;
  }

  .leave-active-class {
    animation-duration: .5s;

  }


  .router-anim-enter-active- {
    animation: coming 1s;
    animation-delay: .5s;
    opacity: 0;
  }

  .router-anim-leave-active {
    animation: going 1s;
  }

  @keyframes coming {
    from {
      /*transform: translateX(-50px);
  opacity: 0;
  }

  to {
    /*transform: translateX(0px);
    opacity: 1;
  }
  }*/

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
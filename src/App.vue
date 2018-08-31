<template>
  <div id="app">
    <<transition name="router-anim" enter-active-class="animated fadeIn">
      <router-view/>
      </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .enter-active-class {

    animation-duration: .3s;
    /*
    animation-iteration-count: 6;
    
    animation-delay: 1s;
    
    */
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
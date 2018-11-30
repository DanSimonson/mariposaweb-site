<template>
  <div id="appi">
    <div class='nav-bar' @click="active = !active" v-bind:class={active:active}>
      <transition name="fade">
        <span v-if="!active" class='burger'> <i class="fas fa-bars fa-2x"></i></span>
      </transition>
      <a href="#" class="btn-close"><i class="fas fa-times"></i></a>
      <div id="side-menu" class="side-nav">
        <router-link to='/' tag='a'>
          <li class="nav-links">
            <strong>Home </strong></li>
        </router-link>
        <router-link to='/blog/' tag='a'>
          <li class="nav-links">Blog</li>
        </router-link>
        <router-link to='/cards/' tag='a'>
          <li class="nav-links">All Projects</li>
        </router-link>
        <router-link to='/contact/' tag='a'>
          <li class="nav-links">Contact</li>
        </router-link>
        <!--<a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>-->
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'SideDrawer',
    data() {
      return {
        active: false
      }
    }
  }

</script>
<style scoped>
  /**** sidedrawer *****/
  .burger:hover {
    cursor: pointer;
  }

  .burger {
    top: 20px;
    right: 25px;
    position: fixed;
    color: #FFE082;
  }

  #appi {
    position: relative;
  }

  .nav-bar {
    /*border: 5px solid red;*/
    position: absolute;
    width: 0;
    height: 100vh;
    top: 0;
    right: 0;
    position: fixed;
    z-index: 1;
    opacity: 0.9;
    overflow-x: hidden;
    padding-top: 60px;
    transition: .8s;

  }

  .nav-bar.active {
    background-color: #111;
    /* #BBDEFB;*/
    width: calc(2px + 30%);
  }

  .side-nav {
    /*border: 5px solid black;*/
    display: flex;
    height: 40%;
    margin-top: 50px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .side-nav a {
    text-decoration: none;
    color: #FFE082;
    font-size: 1.2em;
    list-style-type: none;
  }

  .side-nav a:hover {
    color: #fff;
    text-decoration: none;
  }

  .nav-bar .btn-close {
    position: absolute;
    top: 0;
    left: 22px;
    font-size: 36px;
    color: #FFE082;
  }

  .fa-times:hover {
    color: #fff;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
    transition-delay: .5s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
  }

</style>

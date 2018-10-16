<template>
    <Slide>
        <a id="home" href="#">
            <span>Home</span>
        </a>
    </Slide>

</template>
<script>
    import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

    export default {
        components: {
            Slide // Register your component
        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    .bm-menu {
    z-index: 1000;
    /* Black*/
  }

  .bm-burger {}

  .bm-item-list {
    color: green;
    margin-left: 10%;
    font-size: 20px;
  }
</style>
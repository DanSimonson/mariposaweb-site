<template>
    <div class="comments">
        <vue-disqus shortname="mariposaweb" :identifier="page_id" url="http://example.com/path"></vue-disqus>
    </div>
</template>

<script>
    export default {
        name: 'disqus-vue',
        data() {
            return {

            }
        }
    }
</script>
<style>
</style>
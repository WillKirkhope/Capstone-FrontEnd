<template lang="html">
  <div class = "">
     <SinglePost v-for = "onePost in myPosts" :key = "onePost.id" v-bind:post = "onePost"/>
 </div>
</template>

<script>
import SinglePost from './SinglePost'
export default {
  name: 'PostsList',
  props: ["myPosts"],
  components: {
    SinglePost
  }
}
</script>

<style lang="css">

</style>

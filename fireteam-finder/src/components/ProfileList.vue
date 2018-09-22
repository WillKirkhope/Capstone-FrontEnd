<template lang="html">
  <div class = "">
     <Profile v-for = "oneUser in myUsers" :key = "oneUser.id" v-bind:user = "oneUser"/>
 </div>
</template>

<script>
import Profile from './Profile'
export default {
  name: 'ProfileList',
  props: ["myUsers"],
  components: {
    Profile
  }
}
</script>

<style lang="css">

</style>

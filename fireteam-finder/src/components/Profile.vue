<template lang="html">
  <div class="profiles-home">
  <div class="">
    <b-card id="post">
          <h3>GamerTag: {{user.GamerTag}}</h3>
          <h5>Description: {{user.Description}}</h5>
          <b-button variant="primary" id = "create-button" :to="`/user/${user.id}`">Details</b-button>
    </b-card>
  </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
   props: ["user"]
}
</script>

<style lang="css">

</style>

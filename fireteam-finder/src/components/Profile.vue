<template lang="html">
  <div class="">
    <b-card id="post">
          <h3>GamerTag: {{user.GamerTag}}</h3>
          <h5>Description: {{user.Description}}</h5>
          <a href="#"
            class="card-link">View Profile</a>
    </b-card>
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

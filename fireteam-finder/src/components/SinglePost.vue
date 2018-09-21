<template lang="html">
  <div class="">
    <b-card id="post">
          <h3>GamerTag: {{post.GamerTag}}</h3>
          <h4>Game: {{post.Game}}</h4>
          <h4>Activity: {{post.Activity}}</h4>
          <h5>Players Needed: {{post.PlayersNeeded}}</h5>
          <h5>Age Group: {{post.AgeGroup}}</h5>
          <h5>Mic: {{post.Mic}}</h5>
          <p>Description: {{post.Description}}</p>
          <a href="#"
            class="card-link">View Profile</a>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
   props: ["post"]
}
</script>

<style lang="css">
</style>

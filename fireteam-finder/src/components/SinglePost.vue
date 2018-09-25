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
          <button @click="this.deleteEvent" id="delete" type="button" name="button">Delete</button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
   props: ["post"],

  methods: {
    deleteEvent (event) {
  console.log('delete was clicked')
  console.log('target',event.target.id)
  const post_id = event.target.id
  fetch(`https://fireteam-finder.herokuapp.com/posts/${this.post.id}`, {
    method: 'DELETE'
  })
}
}
}
</script>

<style lang="css">

button {
  border-radius: 0.5vw;
  background-color: #686868;
  border-color: #686868;
  color: #fff;
}

</style>

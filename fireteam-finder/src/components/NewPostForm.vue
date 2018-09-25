<template lang="html">
  <div class="new-form">
    <div class="form-container">
    <form id="form" @submit.prevent="postNewEvent">
      <label htmlFor="name">GamerTag</label>
      <input type="text" name="GamerTag" placeholder="GamerTag" v-model="formData.GamerTag" />
      <label htmlFor="name">Game</label>
      <input type="text" name="Game" placeholder="Game" v-model="formData.Game" />
      <label htmlFor="activity">In Game Activity</label>
      <input type="text" name="Activity" placeholder="In Game Activity" v-model="formData.Activity" />
      <label htmlFor="description">Description</label>
      <textarea type="text" name="description" placeholder="Description" v-model="formData.Description"></textarea>
      <label htmlFor="playersneeded">Players Needed</label>
      <input type="text" name="PlayersNeeded" placeholder="Players Needed" v-model="formData.PlayersNeeded" />
      <label htmlFor="agegroup">Age Group</label>
      <input type="text" name="AgeGroup" placeholder="Below 18, 18-25, 25+" v-model="formData.AgeGroup" />
      <label class="Mic" htmlFor="mic-needed">Mic?</label>
      <input type="text" name="Mic" placeholder="Yes, No, Don't Care!" v-model="formData.Mic" />
      <input id="submit-button" type="submit" name="submit" value="Submit"/>
    </form>
    </div>
  </div>

</template>

<script>
export default {
  name: 'NewPostForm',
  data(){
    return {
      formData: {
        GamerTag: '',
        Game: '',
        Activity: '',
        Description: '',
        PlayersNeeded: '',
        AgeGroup: '',
        Mic: ''
      }
    }
  },
  methods: {
    postNewEvent(){
      console.log(this.formData)
      fetch('https://fireteam-finder.herokuapp.com/posts', {
        method: 'POST',
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(this.formData)
      })
      .then(console.log(this.formData, "data"))
    }
  }
}
</script>

<style lang="css">

.new-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vw;
  background-image: url("../assets/FormBack.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.form-container {
  background-color: #131F21;
  width: 20vw;
  margin-left: 40vw;
  opacity: 0.8;
  border-radius: 0.5vw;
}

#form {
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
}

textarea {
  margin-bottom: 1vw;
}

input {
  margin-bottom: 1vw;
}

select {
  margin-bottom: 1vw;
}

label {
  color: #fff;
}

#submit-button {
  margin-top: 1vw;
  border-radius: 0.5vw;
  background-color: #686868;
  border-color: #686868;
  color: #fff;
}

</style>

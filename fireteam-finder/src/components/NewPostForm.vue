<template lang="html">
  <div class="new-form">
    <form id="form" @submit.prevent="postNewEvent">
      <label htmlFor="name">GamerTag</label>
      <input type="text" name="GamerTag" placeholder="GamerTag" v-model="formData.GamerTag" />
      <label htmlFor="name">Game</label>
      <input type="text" name="Game" placeholder="Game" v-model="formData.Gamer" />
      <label htmlFor="activity">In Game Activity</label>
      <input type="text" name="Activity" placeholder="In Game Activity" v-model="formData.Activity" />
      <label htmlFor="agegroup">Age Group</label>
      <input type="text" name="AgeGroup" placeholder="Below 18, 18-25, 25+" v-model="formData.AgeGroup" />
      <!-- <select class="age-group" name="AgeGroup">
        <option value="Don't Care!">Don't Care!</option>
        <option value="Under 18">Under 18</option>
        <option value="18-25">18-25</option>
        <option value="25+">25+</option>
      </select> -->
      <label class="Mic" htmlFor="mic-needed">Mic?</label>
      <input type="text" name="Mic" placeholder="Yes, No, Don't Care!" v-model="formData.Mic" />
      <!-- <select class="mic-needed" name="Mic?">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="All Good without it!">All Good Without it!</option>
      </select> -->
      <label htmlFor="playersneeded">Players Needed</label>
      <input type="text" name="PlayersNeeded" placeholder="Players Needed" v-model="formData.PlayersNeeded" />
      <label htmlFor="description">Description</label>
      <textarea name="name" rows="6" cols="60" placeholder="Description" v-model="formData.Description"></textarea>
      <input id="submit-button" type="submit" name="submit" value="Submit" />
    </form>
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
      fetch('https://fireteam-finder.herokuapp.com/posts', {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(this.formData)
      })
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
  background-image: url("../assets/Destiny-Players.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#form {
  display:flex;
  flex-direction:column;
  padding:50px;
  width:40vw;
  align-items:center;
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
}

</style>

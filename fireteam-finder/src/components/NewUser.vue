<template lang="html">
  <div class="new-form">
    <form id="form" @submit.prevent="postNewEvent">
      <label htmlFor="name">GamerTag</label>
      <input type="text" name="GamerTag" placeholder="GamerTag" v-model="formData.GamerTag" />
      <label htmlFor="gamer-img">Gamer Image</label>
      <input type="text" name="Activity" placeholder="Add Image Link" v-model="formData.Image">
      <label htmlFor="gamer-video">Brag Video</label>
      <input type="text" name="brag-video" placeholder="Add Video Link" v-model="formData.Video">
      <label htmlFor="playstyle">Play Style</label>
      <textarea name="name" rows="2" cols="60" placeholder="Play Style" v-model="formData.PlayStyle"></textarea>
      <label htmlFor="topGames">Top Games</label>
      <textarea name="name" rows="2" cols="60" placeholder="Top Games" v-model="formData.FavoriteGames"></textarea>
      <label htmlFor="description">Description</label>
      <textarea name="name" rows="4" cols="60" placeholder="Description" v-model="formData.Description"></textarea>
      <input id="submit-button" type="submit" name="submit" value="Submit">
    </form>
  </div>

</template>

<script>
export default {
  name: 'NewUser',
  data(){
    return {
      formData: {
        GamerTag: '',
        Description: '',
        PlayStyle: '',
        FavoriteGames: '',
        Image: '',
        Video: ''
      }
    }
  },
  methods: {
    postNewEvent(){
      fetch('https://fireteam-finder.herokuapp.com/users', {
        method: 'POST',
        headers: {
           "Content-type": "application/json"
          },
        body: JSON.stringify(this.formData)
      })
    }
  }
}
</script>

<style scoped>

.new-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vw;
  background-image: url("../assets/NewuserBackground.jpg");
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

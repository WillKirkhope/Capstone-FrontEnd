<template lang="html">
  <div class="profile">
    <div class="posts">
    <ProfileList v-bind:myUsers="users"/>
    </div>
</div>
</template>

<script>
import ProfileList from './ProfileList'
export default {
  name: 'Profiles',
  components: {
    ProfileList
  },
  data() {
      return {
          users: []
      }
  },
  methods: {
    getData(){
      fetch('https://fireteam-finder.herokuapp.com/users')
        .then(response => response.json())
        .then(myData => {
          this.users = myData.users
        console.log('yo', myData);})
      }
    },
  mounted() {
      this.getData()
  }
}
</script>

<style lang="css">

.profile{
  display: flex;
  height: 60vw;
  background-image: url("../assets/Atheon.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.posts{
  width: 50vw;
  height: 50vw;
  margin-left: 8vw;
  margin-top: 5vw;
  overflow: scroll;
}

#post{
  margin-bottom: 2vw;
}

.Profile-section {
  width: 20vw;
  margin-bottom: 2vw;
}

.Profile-section img {
  height: 12vw;
}

.messaging{
  width: 20vw;
  height: 30vw;
  overflow: scroll;
}

.profile-messaging{
  margin-left: 5vw;
  margin-top: 5vw;
}

.Brag-video {
  margin-bottom: 2vw;
}


</style>

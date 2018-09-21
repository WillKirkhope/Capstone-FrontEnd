<template lang="html">
  <div class="landing">
    <div class="Landing-img">
      <div class="AppName">
      <span class='name'>Fireteam Finder</span>
    </div>
    </div>
    <div class="game-selection">
      <router-link id="button" to="/Destiny2">Battlefield 5</router-link>
      <router-link id="button" to="/Destiny2">Call Of Duty BOPS 4</router-link>
      <router-link id="button" to="/Destiny2" v-bind:myPosts="posts">Destiny 2</router-link>
      <router-link id="button" to="/Destiny2">Overwatch</router-link>
      <router-link id="button" to="/Destiny2">Rainbow Six Siege</router-link>
      <div class="login-user">
        <router-link id="login" to="/Login">Login</router-link>
        <br>
        <router-link id="NewUser" to="/NewUser">New User</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing'
// data(){
//   return {
//     posts: []
//   }
// },
//   methods: {
//   getData(){
//     fetch('https://fireteam-finder.herokuapp.com/posts')
//       .then(response => response.json())
//       .then(myData => {
//         this.posts = myData.post
//       console.log('yo', myData);})
//     }
// },
// mounted() {
//   this.getData()
// }

}
</script>

<style scoped>

.Landing-img {
    background-image: url("../assets/Fade.png");
    height: 40vw;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.game-selection {
  background-color: #131f21;
  padding-right: 4vw;
  padding-bottom: 15vw;
}

#button {
  height: 5vw;
  margin-left: 2vw;
  background-color: #686868;
  border-color: #686868;
  color: #fff;
  border-radius: 0.5vw;
  font-size: 1.5vw;
  padding: 1vw;
  text-decoration: none;
}

.name{
  background-color: #131f21;
  color: #fff;
  padding: 20px;
  font-size: 36px;
  letter-spacing: 10px;
  justify-content: center;
  text-align: center;
}
.AppName{
  padding-top: 5vw;
}

.login-user {
  margin-top: 3vw;
  padding-left: 4vw;
}

#login {
  color: #5C6672;
}

#NewUser {
  color: #5C6672;
}

</style>

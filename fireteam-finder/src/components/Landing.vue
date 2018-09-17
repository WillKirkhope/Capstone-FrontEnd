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
      <router-link id="button" to="/Destiny2">Destiny 2</router-link>
      <router-link id="button" to="/Destiny2">Overwatch</router-link>
      <router-link id="button" to="/Destiny2">Rainbow Six Siege</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing'
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
  padding-right: 3vw;
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

</style>

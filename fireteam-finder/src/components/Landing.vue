<template lang="html">
  <div class="landing">
    <div class="Landing-img">
    </div>
    <div class="game-selection">
      <button type="button" name="button">Battlefield 5</button>
      <button type="button" name="button">Call Of Duty BOPS 4</button>
      <button type="button" name="button">Destiny 2</button>
      <button type="button" name="button">Overwatch</button>
      <button type="button" name="button">Rainbow Six Siege</button>
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
    height: 50vw;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.game-selection {
  /* border: solid white 3px; */
  background-color: #131f21;
  padding-right: 3vw;
  padding-bottom: 10vw;
}

button {
  height: 3vw;
  margin-left: 2vw;
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
  border-radius: 0.5vw;
  font-size: 1vw;
}

</style>

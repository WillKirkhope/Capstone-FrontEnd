<template lang="html">
  <div class="login-form">
    <form id="form">
      <label htmlFor="name">GamerTag</label>
      <input type="text" name="GamerTag" placeholder="GamerTag">
      <label htmlFor="name">Password</label>
      <input type="text" name="Password" placeholder="Password">
      <input id="submit-button" type="submit" name="submit" value="Submit">
    </form>
  </div>

</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style lang="css">

.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vw;
  background-image: url("../assets/LightFades.jpg");
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

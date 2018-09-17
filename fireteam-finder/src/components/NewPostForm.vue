<template lang="html">
  <div class="new-post">
    <form id="form">
      <label htmlFor="name">Login</label>
      <input type="text" name="GamerTag" placeholder="GamerTag">
      <input type="text" name="Password" placeholder="Password">
      <input id="submit-button" type="submit" name="submit" value="Submit">
    </form>
  </div>

</template>

<script>
export default {
  name: 'NewPostForm'
}
</script>

<style lang="css">
</style>

<template lang="html">
  <div class="posts-page">
    <div class="title">
      <h1>Destiny 2</h1>
      <img src="../assets/destiny-logo-png-2.png" alt="">
    </div>
    <div class="posts">
      <b-card id="post" title="Shitting on Plebs in Cruci"
              sub-title="">
            <p class="card-text">
              Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
            </p>
            <a href="#"
              class="card-link">View Profile</a>
            <b-link href="#"
              class="card-link">Message</b-link>
      </b-card>
      <b-card id="post" title="Shitting on Plebs in Cruci"
              sub-title="">
            <p class="card-text">
              Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
            </p>
            <a href="#"
              class="card-link">View Profile</a>
            <b-link href="#"
              class="card-link">Message</b-link>
      </b-card>
      <b-card id="post" title="Shitting on Plebs in Cruci"
              sub-title="">
            <p class="card-text">
              Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
            </p>
            <a href="#"
              class="card-link">View Profile</a>
            <b-link href="#"
              class="card-link">Message</b-link>
      </b-card>
    </div>
    <div class="profile-messaging">
    <div class="Profile-section">
      <b-card title="Will Kirkhope"
              sub-title="Slayer">
            <router-link id="WillKirkhope" to="/WillKirkhope">View Profile</router-link>
      </b-card>
    </div>
    <div class="messaging">
      <b-card title="Messages">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </b-card>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePagePosts'
}
</script>

<style lang="css">

.posts-page{
  display: flex;
  height: 60vw;
  background-image: url("../assets/BackgroundD.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  margin-top: 5vw;
  margin-left: 2vw;
  color: #ffffff;
}

.title img {
  height: 10vw;
}

.posts{
  width: 50vw;
  height: 44vw;
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

.messaging{
  width: 20vw;
  height: 33vw;
  overflow: scroll;
}

.profile-messaging{
  margin-left: 5vw;
  margin-top: 5vw;
}

</style>

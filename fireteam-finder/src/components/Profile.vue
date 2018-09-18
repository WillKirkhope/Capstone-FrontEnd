<template lang="html">
  <div class="profile">
    <div class="profile-messaging">
    <div class="Profile-section">
      <b-card title="Will Kirkhope"
              sub-title="Slayer">
              <img src="../assets/Hunter.jpg" alt="hunt">
      </b-card>
    </div>
    <div class="messaging">
      <b-card>
        <h3>Description</h3>
        <p>Yo! My name is Will and I play games in my free time, im better than I should be and I'm always down to help or squad up!</p>
        <h3>Play Style</h3>
        <p>Agressive, Pub-Stomp, Competitive, Raids, Helpful</p>
        <h3>Top Games</h3>
        <p>Destiny 2, Battlefield 1, TitanFall 2</p>
      </b-card>
    </div>
    </div>
    <div class="posts">
      <div class="Brag-video">
        <b-embed type="iframe"
           aspect="16by9"
           src="https://gameclipscontent-d3021.xboxlive.com/xuid-2535444063957577-private/b1fb160c-422b-4e56-a1ca-0aad513b6b41.MP4?sv=2015-12-11&sr=b&si=DefaultAccess&sig=zd21fqVhUUGLbjNZRYBQWEGanNba%2BNMMkYyozqzSEnM%3D&__gda__=1537221759_2d77d55c2c87acb4ff0b597b24c604ff"
           allowfullscreen
           ></b-embed>
      </div>
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
  <div class="new-post">
    <router-link id="button" to="/CreatePost">Create Post</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Profile'
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

.new-post {
  margin-top: 6vw;
}

#button {
  margin-left: 5vw;
  background-color: white;
  padding: 1vw;
  border-radius: 10%;
  text-decoration: none;
}
</style>

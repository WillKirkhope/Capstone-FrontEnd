<template lang="html">
  <div class="SingleProfile">
    <div class="profile-messaging">
    <div class="Profile-section">
      <b-card>
            <h1>{{this.myEvents[0].GamerTag}}</h1>
              <img :src='this.myEvents[0].Image' alt="Img">
      </b-card>
    </div>
    <div class="messaging">
      <b-card>
        <h3>Description</h3>
        <p>{{this.myEvents[0].Description}}</p>
        <h3>Play Style</h3>
        <p>{{this.myEvents[0].PlayStyle}}</p>
        <h3>Top Games</h3>
        <p>{{this.myEvents[0].FavoriteGames}}</p>
      </b-card>
    </div>
    </div>
    <div class="posts">
      <div class="Brag-video">
        <b-embed type="iframe"
           aspect="16by9"
           src='https://gameclipscontent-d3022.xboxlive.com/xuid-2535444063957577-private/d4d4224f-e541-451b-87e0-88cf0c22a4f9.MP4?sv=2015-12-11&sr=b&si=DefaultAccess&sig=83VTwRC8375zza9A%2FGNO7Gs1%2B0mIV6F3sBmx7XppQZM%3D&__gda__=1537813386_e1caa1e1a96ada7ea4337574ffe88fd9'
           allowfullscreen
           ></b-embed>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SingleProfile',
  props: ['myEvents']
}
</script>

<style lang="css">

.SingleProfile{
  display: flex;
  height: 60vw;
  background-image: url("../assets/User.jpeg");
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
</style>

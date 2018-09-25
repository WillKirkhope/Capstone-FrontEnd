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
    <div class="video">
      <div class="Brag-video">
        <b-embed type="iframe"
           aspect="16by9"
           src='https://gameclipscontent-d2001.xboxlive.com/xuid-2535444063957577-private/ff030c65-5d4a-472c-9bae-a426b71281b9.MP4?sv=2015-12-11&sr=b&si=DefaultAccess&sig=rR1jx8BVlcidGNfscnJ25kGBswEs4uwCYY0DE9oxNBw%3D&__gda__=1537898757_cafcff88e1068203592dd07b91228be6'
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

.video{
  width: 50vw;
  height: 50vw;
  margin-left: 8vw;
  margin-top: 5vw;
  overflow: scroll;
}

/* #post{
  margin-bottom: 2vw;
} */

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

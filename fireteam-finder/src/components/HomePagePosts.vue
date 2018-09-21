<template lang="html">
  <div class="posts-page">
    <div class="title">
      <h1>Destiny 2</h1>
      <img src="../assets/destiny-logo-png-2.png" alt="">
    </div>
    <div class="posts">
      <b-card id="post" title="Shitting on Plebs in Cruci"
              sub-title="Pictish Brute">
            <p>Destiny 2</p>
            <p class="card-text">
              Crucible</p>
            <p>Pub Stomping in Crucible</p>
            <p>2</p>
            <p>18-25</p>
            <p>yes</p>
            <a href="#"
              class="card-link">View Profile</a>
      </b-card>
    </div>
    <div class="profile-messaging">
    <div class="Profile-section">
      <b-card title="Will Kirkhope"
              sub-title="Slayer">
            <router-link id="WillKirkhope" to="/WillKirkhope">My Profile</router-link>
      </b-card>
    </div>
    <div class="messaging">
      <b-card title="Chat">
        <div class="chat-body" id="chatbox">
            <div class="messages" v-for="(msg, index) in messages" :key="index">
                <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
            </div>
        </div>
        <div class="card-footer">
            <form @submit.prevent="sendMessage">
                <div class="gorm-group">
                    <label for="user">User:</label>
                    <input type="text" v-model="user" class="form-control">
                </div>
                <div class="gorm-group pb-3">
                    <label for="message">Message:</label>
                    <input type="text" v-model="message" class="form-control">
                </div>
                <button type="submit" class="btn btn-success">Send</button>
            </form>
        </div>
      </b-card>
    </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
  name: 'HomePagePosts',
  data() {
      return {
          posts: [],
          user: '',
          message: '',
          messages: [],
          socket : io('localhost:3001')
      }
  },
  methods: {
    getData(){
      fetch('https://fireteam-finder.herokuapp.com/posts')
        .then(response => response.json())
        .then(myData => {
          this.posts = myData.post
        console.log('yo', myData);})
      },
      sendMessage(e) {
          e.preventDefault();

          this.socket.emit('SEND_MESSAGE', {
              user: this.user,
              message: this.message
          });
          this.message = ''
      },
    },
  mounted() {
      this.getData(),
      this.socket.on('MESSAGE', (data) => {
          this.messages = [...this.messages, data];
          this.$nextTick(function () {
            var messageBox = document.getElementById('chatbox')
            messageBox.scrollTop = messageBox.scrollHeight
          })
      });
  }
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
  height: 45vw;
  overflow: scroll;
}

.profile-messaging{
  margin-left: 5vw;
  margin-top: 5vw;
}

.chat-body{
  height: 10vw;
  overflow-y: scroll;
}

</style>

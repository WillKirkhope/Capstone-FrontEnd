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
      <b-card title="Chat">
        <router-link id="Chat" to="/Chat">Chat</router-link>
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
          user: '',
          message: '',
          messages: [],
          socket : io('localhost:3001')
      }
  },
  methods: {
      sendMessage(e) {
          e.preventDefault();

          this.socket.emit('SEND_MESSAGE', {
              user: this.user,
              message: this.message
          });
          this.message = ''
      }
  },
  mounted() {
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
  height: 40vw;
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

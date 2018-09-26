<template lang="html">
  <div class="posts-page">
    <div class="title">
      <h1>Destiny 2</h1>
      <img src="../assets/destiny-logo-png-2.png" alt="">
    </div>
    <div class="posts">
    <PostsList v-bind:myPosts="posts"/>
    </div>
    <div class="profile-messaging">
    <div class="Profile-section">
      <b-card id="profile-link" title=""
              sub-title="">
            <router-link id="Profiles" to="/Profiles">View Profiles</router-link>
      </b-card>
    </div>
    <div class="Profile-section">
      <b-card id="create-link" title=""
              sub-title="">
            <router-link id="Create" to="/CreatePost">Create Post</router-link>
      </b-card>
    </div>
    <div class="messaging">
      <b-card id="Chat-section" title="Chat">
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
                <button id="Sub-butt" type="submit" class="btn btn-success">Send</button>
            </form>
        </div>
      </b-card>
    </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
import PostsList from './PostsList'
export default {
  name: 'HomePagePosts',
  components: {
    PostsList
  },
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
      }
    },
  mounted() {
      this.getData(),
      this.socket.on('MESSAGE', (data) => {
          this.messages = [...this.messages, data];
          this.$nextTick(function () {
            var messageBox = document.getElementById('chatbox')
            messageBox.scrollTop = messageBox.scrollHeight
          })
      })
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
  animation: fadeIn;
  animation-duration: 5s;
}

@keyframes fadeIn{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
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
  background-color: #E5E6E4;
}

.Profile-section {
  width: 20vw;
  margin-bottom: 2vw;

}

#Profiles{
  color: #5C6672;
}

#Create{
  color: #5C6672;
}

#create-link{
  background-color: #E5E6E4;
}

#profile-link{
  background-color: #E5E6E4;
}

.messaging{
  width: 20vw;
  height: 45vw;
  overflow: scroll;
}

.profile-messaging{
  margin-left: 3vw;
  margin-top: 5vw;
}

.chat-body{
  height: 10vw;
  overflow-y: scroll;
}

#Chat-section{
background-color: #E5E6E4;
}

#Sub-butt {
  border-radius: 0.5vw;
  background-color: #686868;
  border-color: #686868;
  color: #fff;
}

</style>

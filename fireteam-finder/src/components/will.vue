
this.socket.on('MESSAGE', (data) => {
    this.messages = [...this.messages, data];
    this.$nextTick(function () {
      var messageBox = document.getElementById('chatbox')
      messageBox.scrollTop = messageBox.scrollHeight
    })
})


sendMessage(e) {
    e.preventDefault();

    this.socket.emit('SEND_MESSAGE', {
        user: this.user,
        message: this.message
    });
    this.message = ''
}

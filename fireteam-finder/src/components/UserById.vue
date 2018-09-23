<template>
  <div class="Event-by">
    <SingleProfile v-if='this.users' v-bind:myEvents="users" />
  </div>
</template>

<script>
import SingleProfile from "./SingleProfile"
export default {
    name: 'UserById',
    components: {
      SingleProfile
    },
    data() {
        return {
            users: null,
            event_id: null
        }
    },
    methods: {
        getEventData() {
            fetch(`https://fireteam-finder.herokuapp.com/users/${this.event_id}`)
                .then(response => response.json())
                .then(myData => this.users = myData.users)
                .then(() => console.log(this.users[0]))
        },
        getQueryString() {
            let locationName = location.href
            console.log(locationName.split('/'))
            this.event_id = (locationName.split('/')[5])
        }
    },
    mounted() {
        this.getQueryString()
        this.getEventData()
    }
}
</script>

<style>

</style>

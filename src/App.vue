<template>
  <div id="q-app">
    <router-view />
  </div>

</template>

<script >
export default {
  name: 'App',
    created () {
        this.$q.dark.set(true)
        // console.log(this.$q.dark.isActive)
    },
    sockets: {
        connect: function () {
            console.log('socket connected')
        },
        reply: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("reply", data)')
        }
    },
    methods: {
        clickButton: function (data) {
            // $socket is socket.io-client instance
            this.$socket.emit('notice', data)
        }
    }

}



</script>

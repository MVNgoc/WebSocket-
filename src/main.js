import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketIO from 'vue-3-socket.io'
import SocketIO from 'socket.io-client'

const socketConnection = SocketIO("http://localhost:5000")

const app = createApp(App)

app.use(new VueSocketIO({
    debug: true,
    connection: socketConnection,
}))
app.use(router)
app.mount('#app')
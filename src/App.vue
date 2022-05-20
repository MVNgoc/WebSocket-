<template>
  <div id="app">
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
  export default {
    name: 'App',
      components: {
        Sidebar
    }
  }
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: teal;
    height: 100vh;
    width: 100vw;
}

.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
</style>

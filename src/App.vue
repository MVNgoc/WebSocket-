<template>
  <div id="app">
    <div class="dashboard">
        <Sidebar/>
        <div class="sideView">
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
    min-height: 100vh;
    height: auto;
    width: auto;
    min-width: 100vw;
}
.sideView {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
</style>
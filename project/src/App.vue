<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
<style lang='scss'>
html,body{
    height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
  height: 100%;
  #main{
    flex: 1;
    overflow-y: auto;
  }
  #footer{
    height: 40px;
  }
}

</style>

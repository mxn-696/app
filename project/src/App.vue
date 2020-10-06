<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show='$route.meta.showFooter==undefined'></Footer>
    
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
html{
    font-size: 26.667vw;
}
body{
  font-size: 0.16rem;
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
    height: 0.4rem;
  }
}

</style>

<template>
  <div id="app">
    <Navgition/>
    <router-view/>
  </div>
</template>

<script>
import Navgition from "@/components/Navgition"
export default {
  components:{
    Navgition
  }
}
</script>

<style>
html,body{
    height: 100%;
    width: 100%;
    background-color: #F5F5F5;
}
</style>

<script>
import pagehead from '../components/HomePage/pagehead.vue'
export default{
  name:'Home',
  components:{
    pagehead,
  }
}

</script>

<template>
  <div>
    <h1>
      Home Page
    </h1>
    <p>
      Welcome to the Home Page
    </p>
  </div>
  <router-view/>
</template>

<style scoped>

</style>
<template>
  <div class="mainbody">
    <div class="icon">
      <!-- 使用FontAwesomeIcon组件渲染图标 -->
      <font-awesome-icon :icon="['fas','bars']" style="font-size:2em;color:white;"/>
    </div>
      <router-link to="/pagebody" class="nav-link" @click="handleRouterLinkClick">Home</router-link>
      <router-link to="/search" class="nav-link" @click="handleRouterLinkClick">Search Page</router-link>
      <router-link to="/friends" class="nav-link" @click="handleRouterLinkClick">Friends</router-link>
      <router-link to="/submit" class="nav-link" @click="handleRouterLinkClick">Submit</router-link>
      <router-link to="/user" class="nav-link" @click="handleRouterLinkClick">User</router-link>
      <!-- Add more router-links as needed -->

  </div>
</template>

<script>
export default {
  name: 'Navigator',
  methods: {
    handleRouterLinkClick(event) {
      // Do something when a router-link is clicked
    }
  }
}
</script>

<style scoped>
/* Your scoped styles here */

.nav-link {
  position: relative;
  padding-top:0px;
  font: 500 20px '优设标题黑';
  text-decoration:none;
  border: none;
  outline: none;
  color: #DBE3E3;
  display: flex;
  flex-direction:row;
  height: 30px;
  width:150px;
  margin-top:5px;
  margin-left:20px;
  margin-right:10px;
  text-align:center;
  align-items:center;
  justify-content:center;
}
.nav-link:active{
  color:#2E3059;
  border-radius:10px;
}
.nav-link:hover{
  background-color:#8288FF;
  color:#2E3059;
  border-radius:10px;
}
.icon{
  margin-top:5px;
  margin-left:0px;
}
.mainbody{
  display:flex;
  flex-direction:row;
}
</style>

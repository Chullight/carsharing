<script >
import Logo from '../PageHead/Logo.vue'
import Navigator from '../PageHead/Navigator.vue'
import SearchBar from '../PageHead/SearchBar.vue'
import User from '../PageHead/User.vue'
export default{
  name:'pagehead',
  components:{
    Logo,
    Navigator,
    SearchBar,
    User
  }
}

</script>

<template>
  <hr>
  <section>
    <div class="Logo">
      <Logo/>
    </div>
    <div class="Navigator">
      <Navigator/>
    </div>
    <div class="SearchBar">
      <SearchBar/>
    </div>
    <div class="User">
      <User/>
    </div>
  </section>
  <hr>


</template>

<style scoped>
.Navigator{
  margin-left:0px;
  margin-bottom:0px;
  margin-top:0px;

}
hr{
  margin:0px;
}
.Logo{
  margin:0px;
}
section{
  display:flex;
  flex-direction:row;
  width:100%;
  height:50px;
  background-color:#242424;
}
div{
  margin:0px;
}
.Logo{
  justify-flex:flex-start;
  height:50px;
  flex-grow:1;
  margin-left:10px;
  margin-top:10px;
}
.Navigator{
  flex-grow:10;
  height:50px;
  margin-top:5px;

}
.SearchBar{
 flex-grow:2;
  height:50px;
}
.User{
 flex-grow:1;
  height:50px;
  justify-content:flex-end;
  margin-top:5px;
}

</style>
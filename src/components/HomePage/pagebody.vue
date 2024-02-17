<script>
import deco1 from '../PageBody/deco1.vue'
import deco2 from '../PageBody/deco2.vue'
import deco3 from '../PageBody/deco3.vue'
import axios from "axios";

export default{
  name:'pagebody',
  components:{
    deco1,
    deco2,
    deco3,
  },
  data(){
    return{
      searchholder:"Search for anything",
      searchInput:'',
      searchResults:[],
    };
  },
  methods:{
    hidePlaceholder(){
      this.searchholder='';
    },
    showPlaceholder(){
      this.searchholder="Search for anything";
    },
    handleInput(){
      if(this.searchInput.length>=1)
      this.searchCity();
    },
    async searchCity(){
      const apiKey='e4fce0dd56834d559d3b9e5f7fdedc68'
      const apiUrl=`https://api.opencagedata.com/geocode/v1/json?q=${this.searchInput}&key=${apiKey}`;
      try {
        const response = await axios.get(apiUrl);
        this.searchResults = response.data.results;
      } catch (error) {
        console.error('Error searching city:', error);
      }
    },
    Input(value) {
      this.searchInput = value;
    },

  }
}

</script>

<template>
  <div class="mainbody">
    <div class="Title">
      With Whom?
    </div>
    <div class="bottomsearch">
      <font-awesome-icon :icon="['fas', 'house']" style="color:white;margin-left:36%;"/>
    <div class="searchall">
      <a href="#">
        SearchAll
      </a>
    </div>
      <font-awesome-icon :icon="['fas', 'hotel']" style="color:white;margin-right:5px;"/>
      <div class="Hotel">
        <a href="#">
          Hotel
        </a>
      </div>
      <font-awesome-icon :icon="['fas', 'utensils']" style="color:white;margin-right:5px;"/>
      <div class="Restaurant">
        <a href="#">
          Restaurant
        </a>
      </div>
      </div>
    <input class="mainsearchBar" :placeholder="searchholder"  @focus="hidePlaceholder" @blur="showPlaceholder" v-model="searchInput" @input="handleInput">

    <font-awesome-icon :icon="['fas', 'magnifying-glass']" style="color:black;font-size:2em;transform:translate(-650px,3px);"/>
    <button class="searchbutton" @click="searchCity">
      search
    </button>
    <ul v-if="searchResults.length&&searchInput!=''" class="searchresults" >
      <li v-for="result in searchResults" :key="result.geometry.lat + result.geometry.lng" @click="Input(result.formatted)">
        <div class="result" >
          {{ result.formatted }}
        </div>
      </li>
    </ul>
    <div class="deco1">
    <deco1/>
      </div>
    <div class="deco2">
      <deco2/>
    </div>
    <div class="deco3">
      <deco3/>
    </div>



  </div>

</template>

<style scoped>
.searchresults{
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 632px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-left:31%;
  border-radius:5px;
  background:#242424;
  color:white;
  font-size:17px;
  font-weight:600;
  margin-top:2px;
}
.searchresults>li{
  height:50px;
  border-top:1px black solid;
  transition:border-color 0.3s ease;
  padding-left:30px;
  border-radius:3px;
}
.searchresults>li:hover{
  background-color:gray;

}
.result{
  margin-top:13px;
}
a{
  text-decoration:none;
  color:white;
}
.mainbody{
  padding-bottom:200px;
}
a:hover{
  text-decoration:underline;
  opacity:0.8;
}
.deco1{
  height:100px;
  width:100px;
}
.deco2{
  height:100px;
  width:100px;

}

.mainsearchBar{
  width:600px;
  height:40px;
  border-radius:20px;
  margin-top:1%;
  margin-left:30%;
  font-size:22px;
  font-family: 'Arial',sans-serif;
  padding:10px;
  border:1px solid #ccc;
  caret-color:transparent;
  padding-left:50px;
}
.searchbutton{
  height:45px;
  width:80px;
  border-radius:10px;
  background-color:#242424;
  color:white;
  font-size:20px;
  border:none;
  transform:translate(-120px);


}
.Title{
  font-size:50px;
  color:white;
  margin-left:40%;
  margin-bottom:5%;
  margin-top:10%;
}
.bottomsearch{
  display:flex;
  flex-direction:row;
}
.bottomsearch>div{
  margin-right:100px;
}
.searchall{
  margin-left:5px;
}
input::placeholder{
  color:gray;
  opacity:0.2;
  margin-left:50px;
  padding-left:50px;
  text-align:center;
  text-decoration:none;
}
.mainsearchBar:focus{
  text-decoration:underline;
  text-decoration-color:gray;
  text-decoration-thickness: 1px;
  text-decoration-style:dotted;
  text-decoration-offset:10px;
}
</style>
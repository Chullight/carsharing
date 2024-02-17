<script>
import {useEventBus} from '@/EventBus.js'
import {onMounted} from "vue";
import trip from './Trip.vue'

export default{
  name:'UserPage',

  data(){
    return{

    }
  },
  components:{
    trip
  },

  methods:{


  }

}

</script>

<template>
<div class="mainpage" @push-a-trip="test">
  <h1 class="maintitle">My Trips</h1>
  <trip/>
</div>


</template>

<style>
.mainpage{
  width:100%;
  height:100%;
  color:white;
  background-color:transparent;
}
.maintitle{
  font-size:40px;
  font-weight:800;
  color:white;
  margin-left:400px;
  margin-top:100px;


}


</style>
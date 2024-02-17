<script >
import createtrip from './createTrip.vue'
export default{
  name:'submit',
  data(){
    return{
      departure:'',
      destination:'',
      time:'',
      tripname:'',
      iscreatevisible:false,
      dynamicComponent:null,

    };
  },
  components:{
    createtrip,
  },
  methods:{
    showcreate(){
      this.iscreatevisible=true;

    },
    closecreate(){
      this.iscreatevisible=false;
    },

  }

}

</script>

<template>
  <createtrip v-if="iscreatevisible" @close="closecreate" />

  <div class="container">
    <h1>
      Get To Start A Trip
    </h1>
    <p>
      Now there’s two ways to plan your trip—use AI or search on your own. Either way,
    </p>
    <p>
      you’ve got more than 8 million spots to discover, with over one billion traveler
    </p>
    <p style="margin-left:550px;">
      reviews and opinions to guide you.
    </p>
    <div class="trip">
    </div>
    <div class="deco">
    <div class="followatrip">
      <div class="followdeco">

      </div>

      <p class="followtitle">
        Follow a trip
      </p>
      <p class="followtitle">
        After Approvment
      </p>
      <p class="followbody">
        Answer four short questions and AI will create a custom day-by-day itinerary backed by traveler reviews.
      </p>
      <button class="followbutton">
        Follow

      </button>


    </div>
    <div class="createatrip">
      <div class="createdeco">

      </div>
      <p class="createtitle">
        Create a trip
      </p>
      <p class="createtitle">
        On your own
      </p>
      <p class="createbody">
        Browse top destinations, restaurants, and things to do and save your faves to your itinerary as you go.
      </p>
      <button class="createbutton" @click="showcreate">
        Create


      </button>



    </div>

      </div>

  </div>


</template>

<style scoped>
.component{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.container{
  width:100%;
  height:100%;

}
.createdeco{
  background-image:url('/car.jpg');
  background-size:cover;
  height:350px;
  width:350px;
  border-radius:10px;
  margin-left:42px;
}
.triptitle{
  font-size:30px;
  color:black;
  font-weight: 600;
  margin-left:200px;
  margin-bottom:20px;
  margin-top:10px;
}

.followbutton{
  width:300px;
  height:60px;
  border-radius:15px;
  border:none;
  background-color:#3E1785;
  margin-left:42px;
  color:white;
  font-size:30px;
  font-weight:600;
  font-family: 'Arial',sans-serif;
  margin-top:20px;
  margin-bottom:200px;

}
.createbutton{
  width:300px;
  height:60px;
  border-radius:15px;
  border:none;
  background-color:#5A8C4F;
  margin-left:42px;
  color:white;
  font-size:30px;
  font-weight:600;
  font-family: 'Arial',sans-serif;
  margin-top:20px;
  margin-bottom:200px;
}
.followbody{
  font-size:15px;
  width:300px;
  margin-left:42px;
  color:black;
}
.createbody{
  font-size:15px;
  width:300px;
  margin-left:42px;
  color:black;
}
.followtitle{
  font-size:40px;
  padding:0px;
  margin:0px;
  margin-left:42px;
  margin-top:10px;
  color:white;
  font-weight:600;
}
.createtitle{
  font-size:40px;
  padding:0px;
  margin:0px;
  margin-left:42px;
  color:white;
  font-weight:600;
  margin-top:10px;
}
.followdeco{
  background-image:url('/coolgirl.jpg');
  background-size:cover;
  height:350px;
  width:350px;
  border-radius:10px;
  margin-left:42px;

}
h1{
  color:white;
  margin-left:550px;
  margin-top:70px;
  margin-bottom:30px;
  font-size:50px;

}
p{
  color:white;
  margin-left:400px;
  font-size:20px;
}
label{
  font-size:15px;
}
input{
  height:50px;
  width:400px;
  margin-left:50px;
}
.trip{
  width:900px;
  height:250px;
  background-image:url('/tripsubmitbackground.jpg');
  background-size:cover;
  border-radius:20px;
  margin-left:330px;
  margin-top:50px;
  padding-top:150px;
  padding-left:0px;

}
.deco{
  width:900px;
  height:700px;
  display:flex;
  flex-direction:row;
  padding:0px;
  margin-left:330px;
}
.followatrip{
  width:435px;
  height:700px;
  background-image:url('/purple.png');
  margin-top:50px;
  border-radius:20px;
  background:linear-gradient(to right,#D4D5F7,#A3A2F7);
  padding-top:50px;
}
.createatrip{
  width:435px;
  height:700px;
  background-image:url('/green.png');
  margin-left:30px;
  margin-top:50px;
  border-radius:20px;
  background:linear-gradient(to right,#D0FAD5,#A6FAAB);
  padding-top:50px;
}
.tripdesc{
  margin-left:200px;


}
</style>
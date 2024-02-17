<script>
import Calendar from "vue-calendar-component";
import mycalendar from "@/components/PageBody/MyCalendar.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useEventBus } from "@/EventBus.js";

export default {
  name: 'createtrip',
  setup() {
    // 创建 eventBus 并将其作为响应式对象返回
    const eventBus = useEventBus();

    // 其他数据
    const departure = ref('');
    const departureResults = ref([]);
    const destination = ref('');
    const destinationResults = ref([]);
    const Focusdeparture = ref(false);
    const Focusdestination = ref(false);
    const startDate = ref(null);
    const endDate = ref(null);

    // 监听事件以接收数据


    return {
      departure,
      departureResults,
      destination,
      destinationResults,
      Focusdeparture,
      Focusdestination,
      startDate,
      endDate,
      eventBus,
    };
  },
  components: {
    mycalendar,
    Calendar,
  },
  methods: {
    closeCreate() {
      this.$emit('close');
    },
    departuresearch() {
      if (this.departure.length >= 1) {
        this.searchdeparture();
      }
    },
    destinationsearch() {
      if (this.destination.length >= 1) {
        this.searchdestination();
      }
    },
    confirmdeparture(result) {
      this.departure = result;
      this.loseFocusdeparture();
    },
    confirmdestination(result) {
      this.destination = result;
      this.loseFocusdestination();
    },
    async searchdeparture() {
      const apiKey = 'e4fce0dd56834d559d3b9e5f7fdedc68';
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${this.departure}&key=${apiKey}`;
      try {
        const response = await axios.get(apiUrl);
        this.departureResults = response.data.results;
      } catch (error) {
        console.error('Error searching city:', error);
      }
    },
    async searchdestination() {
      const apiKey = 'e4fce0dd56834d559d3b9e5f7fdedc68';
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${this.destination}&key=${apiKey}`;
      try {
        const response = await axios.get(apiUrl);
        this.destinationResults = response.data.results;
      } catch (error) {
        console.error('Error searching city:', error);
      }
    },
    isFocusdeparture() {
      this.Focusdeparture = true;
    },
    loseFocusdeparture() {
      this.Focusdeparture = false;
    },
    isFocusdestination() {
      this.Focusdestination = true;
    },
    loseFocusdestination() {
      this.Focusdestination = false;
    },
    getStartDate() {
      this.startDate = this.$refs.calendarRef.getStartDate();
      return this.startDate.value;
    },
    getEndDate() {
      this.endDate = this.$refs.calendarRef.getEndDate();
      return this.endDate.value;
    },
    async submit() {
      try {
        const tripData = {
          departure: this.departure,
          destination: this.destination,
          startDate: this.startDate,
          endDate: this.endDate,
        };
        console.log(tripData);
        const response = await axios.post('http://localhost:8080/submittrip', tripData).then(()=>{
          this.eventBus.$emit('push-a-trip', tripData);
        });

        // 发送 tripData 事件

      } catch (error) {
        console.error('Error submit', error);
      }
    },
    async confirmTime() {
      try {
        this.getStartDate();
        this.getEndDate();
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  }
}
</script>


<template>
  <div class="background" >
  <div class="mainbody">
    <button class="closeButton" @click="closeCreate">
      x

    </button>

    <p class="maintitle">
      Create A Trip
    </p>
    <p class="tripname">
      Trip Name:

    </p>
    <input class="tripnameinput"/>
    <p class="destination">
      Departure:

    </p>
    <input class="destinationinput" v-model="departure" @input="departuresearch" @focus="isFocusdeparture" />
    <ul v-if="departureResults.length&&departure!=''&&Focusdeparture" class="departureResults" @focus="isFocusdeparture">


      <li v-for="result in departureResults" :key="result.geometry.lat + result.geometry.lng" @click="confirmdeparture(result.formatted)" @focus="isFocusdeparture">

        <div class="result">
          {{ result.formatted }}
        </div>
      </li>
    </ul>
    <p class="departure">
      Destination
    </p>

    <input class="departureinput" v-model="destination" @input="destinationsearch" @focus="isFocusdestination" />
    <ul v-if="destinationResults.length&&destination!=''&&Focusdestination" class="destinationResults" @focus="isFocusdestination">
      <li v-for="result in destinationResults" :key="result.geometry.lat + result.geometry.lng" @click="confirmdestination(result.formatted)" @focus="isFocusdestination">
        <div class="result">
          {{ result.formatted }}
        </div>
      </li>
    </ul>
    <p class="departure">
      Time:
    </p>
    <div class="calendar">
    <mycalendar ref="calendarRef" @selectEnd="confirmTime"/>
    </div>
    <hr>
    <div class="footer">

      <button @click="submit">
        Create
      </button>

    </div>

  </div>
  </div>


</template>
<style scoped>
.footer{
  display:flex;
  flex-direction:row;
  margin-top:20px;
  margin-left:50px;
  margin-bottom:20px;
  font-size:20px;
  font-weight:600;
}
button{
  margin-left:280px;
  width:150px;
  height:50px;
  margin-right:0px;
  border-radius:20px;
  background-color:black;
  font-size:20px;
  font-weight:600;
  color:white;
  border:none;

}
.departureResults,.destinationResults{
  list-style: none;
  padding: 0;
  margin: 0;
  width: 500px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-left:20px;
  border-radius:5px;
  color:white;
  font-size:17px;
  font-weight:600;
  margin-top:15px;

}
.departureResults>li,.destinationResults>li{
  height:55px;
  transition:border-color 0.3s ease;
  padding-left:50px;
  border-radius:3px;
  line-height:50px;
  color:black;
  background-color:#EDEDED;
  border-top:1px #C9C9C9 solid;
  border-bottom:1px #C9C9C9 solid;
}
.departureResults>li:hover,.destinationResults>li:hover{
  background-color:#BABABA;
  border-radius:0px;
}
.calendar{
  margin-bottom:0px;
  margin-left:50px;
}
.background{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  font-family: 'Arial', sans-serif;
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
  color:black;

}

.closeButton{
  width:30px;
  height:30px;
  margin-left:480px;
  margin-top:10px;
  background-color:transparent;
  border:none;
  font-size:20px;
  position:fixed;
  color:black;
}
.mainbody{
  background: white;
  border-radius:20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding-top:10px;
  width:35%;
  overflow:scroll;
  max-height:100%;
}
.mainbody::-webkit-scrollbar{
  width:0px;
}
.mainbody::-webkit-scrollbar-thumb{
  background-color:transparent;
}
.mainbody::-webkit-scrollbar-track{
  background-color:transparent;
}
.maintitle{
  font-size:30px;
  font-weight:800;
  margin-left:50px;

}

.tripnameinput{
  width:400px;
  margin-left:50px;
  height:50px;
  border-radius:5px;
  font-size:30px;
  padding-left:15px;
  border:2px solid black;
}
.tripname{
  margin-left:50px;
  margin-bottom:5px;

}
.destination{
  margin-left:50px;
  margin-bottom:5px;
}
.destinationinput{
  margin-left:50px;
  width:400px;
  height:35px;
  border-radius:20px;
  padding-left:15px;
  border:2px solid black;
}
.departure{
  margin-left:50px;
  margin-bottom:5px;
}
.departureinput{
  margin-left:50px;
  width:400px;
  height:35px;
  border-radius:20px;
  padding-left:15px;
  border: 2px solid black;
}
</style>
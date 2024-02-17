<template>
  <button @click="buttonshow"></button>
  <div class="trip-details" v-show="showTrip">
    <p>出发地: {{ departure }}</p>
    <p>目的地: {{ destination }}</p>
    <p>开始日期: {{ startDate }}</p>
    <p>结束日期: {{ endDate }}</p>
  </div>
</template>

<script>
import { useEventBus } from '@/EventBus.js';
import {getCurrentInstance, ref} from "vue";

export default {
  name: 'TripDetails',
  setup() {
    const eventBus = useEventBus();
    const showTrip =ref(false);
    const departure=ref('');
    const destination=ref('');
    const startDate=ref('');
    const endDate=ref('');



    // 监听来自EventBus的 push-a-trip 事件
    eventBus.$on('push-a-trip', (data) => {
      // 验证接收到的数据
      console.log("Received trip data:", data);
      if (!data.departure || !data.destination || !data.startDate || !data.endDate) {
        console.error("Invalid trip data received!");
        return;
      }

      // 更新数据并显示内容
      departure.value = data.departure;
      destination.value = data.destination;
      startDate.value = data.startDate;
      endDate.value = data.endDate;


    });
    function buttonshow(){
      this.showTrip=true;
      console.log(departure.value);
      console.log(destination.value);
      console.log(startDate.value);
      console.log(endDate.value);
      console.log(showTrip.value);
    }

    return {buttonshow, showTrip, departure,destination,startDate,endDate};
  }
}
</script>

<style scoped>
.trip-details {
  width: 700px;
  height: 200px;
  color: black;
  background-color: white;
  margin-left: 400px;
  margin-top: 20px;
  border-radius: 20px;
  overflow:auto;
}
button{
  height:100px;
  width:100px;
}
p {
  font-size: 20px;
  color: black;
}
</style>

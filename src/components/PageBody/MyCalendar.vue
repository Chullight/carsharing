<template>
  <div class="cal">
    <div class="controls">
      <select v-model="selectedYear" @change="updateCalendar" class="selectbox">
        <option v-for="year in years" :key="year">{{ year }}</option>
      </select>
      <select v-model="selectedMonth" @change="updateCalendar" class="selectbox">
        <option v-for="(month, index) in months" :key="index">{{ month }}</option>
      </select>
    </div>

    <table>
      <thead>
      <tr>
        <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(week, weekIndex) in calendar" :key="weekIndex">
        <td v-for="(date, dateIndex) in week" :key="dateIndex">
            <span
                @click="selectDate(date)"
                :class="{selected: isSelectedDate(date) }"
                :style="{backgroundColor: isBetween(date) ? 'lightgray' : '',borderRadius: isBetween(date) ? '50px' : ''}"

            >{{ date.day }}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'MyCalendar',
  setup(_,{emit}) {
    const selectedYear = ref(new Date().getFullYear());
    const selectedMonth = ref(new Date().getMonth());
    const selectedDate = ref(null); // 使用 ref 创建响应式数据
    const startDate=ref(null);
    const endDate=ref(null);
    var selectNum=0;


    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const years = computed(() => {
      const currentYear = new Date().getFullYear();
      return Array.from({ length: 10 }, (_, index) => currentYear - 5 + index);
    });

    const months = computed(() => {
      return Array.from({ length: 12 }, (_, index) => index + 1);
    });

    const calendar = computed(() => {
      const firstDayOfMonth = new Date(selectedYear.value, selectedMonth.value, 1).getDay();
      const totalDaysInMonth = new Date(selectedYear.value, selectedMonth.value + 1, 0).getDate();
      const datesArray = [];
      for (let i = 1; i <= totalDaysInMonth; i++) {
        datesArray.push({ day: i, month: selectedMonth.value, year: selectedYear.value });
      }
      return [
        ...Array(firstDayOfMonth).fill({ day: '', month: '', year: '' }),
        ...datesArray,
      ].reduce((accumulator, value, index) => {
        if (index % 7 === 0) {
          accumulator.push([value]);
        } else {
          accumulator[accumulator.length - 1].push(value);
        }
        return accumulator;
      }, []);
    });

    function selectDate(date) {
      // 只允许一个日期被选择，先将之前选中的日期状态重置
      if(selectNum===0){
        selectStart(date);
        selectNum=1;
      }else if(selectNum===1){
        selectEnd(date);
        selectNum=2;
      }else{
        startDate.value.selected=false;
        startDate.value=ref(null);
        endDate.value.selected=false;
        endDate.value=ref(null);
        selectNum=0;
        selectStart(date);
        selectNum=1;
      }
      // 处理日期选择逻辑
    }
    function selectStart(date) {
      if (selectNum === 2) {
        startDate.value.selected = false;
        startDate.value = ref(null);
        endDate.value.selected = false;
        endDate.value = ref(null);
        selectNum = 0;
      } else if (selectNum === 0) {
        startDate.value = date;
        startDate.value.selected = true;
        console.log('startDate:', startDate.value);
      }
    }
     function selectEnd(date){
      if(selectNum===2){
        startDate.value.selected=false;
        startDate.value=ref(null);
        endDate.value.selected=false;
        endDate.value=ref(null);
        selectNum=0;
      }else if(selectNum===1){
        endDate.value=date;
        endDate.value.selected=true;
        console.log('endDate:',endDate.value);
      }
      emit('selectEnd');
    }

    function isSelectedDate(date) {
        if (startDate.value && endDate.value) {
          const start = startDate.value;
          const end = endDate.value;
          return (
              (date.day === start.day && date.month === start.month && date.year === start.year) ||
              (date.day === end.day && date.month === end.month && date.year === end.year)
          );
        } else {
          return false; // 如果没有选中的日期，则返回 false
        }
    }
    function isBetween(date){
      if (startDate.value && endDate.value) {
        const start = startDate.value;
        const end = endDate.value;
        // 检查日期是否在 startDate 和 endDate 之间
        const isBetween = (date.year > start.year && date.year < end.year) ||
            (date.year === start.year && date.year === end.year &&
                date.month > start.month && date.month < end.month) ||
            (date.year === start.year && date.year === end.year &&
                date.month === start.month && date.month === end.month &&
                date.day > start.day && date.day < end.day);
        // 如果日期在 startDate 和 endDate 之间，则返回 true
        if (isBetween) {
          return true;
        }
      }
      return false;
    }
    function getStartDate(){
      const start=startDate.value;
      return start.year+'-'+start.month+'-'+start.day;
    }
    function getEndDate(){
      const end=endDate.value;
      return end.year+'-'+end.month+'-'+end.day;
    }


    return {
      selectedYear,
      selectedMonth,
      selectedDate,
      years,
      months,
      daysOfWeek,
      calendar,
      selectDate,
      isSelectedDate,
      isBetween,
      getStartDate,
      getEndDate,
      startDate,
      endDate,
      selectNum,
    };
  },
};
</script>

<style scoped>
.cal {
  max-width: 400px;
  font-family: 'Arial', sans-serif;
  margin-left: 0;
  padding-left: 0;
}

.controls {
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
}

.selectbox {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.calendar-table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

span {
  cursor: pointer;
  display: block;
  padding: 10px;
  transition: background-color 0.3s;
  border:2px solid transparent;
}

span:hover {
  border:2px black solid;
  border-radius:50px;

}
span.selected{
  background-color:black;
  color:white;
  border-radius:50px;

}
</style>

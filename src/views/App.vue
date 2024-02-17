<script>
import pagehead from '../components/HomePage/pagehead.vue'
import pagebody from '../components/HomePage/pagebody.vue'
import pagefoot from '../components/HomePage/pagefoot.vue'
import { defineComponent } from 'vue'
import{ provideEventBus} from "@/EventBus.js";


export default defineComponent({
  setup(){
    const eventBus=provideEventBus();
    return{
      eventBus,

    };
  },
  components: {
    pagehead,
    pagebody,
    pagefoot,
  }
})
</script>

<template>
  <div class="container">
  <pagehead/>
  <router-view/>
  </div>
</template>

<style scoped>

.layout {
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;
}

.header { grid-area: header;height:50px;}
.main { grid-area: main;height:3700px;}
.footer { grid-area: footer; }
</style>

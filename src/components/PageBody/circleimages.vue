<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default{
  name:'circleimages',
  components:{
    Carousel3d,
    Slide
  },
}

</script>

<template>
  <div>
    <div class="box">
      <carousel-3d
          :autoplay="true"
          :autoplayTimeout="3000"
          :perspective="35"
          :display="5"
          :animationSpeed="1000"
          :width="300"
          :height="270"
          controlsVisible
          :controlsHeight="60"
      >
        <slide v-for="(item, i) in slides" :index="i" :key="i">
          <template slot-scope="obj">
            <img :src="item.src" @click="imgClick(item,obj)" />
          </template>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<style scoped>

</style>
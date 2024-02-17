<script >
export default{
  name:'deco2',
}

</script>

<template>
  <div class="container">
  <div class="decoration2">
  </div>
  <div class="description">
    <p style="font-size:50px;font-weight:800">Introduction:</p>
    <p>In the post-pandemic era,</p>
    <p>a new trend has emerged among young students - a surge in travel enthusiasm.</p>
    <p>As the tourism industry experiences a revival,</p>
    <p>our team has developed a specialized platform</p>
    <p>to address the various challenges students may encounter during their vacations.</p>
    <p>Introducing TravelMate, a mini-program designed to assist students</p>
    <p>in finding travel companions, fostering friendships, and enhancing overall safety during their journeys.</p>
  </div>
  </div>

</template>

<style scoped>
.container{
  width:1024px;
  height:810px;
  display:flex;
  flex-direction:row;
  margin-left:250px;
  margin-top:550px;
}
.decoration2{
  background-image:url('/image7.jpg');
  background-size:cover;
  width:400px;
  height:600px;
  border-radius:20px;
}
.description{
  width:600px;
  height:600px;
  background-color:#F5F5DC;
  margin-left:24px;
  border-radius:20px;
  color:#260B52;
  background:linear-gradient(to right,#F5F5DC,#9C9C8C);
}
p{
  font-size:19px;
  margin-left:20px;
  font-family:Arial;
  font-weight:600;

}

</style>
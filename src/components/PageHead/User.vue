<script>

import SignInSignUp from "@/components/PageHead/UserPage/SignIn-SignUp.vue";
export default {
  name: 'User',
  components: {
    SignInSignUp,
  },
  data() {
    return {
      showMenuFlag: false,
      activeModule: 'User',
      isRegistrationForm: true,
      isLoginForm: true,
      Signhidden:true,


    }
  },
  methods: {
    showMenu() {
      this.showMenuFlag = !this.showMenuFlag;
    },
    showContent(module) {
      this.activeModule = module
      if (module === 'Register') {
        this.isRegistrationForm = true;
      } else if (module === 'Login') {
        this.isLoginForm = true;
      }
    },
    handleCloseRegistration() {
      this.isRegistrationForm = false;
    },
    handleCloseLogin() {
      this.isLoginForm = false;
    },
    showSignMenu(){
      this.Signhidden=!this.Signhidden;

    }
  },


}

</script>

<template>
<div class="container">
  <router-link to="/signinsignup" class="signinandsignup">
SignIn|SignUp
  </router-link>
</div>
</template>

<style scoped>
img{
  width:50px;
  height:50px;
  border-radius:20px;
  margin-left:150px;
}
.container{
  margin-top:5px;
}
.signinandsignup{
  background-color:#121212;
  border:none;
  color: #DBE3E3;
  font: 500 20px '优设标题黑';
  border-radius:5px;
  text-align:center;
  height:45px;
  text-decoration:none;
  margin-top:15px;
  padding-top:5px;
  padding-bottom:5px;
  padding-left:3px;
  padding-right:3px;


}
nav{
  color:gray;
  display:flex;
  flex-direction:column;
  width:200px;
  border:solid gray 1px;
  align-items: center;

}
.dropdown-menu-content{
  width:200px;
}
</style>
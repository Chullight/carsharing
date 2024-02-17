<script >
import axios from "axios";

export default {
  name: 'SignInSignUp',
  data(){
    return{
      signInemail:'',
      signInpassword:'',
      signupName:'',
      signupEmail:'',
      signupPassword:'',
    };
  },
  mounted() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    if (registerBtn) {
      registerBtn.addEventListener('click', () => {
        container.classList.add('active');
      });
    }

    if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
      });
    }
  },
  methods:{
    async signInuser() {
      try {
        // 从你的表单中获取用户信息，例如：
        const userData = {
          email:this.signInemail,
          password:this.signInpassword,
          // 其他用户信息...
        };

        // 使用 Axios 发送 POST 请求到后端接口
        const response = await axios.post('http://localhost:8080/login', userData);

        // 处理后端响应，根据实际情况处理成功或失败的情况
        console.log('成功注册:', response.data);
      } catch (error) {
        console.error('注册失败:', error);
        // 处理错误情况...
      }
    },
    async signUpuser() {
      try {
        // 从你的表单中获取用户信息，例如：
        const userData = {
          name:this.signupName,
          email:this.signupEmail,
          password:this.signupPassword,
          // 其他用户信息...
        };

        // 使用 Axios 发送 POST 请求到后端接口
        const response = await axios.post('http://localhost:8080/register', userData);

        // 处理后端响应，根据实际情况处理成功或失败的情况
        console.log('成功注册:', response.data);
      } catch (error) {
        console.error('注册失败:', error);
        // 处理错误情况...
      }
    }
  }
};


</script>

<template>
  <div class="mainbody">
  <div class="container" id="container">
    <div class="form-container sign-up">
      <form>
        <h1>
          Create Account
        </h1>

        <input type="text" v-model="signupName"
               placeholder="Name">
        <input type="email" v-model="signupEmail"
               placeholder="Email">
        <input type="password" v-model="signupPassword"
               placeholder="Password">
        <button @click="signUpuser">
          Sign up
        </button>
      </form>


    </div>
    <div class="form-container sign-in">
      <form >
        <h1>
          Sign In
        </h1>


        <input type="email" v-model="signInemail"
               placeholder="Email">
        <input type="password" v-model="signInpassword"
               placeholder="Password">
        <a href="#" style="color:white;">
          Forget Your Password
        </a>
        <button @click="signInuser">
          Sign In
        </button>
      </form>


    </div>
    <div class="toggle-container">
      <div class="toggle">
        <div class="toggle-panel toggle-left">
          <h1>
            Welcome Back!
          </h1>
          <p>
            Enter your personal details to use all of site features
          </p>
          <button class="hidden" id="login">
            Sign In
          </button>
        </div>
        <div class="toggle-panel toggle-right">
          <h1>
            Hello Children!
          </h1>
          <p>
            Register with your personal details to use all of site features
          </p>
          <button class="hidden" id="register">
            Sign Up
          </button>
        </div>
      </div>
    </div>

  </div>
  </div>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Montserrat',sans-serif;
}
.mainbody{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  background-image:url('/plants.jpg');
  background-size:cover;
}
.form-container.sign-in>form{
  background-color:#183E0C;
}
.form-container.sign-up>form{
  background-color:#183E0C;
}
.container{
  background-color:#183E0C;
  border-radius:30px;
  box-shadow:0 5px 15px rgba(0,0,0,0.35);
  position:relative;
  overflow:hidden;
  width:768px;
  max-width:100%;
  min-height:480px;
}
.container p{
  font-size:14px;
  line-height:20px;
  letter-spacing:0.3px;
  margin:20px 0;
}
.container span{
  font-size:12px;
}
.container a{
  color:#333;
  font-size:13px;
  text-decoration:none;
  margin:15px 0 10px;
}
.container button{
  background-color: black;
  color:#fff;
  font-size:12px;
  padding:10px 45px;
  border: 1px solid transparent;
  border-radius:8px;
  font-weight:600;
  letter-spacing:0.5px;
  text-transform:uppercase;
  margin-top:10px;
  cursor:pointer;
}
.container button.hidden{
  background-color:transparent;
  border-color:#fff;

}
.container form{
  background-color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding:0 40px;
  height:100%;
}
.container input{
  background-color:#eee;
  border:none;
  margin:8px 0;
  padding:10px 15px;
  font-size:13px;
  border-radius:8px;
  width:100%;
  outline:none;
}
.form-container{
  position:absolute;
  top:0;
  height:100%;
  transition:all 0.6s ease-in-out;

}
.sign-in{
  left:0;
  width:50%;
  z-index:2;
  color:white;
}
.container.active .sign-in{
  transform: translateX(100%);
}
.sign-up{
  left:0;
  width:50%;
  opacity:0;
  z-index:1;
  color:white;
}
.container.active .sign-up{
  transform: translateX(100%);
  opacity:1;
  z-index:5;
  animation:move 0.6s;
}
@keyframes move{
  0%, 49.99%{
    opacity:0;
    z-index:1;
  }
  50%, 100%{
    opacity:1;
    z-index:5;
  }
}
.toggle-container{
  position:absolute;
  top:0;
  left:50%;
  width:50%;
  height:100%;
  overflow:hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index:1000;
}
.container.active .toggle-container{
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;

}
.toggle{
  background-color:#fff;
  height:100%;
  background: linear-gradient(
      to right,#183E0C,#0F2607
  );
  color:#fff;
  position:relative;
  left:-100%;
  height:100%;
  width:200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}
.container.active .toggle{
  transform: translateX(50%);
}
.toggle-panel{
  position: absolute;
  width: 50%;
  height:100%;
  display:flex;
  justify-content:center;
  flex-direction:column;
  padding: 0 30px;
  text-align:center;
  top:0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;

}

.toggle-left{
  transform: translateX(-200%);
}
.container.active .toggle-left{
  transform: translateX(0);
}
.toggle-right{
  right:0;
  transform:translateX(0);
}
.container.active .toggle-right{
  transform: translateX(200%);
}



</style>
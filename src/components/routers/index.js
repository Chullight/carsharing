import {createRouter,createWebHistory} from 'vue-router';
import App from '/src/views/App.vue';
import Home from '/src/views/Home.vue'
import pagebody from '/src/components/HomePage/pagebody.vue'
import searchpage from "/src/components/PageBody/SearchPage.vue";
import SignInSignUp from "@/components/PageHead/UserPage/SignIn-SignUp.vue";
import submit from '/src/components/PageBody/SubmitItineraryPage.vue'
import createtrip from '/src/components/PageBody/CreateTrip.vue'
import UserPage from "@/components/PageBody/UserPage.vue";
const routes=[
    {path:'/',component:App},
    {path:'/pagebody',component:pagebody},
    {path:'/search',component:searchpage},
    {path:'/submit',component:submit},
    {path:'/signinsignup',component:SignInSignUp},
    {path:'/sumbit/createtrip/:id',name:'createtrip',component:createtrip,props:true},
    {path:'/user',component:UserPage},


]
const router=createRouter({
    history:createWebHistory(),
    routes,
})
export default router;
<template>
  <div>
    大家好 
    <p> id : {{$route.params.id}}</p>
    <h1>姓名：{{info.name}}</h1>
    <div class="imgbg">
    </div>
    <div class="imgbg-v2">
      
    </div>
    <img src="~assets/img/e.jpg" alt="高圆圆" class="a-img">
    <nuxt-link to="/user">进入用户列表</nuxt-link>
    <nuxt-link to="/">回到首页</nuxt-link>
  </div>
</template>
<script>
import axios from 'axios'
export default{
    data() {
      return {
        user:''
      }
    },
    created() {
      console.log(this.info.name);
    },
    async asyncData() {
      let res = await axios.get('https://api.myjson.com/bins/8gdmr')
      return {info:res.data}
    }
  }
</script>
<style >
  .imgbg{
    background: url('~assets/img/e.jpg');
    height: 100px;
    width:100px;
    background-size: 100%;
  }
  .imgbg-v2{
    background: url('~assets/img/e.jpg') ;
    height: 100px;
    width: 300px;
    background-size: contain;
  }
  .a-img{
    width:100px;
    height: auto;
  }
</style>

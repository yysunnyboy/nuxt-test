<template>
  <div>
    <nuxt-link :to="{name:'user-detail',params:{id:user.id} }" v-for="user in userdata" :key="user.id">{{user.name}}</nuxt-link>
    <nuxt-link to="/">回到首页</nuxt-link>
  </div>
</template>




<script>
  export default{
    data() {
      return {
        userdata: [
          {
            'name':'张三',
            'id':1,
            'text':'大家好我是张三，多多指教'
          },
          {
            'name':'张国立',
            'id':2,
            'text':'大家好我是张国立，多多指教'
          }, 
          {
            'name':'高圆圆',
            'id':3,
            'text':'大家好我是高圆圆，多多指教'
          },
          {
            'name':'彭于晏',
            'id':4,
            'text':'大家好我是彭于晏，多多指教'
          }

        ],
        title:'用户列表-xxx'
      }
    },
    asyncData(context){
      return {
        name:'获取得到的异步数据'
      }
    },
    layout:'blog',
    head() {
      return {
        // title: this.title,
        meta:[
          {hid:'description',name:'description',content:'这里是用户列表'}
        ]
      }
    },
    created() {
      console.log(this.$route.name)
    }

  }
</script>

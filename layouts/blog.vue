<template>
  <div>
    <nuxt/>
  </div>
</template>
<script>
  import seo from '~/seo.js'
  const getMap = (seo) =>{
    let map = {};
    for(let key in seo){
      map[key] = seo[key].head
    } 
    return map;
  }
    export default{
      data() {
        return {

        }
      },
      created() {
      },
      head() {
        let routeName = this.$route.name;
        let head = getMap(seo)[routeName];
        
        return typeof getMap(seo)[routeName] == 'function' ? head() : head
      }
    }
</script>
<style>
    .container{
      position:absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
    }
</style>
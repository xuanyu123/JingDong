<template>
  <div id="wrap">
    <div>
      <img v-for="a in array" :src="a.img"/>
    </div>
  </div>
</template>

<script>
  export default {
    name:'jd_thigh',
    data(){
      return{
        array:[
          {'img':'https://img10.360buyimg.com/mobilecms/s164x164_jfs/t1/104342/35/11035/100117/5e2928b5e0f7a777d/d563fc74afcd1fd4.jpg!q70.dpg.webp'},
          {'img':'https://img10.360buyimg.com/mobilecms/s164x164_jfs/t1/93704/31/7027/145520/5df883dbe5c5d1cf6/91cd73f96145ebbe.jpg!q70.dpg.webp'},
          {'img':'https://img10.360buyimg.com/mobilecms/s164x164_jfs/t1/85416/15/9747/139294/5e1158a5efd789af7/7becca73c116cb65.jpg!q70.dpg.webp'},
          {'img':'https://img10.360buyimg.com/mobilecms/s164x164_jfs/t1/105217/14/8119/132224/5e017c8ee0dcb8284/c0e8f6df286669e3.jpg!q70.dpg.webp'},
        ]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  #wrap{
    position: absolute;
    top: 0vh;
    left: 0vw;
  }
  #wrap>div>img{
    width: 22.134vw;
    height: 12.445vh;
  }
  #wrap>div>img:nth-child(1){
    position: absolute;
    top: 6vh;
    left: 3vw;
  }
  #wrap>div>img:nth-child(2){
    position: absolute;
    top: 6vh;
    left: 27vw;
  }
  #wrap>div>img:nth-child(3){
    position: absolute;
    top: 6vh;
    left: 51vw;
  }
  #wrap>div>img:nth-child(4){
    position: absolute;
    top: 6vh;
    left: 75vw;
  }
</style>

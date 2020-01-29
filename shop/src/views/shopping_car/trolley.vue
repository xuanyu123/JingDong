<template>
  <div class="wrap">
    <trhead></trhead>
    <tperson></tperson>
    <tzhifu></tzhifu>
    <trgoods></trgoods>
    <tnotice></tnotice>
    <tyou></tyou>
    <tjine></tjine>
    <tbottom></tbottom>
  </div>
</template>

<script>
  import trhead from '@/views/shopping_car/trolley/trhead'
  import tperson from '@/views/shopping_car/trolley/tperson'
  import tzhifu from '@/views/shopping_car/trolley/tzhifu'
  import trgoods from '@/views/shopping_car/trolley/trgoods'
  import tnotice from '@/views/shopping_car/trolley/tnotice'
  import tyou from '@/views/shopping_car/trolley/tyou'
  import tjine from '@/views/shopping_car/trolley/tjine'
  import tbottom from '@/views/shopping_car/trolley/tbottom'

  export default{
    name:'trolley',
    components:{
      trhead,
      tperson,
      tzhifu,
      trgoods,
      tnotice,
      tyou,
      tjine,
      tbottom,

    },
    data(){
      return{
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .wrap{
    background: #f0f0f0;
  }
</style>

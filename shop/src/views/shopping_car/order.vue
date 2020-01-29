<template>
  <div class="wrap">
    <ohead></ohead>
    <omenu></omenu>
    <ogoods></ogoods>
    <obottom></obottom>
  </div>

</template>

<script>
  import ohead from '@/views/shopping_car/order/ohead'
  import omenu from '@/views/shopping_car/order/omenu'
  import ogoods from '@/views/shopping_car/order/ogoods'
  import obottom from '@/views/shopping_car/order/obottom'
  export default{
    name:'order',
    components:{
      ohead,
      omenu,
      ogoods,
      obottom,
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

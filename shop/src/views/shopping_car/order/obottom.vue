<template>
  <van-submit-bar
    :price="219680"
    button-text="去结算(4)"
    @submit="onSubmit"
  >
    <van-checkbox v-model="checked" checked-color="#ff0000" icon-size="15px">全选</van-checkbox>

  </van-submit-bar>
</template>

<script>
  export default{
    name:'',
    data(){
      return{
        checked: false,
      }
    },
    methods:{
      onSubmit (){
        this.$router.push({path:'/trolley'})
      }
    }
  }
</script>

<style scoped>
</style>

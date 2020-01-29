<template>
  <div>
    <div style="width: 100%;height: 60px; background-color: #f0f2f5;display: flex">
      <div class="service">客户服务
        <van-icon name="arrow" />
      </div>
    </div>
    <div style="width: 100%;height: 15px;text-align: center;font-size: 0.8em;">为您推荐</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .service{
    margin-top: 10px;
    padding-left: 20px;
    line-height: 40px;
    color: #666;
    height:40px;
    width:100%;
    background-color: #ffffff;
  }
  .van-icon{
    margin-left: 250px;
  }
</style>

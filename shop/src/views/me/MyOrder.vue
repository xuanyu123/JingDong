<template>
  <div>
    <div class="backgroud">
      <van-grid style="top: 15px;background: #FFFFFF;">
        <van-grid-item icon="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png" text="待收款" />
        <van-grid-item icon="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png" text="待收货" />
        <van-grid-item icon="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png" text="退货/售后" />
        <van-grid-item icon="https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png" text="全部订单" />
      </van-grid>
    </div>
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
  .backgroud{
    height: 100px;
    width: 100vw;
    background-color: #f0f2f5;
  }
</style>

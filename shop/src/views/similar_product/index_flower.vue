<template>
  <div>
    <div class="top">
      <Introduce></Introduce>
    </div>
    <div class="content">
      <PicSwipe></PicSwipe>
      <Price></Price>
      <Youhui></Youhui>
      <Address></Address>
      <Shouhou></Shouhou>
      <Assess></Assess>
      <Tags></Tags>
      <Users></Users>
      <Shops></Shops>
      <Xiangqing></Xiangqing>
      <Favorate></Favorate>
      <ScrollTop_wrap></ScrollTop_wrap>
      <Shopping></Shopping>
    </div>
  </div>
</template>

<script>
  import PicSwipe from '@/views/similar_product/Flower/PicSwipe'
  import Price from '@/views/similar_product/Flower/Price'
  import Shopping from '@/views/similar_product/Flower/Shopping'
  import Introduce from '@/views/similar_product/Flower/Introduce'
  import Youhui from '@/views/similar_product/Flower/Youhui'
  import Address from '@/views/similar_product/Flower/Address'
  import Shouhou from '@/views/similar_product/Flower/Shouhou'
  import Assess from '@/views/similar_product/Flower/Assess'
  import Tags from '@/views/similar_product/Flower/Tags'
  import Users from '@/views/similar_product/Flower/Users'
  import Favorate from '@/views/similar_product/Flower/Favorate'
  import Xiangqing from '@/views/similar_product/Flower/Xiangqing'
  import ScrollTop_wrap from "../home/ScrollTop_wrap";
  import Shops from '@/views/similar_product/Flower/Shops'


  export default {
    name: 'Index',
    components: {
      Introduce,
      PicSwipe,
      Price,
      Youhui,
      Address,
      Shouhou,
      Assess,
      Tags,
      Users,
      Favorate,
      Xiangqing,
      Shops,
      ScrollTop_wrap,
      Shopping
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .top {
    overflow: hidden;
  }

  .content {
    overflow: auto;
  }
</style>

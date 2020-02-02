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
import PicSwipe from '@/views/similar_product/Oat/PicSwipe'
import Price from '@/views/similar_product/Oat/Price'
import Shopping from '@/views/similar_product/Oat/Shopping'
import Introduce from '@/views/similar_product/Oat/Introduce'
import Youhui from '@/views/similar_product/Oat/Youhui'
import Address from '@/views/similar_product/Oat/Address'
import Shouhou from '@/views/similar_product/Oat/Shouhou'
import Assess from '@/views/similar_product/Oat/Assess'
import Tags from '@/views/similar_product/Oat/Tags'
import Users from '@/views/similar_product/Oat/Users'
import Favorate from '@/views/similar_product/Oat/Favorate'
import Xiangqing from '@/views/similar_product/Oat/Xiangqing'
import ScrollTop_wrap from "../home/ScrollTop_wrap";
import Shops from '@/views/similar_product/Oat/Shops'


export default{
	name:'Index',
  components:{
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
		return{
		}
	},
	methods:{
	}
}
</script>

<style scoped>
.top{
  overflow: hidden;
}
.content{
  overflow: auto;
}
</style>

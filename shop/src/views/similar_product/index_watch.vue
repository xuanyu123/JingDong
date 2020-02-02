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
import PicSwipe from '@/views/similar_product/Watch/PicSwipe'
import Price from '@/views/similar_product/Watch/Price'
import Shopping from '@/views/similar_product/Watch/Shopping'
import Introduce from '@/views/similar_product/Watch/Introduce'
import Youhui from '@/views/similar_product/Watch/Youhui'
import Address from '@/views/similar_product/Watch/Address'
import Shouhou from '@/views/similar_product/Watch/Shouhou'
import Assess from '@/views/similar_product/Watch/Assess'
import Tags from '@/views/similar_product/Watch/Tags'
import Users from '@/views/similar_product/Watch/Users'
import Favorate from '@/views/similar_product/Watch/Favorate'
import Xiangqing from '@/views/similar_product/Watch/Xiangqing'
import ScrollTop_wrap from "../home/ScrollTop_wrap";
import Shops from '@/views/similar_product/Watch/Shops'

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
    ScrollTop_wrap,
    Shops,
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

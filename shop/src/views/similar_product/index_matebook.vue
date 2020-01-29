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
          <Top></Top>
          <Shopping></Shopping>
        </div>

  </div>

</template>

<script>
import PicSwipe from '@/views/similar_product/Matebook/PicSwipe'
import Price from '@/views/similar_product/Matebook/Price'
import Shopping from '@/views/similar_product/Matebook/Shopping'
import Introduce from '@/views/similar_product/Matebook/Introduce'
import Youhui from '@/views/similar_product/Matebook/Youhui'
import Address from '@/views/similar_product/Matebook/Address'
import Shouhou from '@/views/similar_product/Matebook/Shouhou'
import Assess from '@/views/similar_product/Matebook/Assess'
import Tags from '@/views/similar_product/Matebook/Tags'
import Users from '@/views/similar_product/Matebook/Users'
import Xiangqing from '@/views/similar_product/Matebook/Xiangqing'
import Favorate from '@/views/similar_product/Matebook/Favorate'
import Top from '@/views/similar_product/Matebook/top'
import Shops from '@/views/similar_product/Matebook/Shops'

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
    Xiangqing,
    Favorate,
    Top,
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

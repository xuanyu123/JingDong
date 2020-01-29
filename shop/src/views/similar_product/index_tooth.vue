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
import PicSwipe from '@/views/similar_product/Tooth/PicSwipe'
import Price from '@/views/similar_product/Tooth/Price'
import Shopping from '@/views/similar_product/Tooth/Shopping'
import Introduce from '@/views/similar_product/Tooth/Introduce'
import Youhui from '@/views/similar_product/Tooth/Youhui'
import Address from '@/views/similar_product/Tooth/Address'
import Shouhou from '@/views/similar_product/Tooth/Shouhou'
import Assess from '@/views/similar_product/Tooth/Assess'
import Tags from '@/views/similar_product/Tooth/Tags'
import Users from '@/views/similar_product/Tooth/Users'
import Favorate from '@/views/similar_product/Tooth/Favorate'
import Xiangqing from '@/views/similar_product/Tooth/Xiangqing'
import Top from '@/views/similar_product/Tooth/top'
import Shops from '@/views/similar_product/Tooth/Shops'


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
    Top,
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

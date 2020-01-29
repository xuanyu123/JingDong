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
import PicSwipe from '@/views/similar_product/Window/PicSwipe'
import Price from '@/views/similar_product/Window/Price'
import Shopping from '@/views/similar_product/Window/Shopping'
import Introduce from '@/views/similar_product/Window/Introduce'
import Youhui from '@/views/similar_product/Window/Youhui'
import Address from '@/views/similar_product/Window/Address'
import Shouhou from '@/views/similar_product/Window/Shouhou'
import Assess from '@/views/similar_product/Window/Assess'
import Tags from '@/views/similar_product/Window/Tags'
import Users from '@/views/similar_product/Window/Users'
import Favorate from '@/views/similar_product/Window/Favorate'
import Xiangqing from '@/views/similar_product/Window/Xiangqing'
import Top from '@/views/similar_product/Window/top'
import Shops from '@/views/similar_product/Window/Shops'


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

<template>
  <div >
    <van-swipe style="width: 100%;height: 148px;margin-top: 3px" indicator-color="rgba(0,0,0,0.05)">
      <van-swipe-item>
        <van-grid :column-num="column" icon-size="40px">
          <van-grid-item
            style="height: 73.61px"
            v-for="(item,index) in first"
            :key="index"
            :icon="item.img"
            :text="item.txt"
          />
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid :column-num="column" icon-size="40px">
          <van-grid-item
            style="height: 73.61px"
            v-for="(item,index) in second"
            :key="index"
            :icon="item.img"
            :text="item.txt"
          />
        </van-grid>
      </van-swipe-item>
    </van-swipe>
    <img style="width: 100%;border-top-left-radius: 8px;border-top-right-radius: 8px" src="https://m.360buyimg.com/mobilecms/s750x200_jfs/t1/95125/27/10862/92248/5e21d927E4f358ad2/bbc8507bc34f6cd6.png.webp">
  </div>
</template>

<script>
    export default {
        name: 'ShopMenu',
        data() {
            return {
              column: 5,
              first: [
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp','txt':'京东超市'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp','txt':'数码电器'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp','txt':'京东服饰'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp','txt':'京东生鲜'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp','txt':'京东到家'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp','txt':'充值缴费'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp','txt':'9.9元拼'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp','txt':'领券'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp','txt':'赚钱'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp','txt':'PLUS会员'}
              ],
              second: [
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/89640/36/2804/8167/5dd6aca9E4b04fedd/fbc6adc345138b30.png.webp','txt':'京东国际'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32245/22/2820/6521/5c6df9b3E1466dcd3/9f4cd68276f4e971.png.webp','txt':'数码拍卖'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png.webp','txt':'唯品会'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t28723/45/1332082024/6421/ead422d3/5cdd0be3Nfce1ba98.jpg.dpg','txt':'玩3C'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png.webp','txt':'沃尔玛'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png.webp','txt':'美妆馆'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png.webp','txt':'京东旅行'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png.webp','txt':'拍拍二手'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png.webp','txt':'物流查询'},
                {'img':'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png.webp','txt':'全部'}
              ]
            }
        },
        methods: {}
    }
</script>
<style scoped>
</style>

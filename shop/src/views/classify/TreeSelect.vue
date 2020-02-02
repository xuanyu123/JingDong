<template>
  <div class="content">
    <van-tree-select
      height="85vh"
      :items="items"
      :main-active-index.sync="active"
    >
      <template slot="content">
        <div v-if="active === 0">
          <div style="position: relative"><h4 class="title_txt1">热门分类</h4></div>
          <div class="rank">
            <img style="width: 12px;height: 12px"
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFRJREFUSA1jYBjqgJEYD7y0tv2PTZ340cME9TNh00hNsVELCIbm0A8iFoJ+JEIBvmQ89INo6PsAHMn4IomIOMarZOgH0agP8EYwSHLoBxFBLw56BQDOMwwsaZRV+QAAAABJRU5ErkJggg=="/>
            <span>排行榜</span>
            <img style="width: 12px;height: 12px"
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT9JREFUSA3dlDuuwjAQRUnMMthEPptAokSPb08DYiN0dK99eghS8FlI0tOzDJJwB8WSZTxOTCqIFNkZz9xj+9rpdD798bgFZFnWL4ril8Y9z1tHUXTkcm1xnxusxHsY75VlmQA44XJtcRagFQkA/96BsAAhxBKQXAG9BWEBQRBcsPczBjJWwNYua7KsStN0BA/+8S1kDG3u+/48DMO9EjN2awFU1QbSCNAG0hhgg2BsGMfxmXL0hzVZT6RvXLaDyXgMbU35FHMCVCKlQcwUe6Y5AWD2D07UDpXqibrjzqwMUDdAJa4f1zttGd0ZDtDIZEW8qwjlEJ/Cl0SJvXRrAW3EiWb1wCI+q5u5XAq7AogPYOgJifq2kPhBCtS17AogvmkrTnAWoM2MDHWauaxnAfhbLpB0xXvDO3TZFin+He0DdXuUHqDBwt8AAAAASUVORK5CYII=">
          </div>
          <van-grid :border="false" :column-num="3">
            <van-grid-item v-for="(item,index) in list1" :key="index">
              <van-image :src="item.img"/>
              <span class="img_txt">{{item.txt}}</span>
            </van-grid-item>
          </van-grid>
        </div>
        <div v-if="active === 1">
          <div>
            <h4 class="title_txt1">热门品牌</h4>
            <van-grid :border="false" :column-num="3">
              <van-grid-item v-for="(item,index) in list2_1" :key="index">
                <van-image :src="item.img"/>
                <span class="img_txt">{{item.txt}}</span>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <h4 class="title_txt1">手机通讯</h4>
            <van-grid :border="false" :column-num="3">
              <van-grid-item v-for="(item,index) in list2_2" :key="index">
                <van-image :src="item.img"/>
                <span class="img_txt">{{item.txt}}</span>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <h4 class="title_txt1">运营商</h4>
            <van-grid :border="false" :column-num="3">
              <van-grid-item v-for="(item,index) in list2_3" :key="index">
                <van-image :src="item.img"/>
                <span class="img_txt">{{item.txt}}</span>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div v-if="active === 2">
          <div>
            <h4 class="title_txt1">厨房小电</h4>
            <van-grid :border="false" :column-num="3">
              <van-grid-item v-for="(item,index) in list3_1" :key="index">
                <van-image :src="item.img"/>
                <span class="img_txt">{{item.txt}}</span>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <h4 class="title_txt1">个护健康</h4>
            <van-grid :border="false" :column-num="3">
              <van-grid-item v-for="(item,index) in list3_2" :key="index">
                <van-image :src="item.img"/>
                <span class="img_txt">{{item.txt}}</span>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div v-if="active === 3">
          <div>
            <h4 class="title_txt1">热卖分类</h4>
            <van-grid :border="false" :column-num="3">
              <van-grid-item v-for="(item,index) in list4_1" :key="index">
                <van-image :src="item.img"/>
                <span class="img_txt">{{item.txt}}</span>
              </van-grid-item>
            </van-grid>
          </div>
          <div>
            <h4 class="title_txt1">电脑整机</h4>
            <van-grid :border="false" :column-num="3">
              <van-grid-item v-for="(item,index) in list4_2" :key="index">
                <van-image :src="item.img"/>
                <span class="img_txt">{{item.txt}}</span>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
  export default {
    name: "TreeSelect",
    data() {
      return {
        active: 0,
        items: [
          {text: '热门推荐', id: 0},
          {text: '手机数码', id: 1},
          {text: '家用电器', id: 2},
          {text: '电脑办公', id: 3},
          {text: '计生情趣', id: 3},
          {text: '美妆护肤', id: 3},
          {text: '个护清洁', id: 3},
          {text: '汽车生活', id: 3},
          {text: '京东超市', id: 3},
          {text: '男装', id: 3},
          {text: '男鞋', id: 3},
          {text: '女装', id: 3},
          {text: '女鞋', id: 3},
          {text: '母婴童装', id: 3},
          {text: '图书音像', id: 3},
          {text: '运动户外', id: 3},
          {text: '内衣配饰', id: 3},
          {text: '食品生鲜', id: 3},
          {text: '酒水饮料', id: 3},
          {text: '家具家装', id: 3},
          {text: '家居厨具', id: 3},
          {text: '箱包手袋', id: 3},
          {text: '钟表珠宝', id: 3},
          {text: '玩具乐器', id: 3},
          {text: '医药保健', id: 3},
          {text: '宠物生活', id: 3},
          {text: '礼品鲜花', id: 3},
          {text: '农资绿植', id: 3},
          {text: '生活旅行', id: 3},
          {text: '奢侈品', id: 3},
          {text: '京东国际', id: 3},
          {text: '艺术邮币', id: 3},
          {text: '二手商品', id: 3},
          {text: '特产馆', id: 3},
          {text: '京东金融', id: 3},
          {text: '国际名牌', id: 3},
          {text: '拍卖', id: 3},
          {text: '房产', id: 3},
          {text: '工业品', id: 3}
        ],
        list1: [
          {
            'img': 'https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
            'txt': '手机'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png',
            'txt': '耳机'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png',
            'txt': '华为'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png',
            'txt': '电饭煲'
          },
          {
            'img': 'https://img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png',
            'txt': '电磁炉'
          },
          {
            'img': 'https://img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png',
            'txt': '路由器'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/18974/35/9836/31220/5c82223eE5dcc61b8/4e93c1fbb777bfca.png',
            'txt': '避孕套'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/19730/14/9859/10199/5c8225eeE5e925911/054ccd7992f86199.png',
            'txt': '口红'
          },
          {
            'img': 'https://img12.360buyimg.com/focus/s140x140_jfs/t1/25144/37/2370/7617/5c1cae45Ea0ec5a85/f7ba433b5d1e072f.png',
            'txt': '吹风机'
          },
          {
            'img': 'https://img11.360buyimg.com/focus/s140x140_jfs/t1/30718/32/2643/9923/5c6d03ecEabd2d664/aaee556800519e1f.png',
            'txt': '三只松鼠'
          },
          {
            'img': 'https://img13.360buyimg.com/focus/s140x140_jfs/t1/23312/39/9884/7280/5c822292E65f3929b/78ba741d321954b0.png',
            'txt': '洗衣机'
          },
          {
            'img': 'https://img11.360buyimg.com/focus/s140x140_jfs/t1/11731/9/10730/9518/5c822298Eb50b3275/33f88663e1c0284e.png',
            'txt': '保温杯'
          },
          {
            'img': 'https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png',
            'txt': '微波炉'
          },
          {
            'img': 'https://img13.360buyimg.com/focus/s140x140_jfs/t1/25168/27/9848/15397/5c822507E35d2ad16/384983a98758f8f8.png',
            'txt': '洗发水'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t1/19562/14/9878/32183/5c8225f6E7c332db7/c886e52dc05b9ae4.png',
            'txt': '卫生巾'
          },
        ],
        list2_1: [
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
            'txt': '小米'
          },
          {
            'img': 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
            'txt': '华为'
          },
          {
            'img': 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
            'txt': '荣耀'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
            'txt': 'IPhone'
          },
          {
            'img': 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
            'txt': 'vivo'
          },
          {
            'img': 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
            'txt': 'OPPO'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg',
            'txt': '魅族'
          },
          {
            'img': 'https://img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png',
            'txt': '三星'
          },
          {
            'img': 'https://img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg',
            'txt': '一加'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t13096/309/908035611/5138/5558f001/5a16924fNeac7677e.jpg',
            'txt': '360手机'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t19387/332/664528115/8176/5eabe8cb/5a9fa5e0N6754e52a.jpg',
            'txt': '锤子手机'
          },
          {
            'img': 'https://img12.360buyimg.com/focus/s140x140_jfs/t15085/289/2395028996/2546/1e7e1f7b/5a9fa5e7Nc5cc0f6b.jpg',
            'txt': '努比亚'
          },
        ],
        list2_2: [
          {
            'img': 'https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
            'txt': '老人机'
          },
          {
            'img': 'https://img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg',
            'txt': '手机'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg',
            'txt': '全面屏手机'
          },
          {
            'img': 'https://img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg',
            'txt': '游戏手机'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg',
            'txt': '拍照手机'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t13255/192/958298391/1687/5c7e3c53/5a169204Nd4aa27bb.jpg',
            'txt': '对讲机'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t13246/188/925975876/8794/686dbb9c/5a1691e0N62f626e3.jpg',
            'txt': '京东回收'
          },
          {
            'img': 'https://img12.360buyimg.com/focus/s140x140_jfs/t15790/6/2311892256/2742/5ed77924/5a9fa728Nbff29ad2.jpg',
            'txt': '女性手机'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t11644/236/2358207967/6141/e2d71825/5a169205N84a49a6a.jpg',
            'txt': '京东维修'
          },
        ],
        list2_3: [
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t13309/121/902275259/3700/e9f22529/5a168e83Nb1a35aac.png',
            'txt': '合约机'
          },
          {
            'img': 'https://img10.360buyimg.com/focus/s140x140_jfs/t11515/106/2342900928/7913/5a606e3f/5a168e7eNdd5d0121.png',
            'txt': '选号卡'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t14146/201/916948302/5272/8ae80f8e/5a168e78N78b24a8e.jpg',
            'txt': '办套餐'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t15865/151/2284016087/10155/c4aaceec/5a9faa1fN03a4c9e1.jpg',
            'txt': '京东网厅'
          },
        ],
        list3_1: [
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t12559/262/969294499/3436/8c0ce9c9/5a17f1d2N8078d5e6.jpg',
            'txt': '电水壶'
          },
          {
            'img': 'https://img13.360buyimg.com/focus/s140x140_jfs/t13069/193/944900508/2525/d7c9efc/5a17f21dN905aaf4c.jpg',
            'txt': '电压力锅'
          },
          {
            'img': 'https://img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg',
            'txt': '电饭煲'
          },
          {
            'img': 'https://img13.360buyimg.com/focus/s140x140_jfs/t11209/197/2422417970/2811/d167e855/5a17f1edN56abbe6e.jpg',
            'txt': '电磁炉'
          },
          {
            'img': 'https://img11.360buyimg.com/focus/s140x140_jfs/t13267/86/981023661/1871/6fae5f11/5a17f203N50016f64.jpg',
            'txt': '微波炉'
          },
          {
            'img': 'https://img11.360buyimg.com/focus/s140x140_jfs/t11503/25/2307123595/2987/a79ac767/5a17f1e3Nf7957b34.jpg',
            'txt': '电饼铛'
          },
        ],
        list3_2: [
          {
            'img': 'https://img14.360buyimg.com/focus/s140x140_jfs/t13981/225/965020395/7369/1740dbbb/5a17c20fN16e27ed9.png',
            'txt': '电吹风'
          },
          {
            'img': 'https://img14.360buyimg.com/focus/s140x140_jfs/t11539/356/2296587411/5881/9d96908e/5a17c221Nf85c1934.jpg',
            'txt': '剃须刀'
          },
          {
            'img': 'https://img10.360buyimg.com/focus/s140x140_jfs/t11125/324/2448652642/4268/cd0fff76/5a17c201N6f968e89.jpg',
            'txt': '理发器'
          },
          {
            'img': 'https://img10.360buyimg.com/focus/s140x140_jfs/t11209/303/2393582425/2406/d7c577aa/5a17c1eeNb9958e28.jpg',
            'txt': '足浴盆'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t13306/243/970438254/1447/a2be4ca5/5a17c21bN9fa5f473.jpg',
            'txt': '脱毛器'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t13306/163/993416845/6361/f53b0e98/5a17c1f5Nb9390d12.jpg',
            'txt': '按摩器'
          },
        ],
        list4_1: [
          {
            'img': 'https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png',
            'txt': '轻薄本'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png',
            'txt': '游戏本'
          },
          {
            'img': 'https://img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg',
            'txt': '机械键盘'
          },
          {
            'img': 'https://img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg',
            'txt': '组装电脑'
          },
          {
            'img': 'https://img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg',
            'txt': '移动硬盘'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg',
            'txt': '显卡'
          },
        ],
        list4_2: [
          {
            'img': 'https://img11.360buyimg.com/focus/s140x140_jfs/t13852/288/980080912/2623/73d2a1a5/5a17b976N7ab8a3a6.jpg',
            'txt': '笔记本'
          },
          {
            'img': 'https://img10.360buyimg.com/focus/s140x140_jfs/t13252/193/948884668/3832/2cd704d4/5a17b918N0785e503.jpg',
            'txt': '平板电脑'
          },
          {
            'img': 'https://img12.360buyimg.com/focus/s140x140_jfs/t14020/291/987624955/9068/5b27e263/5a17b978N2a93f7a9.jpg',
            'txt': '一体机'
          },
          {
            'img': 'https://img30.360buyimg.com/focus/s140x140_jfs/t13747/317/982291236/6659/4945536d/5a17b996Nba3bed32.jpg',
            'txt': '台式机'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t12088/219/967281794/2015/c05e448c/5a17b933N825c264a.jpg',
            'txt': '笔记本配件'
          },
          {
            'img': 'https://img20.360buyimg.com/focus/s140x140_jfs/t12901/167/947504038/6315/4c239386/5a17b948Nf6918c9e.jpg',
            'txt': '游戏台式机'
          },
        ],
      }
    }
  }
</script>

<style scoped>
  .content {
    width: 100vw;
  }

  .van-sidebar-item {
    text-align: center;
  }

  .title_txt1 {
    margin-left: 5px;
    margin-top: 10px;
    font-size: 14px;
    color: #333333;
  }

  .img_txt {
    font-size: 10px;
  }

  .rank {
    position: absolute;
    top: 10px;
    right: 5px;
  }
</style>

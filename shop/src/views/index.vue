<template>
  <div>
    <div class="content">
      <div class="top">
        <MyShopHead></MyShopHead>
        <Swipe></Swipe>
      </div>
      <ShopMenu></ShopMenu>
      <SecKill></SecKill>
      <TwoPic></TwoPic>
      <ThrPic></ThrPic>
      <ShopMenu2></ShopMenu2>
      <JdHome></JdHome>
      <EveryGo></EveryGo>
      <Jd_News></Jd_News>
      <Love></Love>
      <CommonFooter></CommonFooter>
      <CommonNav></CommonNav>
    </div>
  </div>
</template>

<script>
import MyShopHead from "./home/MyShopHead";
import Swipe from "./home/Swipe";
import ShopMenu from "./home/ShopMenu";
import SecKill from "./home/SecKill";
import TwoPic from "./home/TwoPic";
import ThrPic from "./home/ThrPic";
import ShopMenu2 from "./home/ShopMenu2";
import JdHome from "./home/JdHome";
import EveryGo from "./home/EveryGo";
import Jd_News from "./home/Jd_News";
import Love from "./home/Love";
import CommonFooter from "./home/CommonFooter";
import CommonNav from "./home/CommonNav";
    export default {
      name: 'Index',
      components:{
        MyShopHead,
        Swipe,
        ShopMenu,
        SecKill,
        TwoPic,
        ThrPic,
        ShopMenu2,
        JdHome,
        EveryGo,
        Jd_News,
        Love,
        CommonFooter,
        CommonNav
      },
      data(){
        return{
        }
      },
      methods: {
        }
    }
</script>

<style scoped>
  .content{
    width: 100vw;
    height: 100%;
    background-color: #f0f2f5;
  }
  .content>.top{
    background-image: url(https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/92463/25/10852/165400/5e2186f9E931d0b81/5cafaab8138e78c7.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
</style>

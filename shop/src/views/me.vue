<template>
  <div>
    <MyTop></MyTop>
    <MyContent></MyContent>
    <MyOrder></MyOrder>
    <MyAsset></MyAsset>
    <MyCollect></MyCollect>
    <MyExpand></MyExpand>
    <MyService></MyService>
    <MyBottom></MyBottom>
    <CommonFooter></CommonFooter>
    <CommonNav></CommonNav>
  </div>
</template>

<script>
import MyTop from '@/views/me/MyTop';
import MyContent from '@/views/me/MyContent';
import MyOrder from'@/views/me/MyOrder';
import MyAsset from'@/views/me/MyAsset';
import MyCollect from'@/views/me/MyCollect';
import MyExpand from'@/views/me/MyExpand';
import MyService from'@/views/me/MyService';
import MyBottom from'@/views/me/MyBottom';
import CommonFooter from "./me/CommonFooter";
import CommonNav from "./me/CommonNav";

export default {
  name: 'Me',
  components:{
    MyTop,
    MyContent,
    MyOrder,
    MyAsset,
    MyCollect,
    MyExpand,
    MyService,
    MyBottom,
    CommonFooter,
    CommonNav
  },
  data() {
    return {

    }
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
}
</script>
<style scoped>
</style>

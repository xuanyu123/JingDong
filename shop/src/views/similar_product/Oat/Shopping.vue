<template>
  <div style="height: 40px">
    <van-goods-action class="bottom">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default{
    name:'Shopping',
    methods:{
        onClickIcon() {
          Toast('点击图标');
        },
        onClickButton() {
          Toast('点击按钮');
        }
  }
}
</script>

<style scoped>

  .bottom{
    position: fixed;
    bottom: 0;
    opacity: 0.9;
  }
</style>

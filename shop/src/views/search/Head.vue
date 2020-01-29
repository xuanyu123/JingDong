<template>
  <div style="border-bottom: 1px solid #f0f2f5">
    <van-row style="height: 44px">
      <van-col span="3">
        <router-link to="/">
          <van-icon name="arrow-left" size="25" style="margin-top: 8px;margin-left: 4px;"/>
        </router-link>
      </van-col>
      <van-col span="17">
          <van-field
            style="color: #cccccc"
            v-model="value1"
            left-icon="search"
            placeholder="格力变频空调"
          />
      </van-col>
      <van-col span="4">
        <van-button type="primary" size="small">搜索</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '123'
      };
    }
  };
</script>

<style scoped>
  .van-cell{
    background-color: #f7f7f7;
    width: 100%;
    overflow: hidden;
    color: #323233;
    margin-top: 5px;
    padding: 5px 20px;
    border-radius: 22px;
    font-size: 14px;
    line-height: 6.4vw;
  }
  .van-button--primary{
    background-color: #e41c1c;
    border: #ffffff;
  }
  .van-button--small{
    min-width: 50px;
    margin-top: 6px;
    font-size: 15px;
    margin-left: 8px;
    border-radius: 5px;
  }
</style>

<template>
  <div>
    <van-field v-model="tel" type="tel" placeholder="用户名/邮箱/手机号" />
    <van-field
      v-model="password"
      center
      clearable
      placeholder="请输入密码"
      right-icon="closed-eye"
    >
      <van-button slot="button" size="small" type="primary">忘记密码</van-button>
    </van-field>
  </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style scoped>
  .van-cell{
    line-height: 30px;
    font-size: 16px;
    width: 90%;
    padding-top: 20px;
    margin:0 auto;
  }
  .van-button--primary {
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #ffffff;
  }
  .van-button--small {
    font-size: 14px;
  }
</style>

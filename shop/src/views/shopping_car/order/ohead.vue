<template>
  <div class="wrap">
    <div class="top">
      <van-row>
        <van-col class="column" span="3" @click="onClickLeft">
          <van-icon name="arrow-left" color="#fff" size="33px"  style="margin: auto"/>
        </van-col>
        <van-col class="mid" span="12">
          <a class="login" href="javascript:void(0)">购物车<van-icon name="location-o" /></a>
        </van-col>
        <van-col class="column" span="6">
          <a class="login" href="javascript:void(0)">编辑</a>
        </van-col>
        <van-col class="column" span="3">
          <van-icon name="ellipsis" color="#fff" size="33px"  style="margin: auto"/>
        </van-col>
      </van-row>
    </div>
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <p> {{ count }}</p>
    </van-pull-refresh>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default{
    name:'',
    data(){
      return{
        isLoading: false
      }
    },
    methods:{
      onRefresh() {
        setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;

        }, 1000);
      },
      onClickLeft() {
        this.$router.push({path:'/'})
      },
    }
  }
</script>

<style scoped>
  .top{
    height: 60px;
    background: url(../../../assets/7.png);
    background-size: cover;
  }
  .mid{
    line-height: 60px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #fff;
  }
  .mid>.login{
    padding-left: 99px;
    font-size: 1.2em;
  }
  .column{
    height :60px;
    display: flex;
    margin: auto;
    font-size: 16px;
    color: #fff;
  }
  .login{
    display: inline-block;
    color: #fff;
    margin: auto;
  }
</style>

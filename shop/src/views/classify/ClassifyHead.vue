<template>
  <div>
    <van-row>
      <van-col span="2" style="margin-top: 15px;margin-left: 5px">
        <van-icon name="arrow-left" size="25" @click="back_index"/>
      </van-col>
      <router-link to="/search">
        <van-col span="20">
          <van-search
            v-model="value"
            shape="round"
            placeholder="格力变频空调"
          />
        </van-col>
      </router-link>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: "ClassifyHead",
    data() {
      return {
        value: ''
      };
    },
    methods: {
      back_index(){
        this.$router.push({path:'/'})
      }
    }
  }
</script>

<style scoped>

</style>

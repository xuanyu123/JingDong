<template>
  <div>
    <ClassifyHead></ClassifyHead>
    <TreeSelect></TreeSelect>
    <CommonNav></CommonNav>
  </div>
</template>

<script>
  import TreeSelect from "./classify/TreeSelect";
  import CommonNav from "./home/CommonNav";
  import ClassifyHead from "./classify/ClassifyHead";

  export default {
    name: "classify",
    components: {
      TreeSelect,
      CommonNav,
      ClassifyHead
    }
  }
</script>

<style scoped>

</style>

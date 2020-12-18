<template>
  <div class="classA">
    <div class="title">
      <i @click="goBack" class="iconfont icon-icon-arrow-left2"></i>
      <span class="titleText">{{title}}</span>
      <i class="iconfont icon-lingdang"></i>
    </div>
  </div>
</template>

<script>
export default {
  props:{
   title:String,
   goBackmsg:String
  },
  methods: {
    goBack () {
      this.$router.push({ name: this.goBackmsg })
    }
  }
}
</script>

<style lang='scss'>
.classA {
  .title {
    padding: 0 25px;
    box-sizing: border-box;
    font-size: 36px;
    align-items: center;
    background: #2988fc;
    color: #ffff;
    height: 156px;
    display: flex;
    justify-content: space-between;
    .titleText {
      margin-right: 107px;
    }
  }
 
}
</style>
<template>
  <div id="home">
    <el-input placeholder="加密字符" v-model="encryptStr"></el-input>
    <el-input placeholder="解密字符" v-model="decryptStr"></el-input>
    <el-button id="encryptBtn" @click="encryptBtn">加密</el-button>
  </div>
</template>

<script>
import AES from "@/common/AES.js";
var keys = AES.generatekey(16);
 
//如果是对象/数组的话，需要先JSON.stringify转换成字符串
 
// var encrypts = AES.encrypt(JSON.stringify(cars),keys);
// var dess = JSON.parse(AES.decrypt(encrypts,keys));
// // var encrypts = that.$encrypt('1234asdasd',keys);
 
// // var dess = that.$decrypt(encrypts,keys);

export default {

  data () {
    return {
     encryptStr:'',
     decryptStr:''
    }
  },
  methods: {
    encryptBtn: function () {
      var that = this;

      //随机16位验证码
      var mainKey = AES.generatekey(16);
      //先加密显示，再解密输出
    
      //加密
      //第一个参数是要加密的东西 第二个是16位随机码
      this.encryptStr = AES.encrypt(this.encryptStr, mainKey);

      //解密
      //第一个参数是要解密的东西 第二个是16位随机码
      this.decryptStr = AES.decrypt(this.encryptStr, mainKey)

    }

  },
}
</script>

<style>
</style>
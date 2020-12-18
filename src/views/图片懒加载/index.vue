<template>
  <div ref="wrapper" id="wrapper">
      <div>
        <img id="img" v-for="(item,index) in imgs" :key="index"  v-lazy='item' alt="">
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data(){
    return{
      Scroll:null,
      imgs:['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=223318715,4067576677&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1482551289,685046404&fm=26&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3305110904,4140817826&fm=26&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4246311170,2053177186&fm=26&gp=0.jpg','https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2947436248,2243579391&fm=26&gp=0.jpg','https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1448847634,3919971273&fm=26&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1182699787,1695237613&fm=26&gp=0.jpg','https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1673762413,3293501196&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3334830316,3911478577&fm=26&gp=0.jpg']
    }
  },
  methods:{
      initScroll() {
      this.$nextTick(() => {
        if (!this.Scroll) {
          this.Scroll = new BScroll(this.$refs.wrapper, {
            click: true, // 配置允许点击事件
            scrollY: true, // 开启纵向滚动
            pullDownRefresh: {
              threshold: 50,
              probeType: 3,
            },
            pullUpLoad: {
              threshold: -100,
            },
          });
          this.Scroll.on('pullingDown',()=>{
                
              this.Scroll.refresh() // DOM 结构发生变化后，重新初始化BScroll
              this.Scroll.finishPullDown() // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
          })
          this.Scroll.on("pullingUp", () => {
              //上拉加载
              console.log(222);
             this.imgs= this.imgs.concat(this.imgs)
              this.Scroll.refresh() // DOM 结构发生变化后，重新初始化BScroll
              this.Scroll.finishPullUp() // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
            
          });
          this.Scroll.on('scroll',(e)=>{
              
            //   console.log(e.y);
          })
        } else {
          this.Scroll.refresh(); // 重新计算 better-scroll，当 DOM 结构发生变化的时确保滚动效果正常
        }
      });
     
    },
  }
  ,
  mounted(){
    this.initScroll()
  }

}
</script>

<style>
#img{
  transition: all 2s ;
  
}
#wrapper{
  height: 800px;
  overflow: hidden;
  border: 1px solid #000;


}
img{
  height: 200px;
}

</style>
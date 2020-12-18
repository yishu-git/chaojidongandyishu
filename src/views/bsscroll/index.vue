<template>
  <div id="better">
    <header></header>
    <main ref="wrapper" class="wrapper">
      <div>
          <li v-for="(item,index) in arr" :key="index" >{{item}}</li>
       
      </div>
    </main>
    <footer></footer>
  </div>
</template>
//下载 npm install better-scroll --save
必须包含两个大的div，外层和内层div
外层div设置可视的大小(宽或者高)-有限制宽或高
内层div，包裹整个可以滚动的部分
内层div高度一定大于外层div的宽或高，才能滚动
必须在获取数据和DOM渲染完之后再调用定义的 initScroll()方法，否则无法滚动

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      goods: [],
      Scroll: null,
      arr:[1,2,3,4,5,6,7,8,9,5,4,1,2]
    };
  },
  methods: {
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
              console.log(2222);
              this.Scroll.refresh() // DOM 结构发生变化后，重新初始化BScroll
              this.Scroll.finishPullDown() // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
          })
          this.Scroll.on("pullingUp", () => {
              //上拉加载
              this.arr.push(2)
              console.log(this.arr);
              this.Scroll.refresh() // DOM 结构发生变化后，重新初始化BScroll
              this.Scroll.finishPullUp() // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
              console.log(33);
          });
          this.Scroll.on('scroll',(e)=>{
              
            //   console.log(e.y);
          })
        } else {
          this.Scroll.refresh(); // 重新计算 better-scroll，当 DOM 结构发生变化的时确保滚动效果正常
        }
      });
     
    },
  },
  mounted() {
    this.initScroll();
    console.log(321);
  },
};
</script>

<style lang='scss'>
#better {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    height: 100px;
    background: yellow;
  }
  main {
    li {
      width: 200px;
      height: 200px;
      background: red;
      margin-top: 20px;
    }
    flex: 1;
    overflow: hidden;
    background: green;
  }
  footer {
    height: 100px;
    background: #f5f5ff;
  }
}
</style>
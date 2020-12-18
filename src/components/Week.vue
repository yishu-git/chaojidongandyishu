<template>
  <div id="week">
      <div class="title">
          <li class="titlel_first">2020.12.14-2020.12.20(本周)</li>
          <li> <input type="checkbox" name="" id=""> <span>只看未完成</span> </li>
      </div>
      <div class="br"> <li>盾构机日常检查表</li> <li class="orange">执行中(0/83)</li> </div>
      <div class="lists">
          <ul>
              <li> <span class="rijian">日检</span> <span class="tuya">2020.12.20土压平衡盾构机值</span> <span class="daicha">待查</span> </li>
              <li>项目编码: <span>DGJ-02+031+A203</span> </li>
          </ul>
          <ul>
              <li> <span class="rijian">日检</span> <span class="tuya">2020.12.20土压平衡盾构机值</span> <span class="daicha">待查</span> </li>
              <li>项目编码: <span>DGJ-02+031+A203</span> </li>
          </ul>
          <ul>
              <li> <span class="rijian">日检</span> <span class="tuya">2020.12.20土压平衡盾构机值</span> <span class="daicha">待查</span> </li>
              <li>项目编码: <span>DGJ-02+031+A203</span> </li>
          </ul>
          <div class="movebox">
              <li class="move">查看更多</li>
          </div>

      </div>
      <div class="lists">
          <ul>
              <li> <span class="rijian">日检</span> <span class="tuya">2020.12.20土压平衡盾构机值</span> <span class="daicha">待查</span> </li>
              <li>项目编码: <span>DGJ-02+031+A203</span> </li>
          </ul>
          <ul>
              <li> <span class="rijian">日检</span> <span class="tuya">2020.12.20土压平衡盾构机值</span> <span class="daicha">待查</span> </li>
              <li>项目编码: <span>DGJ-02+031+A203</span> </li>
          </ul>
          <ul>
              <li> <span class="rijian">日检</span> <span class="tuya">2020.12.20土压平衡盾构机值</span> <span class="daicha">待查</span> </li>
              <li>项目编码: <span>DGJ-02+031+A203</span> </li>
          </ul>
          <div class="movebox">
              <li class="move">查看更多</li>
          </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
#week{
        padding: 25px;
        box-sizing: border-box;
    .title{
    
        .titlel_first{
            color: blue;
        }
        height: 102px;
        border-bottom: 1px solid #999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;
    }
    .br{
        margin-top:55px;
        display: flex;
        justify-content: space-between;
        font-size: 30px;
        .orange{
            color: orange;
        }
    }
    .lists{
        ul{
            font-size: 30px;
            border-bottom: 1px solid #999;
            li{
                display: flex;
                align-items: center;
                margin-top: 20px;
            }
            .rijian{
                margin-right: 15px;
                padding: 8px 12px;
                color: blue ;
                border-radius: 8px;
                background: #9fc3f0;
            }
            .daicha{
                color: #c24745;
            }
            .tuya{
                flex: 1;
            }
            height: 173px;
            display: flex;
           
            flex-direction: column;
            justify-content: center;
        }
        .movebox{
            height: 113px;
            display: flex;
            align-items: center;
            justify-content: center;
            .move{
                width: 250px;
                height: 45px;
                border-radius: 40px;
                background: #f5f5f5;
                line-height: 45px;
                font-size: 30px;
                text-align: center;
            }
        }
    }
}

</style>
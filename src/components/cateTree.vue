<template>
  <div class="tree">
    <template v-for="item in trees">
      <ul
        :key="item.name"
        :class="item.children.length ? 'general-department' : 'project-command'"
      >
        <i
          @click="UnfoldAndfold(item)"
          :class="{ 'iconfont icon-xiangshang': item.children.length }"
          :ref="item.id"
        ></i>
        <li
          :class="{ change: item.id === id }"
          @click="jumpAndShow($event, item)"
        >
          {{ item.name }}
          <keep-alive>
            <Catetree
              v-show="item.children && item.canSelect"
              :trees="item.children"
            />
          </keep-alive>
        </li>
      </ul>
    </template>
  </div>
</template> 
<style lang='scss'>
.tree {
  .project-command,
  .general-department {
    font-size: 30px;
    position: relative;
    .icon-xiangshang,
    .icon-xiangxia {
      position: absolute;

      left: -40px;
    }
  }
  .change {
    color: blue;
  }
  .white {
    color: white;
  }
  li {
    margin-top: 67px;
  }
  ul {
    margin-left: 38px;
  }
}
</style>
<script>

import bus from '@/unitl/bus.js'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Catetree',
  props: {
    trees: Array,
  },
  data () {
    return {
      data: {

      }
    }
  },
  computed: {
    ...mapState('catefory', {
      id: (store) => store.id
    })
  },
  methods: {
    //三个要点 第一个修改数据通过数据渲染改版样式
    //二 利用vuex数据判断
    //三 icon 利用vuex通过 canSelect判断名字
    ...mapMutations('catefory', ['change_id']),
    jumpAndShow (e, item) {
      e.stopPropagation();
      if (!item.children.length) {


        this.change_id(item.id)
        this.$router.push({
          name: 'newlyAdded',
          params: {
            name: item.name
          }
        })
        console.log(item);
        // let aa = this.trees.findIndex((newitem) => {
        //   return newitem.id == item.id
        // })
        // item.active = true
        // this.$set(this.trees, aa, item)
        //不能用this.$emit
        //同vux的变量

      }

    },

    UnfoldAndfold (e) {
      console.log(e);

      this.$refs[e.id][0].className = this.$refs[e.id][0].className == 'iconfont icon-xiangshang' ? 'iconfont icon-xiangxia' : 'iconfont icon-xiangshang'
      

      let aa = this.trees.findIndex((item) => {
        return item.id == e.id
      })
      
      e.canSelect = !e.canSelect
      this.$set(this.trees, aa, e)


      bus.$emit('shuaxin')

    }
  },
  mounted () {

  }
}
</script>

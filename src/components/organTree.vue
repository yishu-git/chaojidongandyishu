<template>
  <div class="tree">
    <template v-for="item in trees">
      <ul :key="item.name" :class="item.type">
        <i
          @click="UnfoldAndfold(item)"
          :class="{ 'iconfont icon-xiangshang': item.childNodes }"
          :ref="item.id"
        ></i>
        <li @click="jumpAndShow($event, item)">
          {{ item.name }}
          <Tree
            v-show="item.childNodes && item.canSelect"
            :trees="item.childNodes"
          />
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
  .change{
    color: blue;
  }
  .white{
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
export default {
  name: 'Tree',
  props: {
    trees: Array
  },
  data () {
    return {
      data: {
        id: '',
        bool: true
      }
    }
  },
  methods: {
    jumpAndShow (e, item) {
      e.stopPropagation();
      this.id = item.id
      if(!item.childNodes){
       this.$router.push({name:'nume1'})
      }
      
    },

    UnfoldAndfold (e) {
      this.$refs[e.id][0].className = this.$refs[e.id][0].className == 'iconfont icon-xiangshang' ? 'iconfont icon-xiangxia' : 'iconfont icon-xiangshang'
      this.id = e.id
      this.bool = !e.canSelect
      let aa = this.trees.findIndex((item) => {
        return item.id == e.id
      })
      this.trees[aa].canSelect = this.bool
      bus.$emit('shuaxin')

    }
  },
  mounted () {

  }
}
</script>

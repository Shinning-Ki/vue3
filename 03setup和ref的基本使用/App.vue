<template>
<div>setup和ref的使用
</div>
<div>{{count}}</div>
<button @click="countChange">增加count</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    // 变量
    const count = ref(0)
    // 方法
    function countChange(){
      count.value++
    }
    return{
      // 属性
      count,
      // 方法
      countChange
    }
  }
});
</script>

<style>
</style>

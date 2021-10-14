<template>
  <h2>APP父级组件</h2>
  <div>msg:{{ msg }}</div>
  <button @click="msg += '+++'">更新+</button>
  <Child :msg="msg" :msg2="msg2" @insert="insert" />
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import Child from "./components/child.vue";
export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  // setup可以跟data或者method里的方法和属性合并，但是最好是不要混合用
  setup() {
    let msg = ref("+++");
    let msg2 = ref("真丑");
    function insert(txt: string) {
      msg.value += txt;
    }
    return {
      msg,
      msg2,
      insert,
    };
  },
});
</script>
<style>
</style>

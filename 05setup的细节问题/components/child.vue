<template>
  <h2>Child</h2>
  <div>msg:{{ msg }}</div>
  <button @click="emitInsert">分发事件</button>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "child",
  props: ["msg"],
  beforeCreate() {
    console.log("beforeCreate执行了");
  },
  // setup在beforecreate前面执行了一次，所以在setup中拿不到this，是undefined，在setup的时候，组件还没创建出来

  //分发也可以不使用context.emit,可以将context解构出来变成{emit,attrs.slots}
  setup(props, { emit, slots, attrs }) {
    // setup(props,context){
    // props包含了所有父级组件向子级组件并且在子级组件里接收的所有的参数

    // console.log(props.msg);
    // console.log(context.emit);// emit是个函数
    // console.log(context.attrs.msg2); //包含所有父组件向子组件传递的所有没被子组件接受的参数
    // console.log(context.slots);

    console.log("setup执行了");

    function emitInsert() {	
      console.log("111");

      // context.emit("insert","===")
      emit("insert", "===");
    }

    return {
      emitInsert,
    };
  },
});
</script>
<style>
</style>

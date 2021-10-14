<template>
  <h2>Child子级组件</h2>
  <h3>length:{{ length }}</h3>
</template>
<script lang='ts'>
import { computed, defineComponent, Ref, toRef } from "vue";
// 如果hook函数想要的类型是ref的，但是父组件传过来的是age的数值（.value），那么就需要使用toref转成ref类型
function useGetLength(age: Ref) {
  return computed(() => {
    return age.value.toString().length;
  });
}
export default defineComponent({
  name: "child",
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
//  props包含了所有父级组件向子级组件并且在子级组件里接收的所有的参数
  setup(props) {
    //  在这里将他转换
    const length = useGetLength(toRef(props, "age"));
    return {
      length,
    };
  },
});
</script>
<style>
</style>

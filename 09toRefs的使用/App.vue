<template>
  <h2>toRef的使用</h2>
  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
  <h3>name2:{{ name2 }}</h3>
  <h3>age2:{{ age2 }}</h3>


</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
// 用一个hook函数来展示toRef的使用
function useFeatureX() {
  const state = reactive({
    name2: "xulina",
    age2: "23",
  });
  // 要把state解构暴露出去
  return{
    ...toRefs(state)
  }
}
export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      name: "kjl",
      age: 23,
    });
    setInterval(() => {
      user.name += "====";
    }, 1000);

    // hook函数解构，引入
    const {name2,age2} = useFeatureX()
    return {
      // 将reactive定义的转变成ref定义的，并且解构出来方便使用
      ...toRefs(user),
      name2,
      age2
    };
  },
});
</script>
<style>
</style>

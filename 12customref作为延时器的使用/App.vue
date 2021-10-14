<template>
  <input type="text" v-model="keyword" />
  <h2>{{ keyword }}</h2>
</template>
<script lang='ts'>
import { customRef, defineComponent } from "vue";
// 自定义hook防抖函数
function useDebouncrdRed<T>(value: T, delay = 200) {
  // 存放定时器的id变量
  let timeoutId: number;
  return customRef((track, trigger) => {
    //  返回的是一个对象
    return {
      // 返回数据的
      get() {
        // 告诉vue追踪数据
        track();
        return value;
      },
      // 修改数据的
      set(newValue: T) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          value = newValue;
          // 提示vue更新数据
          trigger();
        }, delay);
      },
    };
  });
}
export default defineComponent({
  name: "App",
  setup() {
    const keyword = useDebouncrdRed("abc", 500);
    return {
      keyword,
    };
  },
});
</script>
<style>
</style>

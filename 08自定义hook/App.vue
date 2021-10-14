<template>
  <h2>自定义hook函数操作</h2>
  <h2>x:{{ x }},y:{{ y }}</h2>
  <h3 v-if="loading">正在加载中...</h3>
  <h3 v-else-if="errorMsg">错误是：{{ errorMsg }}</h3>
  <ul v-else>
    <li>id:{{ data.id }}</li>
    <li>address:{{ data.address }}</li>
    <li>distance:{{ data.distance }}</li>
  </ul>
  <!-- 数组数据 -->
  <ul v-for="item in data" :key="item.id">
    <li>id:{{ item.id }}</li>
    <li>title:{{ item.title }}</li>
    <li>grice:{{ item.grice }}</li>
  </ul>
</template>
<script lang='ts'>
import { defineComponent,watch } from "vue";
import useMounsePositions from "./hooks/useMounsePositions";
import useRequest from "./hooks/useRequest";
// 泛型接口
interface AddressData {
  id: number;
  address: string;
  distance: string;
}
interface ProductData {
  id: string;
  title: string;
  grice: number;
}
export default defineComponent({
  name: "App",
  // 需求1，用户在页面中点击页面，把点击的位置的横纵坐标收集起来并展示出来
  setup() {
    // hook函数在这里将需要的参数解构即可
    const { x, y } = useMounsePositions();
    // const { data, loading, errorMsg } = useRequest<AddressData>("./address.json"); //获取对象数据
    const { data, loading, errorMsg } =
      useRequest<ProductData[]>("./product.json"); //获取对象数据

    // 监视data数据
    watch(data, () => {
      if (data.value) {
        console.log(data.value.length);
      }
    });
    return {
      x,
      y,
      data,
      loading,
      errorMsg,
    };
  },
});
</script>
<style>
</style>

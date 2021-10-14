<template>
  <h2>toref和ref的区别</h2>
  <h3>user:{{ user }}</h3>
  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
  <h3>money:{{ money }}</h3>
  <button @click="update">更新数据</button>
  <br />
  <Child :age="age" />
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, toRef } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  name: "App",
  components:{
    Child
  },
  setup() {
    const user = reactive({
      name: "kjl",
      age: 23,
      money: 9,
    });
    // 总结：toref是重新生成了一个ref响应式数据，数据的变化是双向的
    // 但是ref只是拷贝了对象中的值，修改数据是不会对源数据有任何变化的
        const age = toRef(user, "age");
    const money = ref(user.money);
    const update = () => {
      age.value += 111;
      money.value += 222;
    };

    return {
      user,
      update,
      age,
      money,
    };
  },
});
</script>

<style>
</style>

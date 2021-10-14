<template>
  <div>reactive的使用</div>
  <div>姓名：{{ user.name }}</div>
  <div>年龄：{{ user.age }}</div>
  <div>性别：{{ user.gender }}</div>
  <div>对象：{{ user.wife }}</div>
  <button @click="updateInfo">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const obj: any = {
      name: "大军",
      age: "23",
      wife: {
        name: "小丽",
        age: "20",
        car: ["宝马", "奔驰", "奥迪"],
      },
    };
    // 泛型
    const user = reactive<any>(obj);
    // 返回的user是个proxy代理对象
    console.log(user);

    const updateInfo = () => {
      user.wife.name = "小娜";
      user.wife.age += "1";
      // 如果使用目标对象更改，就不会被改变，只有使用代理对象才会实现响应式的数据改变
      // obj.name = "xxx"

      // user -----》 代理对象   obj----》 目标对象 
      // 代理对象或者目标对象添加一个属性，哪一个会影响页面的更新
      // obj.gender = "男"; //这个没有引起页面的更新
      // user.gender = "男" //这个引起了页面的更新
      // delete obj.name; //这个没有引起页面的更新
      // delete user.name  //这个引起了页面的更新

      // 总结：不管是添加还是更改或者是删除属性都有通过代理对象，才会使页面发生渲染
    };
    return {
      user,
      updateInfo,
    };
  },
});
</script>

<style>
</style>

<template>
  <h1>计算属性和监视</h1>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input
      type="text"
      placeholder="请输入姓氏"
      v-model="user.firstname"
    />
    <br />
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastname" />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullname1" />
    <br />
    姓名：<input type="text" placeholder="显示姓名" v-model="fullname2" /><br />
    姓名：<input type="text" placeholder="显示姓名" v-model="fullname3" />
  </fieldset>
</template>
<script lang='ts'>
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstname: "东方",
      lastname: "不败",
    });
    // 第一个姓名 (修改姓名操作绑定到第一个姓名上)
    const fullname1 = computed(() => {
      return user.firstname + "_" + user.lastname;
    });
    // 第二个姓名 （对姓名的修改绑定在第二个姓名上，并且对第二个修改的时候，原始姓名也会有修改）
    const fullname2 = computed({
      get() {
        return user.firstname + "_" + user.lastname;
      },
      set(val: string) {
        // console.log(val);
        const name = val.split("_");
        user.firstname = name[0];
        user.lastname = name[1];
      },
    });
    // 第三个姓名，使用watch监听
    // 要想页面一进来就要显示就要开启immediate
    const fullname3 = ref("");
    watch(
      user,
      ({ firstname, lastname }) => {
        fullname3.value = firstname + "_" + lastname;
      },
      { immediate: true, deep: true }
    );

    // 监视2
    // watcheffect不像watch，默认就会执行一次，不需要开启immediate
    watchEffect(() => {
      //  fullname3.value = user.firstname + "_" + user.lastname
      //  console.log(fullname3.value);
      // 双向修改姓名
      const name2 = fullname3.value.split("_");
      console.log(name2);

      user.firstname = name2[0];
      user.lastname = name2[1];
    });
    // watch可以监视多个数据
    // 用watch监视的数据如果是reactive定义的，那么需要使用函数，如果是ref指定的，就可以直接监视
    watch([() => user.firstname,() => user.lastname], () => {
      console.log("22222");
    });

    return {
      user,
      fullname1,
      fullname2,
      fullname3,
    };
  },
});
</script>
<style>
</style>

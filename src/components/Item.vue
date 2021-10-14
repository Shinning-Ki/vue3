<template>
  <li
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :style="{ backgroundColor: bgcolor }"
  >
    <label>
      <input type="checkbox" v-model="isComplete" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-if="isShow" @click="delTodo">删除</button>
  </li>
</template>
<script lang='ts'>
import { computed, defineComponent, PropType, ref } from "vue";
import { Todo } from "../types/todos";
export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true,
    },
    // todo: Object as () => Todo,
    // todo: Object as PropType<() => Todo>,
  },
  setup(props) {
    console.log(props);

    // const mycolor = ref("white")
    const bgcolor = ref("white");
    const isShow = ref(false);
    // 高亮背景颜色的变化
    const mouseHandler = (flag: boolean) => {
      if (flag) {
        bgcolor.value = "red";
        isShow.value = flag;
      } else {
        bgcolor.value = "white";
        isShow.value = flag;
      }
    };
    // 删除数据
    const delTodo = () => {
      if (window.confirm("确定要删除吗")) {
        props.deleteTodo(props.index);
      }
    };
    // 计算属性----获取并且修改当前复选框的状态
    const isComplete = computed({
      get() {
        return props.todo.iscompleted;
      },
      set(val) {
        props.updateTodo(props.todo, val);
      },
    });
    return {
      bgcolor,
      mouseHandler,
      isShow,
      delTodo,
      isComplete,
    };
  },
});
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>

<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <Footer :todos2="todos" @allCheck="allCheck" :clearTodo="clearTodo" />
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
// 引入直接的子级组件
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import List from "./components/List.vue";
// 引入接口
import { Todo } from "./types/todos";
export default defineComponent({
  name: "App",
  components: {
    Header, 
    Footer,
    List,
  },
  // 数据放在一个数组中，然后数组中有多个对象，每个对象包括了三个属性（id,title,iscompleted）
  setup() {
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        {
          id: 1,
          title: "奥迪",
          iscompleted: true,
        },
        {
          id: 1,
          title: "奔驰",
          iscompleted: true,
        },
        {
          id: 1,
          title: "宝马",
          iscompleted: true,
        },
      ],
    });
    // 添加数据的方法
    const addTodo = (todo:Todo) =>{
      state.todos.unshift(todo)
    }
    // 删除数据的方法
    const deleteTodo = (index:number) => {
      state.todos.splice(index,1)
    }
    // 更改选中框的状态
    const updateTodo = (todo:Todo,iscompleted:boolean) => {
      todo.iscompleted = iscompleted
    }
    // 当修改复选框的全选按钮状态后的全选操作
    const allCheck = (iscompleted:boolean) => {
      //整个todos里的复选框状态要根据总多选框来变化
      state.todos.forEach(item => {
        item.iscompleted = iscompleted
      });
    }
    // 清理已完成数据
    const clearTodo = () => {
      state.todos = state.todos.filter(todo => !todo.iscompleted)
    }
    return { 
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      allCheck,
      clearTodo
    };
  },
});
</script>
<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

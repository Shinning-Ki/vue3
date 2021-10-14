<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keydown.enter="add"
    />
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Header",
  props: {
    // addTodo: {
    //   type: Function,
    //   required: true,
    // },
  },
  setup(props,{emit}) {
    const title = ref("");
    const add = () => {
			// 判断输入框内是否有值,如果没有就跳出
			if (!title.value.trim()) return
			const todo = {
				id:Date.now(),
				title:title.value,
				completed:false
			}
			// 调用父组件传过来的方法，添加
			// props.addTodo(todo)
			
			// 用emit分发父组件的事件也可以，第一个参数写函数名，第二个参数写要传的值
			emit('addTodo',todo)
			title.value = ""
		};
    return {
      title,
      add,
    };
  },
});
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>

<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo" :index="index" :updateTodo="updateTodo" />
  </ul>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
// 引入子级组件
import Item from "./Item.vue";
export default defineComponent({
  name: "List",
  components: {
    Item,
  },
  // todos是数组，所以用数组接收
  props: {
		todos:{
			type:Array,
			required:true
		},
		deleteTodo:{
			type:Function,
			required:true
		},
		updateTodo:{
			type:Function,
			required:true
		}
	},
});
</script>	
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

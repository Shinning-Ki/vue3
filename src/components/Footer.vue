<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="all" />
    </label>
    <span>
      <span>已完成{{ count }}</span> / 全部{{ todos2.length }}
    </span>
    <button class="btn btn-danger" @click="clearTodo">清除已完成任务</button>
  </div>
</template>
<script lang='ts'>
import { Todo } from "@/types/todos";
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  props: {
    todos2: {
      type: Array as () => Todo[],
      required: true,
    },
		clearTodo:{
			type:Function,
			required:true
		}
  },
  setup(props, { emit }) {
		console.log(props,111);
		
    const count = computed(() => {
      return props.todos2.reduce(
        (pre, todo) => pre + (todo.iscompleted ? 1 : 0),
        0
      );
    });
    // 因为footer的复选框和app里的数据是双向的，所以要用计算属性
    const all = computed({
      get() {
        // 是不是全选，要判断已完成的数量大于零并且已完成的个数等于全部的个数为真
        return count.value > 0 && count.value === props.todos2.length;
      },
      set(val) {
        // 修改复选框状态的时候，要同时更改list的的状态
        emit("allCheck", val);
      },
    });
    return {
      count,
      all,
    };
  },
});
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>

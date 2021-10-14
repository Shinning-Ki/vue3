<template>
 <h1>m1:{{m1}}</h1>
 <h1>m2:{{m2}}</h1>
 <h1>m3:{{m3}}</h1>
 <hr>
 <button @click="update">更新数据</button>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  name: 'App',
  //ref可以和reactive一样定义对象，并且用ref定义出来的对象内部是通过了reactive转化成proxy代理对象的
  // reactive不可以定义基本数据类型，只能处理对象（递归深度响应式）
  setup() {
    const m1 = ref('abc')
    const m2 = reactive({
      name:'kjl',
      husband:{
        name:'no',
        age:'nono'
      }
    })
    const m3 = ref({
      name:'buzhi',
      wife:{
        name:'kjl',
        age:'23'
      }
    })
    // const m4 = reactive('aaaa')
    const update = () => {
      m1.value += '111'
      m2.husband.name += "222"
      m3.value.wife.age += "333"
    }
    return{
      m1,
      m2,
      m3,
      // m4,
      update
    }
  }
})
</script>
<style>
 
</style>

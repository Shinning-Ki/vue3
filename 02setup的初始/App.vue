<template>
<div>我变好看了</div>
<div>{{number}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup(){
    const number = 6

    return {number}
    
  }
});
</script>

<style>
</style>

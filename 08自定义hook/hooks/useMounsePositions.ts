import { onMounted, ref, onBeforeUnmount } from 'vue'
export default function():any{
    const x = ref(-1)
    const y = ref(-1)
    // event不加类型会出现红色波浪，在这里它的类型应该为MouseEvent
    const clickHandler = (event: MouseEvent) => {
        x.value = event.pageX
        y.value = event.pageY
    }

    // 页面加载完成后再点击，所以要吧函数写在mounted里面
    onMounted(() => {
        window.addEventListener('click', clickHandler)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', clickHandler)
    })
    return {
        x, y
    }
}
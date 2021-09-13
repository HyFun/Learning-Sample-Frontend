<!--
 * @Author       : HyFun
 * @Date         : 2021-09-13 16:15:43
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-13 17:06:29
-->
<script>
import { h } from 'vue'
import Hello from './Hello'
export default {
  name: 'Lesson13',
  components: {
    // Hello
  },
  render() {
    return h('div', {}, [h('h4', {}, `课时十三：渲染函数`), h(Hello, {}, '')])
  }
}
</script>

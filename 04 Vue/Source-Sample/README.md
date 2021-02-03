<!--
 * @Author       : HyFun
 * @Date         : 2021-02-02 17:12:21
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-02-03 11:35:29
-->

简易的vue代码实现，主要内容

- 模板编译
    - dom -> ast
    - ast -> vnode
    - vnode -> dom

- 数据劫持
    - observe方法进行数据劫持
        - get方法中进行`依赖收集`
        - set方法中进行`派发更新`

- Dep 和 Watcher相互收集
    ```
    
    ```



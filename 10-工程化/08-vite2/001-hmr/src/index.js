/**
 * 1. 检测自己的变化
 */
import "./count";

/**
 * 2. 检测别的模块函数、变量变化
 */
import { foo } from "./foo";

foo();

if(import.meta.hot) {
  import.meta.hot.accept('./foo', (newModule)=>{
    newModule.foo();
  });
}

/**
 * 3. dispose使用
 */

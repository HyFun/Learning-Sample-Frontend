export const count = {
  value: 0,
};

// 监听自身的变量变化
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log(newModule.count.value);
  });

  // 类似于useEffect中的返回函数
  import.meta.hot.dispose(() => {
    timer && clearInterval(timer);
    import.meta.hot.data.count = count;
  });

  // 恢复原来的值
  count.value = import.meta.hot.data.count?.value || 0;
}

let timer = setInterval(() => {
  count.value++;
  console.log("interval", count.value);
}, 1000);

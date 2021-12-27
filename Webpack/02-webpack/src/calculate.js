const add = (...rest) => {
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }
  return sum;
};

new Promise((resolve, reject) => {
  resolve(1);
}).then((res) => {
  console.log(res);
});

[1, 2, 3, 4, 5].map((v) => v * 2);

export default add;

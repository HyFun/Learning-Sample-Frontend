function sum(...args: number[]) {
  let result: number = 0;
  Array.from(args).forEach((v) => {
    result += v;
  });

  return result;
}

export default sum;

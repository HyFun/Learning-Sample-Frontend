function decrease(target: number, ...args: number[]) {
  let result = target;
  Array.from(args).forEach((v) => {
    result -= v;
  });

  return result;
}

export default decrease;

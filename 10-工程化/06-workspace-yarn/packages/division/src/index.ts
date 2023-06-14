function division(target: number, ...args: number[]) {
  Array.from(args).forEach((v) => {
    target = target / v;
  });

  return target;
}

export default division;

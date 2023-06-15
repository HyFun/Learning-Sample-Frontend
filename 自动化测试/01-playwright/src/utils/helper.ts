export async function retry(
  action: () => Promise<void>,
  count: number = 0,
  waitTime: number = 0
) {
  try {
    await action();
  } catch (error: any) {
    if (count > 0) {
      count--;
      await new Promise((resolve) => setTimeout(resolve, waitTime));
      await retry(action, count, waitTime);
    } else {
      throw error;
    }
  }
}

export const CODE_SUCCESS = 1;
export const CODE_FAILED = 0;

export function success<T>(data: T) {
  return {
    ok: CODE_SUCCESS,
    data,
  };
}

export function failed(errMsg: string) {
  return {
    ok: CODE_FAILED,
    errMsg,
  };
}

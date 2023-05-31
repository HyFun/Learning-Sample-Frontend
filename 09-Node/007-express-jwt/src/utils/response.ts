export const CODE_SUCCESS = 1;
export const CODE_FAILED = 0;

export function returnSuccess(data: any) {
  return {
    ok: CODE_SUCCESS,
    data,
  };
}

export function returnFailed(errMsg: string) {
  return {
    ok: CODE_FAILED,
    errMsg,
  };
}

function timeout(delay: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((res) => setTimeout(res, delay));
}
export default timeout;

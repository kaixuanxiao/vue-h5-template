/* 姓名 */
export function name(str) {
  const reg = /^[\\u4E00-\\u9FA5\\uf900-\\ufa2d·s]{2,13}$/
  return reg.test(str)
}

/* 手机号 */
export function mobile(str) {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  return reg.test(str)
}

/* 身份证 */
export function idCard(str) {
  const reg = /(^\d{15}&)|(^\d{18})|(^\d{17}(\d|X|x)$)/
  return reg.test(str)
}

/* 邮箱 */
export function email(str) {
  const reg = /^\w{6,18}@\w{2,4}\.(com)|(net)$/
  return reg.test(str)
}

/**
 *格式化时间
 *yyyy-MM-dd hh:mm:ss
 */
export function formatDate(time, fmt) {
  if (time === undefined || '') {
    return
  }
  if (!fmt) {
    fmt = 'yyyy-MM-dd'
  }
  const date = new Date(time)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

/** *
格式化
*@params money {Number or String} 金额
*@params digit {Number} 小数点的位数，不够补0
*@returns {String} 格式化后的金额
**/
export function formatMoney(money, digit = 2) {
  let tpMoney = ''
  if (!money) return '0.00'
  tpMoney = money
  tpMoney = String(tpMoney).replace(/,/g, '')
  tpMoney = Number(tpMoney)
  if (isNaN(tpMoney)) {
    return ''
  }
  tpMoney = tpMoney.toFixed(digit) + ''
  var re = /^(-?\d+)(\d{3})(\.?\d*)/
  while (re.test(tpMoney)) {
    tpMoney = tpMoney.replace(re, '$1,$2$3')
  }
  return tpMoney
}

/*
 * 隐藏用户手机号中间四位
 */
export function hidePhone(phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/*
 * 隐藏用户手机号中间四位
 */
export function formatBankCard(card) {
  return card.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
}

import Vue from 'vue'

function inputEvent(option) {
  const { el, binding, formatType } = option

  el.addEventListener('input', function() {
    // 获取input的dom对象，这里因为用的是element ui的input，所以需要这样拿到
    const input = document.getElementById(binding.value)
    const value = input.value
    // 获取当前光标的位置
    const cursorIndex = input.selectionStart
    // 字符串中光标之前-的个数
    const lineNumOfCursorLeft = (value.slice(0, cursorIndex).match(/ /g) || []).length

    let newValue = value
    if (formatType === 'telFormat') {
      // 去掉所有非数字
      newValue = newValue.replace(/\D+/g, '')
      if (newValue.length > 3) {
        if (newValue.length < 8) {
          newValue = newValue.replace(/(\d{3})/, '$1 ')
        } else {
          newValue = newValue.replace(/(\d{3})(\d{4})/, '$1 $2 ')
        }
      }
    } else if (formatType === 'idCardFormat') {
      // 去掉所有空格
      newValue = newValue.replace(/\D+/g, '')
      // 格式化
      newValue = newValue.replace(/(\d{4})/g, '$1 ')
    }
    // 改后字符串中原光标之前-的个数
    const newLineNumOfCursorLeft = (newValue.slice(0, cursorIndex).match(/ /g) || []).length
    // 光标在改后字符串中应在的位置
    const newCursorIndex = cursorIndex + newLineNumOfCursorLeft - lineNumOfCursorLeft
    // 赋新值，nextTick保证-不能手动输入或删除，只能按照规则自动填入
    // this.$nextTick(() => {
    input.value = newValue
    // 参考https://segmentfault.com/a/1190000022753905
    input.dispatchEvent(new Event('input'))
    // vnode.context._data.inputPartnerIdCard = newValue
    // el.dispatchEvent(new Event('input'))
    // 修正光标位置，nextTick保证在渲染新值后定位光标
    // this.$nextTick(() => {
    // selectionStart、selectionEnd分别代表选择一段文本时的开头和结尾位置
    input.selectionStart = newCursorIndex
    input.selectionEnd = newCursorIndex
    // })
    // })
  })
}

Vue.directive('telFormat', {
  // 当被绑定的元素插入到 DOM 中时……
  bind: function(el, binding) {
    inputEvent({ el, binding, formatType: 'telFormat' })
  }
})

Vue.directive('idCardFormat', {
  // 当被绑定的元素插入到 DOM 中时……
  bind: function(el, binding) {
    inputEvent({ el, binding, formatType: 'idCardFormat' })
  }
})

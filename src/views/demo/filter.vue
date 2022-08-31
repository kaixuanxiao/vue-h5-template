<template>
  <div>
    <van-cell> 时间格式化-日期：{{ new Date().getTime() | formatDate }} </van-cell>
    <van-cell> 时间格式化-分时：{{ new Date().getTime() | formatDate('yyyy-MM-dd hh:mm:ss') }} </van-cell>
    <van-cell> 金额格式化：{{ 12345678 | formatMoney }} </van-cell>
    <van-cell> 银行卡格式化：{{ '321684846453336' | formatBankCard }} </van-cell>
  </div>
</template>

<script>
export default {
  name: 'DemoFilter'
}
</script>

<style>
</style>

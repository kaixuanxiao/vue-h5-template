<template>
  <div>
    <van-cell>
      <van-field
        id="inputTel"
        v-model="inputTel"
        label="手机号"
        placeholder="请输入联系人手机号码"
        v-telFormat="`inputTel`"
        maxlength="13"
      />
    </van-cell>
    <van-cell>
      <van-field
        id="inputBankCard"
        v-model="inputBankCard"
        label="储蓄卡卡号"
        placeholder="请输入本人储蓄卡卡号"
        v-idCardFormat="`inputBankCard`"
        maxlength="23"
      />
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'DemoFilter',
  data() {
    return {
      inputTel: '',
      inputBankCard: ''
    }
  }
}
</script>

<style>
</style>

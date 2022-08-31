<template>
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell @click="onDetail(index)" v-for="(item,index) in list" :key="item" :title="item">
    <input v-if="index===9" />
  </van-cell>
</van-list>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {
    setTimeout(() => {
      document.documentElement.scrollTop = this.scrollTop
      document.body.scrollTop = this.scrollTop
    }, 0)
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === 'Home') {
      // 去Home页面则清除缓存
      this.$store.dispatch('app/noKeepAlive', 'List')
    } else {
      this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    }
    next()
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 40; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 120) {
          this.finished = true
        }
      }, 1000)
    },
    onDetail(index) {
      if (index === 9) return
      this.$router.push('/demo/cacheRoute/detail')
    }
  }
}
</script>

<style lang="scss" scoped>
input{
  width: 80%;
}
</style>

<!-- home -->
<template>
  <div class="index-container">
    <div class="warpper">
      <h1 class="demo-home__title">
        <!-- <img src="https://www.sunniejs.cn/static/weapp/logo.png" /> -->
        <span> VUE H5开发模板</span>
      </h1>
      <!-- <h2 class="demo-home__desc">A vue h5 template with Vant UI</h2> -->
    </div>
    <van-cell
      :is-link="!!item.url"
      :to="item.url"
      icon="success"
      v-for="item in list"
      :key="item.msg || item"
      :title="item.msg || item"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
  activated() {
    console.log('activated')
  },
  data() {
    return {
      list: [
        'Vue-cli4，Vuex，Vue-router',
        'Webpack 4基础配置：proxy 跨域，alias 别名，externals 引入 cdn 资源，打包分析',
        '配置多环境变量',
        'Sass 全局样式',
        'Axios 封装及接口管理',
        '集成VantUI 组件按需加载',
        '集成px转vw自适应',
        '集成VConsole',
        {
          msg: '集成filters：格式化时间，格式化金额，隐藏手机号',
          url: '/demo/filter'
        },
        {
          msg: '集成directive：表单手机号格式化，表单身份证格式化',
          url: '/demo/directive'
        },
        {
          msg: '集成方案：路由缓存',
          url: '/demo/cacheRoute/list'
        }
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss" scoped>
.index-container {
  .warpper {
    padding: 12px;
    background: #fff;
    .demo-home__title {
      margin: 0 0 6px;
      font-size: 32px;
      .demo-home__title img,
      .demo-home__title span {
        display: inline-block;
        vertical-align: middle;
      }
      img {
        width: 32px;
      }
      span {
        margin-left: 16px;
        font-weight: 500;
      }
    }
    .demo-home__desc {
      margin: 0 0 20px;
      color: rgba(69, 90, 100, 0.6);
      font-size: 14px;
    }
  }
}
</style>

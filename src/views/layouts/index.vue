<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive :include="catchList">
      <router-view></router-view>
    </keep-alive>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '关于',
          to: {
            name: 'About'
          },
          icon: 'user-o'
        }
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  },
  computed: {
    catchList: function() {
      return ['Home', 'Filter']
      // console.log(this.$store.state.app.catchList)
      // return this.$store.state.app.catchList
    }
  }
}
</script>

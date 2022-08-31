<template>
  <div class="app-container" :class="showTabBar ? 'show-tabBar' : ''">
    <div>
      <keep-alive :include="catchList">
        <router-view></router-view>
      </keep-alive>
    </div>
    <div v-if="showTabBar" class="layout-footer">
      <TabBar :data="tabbars" />
    </div>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'App',
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
  mounted() {},
  computed: {
    showTabBar: function () {
      const showTabBarName = ['Home', 'About']
      return showTabBarName.includes(this.$route.name)
    },
    catchList: function () {
      return this.$store.state.app.catchList
    }
  }
}
</script>
<style lang="scss"></style>

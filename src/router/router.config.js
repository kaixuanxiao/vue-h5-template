/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: () => import('@/views/layouts/index'),
  //   redirect: '/home',
  //   meta: {
  //     title: '首页',
  //     keepAlive: false
  //   },
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'Home',
  //       component: () => import('@/views/home/index'),
  //       meta: { title: '首页', keepAlive: false }
  //     },
  //     {
  //       path: '/about',
  //       name: 'About',
  //       component: () => import('@/views/home/about'),
  //       meta: { title: '关于', keepAlive: false }
  //     }
  //   ]
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index'),
    meta: { title: '首页' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/home/about'),
    meta: { title: '关于' }
  },
  {
    path: '/demo/filter',
    name: '/demo/filter',
    component: () => import('@/views/demo/filter'),
    meta: { title: '过滤器' }
  },
  {
    path: '/demo/directive',
    name: '/demo/directive',
    component: () => import('@/views/demo/directive'),
    meta: { title: '自定义指令' }
  },
  {
    path: '/demo/cacheRoute/list',
    name: '/demo/cacheRoute/list',
    component: () => import('@/views/demo/cacheRoute/list'),
    meta: { title: '路由缓存-列表' }
  },
  {
    path: '/demo/cacheRoute/detail',
    name: '/demo/cacheRoute/detail',
    component: () => import('@/views/demo/cacheRoute/detail'),
    meta: { title: '路由缓存-详情页' }
  }
]

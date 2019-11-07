import Vue from 'vue';

import Tab from '../layout/tabs.vue';
import Top from '../layout/top.vue';

import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import One from '../views/One.vue';
import Two from '../views/Two.vue';
import Three from '../views/Three.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/tab',
    name: 'Tab',
    component: Tab,
    redirect: '/tab/top/one',
    children: [
      {
        path: 'top',
        name: 'Top',
        component: Top,
        children: [
          {
            path: 'one',
            name: 'One',
            component: One,
          },
        ],
      },
      {
        path: 'one',
        name: 'One',
        component: One,
      },
      {
        path: 'Two',
        name: 'Two',
        component: Two,
      },
      {
        path: 'Three',
        name: 'Three',
        component: Three,
      },
    ],
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/tab/top/one',
  },
  {
    path: '/about',
    name: 'about',
    component: Top,
    children: [
      {
        path: 'Three',
        name: 'Three',
        component: Three,
      },
    ],
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

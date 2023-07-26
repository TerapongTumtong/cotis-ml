// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/PromotionSelect',
        name: 'PromotionSelect',
        component: () => import('@/views/newFlow/01PromotionSelect.vue'),
      },
      {
        path: '/TypeHome2',
        name: 'TypeHome2',
        component: () => import('@/views/newFlow/02TypeHome.vue'),
      },
      {
        path: '/ValueSelect2',
        name: 'ValueSelect2',
        component: () => import('@/views/newFlow/03ValueSelect.vue'),
      },
      {
        path: '/Salary',
        name: 'Salary',
        component: () => import('@/views/newFlow/04Salary.vue'),
      },
      {
        path: '/Age',
        name: 'Age',
        component: () => import('@/views/newFlow/05Age.vue'),
      },
      {
        path: '/Occupation',
        name: 'Occupation',
        component: () => import('@/views/newFlow/06Occupation.vue'),
      },
      {
        path: '/Loading2',
        name: 'Loading2',
        component: () => import('@/views/newFlow/07Loading.vue'),
      },
      {
        path: '/Result3',
        name: 'Result3',
        component: () => import('@/views/newFlow/08Result.vue'),
      },
      {
        path: '/Home2',
        name: 'Home2',
        component: () => import('@/views/newFlow/Home.vue'),
      },
      {
        path: '/TypeHome',
        name: 'TypeHome',
        component: () => import('@/views/01TypeHome.vue'),
      },
      {
        path: '/ValueSelect',
        name: 'ValueSelect',
        component: () => import('@/views/02ValueSelect.vue'),
      },
      {
        path: '/JobSelect',
        name: 'JobSelect',
        component: () => import('@/views/03JobSelect.vue'),
      },
      {
        path: '/031',
        name: '031',
        component: () => import('@/views/031.vue'),
      },
      {
        path: '/032',
        name: '032',
        component: () => import('@/views/032.vue'),
      },
      {
        path: '/033',
        name: '033',
        component: () => import('@/views/033.vue'),
      },
      {
        path: '/HowDoYouWork',
        name: 'HowDoYouWork',
        component: () => import('@/views/031HowDoYouWork.vue'),
      },
      {
        path: '/Income',
        name: 'Income',
        component: () => import('@/views/04Income.vue'),
      },
      {
        path: '/Pay',
        name: 'Pay',
        component: () => import('@/views/05Pay.vue'),
      },
      {
        path: '/Profile',
        name: 'Profile',
        component: () => import('@/views/06Profile.vue'),
      },
      {
        path: '/Loading',
        name: 'Loading',
        component: () => import('@/views/07Loading.vue'),
      },
      {
        path: '/Result2',
        name: 'Result2',
        component: () => import('@/views/08Result.vue'),
      },
      {
        path: '/flowReport',
        name: 'flowReport',
        component: () => import('@/views/04Report.vue'),
      },
      {
        path: '/Property',
        name: 'Property',
        component: () => import('@/views/01Property.vue'),
      },
      {
        path: '/Location',
        name: 'Location',
        component: () => import('@/views/02location.vue'),
      },
      {
        path: '/Homevalue',
        name: 'Homevalue',
        component: () => import('@/views/031homevalue.vue'),
      },
      {
        path: '/Condovalue',
        name: 'Condovalue',
        component: () => import('@/views/032Condo.vue'),
      },
      {
        path: '/Deedlandvalue',
        name: 'Deedlandvalue',
        component: () => import('@/views/033Deedland.vue'),
      },
      {
        path: '/Conclusion',
        name: 'Conclusion',
        component: () => import('@/views/04Conclusion.vue'),
      },
      {
        path: '/otp',
        name: 'otp',
        component: () => import('@/views/01Otp.vue'),
      },
      {
        path: '/otp2',
        name: 'otp2',
        component: () => import('@/views/02Otp.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

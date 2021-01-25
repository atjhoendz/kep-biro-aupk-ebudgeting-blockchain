import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const LoginPage = () => import('@/views/auth/LoginPage')

const LaporanLembaga = () => import('@/views/LaporanLembaga')
const LaporanAnggaran = () => import('@/views/LaporanAnggaran')
const LaporanEstimasi = () => import('@/views/LaporanEstimasi')
const LaporanBiayaRiil = () => import('@/views/LaporanBiayaRiil')


Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'laporan-lembaga',
          name: 'Laporan Lembaga',
          component: LaporanLembaga
        },
        {
          path: 'laporan-anggaran',
          name: 'Laporan Anggaran',
          component: LaporanAnggaran
        },
        {
          path: 'laporan-estimasi',
          name: 'Laporan Estimasi',
          component: LaporanEstimasi
        },
        {
          path: 'laporan-biaya-riil',
          name: 'Laporan Biaya Riil',
          component: LaporanBiayaRiil
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
}


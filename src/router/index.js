import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const LoginPage = () => import('@/views/auth/LoginPage')

const DataPemohon = () => import('@/views/DataPemohon')
const GrafikAnggaran = () => import('@/views/GrafikAnggaran')

const DaftarLembaga = () => import('@/views/grafik-kegiatan/DaftarLembaga')
const DetailGrafikKegiatan = () => import('@/views/grafik-kegiatan/DetailGrafik')


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
          path: 'data-pemohon',
          name: 'Data Pemohon',
          component: DataPemohon
        },
        {
          path: 'grafik-anggaran',
          name: 'Grafik Anggaran',
          component: GrafikAnggaran
        }
      ]
    },
    {
      path: '/grafik-kegiatan',
      name: 'Grafik Kegiatan',
      redirect: '/grafik-kegiatan',
      component: TheContainer,
      children: [
        {
          path: '/',
          component: DaftarLembaga
        },
        {
          path: 'detail-grafik',
          name: 'Detail Grafik Anggaran Kegiatan',
          component: DetailGrafikKegiatan
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


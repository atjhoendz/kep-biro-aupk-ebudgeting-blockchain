// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const LoginPage = () => import('@/views/auth/LoginPage')

const DataPemohon = () => import('@/views/DataPemohon')
const GrafikAnggaran = () => import('@/views/GrafikAnggaran')

const DaftarLembaga = () => import('@/views/grafik-kegiatan/DaftarLembaga')
const DetailGrafikKegiatan = () =>
  import('@/views/grafik-kegiatan/DetailGrafik')

export const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: TheContainer,
    meta: { isAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'data-pemohon',
        name: 'Data Pemohon',
        component: DataPemohon,
      },
      {
        path: 'grafik-anggaran',
        name: 'Grafik Anggaran',
        component: GrafikAnggaran,
      },
    ],
  },
  {
    path: '/grafik-kegiatan',
    name: 'Grafik Kegiatan',
    redirect: '/grafik-kegiatan',
    component: TheContainer,
    meta: { isAuth: true },
    children: [
      {
        path: '/',
        component: DaftarLembaga,
      },
      {
        path: 'detail-grafik',
        name: 'Detail Grafik Anggaran Kegiatan',
        component: DetailGrafikKegiatan,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
]

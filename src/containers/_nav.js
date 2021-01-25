export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Laporan']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Laporan Lembaga',
        to: '/laporan-lembaga',
        icon: 'cil-building',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Laporan Anggaran',
        to: '/laporan-anggaran',
        icon: 'cil-dollar',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Laporan Estimasi',
        to: '/laporan-estimasi',
        icon: 'cil-wallet',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Laporan Biaya Riil',
        to: '/laporan-biaya-riil',
        icon: 'cil-money',
      },
    ]
  }
]
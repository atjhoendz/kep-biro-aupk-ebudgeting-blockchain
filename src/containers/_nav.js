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
        _children: ['Master']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Data Pemohon',
        to: '/data-pemohon',
        icon: 'cil-user',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Grafik']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Grafik Anggaran',
        to: '/grafik-anggaran',
        icon: 'cil-dollar',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Grafik Kegiatan',
        to: '/grafik-kegiatan',
        icon: 'cib-when-i-work',
      },
    ]
  }
]
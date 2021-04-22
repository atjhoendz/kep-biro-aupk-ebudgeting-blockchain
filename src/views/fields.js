export const fieldsPemohon = [
  { key: 'no', label: 'No.' },
  { key: 'nama' },
  { key: 'nama_lembaga', label: 'Dari Lembaga' },
  { key: 'nomor_spd', label: 'No. SPD' },
  { key: 'nip' },
  { key: 'golongan' },
  { key: 'jabatan' },
  { key: 'bukti_spd', label: 'Bukti SPD' },
  { key: 'status_berkas' },
  { key: 'alasan_ditolak' },
  {
    key: 'proses-terima',
    label: 'Proses',
    _style: 'text-align:center',
  },
]

export const optionsBuktiSPD = [
  { label: 'Ada', value: 'ada' },
  { label: 'Tidak Ada', value: 'tidak ada' },
]

export const fieldsGrafikAnggaran = [
  { key: 'nama', label: 'Nama Lembaga', _style: 'text-align:center' },
  {
    key: 'jumlahAnggaranAsCurrency',
    label: 'Anggaran Lembaga',
    _style: 'text-align:center',
  },
]

export const fieldsDaftarLembaga = [
  { key: 'no', label: 'No.', _style: 'width:10px' },
  { key: 'nama', label: 'Nama Lembaga' },
  { key: 'jumlah_anggaran' },
  { key: 'proses-grafik', label: 'Proses', _style: 'text-align:center' },
]

export const fieldsDetailLembaga = [
  { key: 'nama_kegiatan', label: 'Nama Kegiatan', _style: 'text-align:center' },
  {
    key: 'anggaran',
    label: 'Anggaran',
    _style: 'text-align:center',
  },
]

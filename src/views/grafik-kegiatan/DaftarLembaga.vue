<template>
  <CRow>
    <CCol sm="12" md="6" lg="5">
      <card-list-data
        title="Data Lembaga"
        :items="items"
        :fields="fieldsDaftarLembaga"
        :showButton="false"
        :routeEndpoint="routeEndpoint"
        :isLoading="isLoading"
      >
        <template #proses-grafik="{item}">
          <CButton
            color="secondary"
            size="sm"
            :to="`${routeEndpoint}/detail-grafik/${item.key}`"
            >Lihat Grafik</CButton
          >
        </template>
      </card-list-data>
    </CCol>
    <toast-msg :listToasts="listToasts" />
  </CRow>
</template>

<script>
import CardListData from '../../components/CardListData.vue'
import ToastMsg from '../../components/ToastMsg'
import { fieldsDaftarLembaga } from '../fields'
import { AnggaranService } from '../../services/anggaran.service'

export default {
  name: 'DaftarLembaga',
  components: { CardListData, ToastMsg },
  data() {
    return {
      items: [],
      fieldsDaftarLembaga,
      listToasts: [],
      isLoading: false,
      routeEndpoint: 'grafik-kegiatan',
    }
  },
  methods: {
    async getDataLembaga() {
      this.isLoading = true
      try {
        const dataLembaga = await AnggaranService.getDataLembaga()

        this.items = dataLembaga.map(item => {
          item.Record.jumlah_anggaran = parseInt(
            item.Record.jumlah_anggaran
          ).toLocaleString('id', {
            style: 'currency',
            currency: 'IDR',
          })
          return {
            key: item.Key,
            ...item.Record,
          }
        })
      } catch (err) {
        this.listToasts.push({
          message: 'Terjadi masalah. Data lembaga tidak berhasil didapatkan.',
          color: 'danger',
        })
      }
      this.isLoading = false
    },
  },
  async mounted() {
    await this.getDataLembaga()
  },
}
</script>

<style></style>

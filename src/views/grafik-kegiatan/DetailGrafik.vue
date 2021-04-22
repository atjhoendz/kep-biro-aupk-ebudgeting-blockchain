<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <span class="h4">Informasi Grafik Anggaran Kegiatan per Lembaga</span>
        </CCardHeader>
        <CCardBody>
          <div style="max-heigth:400px">
            <CChartPie
              :datasets="datasets"
              :labels="labels"
              :options="{
                aspectRatio: 3,
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  text: 'Grafik Kegiatan',
                  fontSize: 18,
                  fontColor: '#3c4b64',
                },
              }"
              class="d-md-down-none"
            />
            <CChartPie
              :datasets="datasets"
              :labels="labels"
              :options="{
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  text: 'Grafik Kegiatan',
                  fontSize: 18,
                  fontColor: '#3c4b64',
                },
              }"
              class="d-lg-none"
            />
          </div>
          <CDataTable
            :items="items"
            :fields="fieldsDetailLembaga"
            hover
            border
            class="mt-5 text-center"
          >
            <template #thead-top>
              <td>
                <strong>{{ dataLembaga.nama }}</strong>
              </td>
              <td>
                <strong>Anggaran: {{ dataLembaga.anggaran }}</strong>
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
    <toast-msg :listToasts="listToasts" />
  </CRow>
</template>

<script>
import ToastMsg from '../../components/ToastMsg'
import { AnggaranService } from '../../services/anggaran.service'
import { fieldsDetailLembaga } from '../fields'
import { generateColor } from '../utils'

export default {
  name: 'DetailGrafik',
  components: { ToastMsg },
  data() {
    return {
      items: [],
      datasets: [],
      fieldsDetailLembaga,
      labels: [],
      isLoading: false,
      listToasts: [],
      dataLembaga: {
        nama: '',
        anggaran: '',
      },
    }
  },
  methods: {
    async getDataBiayaRiilByLembaga() {
      this.isLoading = true
      try {
        const responseData = await AnggaranService.getDataBiayaRiilByLembaga(
          this.$route.params.key
        )

        this.items = responseData.data_kegiatan.map(item => {
          return {
            nama_kegiatan: item.nama_kegiatan,
            anggaran: parseInt(item.total_biaya).toLocaleString('id', {
              style: 'currency',
              currency: 'IDR',
            }),
          }
        })

        this.$set(this.dataLembaga, 'nama', responseData.data_lembaga.nama)
        this.$set(
          this.dataLembaga,
          'anggaran',
          parseInt(responseData.data_lembaga.jumlah_anggaran).toLocaleString(
            'id',
            {
              style: 'currency',
              currency: 'IDR',
            }
          )
        )

        const itemSet = responseData.data_kegiatan.map(item => {
          return item.total_biaya
        })

        this.datasets = [
          {
            data: itemSet,
            backgroundColor: generateColor(itemSet.length),
            borderWidth: 1,
          },
        ]

        this.labels = responseData.data_kegiatan.map(item => {
          return item.nama_kegiatan
        })
      } catch (err) {
        this.listToasts.push({
          message: 'Terjadi masalah. Data kegiatan tidak berhasil didapatkan.',
          color: 'danger',
        })
      }
      this.isLoading = false
    },
  },
  async mounted() {
    await this.getDataBiayaRiilByLembaga()
  },
}
</script>

<style scoped></style>

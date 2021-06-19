<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <span class="h4">Informasi Grafik Anggaran Lembaga</span>
        </CCardHeader>
        <CCardBody>
          <div style="max-heigth:500px">
            <CChartBar
              :datasets="datasets"
              :labels="labels"
              :options="{
                aspectRatio: 3,
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  text: 'Grafik Anggaran',
                  fontColor: '#3c4b64',
                  fontSize: 18,
                },
                scales: {
                  yAxes: [
                    {
                      display: true,
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }"
              class="d-md-down-none"
            />
            <CChartBar
              :datasets="datasets"
              :labels="labels"
              class="d-lg-none"
              :options="{
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  text: 'Grafik Anggaran',
                  fontColor: '#3c4b64',
                  fontSize: 14,
                },
              }"
            />
          </div>
          <CDataTable
            :items="itemsLembaga"
            :fields="fieldsGrafikAnggaran"
            hover
            border
            class="mt-5 text-center"
            :loading="isLoading"
          ></CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
    <toast-msg :listToasts="listToasts" />
  </CRow>
</template>

<script>
import ToastMsg from '../components/ToastMsg'
import { AnggaranService } from '../services/anggaran.service'
import { fieldsGrafikAnggaran } from './fields'
import { generateColor } from './utils'

export default {
  name: 'GrafikAnggaran',
  components: { ToastMsg },
  data() {
    return {
      labels: [],
      itemsLembaga: [],
      fieldsGrafikAnggaran,
      listToasts: [],
      isLoading: false,
      dataAnggaran: [],
      datasets: [],
    }
  },
  methods: {
    async getDataLembaga() {
      this.isLoading = true
      try {
        const dataLembaga = await AnggaranService.getDataLembaga()

        this.itemsLembaga = dataLembaga.map(item => {
          return {
            key: item.Key,
            jumlahAnggaranAsCurrency: parseInt(
              item.Record.jumlah_anggaran
            ).toLocaleString('id', {
              style: 'currency',
              currency: 'IDR',
            }),
            ...item.Record,
          }
        })

        const dataAnggaran = dataLembaga.map(item => {
          return item.Record.jumlah_anggaran
        })

        this.labels = dataLembaga.map(item => {
          return item.Record.nama
        })

        const itemSet = {
          data: dataAnggaran,
          borderWidth: 1,
          backgroundColor: generateColor(dataAnggaran.length),
          highlightFill: '#fff',
        }
        this.$set(this.datasets, 0, itemSet)
      } catch (err) {
        this.listToasts.push({
          message: 'Terjadi masalah. Data anggaran tidak berhasil didapatkan.',
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

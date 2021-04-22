<template>
  <CRow>
    <CCol col="12">
      <card-list-data
        title="Data Pemohon"
        :items="items"
        :fields="fieldsPemohon"
        routeEndpoint="data-pemohon"
        :showButton="false"
      >
        <template #proses-terima="{item}">
          <CButtonGroup v-if="!item.status_spd">
            <CSpinner
              color="info"
              v-if="isProcessing && selectedKey == item.key"
            />
            <CButton
              color="success"
              size="sm"
              @click="processPermohonan(item.key, 'Diterima')"
              v-if="selectedKey != item.key"
              :disabled="isProcessing"
              >Terima</CButton
            >
            <CButton
              color="danger"
              size="sm"
              @click="showModalPenolakan(item.key)"
              v-if="selectedKey != item.key"
              :disabled="isProcessing"
              >Tolak</CButton
            >
          </CButtonGroup>
          <div
            class="font-weight-bold text-center"
            :class="{
              'text-info': item.status_spd == 'Diterima',
              'text-danger': item.status_spd == 'Ditolak',
            }"
            v-else
          >
            {{
              item.status_spd == 'Diterima'
                ? 'Permohonan Diterima'
                : 'Permohonan Ditolak'
            }}
          </div>
        </template>
      </card-list-data>
    </CCol>
    <toast-msg :listToasts="listToasts" />
    <CModal
      title="Konfirmasi penolakan"
      color="info"
      :centered="true"
      :show.sync="modalPenolakan"
    >
      <CInput
        label="Alasan Ditolak"
        placeholder="Masukkan alasan ditolak"
        v-model="alasanDitolak"
        @keyup.enter="processPermohonan(undefined, 'Ditolak')"
      />
      <template #footer>
        <CButton @click="modalPenolakan = false" color="secondary"
          >Batal</CButton
        >
        <CButton
          @click="processPermohonan(undefined, 'Ditolak')"
          color="danger"
          :disabled="!alasanDitolak"
          >Tolak</CButton
        >
      </template>
    </CModal>
  </CRow>
</template>

<script>
import CardListData from '../components/CardListData.vue'
import ToastMsg from '../components/ToastMsg'
import { PemohonService } from '../services/pemohon.service'
import { fieldsPemohon, optionsBuktiSPD } from './fields'

export default {
  name: 'DataPemohon',
  components: { CardListData, ToastMsg },
  data() {
    return {
      items: [],
      fieldsPemohon,
      optionsBuktiSPD,
      listToasts: [],
      isLoading: false,
      modalPenolakan: false,
      isProcessing: false,
      selectedKey: '',
      alasanDitolak: '',
      selectedTolakKey: '',
    }
  },
  methods: {
    async getDataPemohon() {
      this.isLoading = true
      try {
        const dataPemohon = await PemohonService.getAll()

        this.items = dataPemohon.map(item => {
          return {
            key: item.Key,
            ...item.Record,
          }
        })
      } catch (err) {
        this.listToasts.push({
          message: 'Terjadi masalah. Data pemohon tidak berhasil didapatkan.',
          color: 'danger',
        })
      }
      this.isLoading = false
    },
    async processPermohonan(key, decision) {
      if (this.modalPenolakan) this.modalPenolakan = false
      this.selectedKey = decision == 'Diterima' ? key : this.selectedTolakKey
      this.isProcessing = true
      try {
        const filteredItem = this.items.filter(item => {
          return item.key == this.selectedKey
        })[0]

        let formData = {}

        formData = Object.assign(formData, filteredItem)
        formData.status_spd = decision
        formData.alasan_ditolak =
          decision == 'Ditolak' ? this.alasanDitolak : ''

        const response = await PemohonService.updateDataByKey(
          this.selectedKey,
          formData
        )

        if (response.status == 200) {
          this.listToasts.push({
            message: `Permohonan berhasil ${decision.toLowerCase()}.`,
            color: 'info',
          })
        }
      } catch (err) {
        this.listToasts.push({
          message: 'Terjadi masalah. Permohonan tidak berhasil diterima',
          color: 'danger',
        })
      }
      this.isProcessing = false
      this.selectedKey = ''
      this.selectedTolakKey = ''
      await this.getDataPemohon()
    },
    showModalPenolakan(key) {
      this.modalPenolakan = true
      this.selectedTolakKey = key
    },
  },
  async mounted() {
    await this.getDataPemohon()
  },
}
</script>

<style></style>

<template>
  <CRow>
    <CCol col="12">
      <card-list-data
        title="Laporan Estimasi"
        routeEndpoint="laporan-estimasi"
        :items="itemsEstimasi"
        :fields="fields"
      ></card-list-data>
    </CCol>
  </CRow>
</template>

<script>
import CardListData from "../components/CardListData.vue";
import { itemsEstimasi } from "../sample-data/data";

const fields = [
  { key: "no", label: "No.", _style: "width:10px" },
  { key: "tanggal-berangkat", _style: "text-align:center" },
  { key: "nama-pemohon", _style: "text-align:center" },
  { key: "dari-lembaga", _style: "text-align:center" },
  { key: "jenis-pmk", label: "Jenis PMK" },
  { key: "asal", _style: "text-align:center" },
  { key: "tujuan", _style: "text-align:center" },
  { key: "banyak", _style: "text-align:center" },
  { key: "keterangan", _style: "text-align:center" },
  { key: "total", _style: "text-align:center" },
  { key: "status-pemohon", _style: "text-align:center" },
];

export default {
  name: "LaporanEstimasi",
  components: { CardListData },
  data() {
    return {
      itemsEstimasi,
      fields,
    };
  },
};
</script>

<style></style>

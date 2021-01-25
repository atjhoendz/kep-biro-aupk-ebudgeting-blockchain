<template>
  <CRow>
    <CCol col="12">
      <card-list-data
        title="Laporan Biaya Riil"
        :items="itemsBiayaRiil"
        :fields="fields"
        routeEndpoint="laporan-biaya-riil"
      >
      </card-list-data>
    </CCol>
  </CRow>
</template>

<script>
import CardListData from "../components/CardListData.vue";
import { itemsBiayaRiil } from "../sample-data/data";

const fields = [
  { key: "no", label: "No.", _style: "width:10px" },
  { key: "tanggal-berangkat", _style: "text-align:center" },
  { key: "nama-pemohon", _style: "text-align:center" },
  { key: "dari-lembaga", _style: "text-align:center" },
  { key: "jenis-pmk", label: "Jenis PMK" },
  { key: "asal", _style: "text-align:center" },
  { key: "tujuan", _style: "text-align:center" },
  { key: "biaya-riil", _style: "text-align:center" },
  { key: "keterangan", _style: "text-align:center" },
];

export default {
  name: "LaporanBiayaRiil",
  components: { CardListData },
  data() {
    return {
      itemsBiayaRiil,
      fields,
    };
  },
};
</script>

<style></style>

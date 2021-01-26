<template>
  <CRow>
    <CCol col="12">
      <card-list-data
        title="Data Pemohon"
        :items="itemsPemohon"
        :fields="fields"
        routeEndpoint="data-pemohon"
        :optionsBuktiSPD="optionsBuktiSPD"
        :showButton="false"
      ></card-list-data>
    </CCol>
  </CRow>
</template>

<script>
import CardListData from "../components/CardListData.vue";
import { itemsPemohon } from "../sample-data/data";

const fields = [
  { key: "no", label: "No.", _style: "text-align:center" },
  { key: "nama", _style: "text-align:center" },
  { key: "dari-lembaga", _style: "text-align:center" },
  { key: "no-spd", label: "No. SPD", _style: "text-align:center" },
  { key: "nip", _style: "text-align:center" },
  { key: "golongan", _style: "text-align:center" },
  { key: "jabatan", _style: "text-align:center" },
  { key: "bukti-spd", label: "Bukti SPD", _style: "text-align:center" },
  { key: "status-spd", label: "Status SPD", _style: "text-align:center" },
  { key: "status-permohonan", _style: "text-align:center" },
  {
    key: "proses-terima",
    label: "Proses",
    _style: "text-align:center",
  },
];

const optionsBuktiSPD = [
  { label: "Ada", value: "ada" },
  { label: "Tidak Ada", value: "tidak ada" },
];

export default {
  name: "DataPemohon",
  components: { CardListData },
  data() {
    return {
      itemsPemohon,
      fields,
      optionsBuktiSPD,
    };
  },
};
</script>

<style></style>

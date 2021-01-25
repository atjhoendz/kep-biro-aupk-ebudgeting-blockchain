<template>
  <CRow>
    <CCol sm="12" md="6" lg="5">
      <card-list-data
        title="Laporan Anggaran"
        :items="itemsAnggaran"
        :fields="fields"
        routeEndpoint="laporan-anggaran"
      ></card-list-data>
    </CCol>
  </CRow>
</template>

<script>
import CardListData from "../components/CardListData.vue";
import { itemsAnggaran } from "../sample-data/data";

const fields = [
  { key: "no", label: "No.", _style: "width:10px" },
  "nama-lembaga",
  "sisa-anggaran",
];

export default {
  name: "LaporanLembaga",
  components: { CardListData },
  data() {
    return {
      itemsAnggaran,
      fields,
    };
  },
};
</script>

<style></style>

<template>
  <CRow>
    <CCol sm="12" md="6" lg="5">
      <card-list-data
        title="Laporan Lembaga"
        :items="itemsLembaga"
        :fields="fields"
        routeEndpoint="laporan-lembaga"
      ></card-list-data>
    </CCol>
  </CRow>
</template>

<script>
import CardListData from "../components/CardListData.vue";
import { itemsLembaga } from "../sample-data/data";

const fields = [
  { key: "no", label: "No.", _style: "width:10px" },
  "nama-lembaga",
  "jumlah-anggaran",
];

export default {
  name: "LaporanLembaga",
  components: { CardListData },
  data() {
    return {
      itemsLembaga,
      fields,
    };
  },
};
</script>

<style></style>

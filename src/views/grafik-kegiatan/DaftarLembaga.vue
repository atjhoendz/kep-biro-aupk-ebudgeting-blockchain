<template>
  <CRow>
    <CCol sm="12" md="6" lg="5">
      <card-list-data
        title="Data Lembaga"
        :items="itemsLembaga"
        :fields="fields"
        :showButton="false"
        routeEndpoint="grafik-kegiatan"
      ></card-list-data>
    </CCol>
  </CRow>
</template>

<script>
import CardListData from "../../components/CardListData.vue";
import { itemsLembaga } from "../../sample-data/data";

const fields = [
  { key: "no", label: "No.", _style: "width:10px" },
  { key: "nama-lembaga", _style: "text-align:center" },
  { key: "jumlah-anggaran", _style: "text-align:center" },
  { key: "proses-grafik", label: "Proses", _style: "text-align:center" },
];

export default {
  name: "DaftarLembaga",
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

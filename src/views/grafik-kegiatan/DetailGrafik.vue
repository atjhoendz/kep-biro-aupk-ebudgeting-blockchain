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
              :options="{ aspectRatio: 3 }"
              class="d-md-down-none"
            />
            <CChartPie
              :datasets="datasets"
              :labels="labels"
              class="d-lg-none"
            />
          </div>
          <CDataTable
            :items="itemsKegiatan"
            :fields="fields"
            hover
            border
            class="mt-5 text-center"
          >
            <template #thead-top>
              <td><strong>Fakultas Dakwah</strong></td>
              <td><strong>Anggaran: Rp5.000.300</strong></td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { itemsKegiatan } from "../../sample-data/data";

const data = itemsKegiatan.map((item) => {
  return item["anggaran"];
});

const labels = itemsKegiatan.map((item) => {
  return item["nama-kegiatan"];
});

const backgroundColor = [
  "#e9ad10",
  "#1a2eaa",
  "#fb6a25",
  "#d974d9",
  "#137ce2",
  "#7b310a",
  "#16beb5",
];

const datasets = [
  {
    label: "Anggaran",
    data: data,
    backgroundColor: backgroundColor,
    borderWidth: 1,
  },
];

const fields = [
  { key: "nama-kegiatan", label: "Nama Kegiatan", _style: "text-align:center" },
  {
    key: "anggaran",
    label: "Anggaran",
    _style: "text-align:center",
  },
];

export default {
  name: "DetailGrafik",
  data() {
    return {
      itemsKegiatan,
      datasets,
      fields,
      labels,
    };
  },
};
</script>

<style scoped></style>

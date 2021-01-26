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
              :options="{ aspectRatio: 3 }"
              class="d-md-down-none"
            />
            <CChartBar
              :datasets="datasets"
              :labels="labels"
              class="d-lg-none"
            />
          </div>
          <CDataTable
            :items="itemsLembaga"
            :fields="fields"
            hover
            border
            class="mt-5 text-center"
          ></CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { itemsLembaga } from "../sample-data/data";

// const generateColor = (jumlah) => {
//   let colors = [];
//   for (let i = 0; i < jumlah; i++) {
//     let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     colors.push(color);
//   }
//   return colors;
// };

const data = itemsLembaga.map((item) => {
  return item["jumlah-anggaran"];
});

const labels = itemsLembaga.map((item) => {
  return item["nama-lembaga"];
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

// console.log(generateColor(data.length));

const fields = [
  { key: "nama-lembaga", _style: "text-align:center" },
  {
    key: "jumlah-anggaran",
    label: "Anggaran Lembaga",
    _style: "text-align:center",
  },
];

export default {
  name: "GrafikAnggaran",
  data() {
    return {
      datasets,
      labels,
      itemsLembaga,
      fields,
    };
  },
};
</script>

<style></style>

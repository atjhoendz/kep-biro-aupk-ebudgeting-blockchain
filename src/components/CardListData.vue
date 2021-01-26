<template>
  <CCard>
    <CCardHeader class="d-flex">
      <span class="h4 mr-auto my-auto">{{ title }}</span>
      <CButton
        v-if="showButton"
        color="primary"
        class="d-md-down-none"
        :to="urlCetak"
        >Cetak</CButton
      >
      <CButton
        v-if="showButton"
        color="primary"
        class="d-lg-none"
        :to="urlCetak"
      >
        <CIcon name="cil-print" />
      </CButton>
    </CCardHeader>
    <CCardBody>
      <CDataTable
        :items="items"
        :fields="fields"
        table-filter
        items-per-page-select
        :items-per-page="5"
        hover
        sorter
        pagination
        border
      >
        <template #no="{index}">
          <td>
            {{ index + 1 }}
          </td>
        </template>
        <template #proses-terima="{index}">
          <td>
            <CButtonGroup>
              <CButton color="success" size="sm" :to="terima(index)"
                >Terima</CButton
              >
              <CButton color="danger" size="sm" :to="tolak(index)"
                >Tolak</CButton
              >
            </CButtonGroup>
          </td>
        </template>
        <template #bukti-spd>
          <td>
            <CSelect
              :options="optionsBuktiSPD"
              placeholder="Keterangan"
              size="sm"
            ></CSelect>
          </td>
        </template>
        <template #proses-grafik="{index}">
          <td>
            <CButton color="secondary" size="sm" :to="detailGrafik(index)"
              >Lihat Grafik</CButton
            >
          </td>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: "CardListData",
  props: {
    title: {
      type: String,
      required: true,
    },
    showButton: {
      type: Boolean,
      default: true,
    },
    routeEndpoint: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
    optionsBuktiSPD: {
      type: Array,
    },
  },
  computed: {
    urlCetak: function() {
      return `/${this.routeEndpoint}/cetak`;
    },
  },
  methods: {
    terima(id) {
      return `/${this.routeEndpoint}/terima?id=${id}`;
    },
    tolak(id) {
      return `/${this.routeEndpoint}/tolak?id=${id}`;
    },
    detailGrafik(id) {
      return `/${this.routeEndpoint}/detail-grafik?id=${id}`;
    },
  },
};
</script>

<style></style>

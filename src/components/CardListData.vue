<template>
  <CCard>
    <CCardHeader class="d-flex">
      <span class="h4 mr-auto my-auto">{{ title }}</span>
      <CButton v-if="showButton" color="primary" class="d-md-down-none"
        >Cetak</CButton
      >
      <CButton v-if="showButton" color="primary" class="d-lg-none">
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
        :loading="isLoading"
      >
        <template #no="{index}">
          <td>
            {{ index + 1 }}
          </td>
        </template>
        <template #proses-terima="{item}">
          <td class="text-center">
            <slot name="proses-terima" :item="item"></slot>
          </td>
        </template>
        <template #pilih_spd="{item}">
          <td>
            <slot name="pilih_spd" :item="item"></slot>
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
  name: 'CardListData',
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
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    urlCetak: function() {
      return `/${this.routeEndpoint}/cetak`
    },
  },
  methods: {
    detailGrafik(id) {
      return `/${this.routeEndpoint}/detail-grafik?id=${id}`
    },
  },
}
</script>

<style></style>

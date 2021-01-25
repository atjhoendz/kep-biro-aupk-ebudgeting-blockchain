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
  },
  computed: {
    urlCetak: function() {
      return `/${this.routeEndpoint}/cetak`;
    },
  },
};
</script>

<style></style>

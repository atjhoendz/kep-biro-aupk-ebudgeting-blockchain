<template>
  <CDropdown inNav class="c-header-nav-items" placement="bottom">
    <template #toggler-content>
      <span class="h4 d-md-down-none" style="color: #3c4b64">{{
        $store.state.user.currentUser.username
      }}</span>
      <span class="h6 d-lg-none" style="color: #3c4b64">{{
        $store.state.user.currentUser.username
      }}</span>
    </template>
    <CDropdownItem to="/login">
      <CIcon name="cil-lock-locked" /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data() {
    return {}
  },
}
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>

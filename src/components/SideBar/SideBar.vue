<template>
  <prime-drawer v-model:visible="visible" header="Выбирайте свой сервис" position="top" style="height: auto">
    <nav>
      <router-link to="/">
        <prime-button label="Стоматология"></prime-button>
      </router-link> |
      <router-link to="/disp">
        <prime-button label="Диспансеризация"></prime-button>
      </router-link>
    </nav>
  </prime-drawer>
</template>

<script>
import Drawer from 'primevue/drawer';
export default {
  name: "SideBar",
  data() {
    return {
      visible: false
    }
  },
  // eslint-disable-next-line vue/no-unused-components
  components: { Drawer }
}
</script>

<style scoped>

</style>
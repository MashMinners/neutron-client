<template>
  <div id="app-header"></div>
  <div class="card flex justify-center">
    <!--<side-bar :visible = "sideBarVisible"></side-bar>-->
    <prime-drawer v-model:visible="sideBarVisible" header="Выбирайте свой сервис" position="top" style="height: auto">
      <nav>
        <router-link to="/">
          <prime-button label="Стоматология"></prime-button>
        </router-link> |
        <router-link to="/disp">
          <prime-button label="Диспансеризация"></prime-button>
        </router-link>
      </nav>
    </prime-drawer>
    <prime-button icon="pi pi-bars" @click="sideBarVisible = true" />
  </div>
  <div id="app-content">
        <!--suppress JSValidateTypes -->
        <component
            :is="getComponent"
        />
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import SideBar from "@/components/SideBar/SideBar.vue";

export default {
  name: "ApplicationLayout",
  data() {
    return {
      sideBarVisible: false
    }
  },
  components: {SideBar},
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    },
    ...mapGetters({
    }),
  }
}
</script>

<style scoped>

</style>
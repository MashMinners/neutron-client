<template>
  <div class="card">
    <prime-fieldset>
      <template #legend>
        <prime-message severity="contrast">{{ pageTitle }}</prime-message>
      </template>
      <div>
        <disp-analyzer-module-menu-bar></disp-analyzer-module-menu-bar>
      </div>
      <prime-divider></prime-divider>
      <div class="formgrid grid">
        <div class="centered col-12">
          <component
              :is="activeComponent"
          />
        </div>
      </div>
    </prime-fieldset>
  </div>
</template>

<script>
import DispAnalyzerModuleMenuBar from "@/components/DispBuffer/DispAnalyzerModuleMenuBar";
import DispIntersections from "@/components/DispBuffer/Intersections/DispIntersections";
import {mapGetters} from "vuex";
export default {
  name: "DispPageView",
  components: {DispAnalyzerModuleMenuBar, DispIntersections},
  computed: {
    ...mapGetters({
      pageMessage: 'appDispModule/getPageMessage',
      pageTitle: 'appDispModule/getPageTitle',
      activeComponent: 'appDispModule/getActiveComponent'
    })
  },
}
</script>

<style scoped>

</style>
<template>
  <div class="card">
    <prime-fieldset>
      <template #legend>
        <prime-message severity="contrast">{{ pageTitle }}</prime-message>
      </template>
      <div>
        <stomatology-buffer-menu-bar></stomatology-buffer-menu-bar>
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
import {mapGetters} from "vuex";
import StomatologyBufferMenuBar from "@/components/StomatologyBuffer/StomatologyBufferMenuBar";
import StomatologyIntersections from "@/components/StomatologyBuffer/Intersections/StomatologyIntersections";
import StomatologyIncorrectPurposes
  from "@/components/StomatologyBuffer/IncorrectPurposes/StomatologyIncorrectPurposes";
import StomatologyTornCases from "@/components/StomatologyBuffer/TornCases/StomatologyTornCases";
import StomatologyIncorrectServices
  from "@/components/StomatologyBuffer/IncorrectServices/StomatologyIncorrectServices";
import StomatologyIncorrectTeeth from "@/components/StomatologyBuffer/IncorrectTeeth/StomatologyIncorrectTeeth";

export default {
  name: "StageStart",
  computed: {
    ...mapGetters({
      pageMessage: 'appStomModule/getPageMessage',
      pageTitle: 'appStomModule/getPageTitle',
      activeComponent: 'appStomModule/getActiveComponent'
    })
  },
  // eslint-disable-next-line vue/no-unused-components
  components: {StomatologyBufferMenuBar, StomatologyIntersections, StomatologyIncorrectPurposes, StomatologyTornCases,
    StomatologyIncorrectServices, StomatologyIncorrectTeeth},
}
</script>

<style scoped>
.full-width{
  width: 100%;
}
</style>
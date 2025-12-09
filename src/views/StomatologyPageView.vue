<template>
  <div class="card">
    <prime-fieldset>
      <template #legend>
        {{ pageMessage }}
      </template>
      <div>
        <!--<Toolbar>
          <template #start>

            <prime-button label="Пересечения (30 дней)" class="p-button mr-2" @click = showIntersections />
            <prime-button label="Некорректные цели" class="p-button mr-2" @click = showPurposes />
            <prime-button label="Некорректные услуги" class="p-button mr-2" @click = showTornCases />
            <prime-button label="Разорванные случаи" class="p-button mr-2" />
            <prime-button label="Ошибки по зубам" class="p-button mr-2" />
          </template>
          <template #center></template>
          <template #end>
            <prime-button label="Очистить XML реестры" class="mr-2" severity="danger"></prime-button>
          </template>
        </Toolbar>-->
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
      pageMessage: 'app/getPageMessage',
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
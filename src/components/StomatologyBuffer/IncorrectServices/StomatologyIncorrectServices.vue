<template>
  <div>
    <prime-tabs value="0" scrollable>
      <prime-tab-list>
        <prime-tab value="0">Отсутсвуют первичные услуги</prime-tab>
        <prime-tab value="1">Более одной первичной услуги</prime-tab>
      </prime-tab-list>
      <prime-tab-panels>
        <prime-tab-panel value="0">
          <div v-if="getIncorrectServices.HaveNoPrimary.length !==0">
            <prime-message severity="warn">У данных пациетов в талоне отсуствуют <b>первичные услуги</b></prime-message>
          </div>
          <stomatology-incorrect-services-table :records="getIncorrectServices.HaveNoPrimary"></stomatology-incorrect-services-table>
        </prime-tab-panel>
        <prime-tab-panel value="1">
          <div v-if="getIncorrectServices.TwoOrMore.length !==0">
            <prime-message severity="warn">У данных пациентов в талоне две и более <b>первичных услуг</b></prime-message>
            <stomatology-incorrect-services-table :records="getIncorrectServices.TwoOrMore"></stomatology-incorrect-services-table>
          </div>
        </prime-tab-panel>
      </prime-tab-panels>
    </prime-tabs>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import StomatologyIncorrectServicesTable
  from "@/components/StomatologyBuffer/IncorrectServices/StomatologyIncorrectServicesTable";

export default {
  name: "StomatologyIncorrectServices",
  components: {StomatologyIncorrectServicesTable},
  computed: {
    ...mapGetters({
      getIncorrectServices: 'appStomModule/getIncorrectServices'
    })
  }
}
</script>

<style scoped>

</style>
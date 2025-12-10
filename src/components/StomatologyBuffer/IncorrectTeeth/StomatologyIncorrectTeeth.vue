<template>
  <div>
    <prime-tabs value="0" scrollable>
      <prime-tab-list>
        <prime-tab value="0">Присутсвует код зуба</prime-tab>
        <prime-tab value="1">Отсуствует код зуба</prime-tab>
        <prime-tab value="2">Два диагноза на 1 зуб</prime-tab>
      </prime-tab-list>
      <prime-tab-panels>
        <prime-tab-panel value="0">
          <div v-if="getIncorrectTeeth.incorrectTeeth.Body.length !==0">
            <prime-message severity="warn">У данных пациетов <b>присутсвует код зуба, а должен отсуствовать</b></prime-message>
            <stomatology-incorrect-teeth-table :records="getIncorrectTeeth.incorrectTeeth.Body"></stomatology-incorrect-teeth-table>
          </div>
          <div v-else>
            <prime-message severity="error">{{getIncorrectTeeth.incorrectTeeth.Message}}</prime-message>
          </div>
        </prime-tab-panel>
        <prime-tab-panel value="1">
          <div v-if="getIncorrectTeeth.incorrectRequiredTeeth.Body.length !==0">
            <prime-message severity="warn">У данных пациентов в талоне для текущего диагноза <b>отсутсвует код зуба, требуемый для диагноза</b></prime-message>
            <stomatology-incorrect-teeth-table :records="getIncorrectTeeth.incorrectRequiredTeeth.Body"></stomatology-incorrect-teeth-table>
          </div>
          <div v-else>
            <prime-message severity="error">{{getIncorrectTeeth.incorrectRequiredTeeth.Message}}</prime-message>
          </div>
        </prime-tab-panel>
        <prime-tab-panel value="2">
          <div v-if="getIncorrectTeeth.simultaneousTeethInclusion.Body.length !==0">
            <prime-message severity="warn">У данных пациентов <b>два взаимоисключающих диагноза на 1 зуб</b></prime-message>
            <stomatology-incorrect-teeth-table :records="getIncorrectTeeth.simultaneousTeethInclusion.Body"></stomatology-incorrect-teeth-table>
          </div>
          <div v-else>
            <prime-message severity="error">{{getIncorrectTeeth.simultaneousTeethInclusion.Message}}</prime-message>
          </div>
        </prime-tab-panel>
      </prime-tab-panels>
    </prime-tabs>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import StomatologyIncorrectTeethTable
  from "@/components/StomatologyBuffer/IncorrectTeeth/StomatologyIncorrectTeethTable";

export default {
  name: "StomatologyIncorrectTeeth",
  components: {StomatologyIncorrectTeethTable},
  computed: {
    ...mapGetters({
      getIncorrectTeeth: 'appStomModule/getIncorrectTeeth'
    })
  }
}
</script>

<style scoped>

</style>
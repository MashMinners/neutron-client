<template>
  <div>
    <prime-tabs value="0" scrollable>
      <prime-tab-list>
        <prime-tab value="0">Некорректные цели (Excel)</prime-tab>
        <prime-tab value="1">Некорректные цели (XML)</prime-tab>
      </prime-tab-list>
      <prime-tab-panels>
        <prime-tab-panel value="0">
          <div v-if="getExcelIncorrectPurpose.length !==0">
            <prime-message severity="error">По данным записям есть ошибки. Цель не соответсвует количеству посещений</prime-message>
          </div>
          <stomatology-excel-incorrect-purposes-table :records = getExcelIncorrectPurpose></stomatology-excel-incorrect-purposes-table>
        </prime-tab-panel>
        <prime-tab-panel value="1">
         123
        </prime-tab-panel>
      </prime-tab-panels>
    </prime-tabs>
  </div>
</template>

<script>

import {mapGetters} from "vuex";
import StomatologyExcelIncorrectPurposesTable
  from "@/components/StomatologyBuffer/IncorrectPurposes/StomatologyExcelIncorrectPurposesTable";

export default {
  name: "StomatologyIncorrectPurposes",
  components: {StomatologyExcelIncorrectPurposesTable},
  computed: {
    ...mapGetters({
      getExcelIncorrectPurpose:'app/getStomExcelIncorrectPurpose'
    })
  }
}
</script>

<style scoped>

</style>
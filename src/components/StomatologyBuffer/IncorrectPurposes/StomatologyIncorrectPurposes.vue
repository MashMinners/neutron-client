<template>
  <div>
    <prime-tabs value="0" scrollable>
      <prime-tab-list>
        <prime-tab value="0" @click="this.setTitle('Некорректные цели (Excel)')">Некорректные цели (Excel)</prime-tab>
        <prime-tab value="1" @click="this.setTitle('Некорректные цели (XML)')">Некорректные цели (XML)</prime-tab>
      </prime-tab-list>
      <prime-tab-panels>
        <prime-tab-panel value="0">
          <!--<div v-if="ex !==0">-->
          <div v-if="excelIncorrectPurposes.length !==0">
            <prime-message severity="error">По данным записям есть ошибки. Цель не соответсвует количеству посещений</prime-message>
          </div>
          <stomatology-excel-incorrect-purposes-table :records = excelIncorrectPurposes></stomatology-excel-incorrect-purposes-table>
        </prime-tab-panel>
        <prime-tab-panel value="1">
          <div v-if="xmlIncorrectPurposes.length !==0">
            <prime-message severity="error">По данным записям есть ошибки. Цель не соответсвует количеству посещений</prime-message>
          </div>
          <stomatology-xml-incorrect-purposes-table :records="xmlIncorrectPurposes"></stomatology-xml-incorrect-purposes-table>
        </prime-tab-panel>
      </prime-tab-panels>
    </prime-tabs>
  </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";
import StomatologyExcelIncorrectPurposesTable
  from "@/components/StomatologyBuffer/IncorrectPurposes/StomatologyExcelIncorrectPurposesTable";
import StomatologyXmlIncorrectPurposesTable
  from "@/components/StomatologyBuffer/IncorrectPurposes/StomatologyXmlIncorrectPurposesTable";

export default {
  name: "StomatologyIncorrectPurposes",
  components: {StomatologyXmlIncorrectPurposesTable, StomatologyExcelIncorrectPurposesTable},
  computed: {
    ...mapGetters({
      excelIncorrectPurposes:'appStomModule/getExcelIncorrectPurposes',
      xmlIncorrectPurposes:'appStomModule/getXMLIncorrectPurposes'
    })
  },
  methods: {
    ...mapMutations({
      setTitle: "appStomModule/SET_PAGE_TITLE"
    })
  }
}
</script>

<style scoped>

</style>
<template>
  <div v-if="getTornCases.length !==0">
    <prime-message severity="error">По данным записям есть ошибки. Цель не соответсвует количеству посещений</prime-message>
  </div>
  <stomatology-torn-cases-table :records = getTornCases></stomatology-torn-cases-table>
</template>

<script>
import {mapGetters} from "vuex";
import StomatologyTornCasesTable from "@/components/StomatologyBuffer/TornCases/StomatologyTornCasesTable";

export default {
  name: "StomatologyTornCases",
  components: {StomatologyTornCasesTable},
  computed:{
    ...mapGetters({
      getTornCases: 'appStomModule/getTornCases'
    })
  }
}
</script>

<style scoped>

</style>
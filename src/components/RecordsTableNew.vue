<template>
  <div v-if="records.length !==0">
    <prime-data-table editMode="cell" class="editable-cells-table p-datatable-sm"  :value="records"
                      removableSort
                      stripedRows
                      showGridlines
                      responsiveLayout="scroll"
                      :paginator="true" :rows="10"
                      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                      :rowsPerPageOptions="[10,20,50]"
                      currentPageReportTemplate="Показано {first} - {last} из {totalRecords}">
      <prime-column field="stom_visits_patient" header="Пациент"></prime-column>
      <prime-column field="stom_visits_patient_insurance_policy" header="Полис"></prime-column>
      <prime-column field="visit_date" header="Дата последнего посещения" :sortable="true"></prime-column>
      <prime-column field="buffer_register_treatment_start" header="Дата начала лечения (РЕЕСТР)"></prime-column>
      <prime-column field="buffer_register_treatment_end" header="Дата окончания лечения (РЕЕСТР)"></prime-column>
      <prime-column field="buffer_register_doctor" header="Врач"></prime-column>
    </prime-data-table>
  </div>
  <div v-else>
    <prime-message severity="info">Записи скрыты, либо отсуствуют!</prime-message>
  </div>
</template>


<script>
//import {mapGetters} from "vuex";
export default {
  name: "RecordsTableNew",
  props: {
    records: [] // Объявляем, что ожидаем строку
  }
}
</script>

<style scoped>
.full-width{
  width: 100%;
}
</style>
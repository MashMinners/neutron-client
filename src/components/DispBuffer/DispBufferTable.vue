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
      <prime-column field="buffer_disp_register_patient" header="Пациент" :sortable="true"></prime-column>
      <prime-column field="medical_history_insurance_policy" header="Полис"></prime-column>
      <prime-column field="buffer_disp_register_treatment_start" header="Карта открыта"></prime-column>
      <prime-column field="buffer_disp_register_treatment_end" header="Карта закрыта"></prime-column>
      <prime-column field="medical_history_date_in" header="Дата госпитализации"></prime-column>
      <prime-column field="medical_history_date_out" header="Дата выписки"></prime-column>
      <prime-column field="medical_history_hospital_department" header="Отделение"></prime-column>
      <prime-column field="buffer_disp_register_doctor" header="Врач"></prime-column>
      <prime-column field="buffer_disp_register_diagnosis" header="Диагноз"></prime-column>
      <prime-column field="buffer_disp_register_disp_sign" header="Этап"></prime-column>
    </prime-data-table>
  </div>
  <div v-else>
    <prime-message severity="info">Записи скрыты, либо отсуствуют!</prime-message>
  </div>
</template>


<script>
//import {mapGetters} from "vuex";
export default {
  name: "dispBufferTable",
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
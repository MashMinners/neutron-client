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
      <prime-column field="buffer_disp_register_patient" header="Пациент"></prime-column>
      <prime-column field="medical_history_insurance_policy" header="Полис"></prime-column>
      <prime-column field="medical_history_date_out" header="Дата выписки" :sortable="true"></prime-column>
      <prime-column field="buffer_disp_register_treatment_start" header="Дата начала лечения (РЕЕСТР)"></prime-column>
      <prime-column field="buffer_disp_register_treatment_end" header="Дата окончания лечения (РЕЕСТР)"></prime-column>
      <prime-column field="buffer_disp_register_doctor" header="Врач"></prime-column>
      <prime-column field="buffer_disp_register_disp_sign" header="Цель посещения"></prime-column>
    </prime-data-table>
  </div>
  <div v-else>
    <prime-message severity="info">Записи скрыты, либо отсуствуют!</prime-message>
  </div>
</template>

<script>
export default {
  name: "DispIntersectionsTable",
  props: {
    records: {
      type: Array,
      default: () => [] // It's best practice to use a factory function for objects/arrays in default values
    }
  }
}
</script>

<style scoped>

</style>
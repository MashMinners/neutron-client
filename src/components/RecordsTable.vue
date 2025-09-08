<template>
  <div v-if="getIntersections.length !==0">
    <prime-data-table editMode="cell" class="editable-cells-table p-datatable-sm"  :value="getIntersections"
                      removableSort
                      stripedRows
                      showGridlines
                      responsiveLayout="scroll"
                      :paginator="true" :rows="10"
                      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                      :rowsPerPageOptions="[10,20,50]"
                      currentPageReportTemplate="Показано {first} - {last} из {totalRecords}">
      <prime-column field="stom_register_patient" header="Тема"></prime-column>
      <prime-column field="employeeSurname" header="Сотрудник"></prime-column>
      <prime-column field="counterpartyName" header="Контрагент"></prime-column>

    </prime-data-table>
  </div>
  <div v-else>
    <prime-message severity="warn">Записи скрыты, либо отсуствуют!</prime-message>
  </div>
</template>


<script>
import {mapGetters} from "vuex";
export default {
  name: "RecordsTable",
  computed: {
    ...mapGetters({
      getIntersections: 'app/getIntersections',
    })
  }
}
</script>

<style scoped>
.full-width{
  width: 100%;
}
</style>
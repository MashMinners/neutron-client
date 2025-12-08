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
      <prime-column header="Пациент">
        <template #body="slotProps">
          {{getPacientFullName(slotProps.data)}}
        </template>
      </prime-column>
      <prime-column field="stom_xml_lm_enp" header="Полис"></prime-column>
      <prime-column field="stom_xml_hm_zsl_date_z_1" header="Дата первого посещения" :sortable="true"></prime-column>
      <prime-column field="stom_xml_hm_zsl_date_z_2" header="Дата последнего посещения" :sortable="true"></prime-column>
      <prime-column field="stom_xml_pm_sl_stom_code_usl" header="Диагноз"></prime-column>
      <prime-column field="stom_xml_pm_sl_stom_zub" header="Зуб"></prime-column>
    </prime-data-table>
  </div>
  <div v-else>
    <prime-message severity="info">Записи скрыты, либо отсуствуют!</prime-message>
  </div>
</template>

<script>
export default {
  name: "StomatologyIncorrectTeethTable",
  props: {
    records: {
      type: Array,
      default: () => [] // It's best practice to use a factory function for objects/arrays in default values
    }
  }, methods: {
    getPacientFullName(data){
      return data.stom_xml_lm_fam + ' ' + data.stom_xml_lm_im + ' ' + data.stom_xml_lm_ot
    }
  }
}
</script>

<style scoped>

</style>
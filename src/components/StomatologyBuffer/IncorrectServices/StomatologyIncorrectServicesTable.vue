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
      <prime-column field="stom_xml_lm_dr" header="Дата рождения"></prime-column>
      <prime-column field="stom_xml_lm_enp" header="Полис"></prime-column>
      <prime-column header="Врач оказавший услугу">
        <template #body="slotProps">
          {{getDoctor(slotProps.data.stom_xml_hm_zsl_sl_iddokt)}}
        </template>
      </prime-column>
      <prime-column field="stom_xml_hm_zsl_sl_date_1" header="Дата оказания"></prime-column>
    </prime-data-table>
  </div>
  <div v-else>
    <prime-message severity="info">Записи скрыты, либо отсуствуют!</prime-message>
  </div>
</template>

<script>
export default {
  name: "StomatologyIncorrectServicesTable",
  props: {
    records: {
      type: Array,
      default: () => [] // It's best practice to use a factory function for objects/arrays in default values
    }
  },
  methods:{
    getDoctor(SNILS){
      switch (SNILS) {
        case '05641628460':
          return 'Усатых Е.В.'
        case '06785590318':
          return 'Нагаслаева В.А.'
        case '04397483592':
          return 'Кузьмина С.М.'
        case '12978613304':
          return 'Кулагина А.А.'
      }
    },
    getPacientFullName(data){
      return data.stom_xml_lm_fam + ' ' + data.stom_xml_lm_im + ' ' + data.stom_xml_lm_ot


    }
  }
}
</script>

<style scoped>

</style>
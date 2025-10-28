<template>
  <div>
    <Tabs value="0">
      <TabList>
        <Tab value="0">Удалить (30 дней)</Tab>
        <Tab value="1">Оставить (30+ дней)</Tab>
        <Tab value="2">Разделить (30-/30+)</Tab>
        <Tab value="3">Некорректные цели посещений</Tab>
        <Tab value="4">Разорванные случаи</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div v-if="getIntersections.bad.length !==0">
            <prime-message severity="error">Записи должны быть удалены из из реестра, так как пересечения попадают в 30-ти дневный период</prime-message>
          </div>
          <stomatology-buffer-table :records = getIntersections.bad ></stomatology-buffer-table>
        </TabPanel>
        <TabPanel value="1">
          <div v-if="getIntersections.good.length !==0">
            <prime-message severity="success">Записи должны быть оставленны в реестре, так как пересечений по ним в 30-ти дневный период нет</prime-message>
          </div>
          <stomatology-buffer-table :records = getIntersections.good ></stomatology-buffer-table>
        </TabPanel>
        <TabPanel value="2">
          <div v-if="getIntersections.dubious.length !==0">
            <prime-message severity="warn">Записи должны быть проанализированны, так как часть случаев имеют пересечения в 30-ти дневный период, а часть нет</prime-message>
          </div>
          <stomatology-buffer-table :records = getIntersections.dubious ></stomatology-buffer-table>
        </TabPanel>
        <TabPanel value="3">
          <div v-if="getPurpose.length !==0">
            <prime-message severity="error">По данным записям есть ошибки. Цель не соответсвует количеству посещений</prime-message>
          </div>
          <stomatology-incorrect-purposes-table :records = getPurpose></stomatology-incorrect-purposes-table>
        </TabPanel>
        <TabPanel value="4">
          <div v-if="getTornCases.length !==0">
            <prime-message severity="error">По данным записям есть ошибки. Цель не соответсвует количеству посещений</prime-message>
          </div>
          <stomatology-torn-cases-table :records = getTornCases></stomatology-torn-cases-table>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import StomatologyBufferTable from "@/components/StomatologyBuffer/StomatologyBufferTable.vue";
import StomatologyIncorrectPurposesTable from "@/components/StomatologyBuffer/StomatologyIncorrectPurposesTable.vue";
import StomatologyTornCasesTable from "@/components/StomatologyBuffer/StomatologyTornCasesTable.vue";
import {mapGetters} from "vuex";

export default {
  name: "StomatologyTabs",
  computed: {
    ...mapGetters({
      getIntersections: 'app/getStomIntersections',
      getPurpose: 'app/getStomIncorrectPurpose',
      getTornCases: 'app/getStomTornCases'
    })
  },
  // eslint-disable-next-line vue/no-unused-components
  components: {
    StomatologyTornCasesTable, StomatologyBufferTable, StomatologyIncorrectPurposesTable, Tabs, TabList, Tab,
    TabPanels, TabPanel,
  }
}
</script>

<style scoped>

</style>
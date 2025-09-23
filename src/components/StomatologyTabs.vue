<template>
  <div>
    <Tabs value="0">
      <TabList>
        <Tab value="0">Удалить (30 дней)</Tab>
        <Tab value="1">Оставить (30+ дней)</Tab>
        <Tab value="2">Разделить (30-/30+)</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div v-if="getIntersections.bad.length !==0">
            <prime-message severity="error">Записи должны быть удалены из из реестра, так как пересечения попадают в 30-ти дневный период</prime-message>
          </div>
          <records-table-new :records = getIntersections.bad ></records-table-new>
        </TabPanel>
        <TabPanel value="1">
          <div v-if="getIntersections.good.length !==0">
            <prime-message severity="success">Записи должны быть оставленны в реестре, так как пересечений по ним в 30-ти дневный период нет</prime-message>
          </div>
          <records-table-new :records = getIntersections.good ></records-table-new>
        </TabPanel>
        <TabPanel value="2">
          <div v-if="getIntersections.dubious.length !==0">
            <prime-message severity="warn">Записи должны быть проанализированны, так как часть случаев имеют пересечения в 30-ти дневный период, а часть нет</prime-message>
          </div>
          <records-table-new :records = getIntersections.dubious ></records-table-new>
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
import RecordsTableNew from "@/components/RecordsTableNew.vue";
import {mapGetters} from "vuex";

export default {
  name: "TabsComponent",
  computed: {
    ...mapGetters({
      getIntersections: 'app/getIntersections',
    })
  },
  // eslint-disable-next-line vue/no-unused-components
  components: {RecordsTableNew, Tabs, TabList, Tab, TabPanels, TabPanel}
}
</script>

<style scoped>

</style>
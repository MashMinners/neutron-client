<template>
  <div>
    <Tabs value="0">
      <TabList>
        <Tab value="0">Пересечения по стационару и диспансеризации</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div v-if="getIntersections.bad.length !==0">
            <prime-message severity="error">Записи пересечений из реестра и ИБ</prime-message>
          </div>
          <disp-buffer-table :records = getIntersections.bad ></disp-buffer-table>
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
import DispBufferTable from "@/components/DispBuffer/DispBufferTable.vue";
import {mapGetters} from "vuex";

export default {
  name: "DispTabs",
  computed: {
    ...mapGetters({
      getIntersections: 'appDispModule/getDispIntersections'
    })
  },
  // eslint-disable-next-line vue/no-unused-components
  components: {DispBufferTable, Tabs, TabList, Tab, TabPanels, TabPanel}
}
</script>

<style scoped>

</style>
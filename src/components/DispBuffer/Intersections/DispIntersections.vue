<template>
  <div>
    <prime-tabs value="0" scrollable>
      <prime-tab-list>
        <prime-tab value="0">Пересечения по стационару</prime-tab>
      </prime-tab-list>
      <prime-tab-panels>
        <prime-tab-panel value="0">
          <div v-if="getIntersections.bad.length !==0">
            <prime-message severity="error">Записи должны быть удалены из из реестра, так как пересекаются с с историями болезни</prime-message>
          </div>
          <disp-intersections-table :records="getIntersections.bad"></disp-intersections-table>
        </prime-tab-panel>
      </prime-tab-panels>
    </prime-tabs>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DispIntersectionsTable from "@/components/DispBuffer/Intersections/DispIntersectionsTable";

export default {
  name: "DispIntersections",
  components: {DispIntersectionsTable},
  computed: {
    ...mapGetters({
      getIntersections: 'appDispModule/getDispIntersections'
    })
  },
}
</script>

<style scoped>

</style>
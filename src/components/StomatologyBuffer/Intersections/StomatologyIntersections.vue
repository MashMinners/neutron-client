<template>
  <div>
    <prime-tabs value="0" scrollable>
      <prime-tab-list>
        <prime-tab value="0">Удалить (30 дней)</prime-tab>
        <prime-tab value="1">Оставить (30+ дней)</prime-tab>
        <prime-tab value="2">Разделить (30-/30+)</prime-tab>
      </prime-tab-list>
      <prime-tab-panels>
        <prime-tab-panel value="0">
          <div v-if="getIntersections.bad.length !==0">
            <prime-message severity="error">Записи должны быть удалены из из реестра, так как пересечения попадают в 30-ти дневный период</prime-message>
          </div>
          <stomatology-intersections-table :records = getIntersections.bad></stomatology-intersections-table>
        </prime-tab-panel>
        <prime-tab-panel value="1">
          <div v-if="getIntersections.good.length !==0">
            <prime-message severity="success">Записи должны быть оставленны в реестре, так как пересечений по ним в 30-ти дневный период нет</prime-message>
          </div>
          <stomatology-intersections-table :records = getIntersections.good ></stomatology-intersections-table>
        </prime-tab-panel>
        <prime-tab-panel value="2">
          <div v-if="getIntersections.dubious.length !==0">
            <prime-message severity="warn">Записи должны быть проанализированны, так как часть случаев имеют пересечения в 30-ти дневный период, а часть нет</prime-message>
          </div>
          <stomatology-intersections-table :records = getIntersections.dubious ></stomatology-intersections-table>
        </prime-tab-panel>
      </prime-tab-panels>
    </prime-tabs>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import StomatologyIntersectionsTable from "@/components/StomatologyBuffer/Intersections/StomatologyIntersectionsTable";


export default {
  name: "StomatologyIntersections",
  components: {StomatologyIntersectionsTable},
  computed: {
    ...mapGetters({
      getIntersections: 'appStomModule/getStomIntersections'
    })
  }
}
</script>

<style scoped>

</style>
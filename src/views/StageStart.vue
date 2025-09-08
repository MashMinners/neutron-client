<template>
  <div class="card">
    <div class="p-fluid grid">
      <div class="centered">
        <prime-button label="Начать" class="p-button-lg" @click = finish />
        <prime-button label="Инфо" class="p-button-lg" @click = getInfo />
      </div>
      <div class="centered">
        <records-table></records-table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";
import RecordsTable from "@/components/RecordsTable.vue";

export default {
  name: "StageStart",
  components: {RecordsTable},
  methods: {
    ...mapMutations({

    }),
    ...mapActions({
      getIntersections: "app/getIntersections",
      getInform: "app/getInform"
    }),
    finish(){
      this.getIntersections()
    },
    getInfo(){
      this.getInform()
    }

  }
}
</script>

<style scoped>

</style>
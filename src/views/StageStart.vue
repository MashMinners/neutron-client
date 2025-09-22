<template>
  <div class="card">
    <div>
      <Toolbar>
        <template #start>
          <prime-button label="Начать" class="p-button-lg" @click = finish />
          <prime-button label="Очистить DP" class="p-button-lg" @click = truncateDP />
          <prime-button icon="pi pi-plus" class="mr-2" severity="secondary" text />
          <prime-button icon="pi pi-print" class="mr-2" severity="secondary" text />
          <prime-button icon="pi pi-upload" severity="secondary" text />
        </template>

        <template #center>
          <prime-icon-field>
            <prime-input-icon>
              <i class="pi pi-search" />
            </prime-input-icon>
            <prime-input-text placeholder="Search" />
          </prime-icon-field>
        </template>

        <template #end> <SplitButton label="Save" :model="items"></SplitButton></template>
      </Toolbar>
    </div>
    <div class="p-fluid grid">
      <div class="centered">
        <tabs-component></tabs-component>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";
import TabsComponent from "@/components/TabsComponent.vue";
import Toolbar from "primevue/toolbar";
import {SplitButton} from "primevue";


export default {
  name: "StageStart",
  // eslint-disable-next-line vue/no-unused-components
  components: {TabsComponent, Toolbar, SplitButton},
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      getIntersections: "app/getIntersections",
      truncateDPRegistryTable: "app/truncateDPRegistryTable"
    }),
    finish(){
      this.getIntersections()
    },
    truncateDP(){
      this.truncateDPRegistryTable()
    }
  }
}
</script>

<style scoped>

</style>
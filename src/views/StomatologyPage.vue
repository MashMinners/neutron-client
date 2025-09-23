<template>
  <div class="card">
    <prime-fieldset>
      <template #legend>
        {{ pageTitle }}
      </template>
      <div class="mb-2">
        <prime-message severity="info" :closable="false">{{ pageMessage }}</prime-message>
      </div>
      <div>
        <Toolbar>
          <template #start>
            <prime-button label="Загрузить визиты" class="p-button mr-2" severity="warn" @click ="uploadSTOMVisits"/>
            <prime-button label="Очистить визиты" class="p-button mr-2" severity="danger" @click ="truncateSTOMVisits"/>
            <prime-button label="Загрузить реестр (буфер)" class="p-button mr-2" severity="info" @click="uploadBufferRegistry('STOM')"/>
            <prime-button label="Очистить реестр (буфер)" class="p-button mr-2" severity="danger" @click = truncateBufferRegistry />
            <prime-button label="Показать пересечения (30 дней)" class="p-button mr-2" @click = showIntersections />
          </template>
          <template #center></template>
          <template #end>
            <SplitButton label="Загрузить реестры" class="mr-2" :model="items"></SplitButton>
          </template>
        </Toolbar>
      </div>
      <div class="p-fluid grid">
        <div class="centered">
          <tabs-component></tabs-component>
        </div>
      </div>
    </prime-fieldset>


  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import TabsComponent from "@/components/StomatologyTabs.vue";
import Toolbar from "primevue/toolbar";
import {SplitButton} from "primevue";


export default {
  name: "StageStart",
  computed: {
    ...mapGetters({
      //STEPS
      pageTitle: 'app/getPageTitle',
      pageMessage: 'app/getPageMessage'
    })
  },
  // eslint-disable-next-line vue/no-unused-components
  components: {TabsComponent, Toolbar, SplitButton},
  data() {
    return {
      items: [
        {
          label: 'Стоматология',
          icon: 'pi pi-refresh',
          command: () => {
            this.uploadBufferRegistry('STOM');
          },
        },
        {
          label: '1 этап',
          icon: 'pi pi-refresh',
          command: () => {
            this.getIntersections();
          },
        },
        {
          label: '2 этап',
          icon: 'pi pi-refresh',
          command: () => {
            this.getIntersections();
          },
        },
        {
          label: 'Проф. осмотры',
          icon: 'pi pi-refresh',
          command: () => {
            this.getIntersections();
          },
        },
        {
          label: 'Углубленная',
          icon: 'pi pi-refresh',
          command: () => {
            this.getIntersections();
          },
        },
        {
          label: 'Репродуктивное 1 этап',
          icon: 'pi pi-refresh',
          command: () => {
            this.getIntersections();
          },
        },
        {
          label: 'Репродуктивное 2 этап',
          icon: 'pi pi-refresh',
          command: () => {
            this.getIntersections();
          },
        }
      ],
    };
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      getIntersections: "app/getIntersections",
      uploadBufferRegistry: "app/uploadBufferRegistry",
      truncateBufferRegistry: "app/truncateBufferRegistry",
      uploadSTOMVisits: "app/uploadSTOMVisits",
      truncateSTOMVisits: "app/truncateSTOMVisits",
    }),
    showIntersections(){
      this.getIntersections()
    }
  }
}
</script>

<style scoped>

</style>
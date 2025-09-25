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
            <SplitButton label="Визиты" class="mr-2" :model="visitItems" severity="warn"></SplitButton>
            <SplitButton label="Буфер>" class="mr-2" :model="bufferItems" severity="info"></SplitButton>
            <prime-button label="Показать пересечения (30 дней)" class="p-button mr-2" @click = showIntersections />
            <prime-button label="Показать некорректные цели" class="p-button mr-2" @click = showPurposes />
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
      bufferItems: [
        {
          label: 'Загрузить реестр',
          icon: 'pi pi-refresh',
          command: () => {
            this.uploadBuffer();
          },
        },
        {
          label: 'Очистить буфер',
          icon: 'pi pi-refresh',
          command: () => {
            this.truncateBuffer();
          },
        },
      ],
      visitItems: [
        {
          label: 'Загрузить визиты',
          icon: 'pi pi-refresh',
          command: () => {
            this.uploadVisits();
          },
        },
        {
          label: 'Очистить визиты',
          icon: 'pi pi-refresh',
          command: () => {
            this.truncateVisits();
          },
        },
      ]
    };
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      getIntersections: "app/getStomIntersections",
      getPurposes: "app/getStomIncorrectPurposes",

      uploadBuffer: "app/uploadBufferSTOMRegistry",
      truncateBuffer: "app/truncateBufferSTOMRegistry",
      uploadVisits: "app/uploadVisits",
      truncateVisits: "app/truncateVisits",
    }),
    showIntersections(){
      this.getIntersections()
    },
    showPurposes(){
      this.getPurposes()
    }
  }
}
</script>

<style scoped>

</style>
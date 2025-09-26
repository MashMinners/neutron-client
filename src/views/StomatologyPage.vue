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
            <SplitButton label="Буфер" class="mr-2" :model="bufferItems" severity="info"></SplitButton>
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
          <stomatology-tabs></stomatology-tabs>
        </div>
      </div>
    </prime-fieldset>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import StomatologyTabs from "@/components/StomatologyBuffer/StomatologyTabs.vue";
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
  components: {StomatologyTabs, Toolbar, SplitButton},
  data() {
    return {
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
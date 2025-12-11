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
            <SplitButton label="Истории болезни" class="mr-2" :model="IBItems" severity="warn"></SplitButton>
            <SplitButton label="Буфер" class="mr-2" :model="bufferItems" severity="info"></SplitButton>
            <prime-button label="Показать пересечения" class="p-button mr-2" @click = showIntersections />
          </template>
          <template #center></template>
          <template #end>
            <prime-button label="123"></prime-button>
          </template>
        </Toolbar>
      </div>
      <div class="p-fluid grid">
        <div class="centered">
          <disp-tabs></disp-tabs>
        </div>
      </div>
    </prime-fieldset>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import DispTabs from "@/components/DispBuffer/DispTabs.vue";
import Toolbar from "primevue/toolbar";
import {SplitButton} from "primevue";
export default {
  name: "DispPage",
  computed: {
    ...mapGetters({
      //STEPS
      pageTitle: 'appDispModule/getPageTitle',
      pageMessage: 'appDispModule/getPageMessage'
    })
  },
  // eslint-disable-next-line vue/no-unused-components
  components: {DispTabs, Toolbar, SplitButton},
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
      IBItems: [
        {
          label: 'Загрузить истории болезни',
          icon: 'pi pi-refresh',
          command: () => {
            this.uploadIB();
          },
        },
        {
          label: 'Очистить истории болезни',
          icon: 'pi pi-refresh',
          command: () => {
            this.truncateIB();
          },
        },
      ]
    };
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      getIntersections: "appDispModule/getDispIntersections",
      //Буфер
      uploadBuffer: "appDispModule/uploadBufferDISPRegistry",
      truncateBuffer: "appDispModule/truncateBufferDISPRegistry",
      //Истории болезни
      uploadIB: "appDispModule/uploadIB",
      truncateIB: "appDispModule/truncateIB",
    }),
    showIntersections(){
      this.getIntersections()
    }
  }
}
</script>

<style scoped>

</style>
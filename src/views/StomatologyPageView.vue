<template>
  <div class="card">
    <prime-fieldset>
      <template #legend>
        {{ pageMessage }}
      </template>
      <div>
        <!--<Toolbar>
          <template #start>

            <prime-button label="Пересечения (30 дней)" class="p-button mr-2" @click = showIntersections />
            <prime-button label="Некорректные цели" class="p-button mr-2" @click = showPurposes />
            <prime-button label="Некорректные услуги" class="p-button mr-2" @click = showTornCases />
            <prime-button label="Разорванные случаи" class="p-button mr-2" />
            <prime-button label="Ошибки по зубам" class="p-button mr-2" />
          </template>
          <template #center></template>
          <template #end>
            <prime-button label="Очистить XML реестры" class="mr-2" severity="danger"></prime-button>
          </template>
        </Toolbar>-->
        <stomatology-buffer-menu-bar></stomatology-buffer-menu-bar>
      </div>
      <prime-divider></prime-divider>
      <prime-button label="Stom" @click="activeComponent = 'StomatologyTabs'"></prime-button>
      <prime-button label="Disp" @click="activeComponent = 'DispTabs'"></prime-button>
      <div class="p-fluid grid">
        <div class="centered">
          <component
              :is="activeComponent"
          />
        </div>
      </div>
    </prime-fieldset>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import StomatologyTabs from "@/components/StomatologyBuffer/StomatologyTabs.vue";
import StomatologyBufferMenuBar from "@/components/StomatologyBuffer/StomatologyBufferMenuBar";
import DispTabs from "@/components/DispBuffer/DispTabs";


export default {
  name: "StageStart",
  computed: {
    ...mapGetters({
      pageMessage: 'app/getPageMessage'
    })
  },
  // eslint-disable-next-line vue/no-unused-components
  components: {StomatologyBufferMenuBar, StomatologyTabs, DispTabs},
  data() {
    return {
      activeComponent: null
    };
  },
  methods: {
    ...mapActions({
      getIntersections: "app/getStomIntersections",
      getPurposes: "app/getStomIncorrectPurposes",
      getTornCases: "app/getTornCases",

      uploadBuffer: "app/uploadBufferSTOMRegistry",
      truncateBuffer: "app/truncateBufferSTOMRegistry",
      uploadVisits: "app/uploadVisits",
      truncateVisits: "app/truncateVisits",
    })
  }
}
</script>

<style scoped>

</style>
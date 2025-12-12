<template>
  <div>
    <prime-menubar :model="menuBarItems">
      <template #item="{item, props, hasSubmenu, root}">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span>{{ item.label }}</span>
          <prime-badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
          <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
        </a>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <prime-button label="Начать анализ" @click="StartAnalyze()"></prime-button>
          <prime-button label="Тосты" @click="show()"></prime-button>
        </div>
      </template>
    </prime-menubar>
  </div>
  <div id="auxiliary">
    <prime-toast/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "StomatologyBufferMenuBar",
  data() {
    return {
      menuBarItems: [
        { label: 'Excel',
          icon: 'pi pi-file-excel',
          command: () => {
            this.setTitle('Работа с реестрами по стоматологии. Excel')
          },
          items: [
            {
              label: 'Загрузить',
              icon: 'pi pi-upload',
              items: [
                {
                  label: 'Загрузить визиты',
                  command: () => {
                    this.uploadVisits();
                  },
                },
                {
                  label: 'Загрузить реестр',
                  command: () => {
                    this.uploadExcel();
                  }
                }
              ]
            },
            {
              label: 'Очсистить',
              icon: 'pi pi-trash',
              items: [
                {
                  label: 'Очистить визиты',
                  command: () => {
                    this.truncateVisits();
                  }
                },
                {
                  label: 'Очистить реестр',
                  command: () => {
                    this.truncateExcel();
                  },
                }
              ]
            }
          ]
        },
        { label: 'XML',
          icon: 'pi pi-code',
          command: () => {
            this.setTitle('Работа с реестрами по стоматологии. XML')
          },
          items:[
            {
              label: 'Загрузить данные XML',
              command: ()=> {
                this.uploadXML();
              }
            },
            {
              label: 'Очистить данные XML',
              command: ()=> {
                this.truncateXML()
              }
            }
          ]
        },
        {
          label: 'Пересечения (30 дней)',
          badge: 3,
          command: ()=> {
            this.setActiveComponent('StomatologyIntersections');
            this.setTitle('Пересечения (30 дней)')
          }
        },
        {
          label: 'Некорректные цели',
          command: ()=> {
            this.setActiveComponent('StomatologyIncorrectPurposes');
            this.setTitle('Некорректные цели')
          }
        },
        {
          label: 'Некорректные услуги',
          command: ()=> {
            this.setActiveComponent('StomatologyIncorrectServices');
            this.setTitle('Некорректные услуги')
          }
        },
        {
          label: 'Разорванные случаи',
          command: ()=> {
            this.setActiveComponent('StomatologyTornCases');
            this.setTitle('Разорванные случаи')
          }
        },
        {
          label: 'Ошибки по зубам',
          command: ()=> {
            this.setActiveComponent('StomatologyIncorrectTeeth');
            this.setTitle('Ошибки по зубам')
          }
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      getIntersectionsAction: "appStomModule/getIntersectionsAction",
      getExcelPurposesAction: "appStomModule/getExcelIncorrectPurposesAction",
      getXMLPurposesAction: "appStomModule/getXMLIncorrectPurposesAction",
      getTornCasesAction: "appStomModule/getTornCasesAction",
      getIncorrectServicesAction: "appStomModule/getIncorrectServicesAction",
      getIncorrectTeethAction: "appStomModule/getIncorrectTeethAction",

      //XML
      uploadXML: "appStomModule/uploadXMLRegistryAction",
      truncateXML: "appStomModule/truncateXMLRegistryAction",
      //EXCEL
      uploadExcel: "appStomModule/uploadExcelRegistryAction",
      truncateExcel: "appStomModule/truncateExcelRegistryAction",
      uploadVisits: "appStomModule/uploadVisitsAction",
      truncateVisits: "appStomModule/truncateVisitsAction",
    }),
    ...mapMutations({
      setActiveComponent: "appStomModule/SET_ACTIVE_COMPONENT",
      setTitle: "appStomModule/SET_PAGE_TITLE",
      message: "appStomModule/SET_TOAST_MESSAGE"
    }),
    StartAnalyze(){
      this.analyzeIntersections()
      this.getExcelPurposesAction()
      this.getXMLPurposesAction()
      //this.getTornCasesAction()
      this.getIncorrectServicesAction()
      this.getIncorrectTeethAction()
    },
    analyzeIntersections(){
      this.getIntersectionsAction()
    },
    async show() {
      await this.getTornCasesAction()
      this.$toast.add({ severity: this.getToastMessage.severity, summary: this.getToastMessage.summary, detail: this.getToastMessage.message, life: 5000 });
      await this.getIncorrectServicesAction()
      this.$toast.add({ severity: this.getToastMessage.severity, summary: this.getToastMessage.summary, detail: this.getToastMessage.message, life: 5000 });
    }
  },
  computed: {
    ...mapGetters({
      getToastMessage: "appStomModule/getToastMessage"
    })
  },
  watch:{

  }
}
</script>

<style scoped>

</style>
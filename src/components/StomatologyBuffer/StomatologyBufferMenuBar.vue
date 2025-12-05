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
      </div>
    </template>
  </prime-menubar>
</div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "StomatologyBufferMenuBar",
  data() {
    return {
      menuBarItems: [
        { label: 'Excel',
          icon: 'pi pi-file-excel',
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
                    this.uploadBuffer();
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
                    this.truncateBuffer();
                  },
                }
              ]
            }
          ]
        },
        { label: 'XML',
          icon: 'pi pi-code',
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

              }
            }
          ]
        },
        {
          label: 'Пересечения (30 дней)',
          badge: 3,
          command: ()=> {
            this.setStomatologyBufferActiveComponent('StomatologyIntersections');
            //this.getIntersections();
          }
        },
        {
          label: 'Некорректные цели',
          command: ()=> {
            this.setStomatologyBufferActiveComponent('StomatologyIncorrectPurposes');
          }
        },
        {
          label: 'Некорректные услуги',
          command: ()=> {
            this.setStomatologyBufferActiveComponent('StomatologyIncorrectServices');
          }
        },
        {
          label: 'Разорванные случаи',
          command: ()=> {
            this.setStomatologyBufferActiveComponent('StomatologyTornCases');
          }
        },
        {
          label: 'Ошибки по зубам'
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      getIntersections: "appStomModule/getStomIntersections",
      getExcelPurposes: "app/getStomExcelIncorrectPurposes",
      getTornCases: "app/getTornCases",
      getIncorrectServicesAction: "app/getIncorrectServicesActions",

      //XML
      uploadXML: "app/uploadXMLSTOMRegistry",
      truncateXML: "",

      uploadBuffer: "app/uploadBufferSTOMRegistry",
      truncateBuffer: "app/truncateBufferSTOMRegistry",
      uploadVisits: "app/uploadVisits",
      truncateVisits: "app/truncateVisits",
    }),
    ...mapMutations({
      setStomatologyBufferActiveComponent: "app/SET_STOMATOLOGY_BUFFER_ACTIVE_COMPONENT"
    }),
    StartAnalyze(){
      this.getIntersections()
      this.getExcelPurposes()
      this.getTornCases()
      this.getIncorrectServicesAction()
    }
  }
}
</script>

<style scoped>

</style>
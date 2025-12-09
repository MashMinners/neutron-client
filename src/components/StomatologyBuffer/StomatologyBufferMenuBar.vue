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
                this.truncateXML()
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
          label: 'Ошибки по зубам',
          command: ()=> {
            this.setStomatologyBufferActiveComponent('StomatologyIncorrectTeeth');
          }
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      getIntersections: "appStomModule/getStomIntersectionsAction",
      getExcelPurposes: "app/getStomExcelIncorrectPurposes",
      getTornCases: "app/getTornCases",
      getIncorrectServicesAction: "app/getIncorrectServicesAction",
      getIncorrectTeethAction: "app/getIncorrectTeethAction",

      //XML
      uploadXML: "app/uploadXMLSTOMRegistry",
      truncateXML: "app/truncateXMLSTOMRegistry",

      uploadBuffer: "app/uploadBufferSTOMRegistry",
      truncateBuffer: "app/truncateBufferSTOMRegistry",
      uploadVisits: "app/uploadVisits",
      truncateVisits: "app/truncateVisits",
    }),
    ...mapMutations({
      setStomatologyBufferActiveComponent: "app/SET_STOMATOLOGY_BUFFER_ACTIVE_COMPONENT"
    }),
    StartAnalyze(){
      this.analyzeIntersections()
      this.getExcelPurposes()
      this.getTornCases()
      this.getIncorrectServicesAction()
      this.getIncorrectTeethAction()
    },
    analyzeIntersections(){
      this.getIntersections()
      //if(result.bad.length !==0) {
        //this.$toast.add({ severity: 'success', summary: 'Загрузка завершена', detail: 'Загружены пересечения', life: 3000 });
      //}
    },
    show() {
      this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }
  }
}
</script>

<style scoped>

</style>
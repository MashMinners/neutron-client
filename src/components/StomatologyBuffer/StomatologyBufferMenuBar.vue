<template>
<div>
  <prime-menubar :model="menuBarItems"></prime-menubar>
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
          label: 'Некорректные услуги'
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
      getIntersections: "app/getStomIntersections",
      getPurposes: "app/getStomIncorrectPurposes",
      getTornCases: "app/getTornCases",

      uploadBuffer: "app/uploadBufferSTOMRegistry",
      truncateBuffer: "app/truncateBufferSTOMRegistry",
      uploadVisits: "app/uploadVisits",
      truncateVisits: "app/truncateVisits",
    }),
    ...mapMutations({
      setStomatologyBufferActiveComponent: "app/SET_STOMATOLOGY_BUFFER_ACTIVE_COMPONENT"
    })
  }
}
</script>

<style scoped>

</style>
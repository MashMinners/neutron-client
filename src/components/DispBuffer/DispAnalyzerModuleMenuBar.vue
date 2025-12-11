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
  <div id="auxiliary">
    <prime-toast/>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "DispAnalyzerModuleMenuBar",
  data() {
    return {
      menuBarItems: [
        { label: 'Excel',
          icon: 'pi pi-file-excel',
          command: () => {
            this.setTitle('Работа с реестрами по диспансеризации')
          },
          items: [
            {
              label: 'Загрузить',
              icon: 'pi pi-upload',
              items: [
                {
                  label: 'Истории болезни',
                  command: () => {
                    this.uploadIB();
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
              label: 'Очистить',
              icon: 'pi pi-trash',
              items: [
                {
                  label: 'Истории болезни',
                  command: () => {
                    this.truncateIB();
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
        {
          label: 'Пересечения с историями болезни',
          badge: 1,
          command: ()=> {
            this.setActiveComponent('DispIntersections');
            this.setTitle('Пересечения со стационаром')
          }
        }
      ]
    }
  },
  methods:{
    ...mapActions({
      uploadIB: "appDispModule/uploadIB",
      truncateIB: "appDispModule/truncateIB",
      uploadExcel: "appDispModule/uploadBufferDISPRegistry",
      truncateExcel: "appDispModule/truncateBufferDISPRegistry",
      getIntersectionsAction: "appDispModule/getDispIntersections",
    }),
    ...mapMutations({
      setActiveComponent: "appDispModule/SET_ACTIVE_COMPONENT",
      setTitle: "appDispModule/SET_PAGE_TITLE"
    }),
    StartAnalyze(){
      this.getIntersectionsAction()
    }
  }
}
</script>

<style scoped>

</style>
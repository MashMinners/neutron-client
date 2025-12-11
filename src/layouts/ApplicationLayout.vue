<template>
  <div id="app-header">
    <prime-toolbar>
      <template #start>
        <prime-button class="p-button-sm" icon="pi pi-bars" @click="menuVisible = true" severity="contrast"/>
        <div class="flex items-center ml-3">
          <prime-message severity="contrast" >{{ sectionTitle }}</prime-message>
        </div>
      </template>
      <template #end>
        <div class="flex items-center mr-3 mt-2">
          <prime-button type="button"  variant="outlined" size="large" text severity="contrast">
            <prime-overlay-badge value="2" severity="danger">
              <i class="pi pi-bell" style="font-size: 2rem" />
            </prime-overlay-badge>
          </prime-button>
        </div>
        <div class="flex items-center gap-2">
          <prime-avatar image="/avatars/Shilova.png" style="width: 48px; height: 48px" shape="circle"/>
          <prime-button label="Выход" icon="pi pi-sign-out" class="flex-auto" severity="danger" text></prime-button>
        </div>
      </template>
    </prime-toolbar>
  </div>
  <div id="app-content">
        <!--suppress JSValidateTypes -->
        <component
            :is="getComponent"
        />
  </div>
  <div id="overlays">
    <div class="card flex justify-center">
      <prime-drawer v-model:visible="menuVisible" header="Выбирайте свой сервис" position="top" style="height: auto">
        <template #header>
          <div class="flex items-center gap-2">
            <prime-avatar image="/avatars/Shilova.png" shape="circle" size="xlarge"/>
            <p class="font-bold">Администратор</p>
          </div>
        </template>
        <div class="overflow-y-auto">
          <prime-menu :model="menuItems">
            <template #item="{ item, props }">
              <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom @click="goLink(item.title)">
                <a :href="href" v-bind="props.action" @click="navigate">
                  <span :class="item.icon" />
                  <span class="ml-2">{{ item.label }}</span>
                </a>
              </router-link>
              <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </template>
          </prime-menu>
        </div>
      </prime-drawer>
    </div>
  </div>
</template>
<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: "ApplicationLayout",
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    },
    ...mapGetters({
      sectionTitle: 'app/getSectionTitle',
      menuItems: 'app/getMenuItems',
    })
  },
  methods: {
    ...mapMutations({
      setSectionTitle: "app/SET_SECTION_TITLE"
    }),
    goLink(title){
      this.menuVisible = false;
      this.setSectionTitle(title);
    }
  },
  data() {
    return {
      menuVisible: false
    }
  },
}
</script>

<style scoped>

</style>
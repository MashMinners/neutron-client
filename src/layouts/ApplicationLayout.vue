<template>
  <div id="app-header"></div>
  <div id="app-content">
        <!--suppress JSValidateTypes -->
        <component
            :is="getComponent"
        />
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "ApplicationLayout",
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    },
    ...mapGetters({
      //STEPS
      stepTitle: 'app/getStepTitle',
      stepMessage: 'app/getStepMessage'
    })
  }
}
</script>

<style scoped>

</style>
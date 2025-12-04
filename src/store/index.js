import { createStore } from 'vuex';
import {appModule} from "@/store/appModule";
import {cpModule} from "@/store/cpModule";
import {appStomAnalyzeModule} from '@/store/Modules/appStomAnalyzeModule'

export default createStore({
  modules: {
    app: appModule,
    appStomModule: appStomAnalyzeModule,
    cp: cpModule
  }
})

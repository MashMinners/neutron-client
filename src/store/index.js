import { createStore } from 'vuex';
import {appModule} from "@/store/appModule";
import {cpModule} from "@/store/cpModule";
import {appStomAnalyzeModule} from '@/store/Modules/appStomAnalyzeModule'
import {appDispAnalyzeModule} from '@/store/Modules/appDispAnalyzeModule'

export default createStore({
  modules: {
    app: appModule,
    appStomModule: appStomAnalyzeModule,
    appDispModule: appDispAnalyzeModule,
    cp: cpModule
  }
})

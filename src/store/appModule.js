export const appModule = {
    state:() => ({
        section: {
            title: 'Начало'
        },
        menuItems: [
            {
                label: 'Главная',
                icon: 'pi pi-home',
                route: '/app/main',
                title: 'Главная'
            },
            {
                label: 'Стоматология',
                icon: 'pi pi-book',
                route: '/app/registry/stom',
                title: 'Реестры по стоматологии'
            },
            {
                label: 'Диспансеризация',
                icon: 'pi pi-book',
                route: '/app/registry/disp',
                title: 'Реестры по диспансеризации'
            },
        ],
        mySQLRecords: {
            inserted: 0,
            deleted: 0
        }
    }),
    getters: {
        getSectionTitle(state){
            return state.section.title;
        },
        getMenuItems(state) {
            return state.menuItems;
        }
    },
    mutations: {},
    actions: {},
    namespaced: true
}
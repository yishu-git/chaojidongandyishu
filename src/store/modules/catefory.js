export default   ({
    namespaced: true,
    state: {
        id:''
    },
    mutations: {
        change_id(store,id){
            console.log(store.id);
            store.id=id
        }
    },
    actions: {
    },
    modules: {
    }
  })
  
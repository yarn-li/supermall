import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
    totalprice:0,
    isselectAll:true,
    user:{
      islogin:false,
      username:"",
    }
  },
  mutations: {
    addCart(state,item){  
      item.count = 1 
      item.itemselect = true
      let data = {
        isequal:false,
      }
      state.cart.forEach((cartitem,index)=>{
        if(cartitem.iid==item.iid) {
          data.isequal = true
          data.isindex = index
          console.log(data);
          return data
        }
      })
      if(!data.isequal ){
        state.cart.push(item,)
      }else{
        state.cart[data.isindex].count++
      }
    },
   
  },
  actions: {
  },
  modules: {
  }
})

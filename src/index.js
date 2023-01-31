import { bugAdded, resolved } from "./actionCreater";
import store from "./store";




const unsubscibe =  store.subscribe(() =>{
    console.log("store changed", store.getState())
})


store.dispatch(bugAdded("bug21"))
store.dispatch(resolved(1))


 //unsubscibe()

// store.dispatch({
//     type:"BUGS_REMOVED",
//     payload:{
//         id:1,
//     }
// })

console.log(store.getState())
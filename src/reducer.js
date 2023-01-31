import { resolved } from "./actionCreater";
import * as actions from "./actionTypes"

let LastId = 0;

 export default function reducer (state = [], action){
    if(action.type === actions.BUG_ADDED){
        return [
            ...state,
            {
                id: ++LastId,
                description:action.payload.description,
                resolved:false
            }
        ];
        
    }
    else if(action.type === actions.BUG_REMOVE){
        return state.filter(bug =>bug.id !== action.payload.id)
        

    }

    else if( action.type === actions.Resolved){
        return state.map(bug => bug.id !== action.payload.id ? bug : resolved=true)
    }
    return state;
}
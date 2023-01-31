import * as actions from "./actionTypes"

export const bugAdded = description =>({
    type: actions.BUG_ADDED,
    payload:{
        description
    }
})
export const resolved = id => ({
    type:actions.Resolved,

    payload:{
        id:id
    }
})
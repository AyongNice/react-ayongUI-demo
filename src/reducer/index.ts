import React from 'react'
let initState={
    count:0
}
function countReducer(state={},action){
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1 }
        default:
            return state
    }
}
let context =React.createContext()
export {
    countReducer,
    initState,
    context
}
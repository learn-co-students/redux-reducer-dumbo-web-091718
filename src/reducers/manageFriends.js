export function manageFriends(state, action){
  if(action.type === "ADD_FRIEND"){
    return {...state, friend:"Chrome Boi"}
  }
  else{
    return state
  }
}

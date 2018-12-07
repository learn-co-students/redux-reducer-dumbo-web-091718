
export function managePresents(state, action){
  if (action.type !== "INCREASE"){
    return state
  } else {
    return {numberOfPresents: state.numberOfPresents + 1 }
  }
}

export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return Object.assign({}, state, {friends: [...state.friends, action.friend]});
    case 'REMOVE_FRIEND':
      let updatedFriends = [...state.friends].filter(i => i['id'] !== action.id)
      return Object.assign({}, state, {friends: updatedFriends})
    default:
      return state;
  }
}	
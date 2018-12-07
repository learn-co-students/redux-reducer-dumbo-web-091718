export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return Object.assign({}, state, {friends: [...state.friends, action.friend]});
    case 'REMOVE_FRIEND':
      let newFriends = [...state.friends]
      newFriends = newFriends.filter(frnd => frnd["id"] !== action.id)
      return Object.assign({}, state, {friends: newFriends })
    default:
      return state;
  }
}

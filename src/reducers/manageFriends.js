export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      state.friends.push({name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id})
      return state
    case 'REMOVE_FRIEND':
      let filteredFriends = state.friends.filter(friend => friend.id !== action.id)
      return {...state, friends: filteredFriends}
    default:
      return state
  }
}

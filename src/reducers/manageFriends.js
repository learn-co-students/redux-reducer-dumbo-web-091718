export function manageFriends(state =
  {friend:""}, action){
  switch(action.type) {

    case "ADD_FRIEND":
    return (
      {...state,
        friends: [
          ...state.friends,
          action.friend
        ]
      }
    )

    case "REMOVE_FRIEND":
    let fIndex = state.friends.findIndex(f => f.id === action.id)
    return (
      {...state,
        friends: [
          ...state.friends.slice(0, fIndex),
          ...state.friends.slice(fIndex+1)
        ]
      }
    )
    default:
      return state

  }

}

export function manageFriends(state, action){

  switch (action.type) {
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [...state.friends ,{
          name: "Joe",
          hometown: "Boston",
          id: 101
        }]
      }
    case "REMOVE_FRIEND":
      let group = state.friends.filter( friend => {
        return friend.id !== action.id
      })
      return {...state,
        friends: group
        }

    default:
      return state

  }
}

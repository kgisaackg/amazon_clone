export const initialState = {
  basket: []
}


export const reducer = (state, action) => {

  switch(action.Type){
    case 'ADD_TO_BASKET':
      return{
        ...state,
        basket: [...state.basket, action.item]
      }
  }
}

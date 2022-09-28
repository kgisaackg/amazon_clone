export const initialState = {
  basket: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        basket: [...state.basket, action.item]
      }
  }
}

export default reducer;

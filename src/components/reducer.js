export const initialState = {
  basket: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      )
      if (index >= 0) {
        state.basket.splice(index, 1)
      }
      return {
        basket: state.basket
      }

  }
}

export default reducer;

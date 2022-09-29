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
      if(index >= 0){
        console.log("Hopefully have removed the item");
        state.basket.splice(index, 1)
      }
      else  
        console.log("No items to remove.")
    return {
      basket: state.basket
    }

  }
}

export default reducer;

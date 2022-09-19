export const initialState = {
  basket: []
}


const reducer = (state, action) => {

 console.log(action);
  switch(action.Type){
    case 'ADD_TO_BASKET':
      return{
        ...state,
        basket: [...state.basket, action.item]
      };
    
  }
}

export default reducer;

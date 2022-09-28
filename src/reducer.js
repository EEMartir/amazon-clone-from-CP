export const initialState = {
  basket: [],
};

//Selector

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

//reducer loops through the basket and tally up the total

//state of the app
//action is what you trying to do
//Image the reducer as something that's always listening the dispatch
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;

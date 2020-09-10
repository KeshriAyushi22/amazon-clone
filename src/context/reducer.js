export const initialState = {
    basket: [],
    lang: 'en'
}

//selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);  // adding all the item using reduce fn and initial value is 0


//reducer is basically when we use useState -> we set the state with new value, which here is done by reducer.
//dispatch the new data into the data layer (store)
const reducer = (state, action) => {

    //reducer is always listening our actions
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'CHANGE_LANG':
            return {
                ...state,
                lang: action.lang
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(  //finding the first matching index
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Cant remove product id (id : ${action.id}) as its not in basket`)
            }
            return {
                ...state,
                basket: newBasket
            }

        default:
            return { state }
    }
}

export default reducer;

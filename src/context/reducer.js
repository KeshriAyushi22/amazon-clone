export const initialState = {
    basket: [],
    lang: 'en'
}

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
            }

        default:
            return { state }
    }
}

export default reducer;

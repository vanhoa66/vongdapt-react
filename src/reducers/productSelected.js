
import { PRODUCT_SELECTED, PRODUCT_UNSELECTED } from './../constants/ActionTypes';


const initialState = {
    name: '',
    image: '',
    price: 0,
    description: '',
    key: ''
}

const productSelected = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_SELECTED:
            state = action.product;
            return { ...state }
        case PRODUCT_UNSELECTED:
            state = initialState
            return { ...state }
        default:
            return state
    }
}

export default productSelected
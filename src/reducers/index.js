import { combineReducers } from 'redux'

import productSelected from './productSelected'
import isShowForm from './isShowForm'
import user from './user'
import carts from './carts'
import notify from './notify'

const rootReducer = combineReducers({
    user,
    isShowForm,
    productSelected,
    carts,
    notify

})

export default rootReducer
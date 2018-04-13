import { combineReducers } from 'redux'

import productSelected from './productSelected'
import isShowForm from './isShowForm'
import user from './user'

const rootReducer = combineReducers({
    user,
    isShowForm,
    productSelected

})

export default rootReducer
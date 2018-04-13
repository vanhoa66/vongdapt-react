import * as types from './../constants/ActionTypes'

export const openForm = () => ({ type: types.OPEN_FORM })
export const closeForm = () => ({ type: types.CLOSE_FORM })
export const toggleForm = () => ({ type: types.TOGGLE_FORM })
export const productSelected = (product) => ({ type: types.PRODUCT_SELECTED, product })
export const productUnSelected = () => ({ type: types.PRODUCT_UNSELECTED })
export const actLogin = (userInfo) => ({ type: types.USER_LOGIN, userInfo})
export const actLogout = () => ({ type: types.USER_LOGOUT})
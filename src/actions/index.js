import * as types from './../constants/ActionTypes'

export const openForm = () => ({ type: types.OPEN_FORM })
export const closeForm = () => ({ type: types.CLOSE_FORM })
export const toggleForm = () => ({ type: types.TOGGLE_FORM })
export const productSelected = (product) => ({ type: types.PRODUCT_SELECTED, product })
export const productUnSelected = () => ({ type: types.PRODUCT_UNSELECTED })
export const actLogin = (userInfo) => ({ type: types.USER_LOGIN, userInfo })
export const actLogout = () => ({ type: types.USER_LOGOUT })

export const actBuyProduct = (product, quantity) => {
	return {
		type: types.BUY_PRODUCT,
		product,
		quantity
	}
}

export const actUpdateProduct = (product, quantity) => {
	return {
		type: types.UPDATE_PRODUCT,
		product,
		quantity
	}
}

export const actRemoveProduct = (product) => {
	return {
		type: types.REMOVE_PRODUCT,
		product,
	}
}
export const actCheckoutProduct = () => {
	return {
		type: types.CHECKOUT_PRODUCT
	}
}

export const actChangeNotify = (style, title, content) => {
	return {
		type: types.CHANGE_NOTIFY,
		style, title, content
	}
}

export const actHideNotify = () => {
	return {
		type: types.HIDE_NOTIFY,
	}
}


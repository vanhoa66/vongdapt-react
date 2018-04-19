import { BUY_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT, CHECKOUT_PRODUCT } from './../constants/ActionTypes';
import { remove } from 'lodash';

let defaultState = [];
let cartItems = JSON.parse(localStorage.getItem("carts"));
defaultState = (cartItems !== null && cartItems.length > 0) ? cartItems : defaultState;

let getProductPosition = (cartItems, product) => {
	let total = cartItems.length;
	for (let i = 0; i < total; i++) {
		if (cartItems[i].product.key === product.key) return i;
	}
	return -1;
}

const carts = (state = defaultState, action) => {
	let { product, quantity } = action;
	let position = -1;
	switch (action.type) {

		case BUY_PRODUCT:
			position = getProductPosition(state, product);
			if (position > -1) { // edit
				state[position].quantity += quantity;
			} else {
				state.push({ product, quantity });
			}
			localStorage.setItem("carts", JSON.stringify(state));
			return [...state];

		case UPDATE_PRODUCT:
			position = getProductPosition(state, product);

			if (position > -1) { // update
				state[position].quantity = quantity;
			}

			localStorage.setItem("carts", JSON.stringify(state));

			return [...state];

		case REMOVE_PRODUCT:
			remove(state, (cartItem) => {
				return cartItem.product.key === product.key;
			});
			localStorage.setItem("carts", JSON.stringify(state));
			return [...state];

		case CHECKOUT_PRODUCT:
			state = [];
			localStorage.setItem("carts", JSON.stringify(state));
			return [...state];
			
		default:
			return state;
	}
}

export default carts;
import { USER_LOGIN, USER_LOGOUT } from './../constants/ActionTypes';

let defaultState = {
	isLogin: false,
	info: { email: '', uid: '', isAdmin: false }
};


const user = (state = defaultState, action) => {

	switch (action.type) {

		case USER_LOGIN:
			state.isLogin = true;
			state.info = action.userInfo;
			return { ...state };

		case USER_LOGOUT:
			state.isLogin = false;
			state.info = { email: '', uid: '' };
			return { ...state };
		default:
			return state;
	}
}

export default user;
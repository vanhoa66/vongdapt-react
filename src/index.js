import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { firebaseApp, usersRef } from './firebase';
import reducer from './reducers'

import App from './components/App';
import {actLogin, actLogout} from './actions/index';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

firebaseApp.auth().onAuthStateChanged((user) => {
	if (user) {
		let userInfo = {
			email: user.email,
			uid: user.uid,
			isAdmin: false
		}
		usersRef.child(user.uid).once('value').then(data => {
			let info = data.val();
			userInfo.isAdmin = info.isAdmin;
			store.dispatch(actLogin(userInfo));
		})
	} else {
		// User is signed out.
		store.dispatch(actLogout())
	}
});

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

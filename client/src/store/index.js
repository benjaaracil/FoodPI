import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer';
import thunk from "redux-thunk";
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

// export const store = createStore(
//     rootReducer,
//     compose(applyMiddleware(thunk)) 
//     );
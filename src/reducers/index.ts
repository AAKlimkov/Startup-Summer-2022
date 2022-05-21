// import { legacy_createStore as createStore} from 'redux'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import reposReduser from './reposReduser';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  repos: reposReduser,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


// export const store = configureStore({
//     reducer: rootReducer,
//     devTools: composeWithDevTools(applyMiddleware(thunk)),
//   });
  
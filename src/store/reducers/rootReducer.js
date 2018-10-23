import authReducer from './authReducer'
import siteReducer from './siteReducer'
import { combineReducers } from 'redux'
import { firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  site: siteReducer,
  firestore: firestoreReducer
})

export default rootReducer
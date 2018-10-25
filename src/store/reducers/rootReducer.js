import authReducer from './authReducer'
import siteReducer from './siteReducer'
import { combineReducers } from 'redux'
import { firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  site: siteReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer
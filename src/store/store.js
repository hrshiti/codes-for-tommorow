import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice.js'

const store = configureStore({
  reducer:{posts:postsReducer}
})
export default store
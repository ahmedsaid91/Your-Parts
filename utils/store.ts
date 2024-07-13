import { configureStore } from '@reduxjs/toolkit';
import {logInReducer} from './authReducer'; // Assuming you have a rootReducer defined

const store = configureStore({
  reducer: logInReducer,
  // Add middleware, enhancers, etc. if needed
});

export default store;
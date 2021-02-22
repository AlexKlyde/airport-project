import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from './features/flights/flights.reducer';

const store = configureStore({
  reducer: {
    flights: flightsReducer,
  },
});

export default store;
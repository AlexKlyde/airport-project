import { FLIGHTS_LIST_RECEIVED } from './flights.actions';

const initialState = {
  flightsList: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECEIVED:
      return {
        ...state,
        flightsList: action.payload.flightsData,
      };
    default:
      return state;
  }
};

export default flightsReducer;

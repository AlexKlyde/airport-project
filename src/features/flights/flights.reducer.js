import { SHOW_SPINNER, FLIGHTS_LIST_RECEIVED } from './flights.actions';

const initialState = {
  isFetching: false,
  flightsList: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FLIGHTS_LIST_RECEIVED:
      return {
        ...state,
        flightsList: action.payload.flightsData,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default flightsReducer;

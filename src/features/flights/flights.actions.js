import { fetchFlightsList } from './flightsGateway';

export const SHOW_SPINNER = 'FLIGHTS/SHOW_SPINNER';
export const FLIGHTS_LIST_RECEIVED = 'FLIGHTS/FLIGHTS_LIST_RECEIVED';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const flightsListRecieved = flightsData => {
  const action = {
    type: FLIGHTS_LIST_RECEIVED,
    payload: {
      flightsData,
    },
  };
  return action;
};

export const getFlightsList = direction => {
  const thunkAction = dispatch => {
    dispatch(showSpinner());
    fetchFlightsList(direction).then(flightsList => dispatch(flightsListRecieved(flightsList)));
  };
  return thunkAction;
};

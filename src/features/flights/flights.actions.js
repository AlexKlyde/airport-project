import { fetchFlightsList } from './flightsGateway';

export const FLIGHTS_LIST_RECEIVED = 'FLIGHTS/FLIGHTS_LIST_RECEIVED';

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
    fetchFlightsList(direction).then(flightsList => dispatch(flightsListRecieved(flightsList)));
  };
  return thunkAction;
};

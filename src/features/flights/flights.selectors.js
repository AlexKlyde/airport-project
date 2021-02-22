import { createSelector } from 'reselect';
import { format } from 'date-fns';
import { today } from './flights.utils';

export const flightsListSelector = state => state.flights.flightsList;

export const filteredFlightsListSelector = createSelector([flightsListSelector], flightsList => {
  return flightsList.filter(flight => format(new Date(flight.localTime), 'dd-MM-yyyy') === today);
});



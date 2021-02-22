import { createSelector } from 'reselect';
import { format } from 'date-fns';
import { todayDate } from './flights.utils';

export const flightsListSelector = state => state.flights.flightsList;

export const filteredFlightsListSelector = createSelector([flightsListSelector], flightsList => {
  return flightsList.filter(
    flight => format(new Date(flight.localTime), 'dd-MM-yyyy') === todayDate,
  );
});



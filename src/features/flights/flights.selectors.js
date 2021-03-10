import { createSelector } from 'reselect';
import { format } from 'date-fns';
import { todayDate } from './flights.utils';

export const isFetchingSelector = state => state.flights.isFetching;
export const flightsListSelector = state => state.flights.flightsList;

export const sortedListSelector = createSelector([flightsListSelector], flightsList => {
  return flightsList.sort((a, b) => new Date(a.localTime) - new Date(b.localTime));
});

export const filteredFlightsListSelector = createSelector([sortedListSelector], flightsList => {
  return flightsList.filter(
    flight => format(new Date(flight.localTime), 'dd-MM-yyyy') === todayDate,
  );
});

import { createSelector } from 'reselect';
import { format } from 'date-fns';
import { todayDate } from './flights.utils';

export const isFetchingSelector = state => state.flights.isFetching;
export const flightsListSelector = state => state.flights.flightsList;

export const filteredFlightsListSelector = createSelector([flightsListSelector], flightsList => {
  return flightsList
    .filter(({ localTime }) => format(new Date(localTime), 'dd-MM-yyyy') === todayDate)
    .sort((a, b) => new Date(a.localTime) - new Date(b.localTime));
});

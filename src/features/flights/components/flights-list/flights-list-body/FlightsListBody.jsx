import React from 'react';
import { useSelector } from 'react-redux';

import Flight from './Flight';
import { filteredFlightsListSelector, isFetchingSelector } from '../../../flights.selectors';
import Spinner from '../../spinner/Spinner';

const FlightsListBody = ({ searchedFlight }) => {
  const flightsList = useSelector(state => filteredFlightsListSelector(state));
  const isFetching = useSelector(state => isFetchingSelector(state));

  if (isFetching) {
    return <Spinner />;
  }

  const flights = searchedFlight
    ? flightsList.filter(({ flightN, destination }) =>
          flightN.toLowerCase().includes(searchedFlight.toLowerCase()) ||
          destination.toLowerCase().includes(searchedFlight.toLowerCase()))
    : flightsList;

  return flights.length > 0 ? (
    flights.map(flight => <Flight key={flight.id} flight={flight} />)
  ) : (
    <tr>
      <td className="no-flights" colSpan="6">
        No Flights
      </td>
    </tr>
  );
};

export default FlightsListBody;

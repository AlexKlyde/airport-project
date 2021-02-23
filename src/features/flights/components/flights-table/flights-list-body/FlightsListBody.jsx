import React from 'react';
import { useSelector } from 'react-redux';

import Flight from './Flight';
import { filteredFlightsListSelector, isFetchingSelector } from '../../../flights.selectors';
import Spinner from '../../spinner/Spinner';

const FlightsListBody = ({ searchedFlight }) => {
  const flightsList = useSelector(state => filteredFlightsListSelector(state));
  const isFetching = useSelector(state => isFetchingSelector(state));

  const flights = searchedFlight
    ? flightsList.filter(flight => {
        const flightNumber = flight.flightN.toLowerCase();
        const destination = flight.destination.toLowerCase();
        return [flightNumber, destination].includes(searchedFlight.toLowerCase());
      })
    : flightsList;

  const flightsRows = flights.length > 0
    ? flights.map(flight => <Flight key={flight.id} flight={flight} />)
    : (
      <tr>
        <td className="no-flights" colSpan="6">
          No Flights
        </td>
      </tr>
    );

  return <tbody>{isFetching ? <Spinner /> : flightsRows}</tbody>;
};

export default FlightsListBody;

import React from 'react';
import { useSelector } from 'react-redux';
import Flight from './Flight';
import { filteredFlightsListSelector } from '../../flights.selectors';

const FlightsListBody = ({ searchedFlight }) => {
  const flightsList = useSelector(state => filteredFlightsListSelector(state));

  const flights = searchedFlight
    ? flightsList.filter(flight => {
        const flightNumber = flight.flightN.toLowerCase();
        const destination = flight.destination.toLowerCase();
        return [flightNumber, destination].includes(selectedFlight.toLowerCase());
      })
    : flightsList;

  return (
    <tbody>
      {flights.length > 0 ? (
        flights.map(flight => <Flight key={flight.id} flight={flight} />)
      ) : (
        <tr>
          <td className="no-flights" colSpan="6">
            No Flights
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default FlightsListBody;

import React from 'react';

import Flight from './Flight';

const FlightsList = ({ flights }) => {
  if (!flights) {
    return null;
  }

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

export default FlightsList;

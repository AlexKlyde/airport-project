import React from 'react';

const FlightsListHeader = () => {
  return (
      <thead>
        <tr>
          <th>Terminal</th>
          <th>Local time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th>Flight #</th>
        </tr>
      </thead>
  );
};

export default FlightsListHeader;
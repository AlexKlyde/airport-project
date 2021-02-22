import { getDirectionFlights, today } from './flights.utils';

export const fetchFlightsList = direction =>
  fetch(`https://api.iev.aero/api/flights/${today}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error();
    })
    .then(flightsData =>
      flightsData.body[direction].map(flight => {
        return getDirectionFlights(flight, direction);
      }),
    )
    .catch(error => alert(error.message));
    

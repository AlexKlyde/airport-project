import { todayDate } from './flights.utils';

export const fetchFlightsList = direction =>
  fetch(`https://api.iev.aero/api/flights/${todayDate}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error();
    })
    .then(flightsData =>
      flightsData.body[direction].map(flight => {
        return {
          id: flight.ID,
          terminal: flight.term,
          localTime: flight.timeDepShedule || flight.timeToStand,
          destination: flight['airportToID.city_en'] || flight['airportFromID.city_en'],
          statusTime: flight.timeTakeofFact || flight.timeLandFact,
          status: flight.status,
          airline: {
            logo: flight.airline.en.logoSmallName,
            name: flight.airline.en.name || flight.airline.ru.name,
          },
          flightN: flight.codeShareData[0].codeShare,
        };
      }),
    )
    .catch(error => alert(error.message));
    

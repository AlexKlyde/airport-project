import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

const Flight = ({ flight }) => {
  const { terminal, localTime, destination, status, statusTime, airline, flightN } = flight;
  const time = moment(statusTime).format('HH:mm');
  const flightStatus =
    status === 'DP'
      ? `Departed at: ${time}`
      : status === 'LN'
      ? `Landed at: ${time}`
      : status === 'ON'
      ? 'On time'
      : status === 'BD'
      ? 'Boarding'
      : status === 'CK'
      ? 'Registration'
      : 'In flight';

  const termClass = classNames('flights-list__item_terminal', { blue: terminal === 'D' });

  return (
    <tr className="flights-list__item">
      <td className={termClass}>
        <span>{terminal}</span>
      </td>
      <td>{moment(localTime).format('HH:mm')}</td>
      <td>{destination}</td>
      <td>{flightStatus}</td>
      <td className="flights-list__item_airline">
        <img src={airline.logo} alt="Lable" />
        <span>{airline.name}</span>
      </td>
      <td>{flightN}</td>
    </tr>
  );
};

export default Flight;

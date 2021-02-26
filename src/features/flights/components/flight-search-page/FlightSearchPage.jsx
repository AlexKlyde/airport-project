import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import './flightSearchPage.scss';
import { getFlightsList } from '../../flights.actions';
import SearchForm from '../search-form/SearchForm';
import FlightsNavigation from '../flights-navigation/FlightsNavigation';
import FlightsTable from '../flights-table/FLightsTable';

const FlightSearchPage = () => {
  const { pathname, search } = useLocation();
  const direction = pathname.slice(1);
  const dispatch = useDispatch();

  const searchedFlight = qs.parse(search, { ignoreQueryPrefix: true }).search;

  useEffect(() => {
    if (direction) {
      dispatch(getFlightsList(direction));
    }
  }, [direction, search]);

  return (
    <>
      <header className="search-flights__header">
        <h1>Search Flight</h1>
        <SearchForm direction={direction} />
      </header>
      <main className="search-flights__content">
        <FlightsNavigation search={search}/>
        <FlightsTable searchedFlight={searchedFlight} />
      </main>
    </>
  );
};

export default FlightSearchPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        console.log(response.data)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the countries:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='container mx-auto'>
      <h1 className='text-cyan-500 text-4xl text-center font-extrabold decoration-double'>Countries</h1>
      <ul className='grid grid-cols-3 gap-4 mt-12'>
        {countries.map(country => (
          <li key={country.cca3}>
            <img  src={country.flags.svg} alt={`Flag of ${country.name.common}`} className='w-50 h-50 object-cover'/>
            <span className='text-2xl text-cyan-500 font-extrabold'>Name:{country.name.common}</span>
            <h6 className='font-bold text-cyan-500'> Capital:{country.capital}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;

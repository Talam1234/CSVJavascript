import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('http://localhost:3001/read-csv')
        .then((response) => {
          setData(response.data);
        }).catch((error)=>{
          console.log(error)
        });
      } catch (error) {
        console.error('Error fetching CSV data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>CSV Data:</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index} className='li'>
            <h3>{index+1}.</h3>
            <h3>Country Code : {row.Code}</h3>
            <h3>Currency Symbol: {row.Symbol}</h3>
            <h3>Country Name : {row.Name}</h3>
            {/* {JSON.stringify(row)} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

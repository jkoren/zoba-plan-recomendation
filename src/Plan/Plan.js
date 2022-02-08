import React, { useEffect, useState } from 'react'
import Trip from '../Trip/Trip'
import FetchPlanNoAPI from './FetchPlanNoAPI';
import Map from '../Map/Map'

function Plan(props) {
  const [plan, setPlan] = useState([]);
  const [longitude, setLongitude] = useState()
  const [latitude, setLatitude] = useState()

  const planId = props.planId

  const FetchPlan = async () => {
    // normally these would be environment variables
    const username = "";
    const password = "";
    const market = "austin"
    const authURL = "https://api.zoba.com/api/v1/app/api-token-auth/"

    fetch(authURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    })
    .then(tokenObject => {
      const tokenString = tokenObject.token
      return tokenString
    })
    .then(tokenString => {
      const planURL = `https://api.zoba.com/api/v1/market/${market}/trips/plan/${planId}/`
    
      return fetch(planURL, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': "JWT " + tokenString
        }
      })
      .then(res => res.json())
      .then((planObject) => {
        setPlan(planObject)
      })
    })
    .catch(error => console.error(error));
  }

  useEffect(() => {
      // using API
      // FetchPlan()

      // not using API
      const plan=FetchPlanNoAPI(planId) 
      setPlan(plan)

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planId])

  const trips = plan.trips
  const tripsComponent = !trips ? "" :
    trips.map((trip, index) => (
      <Trip 
        key={index}
        tripNum={index+1}
        trip={trip}
        setLongitude={setLongitude}
        setLatitude={setLatitude}
      />
    )
  )

  return (
    <div>
      <h2>{plan.name}</h2>
      <h2>{plan.id}</h2>
      <Map
        latitude={latitude}
        longitude={longitude}
      />
      {tripsComponent}
    </div>
  )
}

export default Plan
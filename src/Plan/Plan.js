import React, { useEffect, useState } from 'react'
import Trip from '../Trip/Trip'

function Plan(PlanId) {
  const [plan, setPlan] = useState([]);
  
  const FetchPlan = async (passedPlanId) => {
    const username = "scooterer";
    const password = "geospatial optimization";
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
      const planURL = `https://api.zoba.com/api/v1/market/${market}/trips/plan/${passedPlanId}/`
    
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
      FetchPlan("55866")
  }, [])

  const trips = plan.trips
  const tripsComponent = !trips ? "" :
    trips.map((trip, index) => (
      <Trip 
        key={index}
        tripNum={index+1}
        trip={trip}
      />
    )
  )

  return (
    <>
      <div>{plan.name}</div> 
      <div>{plan.id}</div>
      {tripsComponent}
    </>
  )
}

export default Plan
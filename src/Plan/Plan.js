import React, { useEffect, useState } from 'react'
import Trip from '../Trip/Trip'

function Plan(props) {
  const [plan, setPlan] = useState([]);
  const planId = props.planId

  const FetchPlan = async () => {
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
      // why isn't it doing a new FetchPlan when planId changes?
      console.log("fetching plan")
      FetchPlan()
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div>
      <h2> {plan.name} </h2>
      <h2> {plan.id} </h2>
      {tripsComponent}
    </div>
  )
}

export default Plan
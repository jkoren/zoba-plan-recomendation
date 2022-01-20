import React, { useEffect, useState } from 'react'

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
    .then(token => {
      const tokenString = token.token
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
        console.log(planObject)
        setPlan(planObject)
      })
    })
    .catch(error => console.error(error));
  }

  useEffect(() => {
      FetchPlan("56072")
  }, [])

  console.log("plan")
  console.log(plan)

  return (
    <div>
      {/* <div>
          {followers.map(follower => (
              <div className="follower-item">
                  <img src={follower.picture.large}/>
                  <div className="followers-details">
                      <div className="follower-item-name">
                          <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                      </div>
                      <p>{follower.login.username}</p>
                  </div>
              </div>
          ))}
      </div>
      <div className="todo-footer">
          <Link to="/">Go Back</Link>
      </div> */}
    </div>
  )
}

export default Plan
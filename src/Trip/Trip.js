import Stop from '../Stop/Stop'

function Trip(props) {
  const trip = props.trip
  const initial_vehicles = !trip ? "" : trip.initial_vehicles
  const vanId = !trip ? "" : trip.van.id
  const stops = !trip ? [] : trip.stops

  const StopsComponent = !trip ? "" :
    stops.map((stop, index) => (
      <Stop 
        key={index}
        stop={stop}
      />
    )
  )

  return (
    <div>
      Trip: {props.tripNum}
      Initial Vehicles: {initial_vehicles}
      Van: {vanId}
      {StopsComponent}
    </div>
  )
}

export default Trip

import Stop from '../Stop/Stop'

function Trip(props) {
  const trip = props.trip
  const initial_vehicles = !trip ? "" : trip.initial_vehicles
  const vanId = !trip ? "" : trip.van.id
  const warehouseId = !trip ? "" : trip.warehouse.id
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
      Trip: {props.tripNum} - {vanId} - {warehouseId} - Initial Vehicles: {initial_vehicles}
      {StopsComponent}
    </div>
  )
}

export default Trip

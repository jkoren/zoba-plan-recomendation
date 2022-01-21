import Stop from '../Stop/Stop'
import "./Trip.css"

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
    <>
      <h4>
        Trip: {props.tripNum} - {vanId} - {warehouseId} - Initial Vehicles: {initial_vehicles}
      </h4>
      <table>
        <thead>
          <tr>
            <th>Stop number</th>
            <th>Action</th>
            <th>Num Vehicles</th>
            <th>Vehicle ID</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {StopsComponent}
        </tbody>
      </table>
    </>
  )
}

export default Trip

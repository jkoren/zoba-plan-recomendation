function Trip(props) {
  const trip = props.trip
  const initial_vehicles = !trip ? "" : trip.initial_vehicles

  return (
    <div>
      Initial Vehicles: {initial_vehicles}
    </div>
  );
}

export default Trip

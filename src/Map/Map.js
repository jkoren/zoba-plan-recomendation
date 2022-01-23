function Map(props) {
  const mockMapURL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.3244723138314!2d-97.7427688848799!3d30.25633488180571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1142d51aaa51f6c!2zMzDCsDE1JzIyLjgiTiA5N8KwNDQnMjYuMSJX!5e0!3m2!1sen!2sus!4v1642909832786!5m2!1sen!2sus`

  const mapURL = `https://www.google.com/maps/embed/v1/view\
  ?key=${process.env.REACT_APP_GOOGLE_MAPS_EMBEDDED_API_KEY}\
  &center=${props.latitude},${props.longitude}`
  // \
  // &zoom=18\
  // &maptype=satellite`

  // https://www.google.com/maps/embed/v1/view
  // ?key=YOUR_API_KEY
  // &center=-33.8569,151.2152
  // &zoom=18
  // &maptype=satellite

  // console.log(process.env.NODE_ENV)
  // console.log(process.env.REACT_APP_GOOGLE_MAPS_EMBEDDED_API_KEY)
  console.log(mapURL)
  
  const mapComponent = props.latitude === undefined ? "" : 
  <>
    
    <iframe title="map" 
      src={mapURL} 
      width="600" height="450"
      allowFullScreen="" 
      loading="lazy"
    />
    <p>Map for {props.latitude}, {props.longitude}</p>
  </>

  return (
    <> 
      {mapComponent} 
    </>
  )
}

export default Map
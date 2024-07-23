const RouteLocElement = ({ location }) => {
    return (
      <div>
        <h2>{location.name}</h2>
        <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
      </div>
    );
  };
  
  export default RouteLocElement;
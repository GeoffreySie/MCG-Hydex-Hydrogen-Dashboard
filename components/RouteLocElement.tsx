


const RouteLocElement = ({ location }) => {
    return (
      <div className="flex-col">
        <div className="flex">
        <div className={`w-4 h-4 rounded-full ${location.status === null ? 'bg-red-300' : 'bg-emerald-500'}`}></div>
        <div className="text-sm">{location.status}</div>
        </div>
        <div className="flex">
        <h2>{location.name}</h2>
        <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
        </div>
      </div>
    );
  };
  
  export default RouteLocElement;
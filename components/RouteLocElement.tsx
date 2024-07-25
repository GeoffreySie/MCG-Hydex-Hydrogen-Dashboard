const RouteLocElement = ({ location }: { location: any }) => {
    return (
      <div className="flex-col mb-1">
        <div className="flex mb-1">
        <div className={`w-4 h-4 rounded-full ${location.status === null ? 'bg-red-300' : 'bg-emerald-500'}`}></div>
        <div className="text-xs text-gray-500 ml-1">{location.status}</div>
        </div>
        <div className={`flex-col text-sm ml-1 pl-1 border-l-8 ${location.status === null ? 'border-dashed border-gray-400' : 'border-black'}`}>
          <div>Location:</div>
          <div>{location.name}</div>
          <div>Transportation method:</div>
          <div>Cryogenic tanker</div>
        </div>
      </div>
    );
  };
  
  export default RouteLocElement;
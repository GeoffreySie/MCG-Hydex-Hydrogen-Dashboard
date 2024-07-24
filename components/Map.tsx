import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, Polyline } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 51.5074,
  lng: -0.1278
};

// Define the Location interface
interface Location {
  _id: string;
  name: string;
  latitude: number;
  longitude: number;
  status: Date | null;
}

const GoogleMapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY, // Ensure your API key is accessible
  });

  // Type the locations state using the Location interface
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<Location | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('/api/locations');
        const data: Location[] = await response.json(); // Ensure the fetched data is typed
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={{
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        draggable: true,
        scaleControl: false,
        rotateControl: false,
        fullscreenControl: false,
      }}
    >
      {locations.map((location) => (
        <Marker
          key={location._id} // Use the unique ID for the key
          position={{ lat: location.latitude, lng: location.longitude }}
          label={location.name}
          onClick={() => setSelectedMarker(location)}
          icon={{
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: location.status ? 'green' : 'red', // Example color based on status
            fillOpacity: 1,
            strokeColor: 'black',
            strokeWeight: 2,
            scale: 10,
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{ lat: selectedMarker.latitude, lng: selectedMarker.longitude }}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div>
            <h3>{selectedMarker.name}</h3>
            <p>Status: {selectedMarker.status ? selectedMarker.status.toString() : 'N/A'}</p>
          </div>
        </InfoWindow>
      )}
      <Polyline
        path={locations.map(location => ({ lat: location.latitude, lng: location.longitude }))}
        options={{
          strokeColor: 'black',
          strokeOpacity: 1,
          strokeWeight: 2,
        }}
      />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, Polyline } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const markerData = [
  { lat: -3.745, lng: -38.523, color: 'red', label: 'A', info: 'Marker A' },
  { lat: -3.745, lng: -38.633, color: 'red', label: 'B', info: 'Marker B' },
  { lat: -3.855, lng: -38.523, color: 'green', label: 'C', info: 'Marker C' },
  { lat: -3.855, lng: -38.633, color: 'green', label: 'D', info: 'Marker D' },
];

const GoogleMapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'API****',
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

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
      {markerData.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          label={location.label}
          onClick={() => setSelectedMarker(location)}
          icon={{
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: location.color,
            fillOpacity: 1,
            strokeColor: 'black',
            strokeWeight: 2,
            scale: 10,
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div>
            <h3>{selectedMarker.info}</h3>
          </div>
        </InfoWindow>
      )}
      <Polyline
        path={markerData.map(location => ({ lat: location.lat, lng: location.lng }))}
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

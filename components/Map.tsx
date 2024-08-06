import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, Polyline } from '@react-google-maps/api';
import LoadingScreen from './LoadingScreen';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 51.5074,
  lng: -0.1278
};

interface RoutePoint {
  latitude: number;
  longitude: number;
  name: string;
  status: Date | null;
}

interface Product {
  _id: string;
  name: string;
  route: RoutePoint[];
}

interface GoogleMapComponentProps {
  currentSelectedProductId: string | null;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ currentSelectedProductId }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY || '',
  });

  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<RoutePoint | null>(null);

  useEffect(() => {
    const fetchProductRoute = async () => {
      if (currentSelectedProductId) {
        try {
          const response = await fetch(`/api/products/${currentSelectedProductId}`);
          const data: Product = await response.json();
          setCurrentProduct(data);
        } catch (error) {
          console.error('Error fetching product route:', error);
        }
      } else {
        setCurrentProduct(null);
      }
    };

    fetchProductRoute();
  }, [currentSelectedProductId]);

  if (!isLoaded) {
    return <LoadingScreen />;
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
      {currentProduct && currentProduct.route && currentProduct.route.map((point, index) => (
        <Marker
          key={`${currentProduct._id}-${index}`}
          position={{ lat: point.latitude, lng: point.longitude }}
          label={point.name}
          onClick={() => setSelectedMarker(point)}
          icon={{
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: point.status ? 'green' : 'red',
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
      {currentProduct && currentProduct.route && (
        <Polyline
          path={currentProduct.route.map(point => ({ lat: point.latitude, lng: point.longitude }))}
          options={{
            strokeColor: 'blue',
            strokeOpacity: 1,
            strokeWeight: 3,
          }}
        />
      )}
    </GoogleMap>
  );
};

export default GoogleMapComponent;

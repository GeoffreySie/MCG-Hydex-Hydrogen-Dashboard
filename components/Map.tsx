import React, { useEffect, useState, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, Polyline } from '@react-google-maps/api';
import LoadingScreen from './LoadingScreen';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

interface RoutePoint {
  _id: string;
  name: string;
  latitude: number;
  longitude: number;
  status: Date | null;
}

interface Product {
  _id: string;
  name: string;
  route: RoutePoint[];
}

interface MapProps {
  currentSelectedProductId: string | null;
}

const Map: React.FC<MapProps> = ({ currentSelectedProductId }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY || '',
  });

  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<RoutePoint | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const fetchProductRoute = async () => {
      if (currentSelectedProductId) {
        setCurrentProduct(null);

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

    setSelectedMarker(null);

    fetchProductRoute();
  }, [currentSelectedProductId]);

  useEffect(() => {
    if (mapRef.current && currentProduct && currentProduct.route.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      currentProduct.route.forEach(point => {
        bounds.extend(new window.google.maps.LatLng(point.latitude, point.longitude));
      });
      mapRef.current.fitBounds(bounds);
    }
  }, [currentProduct]);

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <GoogleMap
      key={currentSelectedProductId} // Force re-render by using key
      mapContainerStyle={containerStyle}
      onLoad={map => {
        mapRef.current = map; // Assign the map instance to the ref
      }}
      options={{
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        draggable: true,
        scaleControl: false,
        rotateControl: false,
        fullscreenControl: false,
        keyboardShortcuts: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      }}
    >
      {currentProduct && currentProduct.route.map((point, index) => (
        <Marker
          key={`${currentProduct._id}-${index}`}
          position={{ lat: point.latitude, lng: point.longitude }}
          onClick={() => setSelectedMarker(point)}
          icon={{
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: point.status ? 'green' : 'red',
            fillOpacity: 1,
            strokeColor: 'black',
            strokeWeight: 2,
            scale: 8,
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{ lat: selectedMarker.latitude, lng: selectedMarker.longitude }}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div>
            <p className='text-md font-bold'>{selectedMarker.name}</p>
            <p>Last updated: {selectedMarker.status ? selectedMarker.status.toString() : 'N/A'}</p>
          </div>
        </InfoWindow>
      )}
      {currentProduct && currentProduct.route && (
        <Polyline
          path={currentProduct.route.map(point => ({ lat: point.latitude, lng: point.longitude }))}
          options={{
            strokeColor: 'black',
            strokeOpacity: 1,
            strokeWeight: 3,
          }}
        />
      )}
    </GoogleMap>
  );
};

export default Map;
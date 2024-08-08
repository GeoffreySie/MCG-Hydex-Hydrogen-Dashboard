import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, Polyline } from '@react-google-maps/api';
import LoadingScreen from './LoadingScreen';
import { Black_And_White_Picture } from 'next/font/google';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

// Update the center to be more representative of England's geographical center
const center = {
  lat: 54.3555,
  lng: -3.9743
};

// Set a zoom level that covers all of England
const initialZoom = 6;

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

  useEffect(() => {
    const fetchProductRoute = async () => {
      if (currentSelectedProductId) {
        setCurrentProduct(null); // Clear current product to reset map

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

    setSelectedMarker(null); // Clear selected marker

    fetchProductRoute();
  }, [currentSelectedProductId]);

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <GoogleMap
      key={currentSelectedProductId} // Use key to force re-render
      mapContainerStyle={containerStyle}
      center={center}
      zoom={initialZoom} // Use the initial zoom level
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
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              { "color": "#424242" } // Lighter background color
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              { "visibility": "off" } // Hide icons
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              { "color": "#e0e0e0" } // Light gray label color
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              { "color": "#424242" } // Darker stroke for labels
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              { "color": "#757575" } // Medium gray for administrative areas
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              { "color": "#ffffff" } // White for country labels
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "labels.text.fill",
            "stylers": [
              { "color": "#ffffff" } // White for province labels
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              { "color": "#303030" } // Dark gray for landscape
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              { "color": "#424242" } // Medium gray for points of interest
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              { "color": "#616161" } // Medium gray for roads
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              { "color": "#1a1a1a" } // Darker gray for water
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              { "color": "#424242" } // Medium gray for transit
            ]
          }
        ]
      }}
    >
      {currentProduct && currentProduct.route && currentProduct.route.map((point, index) => (
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
import React from 'react';
//import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 35.6539, // Approximate coordinates for Edmond, OK
  lng: -97.4780
};

const InfoLogistics: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold mb-8 text-center">Daycare Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <div>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div> */}
          <div>
            <ul className="space-y-4">
              <li><strong>Location:</strong> 1340 NW 168th st, Edmond OK 73012</li>
              <li><strong>Hours of Operation:</strong> 7am-6pm</li>
              <li><strong>Languages:</strong> English and Spanish</li>
              <li><strong>Services:</strong> Potty Training offered</li>
              <li><strong>Age Range:</strong> 3 months to preschool</li>
              <li><strong>License Number:</strong> K820051742</li>
              <li><strong>Capacity:</strong> 4 children</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoLogistics;
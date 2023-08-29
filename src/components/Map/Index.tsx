import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { MapContainer } from "./styles";

interface LocalMapProps {
  googleMapsApiKey: string
}

const center = {
  lat: -22.22591,
  lng: -45.9254,
};

export const LocalMap: React.FC<LocalMapProps> = ({googleMapsApiKey}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey
  });

  return (
    <MapContainer>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={18}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </MapContainer>
  );
};

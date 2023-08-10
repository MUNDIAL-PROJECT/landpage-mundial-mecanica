import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { MapContainer } from "./styles";

const center = {
  lat: -22.22591,
  lng: -45.9254,
};

export const LocalMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBgXysLDEJm93BQIA-IP6TTwLtaxCBYwVc",
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

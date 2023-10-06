import { GoogleMap } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

export default function MapContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 13.685465, lng: 100.4360434 }), []);
  return (
    <div>
      <GoogleMap
        zoom={20}
        center={center}
        mapContainerClassName="w-[700px] h-[500px]"
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}

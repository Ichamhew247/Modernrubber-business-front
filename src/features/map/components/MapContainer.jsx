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
        mapContainerClassName="xs:w-[320px] xs:h-[240px] sm:w-[340px] sm:h-[370px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[500px]"
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}

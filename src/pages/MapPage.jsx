import Map from "../features/map/components/Map";
import Contact from "../features/map/components/Contact";

export default function MapPage() {
  return (
    <>
      <main className="flex flex-col justify-between gap-0">
        <Map />
        <Contact />
      </main>
    </>
  );
}

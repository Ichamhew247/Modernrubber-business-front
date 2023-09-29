import Contact from "./components/Contact";
import Map from "./components/Map";

// };
export default function MapPage() {
  return (
    <>
      <main className="flex flex-col justify-between gap-32">
        <Map />
        <Contact />
      </main>
    </>
  );
}

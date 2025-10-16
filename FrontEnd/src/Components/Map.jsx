import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons in Vite build
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function RegionalMap() {
  const hotspots = [
    { id: 1, name: "Central Hospital Zone", coords: [28.6139, 77.209], level: "High" },
    { id: 2, name: "North District", coords: [28.7041, 77.1025], level: "Moderate" },
    { id: 3, name: "East Care Area", coords: [28.5355, 77.391], level: "Low" },
  ];

  return (
    <MapContainer
      center={[28.6139, 77.209]}
      zoom={11}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {hotspots.map((spot) => (
        <Marker key={spot.id} position={spot.coords}>
          <Popup>
            <strong>{spot.name}</strong>
            <br />
            Risk Level: {spot.level}
          </Popup>
          <Circle
            center={spot.coords}
            radius={
              spot.level === "High" ? 3000 : spot.level === "Moderate" ? 2000 : 1000
            }
            color={
              spot.level === "High" ? "red" : spot.level === "Moderate" ? "orange" : "green"
            }
            fillOpacity={0.3}
          />
        </Marker>
      ))}
    </MapContainer>
  );
}

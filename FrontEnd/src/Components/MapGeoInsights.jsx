/* eslint-disable */

// src/Components/GeoInsights.jsx
import { MapContainer, TileLayer, Circle, Marker, Popup, LayersControl, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
import { Activity, MapPin, Cloud, Ambulance, Filter } from "lucide-react";

import BackButton from "./BackButton";

// Fix marker icons in Vite builds
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function GeoInsights() {
  // Example data
  const hospitals = [
    { id: 1, name: "City General Hospital", coords: [28.6139, 77.2090], demand: "High" },
    { id: 2, name: "North Care Center", coords: [28.7041, 77.1025], demand: "Medium" },
    { id: 3, name: "East Medical Hub", coords: [28.5355, 77.3910], demand: "Low" },
  ];

  const ambulances = [
    { id: 1, coords: [28.61, 77.23], status: "Available" },
    { id: 2, coords: [28.60, 77.17], status: "Busy" },
    { id: 3, coords: [28.68, 77.12], status: "Available" },
  ];

  const pollutionZones = [
    { id: 1, coords: [28.63, 77.22], level: 180 },
    { id: 2, coords: [28.58, 77.16], level: 220 },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#061824] text-gray-100">
      <BackButton />
      {/* Sidebar Controls */}
      <motion.div 
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="md:w-80 w-full bg-[#0F2A3C] p-6 border-r border-gray-800 flex flex-col gap-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-teal-400 mb-1">Map & Geo Insights</h2>
          <p className="text-gray-400 text-sm">Geospatial intelligence for predictive demand & mobility.</p>
        </div>

        {/* Filters */}
        <div className="bg-[#112E42] p-4 rounded-xl border border-gray-700 flex flex-col gap-4">
          <h3 className="text-teal-300 flex items-center gap-2 text-lg"><Filter size={18}/> Filters</h3>
          <label className="flex items-center gap-2 text-gray-300">
            <input type="checkbox" className="accent-teal-400" defaultChecked /> Show Hospitals
          </label>
          <label className="flex items-center gap-2 text-gray-300">
            <input type="checkbox" className="accent-teal-400" defaultChecked /> Show Ambulances
          </label>
          <label className="flex items-center gap-2 text-gray-300">
            <input type="checkbox" className="accent-teal-400" defaultChecked /> Pollution Overlay
          </label>
          <label className="flex items-center gap-2 text-gray-300">
            <input type="checkbox" className="accent-teal-400" /> Festival Zones
          </label>
        </div>

        {/* Legend */}
        <div className="bg-[#112E42] p-4 rounded-xl border border-gray-700">
          <h3 className="text-teal-300 mb-2 flex items-center gap-2"><MapPin size={18}/> Legend</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span> High Demand</li>
            <li><span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-2"></span> Medium Demand</li>
            <li><span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span> Low Demand</li>
            <li><span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2"></span> Ambulance</li>
          </ul>
        </div>
      </motion.div>

      {/* Main Map Area */}
      <div className="flex-1 relative">
        <MapContainer
          center={[28.6139, 77.209]}
          zoom={11}
          scrollWheelZoom={true}
          className="h-full w-full z-0"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LayersControl position="topright">
            <LayersControl.Overlay checked name="Hospital Demand">
              <LayerGroup>
                {hospitals.map((h) => (
                  <Marker key={h.id} position={h.coords}>
                    <Popup>
                      <strong>{h.name}</strong><br/>
                      Demand: {h.demand}
                    </Popup>
                    <Circle
                      center={h.coords}
                      radius={
                        h.demand === "High" ? 4000 :
                        h.demand === "Medium" ? 2500 : 1500
                      }
                      color={
                        h.demand === "High" ? "red" :
                        h.demand === "Medium" ? "orange" : "green"
                      }
                      fillOpacity={0.3}
                    />
                  </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay checked name="Pollution Zones">
              <LayerGroup>
                {pollutionZones.map((p) => (
                  <Circle
                    key={p.id}
                    center={p.coords}
                    radius={2000}
                    color={p.level > 200 ? "purple" : "gray"}
                    fillOpacity={0.4}
                  >
                    <Popup>
                      <Cloud className="inline mr-1" size={14}/> Pollution Index: {p.level}
                    </Popup>
                  </Circle>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay checked name="Ambulances">
              <LayerGroup>
                {ambulances.map((a) => (
                  <Marker key={a.id} position={a.coords}>
                    <Popup>
                      <Ambulance className="inline mr-1" size={14}/> Status: {a.status}
                    </Popup>
                  </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>

        {/* Floating Insights Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 right-6 bg-[#0F2A3C] p-5 rounded-2xl shadow-lg border border-gray-700 w-72 backdrop-blur-sm z-2"
        >
          <h3 className="text-teal-300 font-semibold mb-3 flex items-center gap-2"><Activity size={18}/> Live Insights</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>🩺 Predicted surge zone: <span className="text-red-400 font-semibold">Central District</span></li>
            <li>🚑 Active ambulances: <span className="text-blue-400 font-semibold">12 / 18</span></li>
            <li>☁️ Avg Pollution Index: <span className="text-purple-400 font-semibold">192 AQI</span></li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

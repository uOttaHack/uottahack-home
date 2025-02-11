import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerIcon from "../../images/map/tracker.png";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

export default function Map() {
  const customIcon = L.icon({
    iconUrl: MarkerIcon,
    // shadowUrl: 'leaf-shadow.png',

    iconSize: [35, 35], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  return (
    <MapContainer
      center={[39.32610506774254, -82.10586303762311]}
      zoom={17}
      style={{ height: "500px" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[39.326796, -82.105846]} icon={customIcon}>
        <Popup>
          Academic Research Center: <br />
          This is where the workshops, dinner, and judging will take place.
        </Popup>
      </Marker>
      <Marker position={[39.325859, -82.105676]} icon={customIcon}>
        <Popup>
          Irvine Hall:
          <br />
          This is where registration, lunch, opening ceremony, and closing
          ceremony will take place.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

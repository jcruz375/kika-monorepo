import L from "leaflet";
import mapMarkerImg from '../assets/images/mapMarker.svg';

const MapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [30, 30],
  popupAnchor: [0, -20]
});

export default MapIcon;
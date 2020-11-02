import React from 'react';
import PageRoot from '../../components/PageRoot';
import { Map, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import mapIcon from '../../utils/mapIcon'
import './styles.css';

function DeliveryPage() {
	return (
		<PageRoot>
			<div id="content" className="container">
				<h1>Funcionamos apenas com delivery!</h1>
				<br />
				<h3>Temos uma taxa de entrega de R$1,00 por KM de distância</h3>
				<br />
				<div className="map">
					<Map
						center={[-23.725571, -46.708766]}
						zoom={17}
						style={{ width: '100%', height: '100%' }}
					>
						<TileLayer
							url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
						/>
						<Marker icon={mapIcon} position={[-23.725571, -46.708766]}>
						</Marker>
					</Map>
				</div>
			</div>
		</PageRoot>
	);
};


export default DeliveryPage;
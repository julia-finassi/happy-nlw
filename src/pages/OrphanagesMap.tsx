import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapIcon from '../utils/mapIcon';
import mapMarkerImg from '../images/map-marker.svg';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap () {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    console.log(orphanages)

    useEffect(() =>{
        api.get('/orphanages').then(response => {
            setOrphanages(response.data);
        })
    },[]); //FUNÇAO > QUANDO OQ ALTERAR FAZER A FUNÇAO

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Campinas</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[-22.9090659,-47.0875054]}
                zoom={14}
                style={{ width: '100%', height: '100%'}} /* chave de novo pra indicar objeto */ 
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />  */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                {/* z de zoom x de eixo x e y de eixo y */}
                {orphanages.map(orphanage => {
                    return (
                    <Marker 
                        key={orphanage.id}
                        icon={mapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                    >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color="#fff"/>
                        </Link>
                    </Popup>
                </Marker>
                    )
                })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>

        </div>
    );
}

export default OrphanagesMap;
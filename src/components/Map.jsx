import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";
import { useTranslation } from 'react-i18next'

import '../App.css'

function MapContent() {
    const map = useMap();
    const { t } = useTranslation()

    const markers =[
        {position: [45.07292308205829, 7.572681564257071], popup: `${t("view_home.places.minghetti.title")}<br/>${t("view_home.places.minghetti.address")}<br/>${t("view_home.places.minghetti.floor")}`},
        {position: [45.13606767600684, 7.047339681873459], popup: `${t("view_home.places.canavoso.title")}<br/>${t("view_home.places.canavoso.address")}`},
    ]

    useEffect(() => {
        const group = L.featureGroup(markers.map(marker => L.marker(marker.position)));
        map.fitBounds(group.getBounds(), { padding: [50, 50] });
    }, [map, markers]);

    return (
        <>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {
                markers.map((marker, idx) => (
                    <Marker key={idx} position={marker.position}>
                        <Popup>
                            <div dangerouslySetInnerHTML={{__html: marker.popup}} />
                        </Popup>
                    </Marker>
                ))
            }
        </>
    );
}

function Map() {
    return (
        <MapContainer className="w-full h-[480px]">
            <MapContent />
        </MapContainer>
    );
}

export default Map;
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function MapComponent() {
    const position = { lat: 38.565533703998085, lng: -0.091235431018248 };
    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <Map style={{ width: "100%", height: "100%" }} defaultCenter={position} defaultZoom={15} mapId={import.meta.env.VITE_MAP_ID}>
                <AdvancedMarker position={position}></AdvancedMarker>
            </Map>
        </APIProvider>
    );
}

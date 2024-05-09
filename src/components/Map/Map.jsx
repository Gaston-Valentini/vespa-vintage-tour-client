import { Component } from "react";

class Map extends Component {
    componentDidMount() {
        if (!window.google) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_API_KEY}&callback=initMap&libraries=places`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
            script.onload = () => {
                this.initMap();
            };
        } else {
            this.initMap();
        }
    }

    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 38.5410981225187, lng: -0.12553243203016357 },
            zoom: 15,
        });

        const service = new window.google.maps.places.PlacesService(map);

        service.getDetails(
            {
                placeId: import.meta.env.VITE_GOOGLE_PLACE_ID,
            },
            (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    const marker = new window.google.maps.Marker({
                        position: place.geometry.location,
                        map: map,
                        title: place.name,
                    });

                    const infowindow = new window.google.maps.InfoWindow({
                        content: `<div><strong>${place.name}</strong><br>${place.formatted_address}<br><a href="${place.url}" target="_blank">Ver en Google Maps</a></div>`,
                    });

                    marker.addListener("click", () => {
                        infowindow.open({
                            anchor: marker,
                            map,
                            shouldFocus: false,
                        });
                    });
                }
            }
        );
    };

    render() {
        return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
    }
}

export default Map;

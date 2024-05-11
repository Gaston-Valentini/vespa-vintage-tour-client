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
            center: { lat: 38.565609, lng: -0.091514 },
            zoom: 15,
        });

        const marker = new window.google.maps.Marker({
            position: { lat: 38.565609, lng: -0.091514 },
            map: map,
            title: "Vespa Vintage Tour",
        });

        const infowindow = new window.google.maps.InfoWindow({
            content: "<div><strong>Vespa Vintage Tour</strong>",
        });

        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });
    };

    render() {
        return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
    }
}

export default Map;

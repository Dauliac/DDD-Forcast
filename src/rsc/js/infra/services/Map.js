export class Map {
    constructor(mapboxgl, lon, lat) {
        this._token = 'pk.eyJ1IjoiZGF1bGlhYyIsImEiOiJja2c3MTlxejkwMnV6Mnhvejk2d3dtZThjIn0.Q4RzL44EJh2PHgfVZFLsYQ';
        this._style = 'mapbox://styles/mapbox/streets-v11'
        this._defaultLon = -0.57944
        this._defaultLat = 44.83778
        if (lat) {
            this._defaultLat = lat
        }
        if (lon) {
            this._defaultLon = lon
        }
        this._mapboxgl = mapboxgl
    }

    init(callback) {
        console.log(this._token)
        let mapboxgl = this._mapboxgl
        mapboxgl.accessToken = this._token

        let map = new mapboxgl.Map({
          container: 'map', // Container ID
          style: this._style, // Map style to use
          center: [this._defaultLon, this._defaultLat], // Starting position [long, lat]
          zoom: 12, // Starting zoom level
        })

        // Get location
        let geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })

        let marker = new mapboxgl.Marker() // initialize a new marker
          .setLngLat([this._defaultLon, this._defaultLat]) // Marker [lng, lat] coordinates
          .addTo(map); // Add the marker to the map

        let geocoder = new MapboxGeocoder({ // Initialize the geocoder
          accessToken: mapboxgl.accessToken, // Set the access token
          mapboxgl: mapboxgl, // Set the mapbox-gl instance
          marker: false, // Do not use the default marker style
          placeholder: 'Recherchez une ville,un code postal, ... 🌞', // Placeholder text for the search bar
        })

        // Add the geocoder to the map
        map.addControl(geocoder)

        // After the map style has loaded on the page,
        // add a source layer and default styling for a single point
        map.on('load', function() {
          map.addSource('single-point', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: []
            }
          })

        map.addLayer({
            id: 'point',
            source: 'single-point',
            type: 'circle',
            paint: {
                'circle-radius': 10,
                'circle-color': '#448ee4'
            }
        })
        // Listen for the `result` event from the Geocoder
        // `result` event is triggered when a user makes a selection
        //  Add a marker at the result's coordinates
        geocoder.on('result', function(e) {
            map.getSource('single-point').setData(e.result.geometry)
            console.log(e.result.geometry)
            const lon = e.result.geometry.coordinates[0]
            const lat = e.result.geometry.coordinates[1]
            return callback(lon, lat)
          })
        })

        map.addControl(geolocate);
        geolocate.on('geolocate', (e) => {
              const lon = e.coords.longitude
              const lat = e.coords.latitude
              return callback(lon, lat)
        })
    }
}

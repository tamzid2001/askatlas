import React, { useRef, useEffect, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Map.css';
import Fire from './assets/fire.png';
import { Editor } from '@tinymce/tinymce-react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
//import 'mapbox-gl-controls/lib/controls.css';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
mapboxgl.accessToken =
  'pk.eyJ1IjoidGFtbXl3YW1teSIsImEiOiJjbGF2cGZuZTgwN3d1M3ZucHdlNTVwbW1jIn0.IGJDGKvQwt1kt7LgCtuAig';
const Map = ({navigation}) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const mapContainerRef = useRef(null);
  const cRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);
  const [file, setFile] = useState();
  const [id,setid] = useState('');
  const [mk, setmk] = useState(null);
  const [list,setList] = useState(undefined)
  var currentMarkers = [];
  const geojson = {
    'type': 'FeatureCollection',
    'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-66.324462, -16.024695]
      },
      'properties': {
        'message': 'Foo',
        'iconSize': [60, 60],
        'id': '3',
        'color': '#000000'
    }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Bar',
        'id': '2',
        'iconSize': [50, 50]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-61.21582, -15.971891]
      }
    },
    {
      'type': 'Feature',
      'properties': {
      'message': 'Baz',
      'id': '1',
      'iconSize': [40, 40]
      },
      'geometry': {
      'type': 'Point',
      'coordinates': [-63.292236, -18.281518]
      }
    }
    ]
    
};

const [geoJson, setgeo] = useState(geojson);

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
    
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    map.on('click', (event) => {
      //event.preventDefault();
      console.log(event.target._markers);
      var coordinates = event.lngLat;
      const marker = new mapboxgl.Marker({
        color: "#FF0FFF",
        draggable: true,
        anchor: 'center'
        }).setLngLat([coordinates.lat,coordinates.lng])
        .addTo(map);
        marker.getElement().setAttribute('data-id', '0')
        marker.getElement().addEventListener('click', (event) => {
          
          //setid(geojson.features[ci].properties.id);
          event.preventDefault();
          setmk(marker);
          setModalVisible(true);
        });
        currentMarkers.push(marker);
    })
    map.on('load', () => {
      var ci = 0;
      for(var i=0;i<geojson.features.length;i++){
        // Set marker options.
        ci = i;
        const marker = new mapboxgl.Marker({
          color: geojson.features[i].properties.color,
          draggable: false
        }).setLngLat(geojson.features[i].geometry.coordinates)
          .addTo(map);

          marker.getElement().setAttribute('data-id', '0');
          marker.getElement().classList.add('marker-1234');
          marker.getElement().addEventListener('click', (event) => {
            setid(geojson.features[ci].properties.id);
            event.preventDefault();
            setmk(marker);
            setModalVisible(true);
          });
          currentMarkers.push(marker);
      }
    })
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: false
  }));
  const nav = new mapboxgl.NavigationControl({
    visualizePitch: true
});

map.addControl(nav, 'bottom-right');
map.addControl(
  new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
  }), "top-left"
  );
  const language = new MapboxLanguage();
  map.addControl(language);
  //map.addControl(new mapboxgl.FullscreenControl());
  async function getElevation() {
    // Construct the API request.
    const query = await fetch(
      `https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2/tilequery/${lng},${lat}.json?layers=contour&limit=50&access_token=${mapboxgl.accessToken}`,
      { method: 'GET' }
    );
    if (query.status !== 200) return;
    const data = await query.json();
    // Get all the returned features.
    const allFeatures = data.features;
    console.log(allFeatures);
    // For each returned feature, add elevation data to the elevations array.
    const elevations = allFeatures.map((feature) => feature.properties.ele);
    console.log(elevations);
    // In the elevations array, find the largest value.
    const highestElevation = Math.max(...elevations);
    console.log(highestElevation);
  }
  class HomeButton {
    onAdd(map) {
      const div = document.createElement("div");
      div.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
      div.innerHTML = `<button>
        
      <img width="29px" height="29px" class="ai"/>    
   </button>`;
      div.addEventListener("contextmenu", (e) => e.preventDefault());
      div.addEventListener("click", () => {
        //map.flyTo(homePosition)
        
        
        const marker = new mapboxgl.Marker({
          color: "#FF0FFF",
          draggable: true,
          anchor: 'center'
          }).setLngLat([lat,lng])
          .addTo(map);
        map.on('move', () => {
          setLng(map.getCenter().lng.toFixed(4));
          setLat(map.getCenter().lat.toFixed(4));
          setZoom(map.getZoom().toFixed(2));
        });

        function onDragEnd() {
          const lngLat = marker.getLngLat();
          const randID = "";
          // const elv = 0;
          // getElevation().then((elvation) => {
          //   elv = elvation;
          // }).catch((err) => {
          //   console.log(err);
          // })
          // geojson.geo.features.push({'id':randID,'name': '', 
          // 'properties': {
          //  'elevation': elv,
          //  'color': '#000000'
          // },
          // 'geometry': {
          //   'type': 'Point',
          //   'coordinates': lngLat.toArray()
          //   }})
          setModalVisible(true);
          marker.getElement().setAttribute('data-id', randID)
          marker.getElement().addEventListener('click', () => {
            setid();
            setModalVisible(true);
          });
          marker.setDraggable(false);
          return;
          }
           
          marker.on('dragend', onDragEnd);
      
      });

      return div;
    }
  }
  const homeButton = new HomeButton();
  map.addControl(homeButton, "top-right");
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
    function deleteMarker() {
      mk.remove();
      setmk(null);
      //const i = data.findIndex(mI)
      if(i > 0) {
        //remove from data, rerender
      }
    }
    // function handleColor(color, event) {
    //   const i = geojson.findIndex(id);
    //   geojson[i].geo.features.properties.color = color;
    // }
    const handleChangeComplete = (color, event) => {
      mk.color = color.hex;
      mk.remove();
      for(var z = 0; z < geojson.features.length;z++){
        if(geojson.features[z].properties.id == setid){
            // Add an element to the dictionary
            geojson.features[z].properties.color = color.hex;
            setgeo(geojson);
            break; // If you want to break out of the loop once you've found a match
        }
    }
    for (var i = currentMarkers.length - 1; i >= 0; i--) {
      currentMarkers[i].remove();
    }
    currentMarkers = [];
    for(var i=0;i<geoJson.features.length;i++){
      // Set marker options.
      const marker = new mapboxgl.Marker({
        color: geoJson.features[i].properties.color,
        draggable: false
      }).setLngLat(geoJson.features[i].geometry.coordinates)
        .addTo(map);

        marker.getElement().setAttribute('data-id', '0')
        marker.getElement().addEventListener('click', (event) => {
          setid(geoJson.features[i].properties.id);
          event.preventDefault();
          setmk(marker);
          setModalVisible(true);
        });
        currentMarkers.push(marker);
    }
      console.log("colorchange");
      console.log(mk);
      //this.setState({ background: color.hex });
    };
    const styles = StyleSheet.create({
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
      },
      modalView: {
        margin: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#ffffff !important',
        borderRadius: 0,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: '0.5rem',
        padding: 10,
        elevation: 2,
        width: 'fit-content',
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 0,
        textAlign: 'center',
      },
    });
  return (
    <div>
      <div className='map-container' id="map" ref={mapContainerRef} />
      <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
            <>
            <Editor
        apiKey='your-api-key'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      {/* <div class="info_box">
        <p class="last-edited">Last edited: 12/30/2022</p>
        <p class="last-edited">Place</p>
        <p class="last-edited">Long,Lat</p>
        <p class="last-edited">elevation</p>
      </div> */}
      <div class="delete_point">
        <button class="button-38" onClick="deleteMarker()">Delete</button>
        <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
        </Pressable>
      </div>
            </>
          </Modal>
          </>
          </div>
  );
};

export default Map;
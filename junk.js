

/* Image */
// const pictureControl = new PictureControl();
// map.addControl(pictureControl, 'bottom-right');
// map.on('picture.add', (image) => console.log('%cpicture.add', 'color: #3D5AFE', image) );
// map.on('picture.select', (image) => console.log('%cpicture.select', 'color: #3D5AFE', image) );
// map.on('picture.update', (image) => console.log('%cpicture.update', 'color: #3D5AFE', image) );
// map.on('picture.deselect', (image) => console.log('%cpicture.deselect', 'color: #3D5AFE', image) );
// map.on('style.load', () => {
//   imageControl.addImage('https://img.lunstatic.net/building-800x600/41771.jpg', {
//     position: [
//       new mapboxgl.LngLat(30.500998190307115, 50.46018203970871),
//       new mapboxgl.LngLat(30.545801809692108, 50.46018203970871),
//       new mapboxgl.LngLat(30.545801809692108, 50.44001581151167),
//       new mapboxgl.LngLat(30.500998190307115, 50.44001581151167),
//     ],
//   });
// });


/* Tooltip */
// map.addControl(new TooltipControl({
//   layer: '$fill',
//   getContent: (event) => {
//     const coords = event.lngLat;
//     return `Tooltip Example: ${coords.lng.toFixed(6)}, ${coords.lat.toFixed(6)}`;
//   },
// }));

// map.on('style.load', () => {
//   map.addLayer({
//     id: '$fill',
//     type: 'fill',
//     source: { type: 'geojson', data: polygon },
//     paint: { 'fill-opacity': 0.3, 'fill-color': '#4264fb' },
//   });
//   map.addLayer({
//     id: '$line',
//     type: 'line',
//     source: { type: 'geojson', data: polygon },
//     paint: { 'line-width': 2, 'line-color': '#4264fb' },
//   });
// });
    // const marker = new mapboxgl.Marker({
    //   color: "#FF0FFF",
    //   draggable: true
    //   }).setLngLat([0, 0])
    //   .addTo(map);
    // map.on('move', () => {
    //   setLng(map.getCenter().lng.toFixed(4));
    //   setLat(map.getCenter().lat.toFixed(4));
    //   setZoom(map.getZoom().toFixed(2));
    // });

    // Clean up on unmount
    //return () => map.remove();

    // map.addControl(
//   new mapboxgl.MapboxGeocoder({
//   accessToken: mapboxgl.accessToken,
//   mapboxgl: mapboxgl
//   })
//   );
    // Add navigation control (the +/- zoom buttons)
    /* Style */
// map.addControl(new StylesControl({
//   onChange: () => languages.value = '',
// }), 'top-left');

/* Zoom */
//map.addControl(new ZoomControl(), 'bottom-right');
//map.addControl(new MapboxStyleSwitcherControl());
/* Ruler */
// map.addControl(new RulerControl(), 'bottom-right');
// map.on('ruler.on', () => console.log('%cruler.on', 'color: #3D5AFE'));
// map.on('ruler.off', () => console.log('%cruler.off', 'color: #3D5AFE'));
// map.on('ruler.change', (params) => {
//   console.log('%cruler.change', 'color: #3D5AFE');
//   console.table(params.coordinates);
// });

/* Inspect */
// map.addControl(new InspectControl({ console: true }), 'bottom-right');

/* Compass */
//map.addControl(new CompassControl(), 'bottom-right');

// const draw = new MapboxDraw({
//   displayControlsDefault: false,
//   // Select which mapbox-gl-draw control buttons to add to the map.
//   controls: {
//   polygon: true,
//   trash: true
//   },
//   // Set mapbox-gl-draw to draw by default.
//   // The user does not have to click the polygon control button first.
// defaultMode: 'simple_select'
//   });
//   map.addControl(draw);
//   map.on('draw.create', (event)=>{console.log(event)});
//   map.on('draw.delete', updateArea);
//   map.on('draw.update', updateArea);
 
// function updateArea(e) {
//   const data = draw.getAll();
//   const answer = document.getElementById('calculated-area');
//   if (data.features.length > 0) {
//     const area = turf.area(data);
// // Restrict the area to 2 decimal points.
//     const rounded_area = Math.round(area * 100) / 100;
//     answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
//   } else {
//     answer.innerHTML = '';
//     if (e.type !== 'draw.delete')
//       alert('Click the map to draw a polygon.');
//     }
// }
//import RichEditor from './components/RichEditor';
// import {
//     CompassControl,
//     InspectControl,
//     LanguageControl,
//     RulerControl,
//     StylesControl,
//     ZoomControl,
//     TooltipControl,
//   } from 'mapbox-gl-controls';
  // async function getElevation() {
  //   // Construct the API request.
  //   const query = await fetch(
  //     `https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2/tilequery/${lng},${lat}.json?layers=contour&limit=50&access_token=${mapboxgl.accessToken}`,
  //     { method: 'GET' }
  //   );
  //   if (query.status !== 200) return;
  //   const data = await query.json();
  //   // Get all the returned features.
  //   const allFeatures = data.features;
  //   console.log(allFeatures);
  //   // For each returned feature, add elevation data to the elevations array.
  //   const elevations = allFeatures.map((feature) => feature.properties.ele);
  //   console.log(elevations);
  //   // In the elevations array, find the largest value.
  //   const highestElevation = Math.max(...elevations);
  //   console.log(highestElevation);
  // }
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
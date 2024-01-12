

// /* Image */
// // const pictureControl = new PictureControl();
// // map.addControl(pictureControl, 'bottom-right');
// // map.on('picture.add', (image) => console.log('%cpicture.add', 'color: #3D5AFE', image) );
// // map.on('picture.select', (image) => console.log('%cpicture.select', 'color: #3D5AFE', image) );
// // map.on('picture.update', (image) => console.log('%cpicture.update', 'color: #3D5AFE', image) );
// // map.on('picture.deselect', (image) => console.log('%cpicture.deselect', 'color: #3D5AFE', image) );
// // map.on('style.load', () => {
// //   imageControl.addImage('https://img.lunstatic.net/building-800x600/41771.jpg', {
// //     position: [
// //       new mapboxgl.LngLat(30.500998190307115, 50.46018203970871),
// //       new mapboxgl.LngLat(30.545801809692108, 50.46018203970871),
// //       new mapboxgl.LngLat(30.545801809692108, 50.44001581151167),
// //       new mapboxgl.LngLat(30.500998190307115, 50.44001581151167),
// //     ],
// //   });
// // });


// /* Tooltip */
// // map.addControl(new TooltipControl({
// //   layer: '$fill',
// //   getContent: (event) => {
// //     const coords = event.lngLat;
// //     return `Tooltip Example: ${coords.lng.toFixed(6)}, ${coords.lat.toFixed(6)}`;
// //   },
// // }));

// // map.on('style.load', () => {
// //   map.addLayer({
// //     id: '$fill',
// //     type: 'fill',
// //     source: { type: 'geojson', data: polygon },
// //     paint: { 'fill-opacity': 0.3, 'fill-color': '#4264fb' },
// //   });
// //   map.addLayer({
// //     id: '$line',
// //     type: 'line',
// //     source: { type: 'geojson', data: polygon },
// //     paint: { 'line-width': 2, 'line-color': '#4264fb' },
// //   });
// // });
//     // const marker = new mapboxgl.Marker({
//     //   color: "#FF0FFF",
//     //   draggable: true
//     //   }).setLngLat([0, 0])
//     //   .addTo(map);
//     // map.on('move', () => {
//     //   setLng(map.getCenter().lng.toFixed(4));
//     //   setLat(map.getCenter().lat.toFixed(4));
//     //   setZoom(map.getZoom().toFixed(2));
//     // });

//     // Clean up on unmount
//     //return () => map.remove();

//     // map.addControl(
// //   new mapboxgl.MapboxGeocoder({
// //   accessToken: mapboxgl.accessToken,
// //   mapboxgl: mapboxgl
// //   })
// //   );
//     // Add navigation control (the +/- zoom buttons)
//     /* Style */
// // map.addControl(new StylesControl({
// //   onChange: () => languages.value = '',
// // }), 'top-left');

// /* Zoom */
// //map.addControl(new ZoomControl(), 'bottom-right');
// //map.addControl(new MapboxStyleSwitcherControl());
// /* Ruler */
// // map.addControl(new RulerControl(), 'bottom-right');
// // map.on('ruler.on', () => console.log('%cruler.on', 'color: #3D5AFE'));
// // map.on('ruler.off', () => console.log('%cruler.off', 'color: #3D5AFE'));
// // map.on('ruler.change', (params) => {
// //   console.log('%cruler.change', 'color: #3D5AFE');
// //   console.table(params.coordinates);
// // });

// /* Inspect */
// // map.addControl(new InspectControl({ console: true }), 'bottom-right');

// /* Compass */
// //map.addControl(new CompassControl(), 'bottom-right');

// // const draw = new MapboxDraw({
// //   displayControlsDefault: false,
// //   // Select which mapbox-gl-draw control buttons to add to the map.
// //   controls: {
// //   polygon: true,
// //   trash: true
// //   },
// //   // Set mapbox-gl-draw to draw by default.
// //   // The user does not have to click the polygon control button first.
// // defaultMode: 'simple_select'
// //   });
// //   map.addControl(draw);
// //   map.on('draw.create', (event)=>{console.log(event)});
// //   map.on('draw.delete', updateArea);
// //   map.on('draw.update', updateArea);
 
// // function updateArea(e) {
// //   const data = draw.getAll();
// //   const answer = document.getElementById('calculated-area');
// //   if (data.features.length > 0) {
// //     const area = turf.area(data);
// // // Restrict the area to 2 decimal points.
// //     const rounded_area = Math.round(area * 100) / 100;
// //     answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
// //   } else {
// //     answer.innerHTML = '';
// //     if (e.type !== 'draw.delete')
// //       alert('Click the map to draw a polygon.');
// //     }
// // }
// //import RichEditor from './components/RichEditor';
// // import {
// //     CompassControl,
// //     InspectControl,
// //     LanguageControl,
// //     RulerControl,
// //     StylesControl,
// //     ZoomControl,
// //     TooltipControl,
// //   } from 'mapbox-gl-controls';
//   // async function getElevation() {
//   //   // Construct the API request.
//   //   const query = await fetch(
//   //     `https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2/tilequery/${lng},${lat}.json?layers=contour&limit=50&access_token=${mapboxgl.accessToken}`,
//   //     { method: 'GET' }
//   //   );
//   //   if (query.status !== 200) return;
//   //   const data = await query.json();
//   //   // Get all the returned features.
//   //   const allFeatures = data.features;
//   //   console.log(allFeatures);
//   //   // For each returned feature, add elevation data to the elevations array.
//   //   const elevations = allFeatures.map((feature) => feature.properties.ele);
//   //   console.log(elevations);
//   //   // In the elevations array, find the largest value.
//   //   const highestElevation = Math.max(...elevations);
//   //   console.log(highestElevation);
//   // }
//             // const elv = 0;
//           // getElevation().then((elvation) => {
//           //   elv = elvation;
//           // }).catch((err) => {
//           //   console.log(err);
//           // })
//           // geojson.geo.features.push({'id':randID,'name': '', 
//           // 'properties': {
//           //  'elevation': elv,
//           //  'color': '#000000'
//           // },
//           // 'geometry': {
//           //   'type': 'Point',
//           //   'coordinates': lngLat.toArray()
//           //   }})

//                   // const marker = new mapboxgl.Marker({
//         //   color: "#FF0FFF",
//         //   draggable: true,
//         //   anchor: 'center'
//         //   }).setLngLat([lat,lng])
//         //   .addTo(map);
//         // map.on('move', () => {
//         //   setLng(map.getCenter().lng.toFixed(4));
//         //   setLat(map.getCenter().lat.toFixed(4));
//         //   setZoom(map.getZoom().toFixed(2));
//         // });

//         // function onDragEnd() {
//         //   const lngLat = marker.getLngLat();
//         //   const randID = "";
//         //   setModalVisible(true);
//         //   marker.getElement().setAttribute('data-id', randID)
//         //   marker.getElement().addEventListener('click', () => {
//         //     setid();
//         //     setModalVisible(true);
//         //   });
//         //   marker.setDraggable(false);
//         //   return;
//         //   }
           
//         //   marker.on('dragend', onDragEnd);
//         // map.addControl(
//             //   new MapboxGeocoder({
//             //   accessToken: mapboxgl.accessToken,
//             //   mapboxgl: mapboxgl
//             //   }), "top-left"
//             //   );
//                 // function handleColor(color, event) {
//     //   const i = geojson.findIndex(id);
//     //   geojson[i].geo.features.properties.color = color;
//     // }
//             {/* <a class="profile_button" role="button" target="_blank" href="">
//             <div class="map_point_label">
//             <img src={Rating} className='settings'/>
//               <p class="title_point">Leave a Rating</p>   
//             </div>
//         </a>
//         <a class="profile_button" role="button" target="_blank" href="">
//             <div class="map_point_label">
//             <img src={Review} className='settings'/>
//               <p class="title_point">Write a review</p>   
//             </div>
//         </a>
//         <a class="profile_button" role="button" target="_blank" href="">
//             <div class="map_point_label">
//             <img src={Sustainability} className='settings'/>
//               <p class="title_point">Climate Action</p>   
//             </div>
//         </a>
//         <a class="profile_button" role="button" target="_blank" href="">
//             <div class="map_point_label">
//             <img src={File} className='settings'/>
//               <p class="title_point">Terms & Conditions</p>   
//             </div>
//         </a>
//         <a class="profile_button" role="button" target="_blank" href="">
//             <div class="map_point_label">
//             <img src={File} className='settings'/>
//               <p class="title_point">Privacy Policy</p>   
//             </div>
//         </a> */}
//                     {/* <Modal
//               {...handlers}
//               animationType="slide"
//               transparent={true}
//               visible={modalVisible}
//               onRequestClose={() => {
//                 setModalVisible(!modalVisible);
//               }}>
//                 <>
//                 <View style={styles.centeredView}>
//                   <View style={styles.modalView}>
//                     <div className="topBar">
//                     <div style={styles.titleBox}>
//                       <div>
//                         <h3>{title}</h3>
//                       </div>
//               </div>
//               <div className='descriptionBox'>
//                 <p className="mapDescription">
//                   {description}
//                 </p>
//               </div>
//               </div>
//               <div class="map_points">
//               <div class="map_functions">
//                 <button class="button-38" role="button" onClick={()=>{
//                   setModalVisible(!modalVisible);
//                   if(route.params != null) {
//                   navigation.navigate('Map', {
//                     pt: title,
//                     pd: description,
//                     plng: lng,
//                     plat: lat,
//                   });
//                 }
//                   }}>
//                     <div class="map_point_label">
//                     <img src={MapIcon} style={{width:"30px",height:"30px"}}/>
//                     <p className='actionButton'>
//                     View
//                     </p>
//                     </div> 
//                 </button>
//                 <button class="button-38" role="button" onClick={collaborate}>
//                     <div class="map_point_label">
//                     <img src={ShareIcon} style={{width:"30px",height:"30px"}}/>
//                     <p className='actionButton'>Share</p>  
//                     </div> 
//                 </button>
//                   <button class="button-38" role="button" onClick={deleteList}>
//                     <div class="map_point_label">
//                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
//     <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
// </svg>
//                     <p className='actionButton'>Delete</p>
//                     </div> 
//                   </button>
//               </div>
//               </div>
//                 </View>
//                 </View>
//               </>
//             </Modal> */}
//                 // function exportToJSON() {
//     //   var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
//     //   var downloadAnchorNode = document.createElement('a');
//     //   downloadAnchorNode.setAttribute("href", dataStr);
//     //   downloadAnchorNode.setAttribute("download", list[0].name + ".json");
//     //   document.body.appendChild(downloadAnchorNode); // required for firefox
//     //   downloadAnchorNode.click();
//     //   downloadAnchorNode.remove(); 
//     // }
//     class PitchToggle {
    
//       constructor({bearing = 135, pitch = 70, minpitchzoom = null}) {
//           this._bearing = bearing;
//           this._pitch = pitch;
//           this._minpitchzoom = minpitchzoom;
//       }
  
//       onAdd(map) {
//           this._map = map;
//           let _this = this; 
  
//           this._btn = document.createElement('button');
//           this._btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-pitchtoggle-3d';
//           this._btn.type = 'button';
//           this._btn['aria-label'] = 'Toggle Pitch';
//           this._btn.onclick = function() { 
//               if (map.getPitch() === 0) {
//                   let options = {pitch: _this._pitch, bearing: _this._bearing};
//                   if (_this._minpitchzoom && map.getZoom() > _this._minpitchzoom) {
//                       options.zoom = _this._minpitchzoom;
//                   }
//                   map.easeTo(options);
//                   _this._btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-pitchtoggle-3d';
//               } else {
//                   map.easeTo({pitch: 0, bearing: 0});
//                   _this._btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-pitchtoggle-3d';
//               } 
//           };
          
  
//           this._container = document.createElement('div');
//           this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
//           this._container.appendChild(this._btn);
  
//           return this._container;
//       }
  
//       onRemove() {
//           this._container.parentNode.removeChild(this._container);
//           this._map = undefined;
//       }
  
//   }
//     //button to create markers from prompts given to chatgpt
//     class HomeButton {
//       onAdd(map) {
//         const div = document.createElement("div");
//         div.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
//         div.innerHTML = `<button class="" style="display: flex;
//         align-items: center;
//         padding: 5px;
//         background: transparent;justify-content: center;">  
//         <img width="24" height="24" src="https://img.icons8.com/ios/50/sparkling.png" alt="sparkling"/>
//         </button>`;
//         //div.addEventListener("contextmenu", (e) => e.preventDefault());
//         div.addEventListener("click", () => {
//           navigation.navigate('Log')
//         });
  
//         return div;
//       }
//     }
//     //const homeButton = new HomeButton();
//     //map.current.addControl(homeButton, "top-right");
  
//     class ShareButton {
//       onAdd(map) {
//         const div = document.createElement("div");
//         div.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
//         div.innerHTML = `<button class="" style="display: flex;
//         align-items: center;
//         padding: 5px;
//         background: transparent;justify-content: center;">
          
//         <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/share-rounded.png" alt="share-rounded"/>
//         </button>`;
//         //div.addEventListener("contextmenu", (e) => e.preventDefault());
//         div.addEventListener("click", () => {
//           if(route.params != undefined) {
//           if (navigator.share) { 
//             navigator.share({
//               title: `${route.params}`,
//               url: `https://askatlas.org/?share=${route.params.features.id}`
//             }).then(() => {
//               console.log('Thanks for sharing!');
//             }).catch(console.error);
//             } else {
//               //shareDialog.classList.add('is-open');
//           }
//         }
//         });
  
//         return div;
//       }
//     }
//     //const shareButton = new ShareButton();
//     //map.current.addControl(shareButton, "top-right");
  
//     class DeleteButton {
//       onAdd(map) {
//         const div = document.createElement("div");
//         div.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
//         div.innerHTML = `<button class="" style="display: flex;
//         align-items: center;
//         padding: 5px;
//         background: transparent;justify-content: center;">
//         <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/filled-trash.png" alt="filled-trash"/>
//         </button>`;
//         //div.addEventListener("contextmenu", (e) => e.preventDefault());
//         div.addEventListener("click", async () => {
//           console.log("hello");
//           console.log(route.params);
//           console.log(userMapList);
//           if(route.params != undefined){
//             console.log(route.params);
//             console.log(route.params.list.data[route.params.id])
//           const userRef = doc(db, "users", auth.currentUser.uid);
    
//           // Set the "capital" field of the city 'DC'
//           await updateDoc(userRef, {
//             data: arrayRemove(route.params.list.data[parseInt(route.params.id)]),
//             lastLoggedIn: serverTimestamp()
//           });
//         }
//         });
  
//         return div;
//       }
//     }
//     //const deleteButton = new DeleteButton();
//     //map.current.addControl(deleteButton, "top-right");
//     //map.current.addControl(new PitchToggle({minpitchzoom: 11}));
<Modal
{...handlers2}
animationType="slide"
transparent={true}
visible={modalVisible2}
onRequestClose={() => {
setModalVisible2(!modalVisible2);
}}>
  <>
  <View style={styles.centeredView}>
  <View style={styles.modalView}>
    <div>
    <div className='w'>
    <div className='ai-header'>
      <h2 className='ai-title'>              
        <img src={SparklingIcon} style={{ width: "24px", height: "24px", marginRight: "10px" }} />
          <p className='how'>How can I help you today?</p>
      </h2>
    </div>
    </div>
    <div className='show'>
  <TextInput style={styles.input} multiline={true} rows={4} maxLength={1000} value={text} onChangeText={(text) => setText(text)} placeholder="Enter text here" />
  <p class="characterLength">
  Characters Left: {text.length}/1000
  </p>
  </div>
  
<div class="delete_point">
<button class="button-38 w" disabled={disabled} onClick={async ()=>{
hideDice();
  await generateMarkers().then(()=>{
    showDice();
    setModalVisible2(!modalVisible2);
    setDisabled(false);
  })
}}><p class="send">                    
  <img src={SendIcon} style={{width:"24px",height:"24px", marginRight: "10px"}}/>
Send
</p>
</button>
</div>
</div>
{/* <div class="dice">
  <div class="face front"></div>
  <div class="face back"></div>
  <div class="face top"></div>
  <div class="face bottom"></div>
  <div class="face right"></div>
  <div class="face left"></div>
</div> */}
{/* <div class="delete_point">
<button class="button-38 w" disabled={disabled2} onClick={async ()=>{
showDice();
  await generateMarkersRoll().then(()=>{
    hideDice();
    setModalVisible2(!modalVisible2);
    setDisabled(false);
  }).catch((err)=>{
    hideDice();
    setModalVisible2(!modalVisible2);
    setDisabled(false);
    console.log(err);
  })
}}><p class="send">                    
  <img src={DiceIcon} style={{width:"24px",height:"24px", marginRight: "10px"}}/>
Roll the dice!
</p>
</button>
</div> */}
</View>
</View>
  </>
</Modal>
//     const dice = document.querySelector('.dice');

//     const randomDice = () => {
//       const dice = document.querySelector('.dice');
//   const random = Math.floor(Math.random() * 10);

//   if (random >= 1 && random <= 6) {
//       rollDice(random);
//   }
//   else {
//       randomDice();
//   }
// }

// const rollDice = random => {
//   const dice = document.querySelector('.dice');
//   if(dice != null) {
//   dice.style.animation = 'rolling 4s';

//   setTimeout(() => {

//       switch (random) {
//           case 1:
//               dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
//               break;

//           case 6:
//               dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
//               break;

//           case 2:
//               dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
//               break;

//           case 5:
//               dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
//               break;

//           case 3:
//               dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
//               break;

//           case 4:
//               dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
//               break;

//           default:
//               break;
//       }

//       //dice.style.animation = 'none';

//   }, 4050);
//   }
// }
// setInterval(()=>{
// randomDice()
// }, 4050);
const handlers = useSwipeable({
  onSwipedDown: () => {setModalVisible(!modalVisible);},
  //onTap: () => {setModalVisible(!modalVisible);},
});
const handlers2 = useSwipeable({
  onSwipedDown: () => {setModalVisible2(!modalVisible2);},
  //onTap: () => {setModalVisible(!modalVisible);},
});
<button class="shareButton" data-id="${i}"> 
<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/share-rounded.png" alt="share-rounded"/>
</button> 
        {/* <div className='titleBox'>
          <div className='recents'>
            <h6 className='title'>              
              <img src={MenuIcon} style={{ width: "30px", height: "30px", marginRight: "10px" }} />
              Log
            </h6>
          </div>
          <div>
            <button className='atlasaibutton'>
              <img src={SparklingIcon} width="29px" height="29px" class=""/>    
            </button>
          </div>
        </div> */}
                      {/* <div className='w'>
              <div className='ai-header'>
                <h2 className='ai-title'>              
                  <img src={SparklingIcon} style={{ width: "36px", height: "36px", marginLeft: "10px", marginRight: "10px" }} />
                    <p className='how'>How can I help you today?</p>
                </h2>
              </div>
              </div> */}
                            //setModalVisible2(!modalVisible2);
              //setDisabled(false);
                          {/* <p class="characterLength">
            Characters Left: {text.length}/1000
            </p> */}
                  //map.flyTo(homePosition)
      // const pointArray = o[2].split('_');
      // var title = pointArray[0];
      // var description = pointArray[1];
      // setPointTitle(pointArray[0]);
      // setPointDescription(pointArray[1]);
      // setlng(pointArray[2]);
      // setlat(pointArray[3]);
      // console.log(o[2].split('_'));
      <Modal
      {...handlers}
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    setModalVisible(!modalVisible);
  }}>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <>
      <div class="subscribe-screen">
    <div class="purchase_box">
      <div class="purchase_header">
        <h1 class="features_header">
          Premium Plan
        </h1>
      </div>
<div class="features_box">
  <p class="features_point">24/7 access to AtlasAI</p>
  <p class="features_point">Offline Support</p>
</div>

<div class="purchase_button_box">
  <button class="button-38" role="button">
    <div class="map_point_label">
      <a href="https://askatlas.org" class="title_point">Continue to website</a>   
    </div>
  </button>
</div>

</div>
    </div>
      </>
    </View>
  </View>
</Modal>
      {/* <section class="profile">
        <header class="header">
          <div class="details">
            <h3 className='s'>              
            <img src={SettingsIcon} style={{ width: "30px", height: "30px", marginRight: "10px" }} />
              Settings
            </h3>
          </div>
        </header>
      </section> */}
              {/* <a class="p_button share" role="button" target="_blank" href="https://askatlas.org/">
            <div class="profile_label">
              <img src={ShareIcon2} className='settings'/>
              <p class="profile_title_point">Share Atlas</p>   
            </div>
        </a> */}
        {/* <button class="p_button facebook" role="button" target="_blank" href="">
            <div class="profile_label">
              <img src={FacebookIcon} className='settings'/>
              <p class="profile_title_point">Follow us on Facebook</p>   
            </div>
        </button>
        <button class="p_button instagram" role="button" target="_blank" href="">
            <div class="profile_label">
              <img src={InstagramIcon} className='settings'/>
              <p class="profile_title_point">Follow us on Instagram</p>   
            </div>
        </button>
        <a class="p_button twitter" role="button" target="_blank" href="https://twitter.com/askatlasapp">
            <div class="profile_label">
              <img src={TwitterIcon} className='settings'/>
              <p class="profile_title_point">Follow us on X</p>   
            </div>
        </a>
        <a class="p_button tiktok" role="button" target="_blank" href="https://www.tiktok.com/@askatlasai?_t=8iqRhPQONFj&_r=1">
            <div class="profile_label">
              <img src={TikTokIcon} className=''/>
              <p class="profile_title_point">Follow us on TikTok</p>   
            </div>
        </a> */}
                {/* <a class="p_button premium" role="button" target="_blank" href="https://askatlas.org/">
            <div class="profile_label">
            <img src={Key} className='settings'/>
            <p class="profile_title_point">Premium Plan</p>   
          </div>
        </a>
        <a class="p_button stripe" role="button" target='_blank' href={billing}>
            <div class="profile_label">
            <img src={BillingIcon} className='settings'/>
            <p class="profile_title_point">Manage Billing</p>   
          </div>
        </a> */}
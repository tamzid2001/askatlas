import React, { useRef, useEffect, useState, useCallback, } from 'react';
import { useSwipeable, UP, DOWN, SwipeEventData } from 'react-swipeable';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Alert, Image, Modal, StyleSheet, Text, Pressable, View, TextInput, SafeAreaView} from 'react-native';
import $ from 'jquery';
import MapIcon from './assets/mapIcon.png';
import BillingIcon from './assets/billing.png'
import Discuss from './assets/discuss.svg'
import SparklingIcon from './assets/sparkling.png';
import SendIcon from './assets/send.png';
import DiceIcon from './assets/dice.png';
import SparklingIconOutline from './assets/sparklingOutline.png'
import ShareIcon2 from './assets/shareIcon2.png';
import WebsiteIcon from './assets/websiteIcon.png';
import RouteIcon from './assets/routeIcon.png';
import GlobeMarker from "./assets/globe_marker.png"
import GoogleIcon from "./assets/google.svg"
import ShareIcon from "./assets/shareIcon.png"
import FacebookIcon from "./assets/facebook.svg"
import TwitterIcon from "./assets/twitter.svg"
import InstagramIcon from "./assets/instagramIcon.svg";
import TikTokIcon from "./assets/tiktok.svg"
import SettingsIcon from "./assets/settingsIcon.svg"
import MenuIcon from "./assets/menuIcon.png"
import GlobeIcon from "./assets/globeIcon.png"
import MapMarker from "./assets/map_marker.png"
import Settings from './assets/settings.png';
import AppIcon from "./assets/icon.png";
import ContentIcon from "./assets/content.png"
import Sustainability from "./assets/sustainability.png"
import User from "./assets/user.png"
import Map from "./assets/map.png"
import MarkerPlaceholder from "./assets/marker_placeholder.png"
import Marker from "./assets/marker.png"
import TwoMarkers from "./assets/two_markers.png"
import Trash from "./assets/trash.png"
import Contacts from "./assets/contacts.png"
import File from "./assets/file.png"
import Review from "./assets/review.png"
import Lock from "./assets/lock.png"
import Rating from "./assets/rating.png"
import Community from "./assets/community.png"
import Globe from "./assets/globe.png"
import Key from "./assets/key.png"
import Right from "./assets/chevron-right.png"
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {terms, privacypolicy} from "./termsandprivacy.js"
import './App.css'
import {v4 as uuidv4} from 'uuid';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
mapboxgl.accessToken =
  'pk.eyJ1IjoidGFtbXl3YW1teSIsImEiOiJjbGF2cGZuZTgwN3d1M3ZucHdlNTVwbW1jIn0.IGJDGKvQwt1kt7LgCtuAig';
import { initializeApp, firebase } from 'firebase/app';
import { onAuthStateChanged, FacebookAuthProvider, OAuthProvider, TwitterAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, doc, getDoc, updateDoc, setDoc, onSnapshot, arrayUnion, arrayRemove, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz5xN37WxbRT6DyW6mQxD700dlpXGTQns",
  authDomain: "mapmyconcern.firebaseapp.com",
  projectId: "mapmyconcern",
  storageBucket: "mapmyconcern.appspot.com",
  messagingSenderId: "981359555560",
  appId: "1:981359555560:web:309a9778efa597dffdea5d",
  measurementId: "G-22HJ6GSR49"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    margin: 0,
    width: '95%',
    height: 'fit-content',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    padding: 35,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px 0 rgba(0, 0, 0, 0.06);', /* Soft box shadow */
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
    backgroundColor: '#ffffff', /* Clear white background */
    border: '1px solid #ced4da', /* Updated to a more subtle gray */
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', /* Soft box shadow */
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    borderRadius: '2rem',

  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 0,
    textAlign: 'center',
  },
  input: {
    margin: 'auto',
    marginLeft: '5px',
    width: '100%',
    padding: '1rem',
    border: '1px solid #ced4da', /* Updated to a more subtle gray */
    borderRadius: '1rem',
    fontSize: '16px', /* Improved readability */
    color: '#495057', /* Modern, neutral text color */
    backgroundColor: '#ffffff', /* Clear white background */
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', /* Soft box shadow */
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
},
titleBox: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'baseline',
  width: '100%',
  margin: '1rem',
},
});

const MapScreen = ({navigation, route}) => {
  //console.log(route.params);
  const [userMapList,setMapList] = useState(route.params);
  const [images, setImages] = useState(route.params)
  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);
  const [id,setid] = useState('');
  const [mk, setmk] = useState(null);
  const [list,setList] = useState(undefined);
  const [disabled, setDisabled] = useState(false);
  //setData(route.params);
  function findAncestor(el) {
    console.log("hello")
    if(el.id.length != "") {
      findAncestor(el.parentElement);
    } else {
      return el;
    }
  }
  if(route.params != undefined){
    const f = route.params.list;
    console.log(f);
    console.log(route.params.id);
    var index = parseInt(route.params.id);
    var mapList = f[index].geo[0].features;
    console.log(mapList);
    for(var i=0; i<mapList.length;i++){
      console.log(mapList[i].properties.images);
      // var img = [];
      // for(var j = 0;j<mapList[i].properties.images.length;j++) {
      //   img.push({original: mapList[i].properties.images[j].urls.regular, thumbnail: mapList[i].properties.images[j].urls.thumbnail});
      // }
    const marker = new mapboxgl.Marker({
      color: "#FF0FFF",
      draggable: false,
      anchor: 'center'
      }).setLngLat([mapList[i].geometry.coordinates[0],mapList[i].geometry.coordinates[1]])
      .addTo(map.current);
      marker.getElement().id = `${mapList[i].properties.id}`;
      marker.getElement().setAttribute('data-images', JSON.stringify(mapList[i].properties.images))
      marker.getElement().setAttribute('data-x', `${mapList[i].properties.title}_${mapList[i].properties.description}_${mapList[i].geometry.coordinates[0]}_${mapList[i].geometry.coordinates[1]}`);
      marker.getElement().addEventListener('click', (event) => {
        const r = event.target.parentElement.parentElement;
        // console.log(r.id);
        // console.log(event.target.parentElement.parentElement);
        var t = document.getElementById(`${r.id}`);
        const g = t.getAttribute('data-x').split('_');
        const y = t.getAttribute('data-images');
        setImages(JSON.parse(y));
        const target = {
          center: [parseInt(g[2]), parseInt(g[3])],
          zoom: 6,
          bearing: 130,
          pitch: 75
          };
        map.current.flyTo({
          ...target, // Fly to the selected target
          duration: 5000, // Animate over 12 seconds
          essential: true // This animation is considered essential with
          //respect to prefers-reduced-motion
          });
        setTitle(g[0]);
        setDescription(g[1]);
        event.preventDefault();
        setmk(marker);
        setModalVisible2(true);
    });
  }
  }
//   {
//     "title": "Exploring the Wonders of the Great Barrier Reef",
//     "description": "Discover the vibrant marine life and breathtaking coral formations of the Great Barrier Reef, a UNESCO World Heritage Site.",
//     "geo": [
//         {
//             "type": "FeatureCollection",
//             "features": [
//                 {
//                     "type": "Feature",
//                     "properties": {
//                         "title": "Heart Reef",
//                         "description": "Marvel at the unique heart-shaped coral formation, a symbol of love and a popular destination for snorkeling and diving.",
//                         "id": "1",
//                         "message": "The Heart Reef is a popular spot for marriage proposals and vow renewals, due to its romantic shape.",
//                         "iconSize": [
//                             60,
//                             60
//                         ]
//                     },
//                     "geometry": {
//                         "type": "Point",
//                         "coordinates": [
//                             149.1481,
//                             -19.9186
//                         ]
//                     }
//                 },
//                 {
//                     "type": "Feature",
//                     "properties": {
//                         "title": "Lady Elliot Island",
//                         "description": "Explore the pristine coral gardens and encounter manta rays, turtles, and a diverse array of marine life.",
//                         "id": "2",
//                         "message": "Lady Elliot Island is home to the largest population of manta rays in the world.",
//                         "iconSize": [
//                             60,
//                             60
//                         ]
//                     },
//                     "geometry": {
//                         "type": "Point",
//                         "coordinates": [
//                             153.1289,
//                             -24.1403
//                         ]
//                     }
//                 },
//                 {
//                     "type": "Feature",
//                     "properties": {
//                         "title": "Green Island",
//                         "description": "Immerse yourself in the vibrant underwater world, teeming with colorful coral and tropical fish.",
//                         "id": "3",
//                         "message": "Green Island is a popular destination for day trips from Cairns, offering a variety of snorkeling and diving experiences.",
//                         "iconSize": [
//                             60,
//                             60
//                         ]
//                     },
//                     "geometry": {
//                         "type": "Point",
//                         "coordinates": [
//                             146.1567,
//                             -16.75
//                         ]
//                     }
//                 }
//             ]
//         }
//     ]
// }

  const handlers = useSwipeable({
    onSwipedDown: () => {setModalVisible(!modalVisible);},
  });
  const handlers2 = useSwipeable({
    onSwipedDown: () => {setModalVisible2(!modalVisible2);},
  });
  var currentMarkers = [];

let [geoJson, setgeo] = useState({type: 'FeatureCollection', features: []});
let [text, setText] = useState('');
  // Initialize map when component mounts
  useEffect(async() => {
    // await getDoc(doc(db, "users", auth.currentUser.uid)).then((doc) => {
    //   console.log(doc.data().data[0].geo[0]);
    //   setgeo(doc.data().data[0].geo[0]);
    //   return doc.data().data[0].geo[0];
    // }).catch((error) => {
    //   console.log("Error getting document:", error);
    // });
    //setgeo(userRef);
    //console.log(geoJson);
    // if(route.params != undefined){
    //   const f = route.params.list;
    //   console.log(f);
    //   for(var i=0; i<f.length;i++){
    //   const marker = new mapboxgl.Marker({
    //     color: "#FF0FFF",
    //     draggable: false,
    //     anchor: 'center'
    //     }).setLngLat([f[i].longitude,f[i].latitude])
    //     .addTo(map.current);
    //     //marker.getElement().setAttribute('id', `${x.geo[0].features[i].properties.id}`);
    //     marker.getElement().setAttribute('data-id', `0_${f[i][3]}_${f[i][4]}_${pd}`);
    //     marker.getElement().addEventListener('click', (event) => {
    //       //setid(geojson.features[ci].properties.id);
    //       setTitle("Hello");
    //       setDescription("Hello");
    //       event.preventDefault();
    //       setmk(marker);
    //       setModalVisible2(true);
    //   });
    // }
    // }
    if(map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.on('style.load', () => {
      // Custom atmosphere styling
      // map.current.setFog({
      // 'color': 'rgb(220, 159, 159)', // Pink fog / lower atmosphere
      // 'high-color': 'rgb(36, 92, 223)', // Blue sky / upper atmosphere
      // 'horizon-blend': 0.4 // Exaggerate atmosphere (default is .1)
      // });
       
      map.current.addSource('mapbox-dem', {
      'type': 'raster-dem',
      'url': 'mapbox://mapbox.terrain-rgb'
      });
       
      map.current.setTerrain({
      'source': 'mapbox-dem',
      'exaggeration': 1.5
      });
      });
    const scale = new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: 'imperial'
      });
      map.current.addControl(scale);

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.on('click', (event) => {

    })
    map.current.on('load', () => {

    })
    map.current.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: false
  }));
  const nav = new mapboxgl.NavigationControl({
    visualizePitch: true
});
  map.current.addControl(nav, 'bottom-right');
 
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
    
  return (
    <div>
      <div className='map-container' id="map" ref={mapContainerRef} />
      <>
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
                    <div className="topBar">
                    <div>
                        <h3>{title}</h3>
                      </div>
                    <div style={styles.titleBox}>
                    <ImageGallery      
                    showIndex={false}
                    showBullets={true}
                    infinite={true}
                    showThumbnails={true}
                    showFullscreenButton={true}
                    showGalleryFullscreenButton={true}
                    showPlayButton={true}
                    showGalleryPlayButton={true}
                    showNav={true}
                    isRTL={false}
                    originalHeight={100}
                    originalWidth={100}
                    slideDuration={450}
                    slideInterval={2000}
                    slideOnThumbnailOver={false}
                    thumbnailPosition="bottom"
                    showVideo={false}
                    useWindowKeyDown={true} 
                    items={images} />
                {/* <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
</svg></Text>
              </Pressable> */}
              </div>
              <div className='descriptionBox'>
                <p className="mapDescription">
                  {description}
                </p>
              </div>
              </div>
              <div class="map_points">
              {/* <div class="map_functions">
                <button class="button-38" role="button" onClick={()=>{console.log("clicked")}}>
                    <div class="map_point_label">
                    <img src={WebsiteIcon} style={{width:"30px",height:"30px"}}/>
                    <p className='actionButton'>
                    Website
                    </p>
                    </div> 
                </button>
                <button class="button-38" role="button" onClick={()=>{console.log("clicked")}}>
                    <div class="map_point_label">
                    <img src={RouteIcon} style={{width:"30px",height:"30px"}}/>
                    <p className='actionButton'>Navigate</p>  
                    </div> 
                </button>
              </div> */}
              </div>
                </View>
                </View>
              </>
            </Modal>
          </>
          </div>
  );
};

function SignIn() {

  async function Initialize(user) {
    console.log(user);
    const exist = await getDoc(doc(db, 'users', user.uid));
    if(!exist.exists){
    const usersRef = await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      data: '[]',
      lastLoggedIn: "",
      isPremium: false 
    }).then((res) => {
      console.log(res);
      return res;
    }).catch((err) => {
      console.log(err);
      return err;
    });
    }
  }
  //const auth = getAuth(app);
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      await Initialize(user).then((res)=>{
        console.log(res);
        return res;
      }).catch((err)=>{
        console.log(err);
        return err;
      })
      console.log(user);
      result.user.getIdToken().then((idToken)=>{
      // ...
      // fetch("/sessionLogin", {
      //   method: "POST",
      //   headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      //   "CSRF-Token": Cookies.get("XSRF-TOKEN"),
      //   },
      //   body: JSON.stringify({ idToken }),
      // });
      return idToken;
    });
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  return (
    <>
      <div class="signin_box">
        <div class="logo_box">
        <img src={AppIcon} style={{width:"5rem",height:"5rem"}}/>
        <p class="logo_label animate-charcter">Ask Atlas About Your World</p>
        </div>
        <div className="signin_button_box">
          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            {/* <img src={GoogleIcon} style={{width:"30px",height:"30px"}}/> */}
            Continue with Google</button>
        </div>
          <p class="terms_label">By continuing you accept the <a href="">terms of use</a> and <a href="">privacy policy</a></p>
      </div>
    </>
  )

}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerTransparent: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: '#ffffff',
          },
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#000000",
        }}
      >
        <Tab.Screen
        name="Atlas"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <img src={GlobeIcon} style={{ width: "24px", height: "24px" }} />
            ),
            headerShown: false,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerLeft: () => (
              <img src={GlobeIcon} style={{ width: "24px", height: "24px", marginLeft: "5px"}} />
            )
          }}
        />
        <Tab.Screen
          name="Log"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <img src={SparklingIconOutline} style={{ width: "24px", height: "24px",}} />
            ),
            headerShown: false,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerLeft: () => (
              <img src={SparklingIconOutline} style={{ width: "24px", height: "24px", marginLeft: "5px"}} />
            )
          }}
        />
        <Tab.Screen
            name="Settings"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <img src={SettingsIcon} style={{ width: "24px", height: "24px" }} />
            ),
            headerShown: true,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerLeft: () => (
              <img src={SettingsIcon} style={{ width: "24px", height: "24px", marginLeft: "5px"}} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

function Profile({ navigation }) {
  const [billing, setBilling] = useState(`https://billing.stripe.com/p/login/7sI6rY1MOdMAdOM8ww?prefilled_email=${auth.currentUser.email}`);
  let [open,setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  const handlers = useSwipeable({
    onSwipedDown: () => {setModalVisible(!modalVisible);},
    //onTap: () => {setModalVisible(!modalVisible);},
    touchEventOptions: { passive: false },
    preventScrollOnSwipe: true,
  });

  return (
    <>
    <div className='mapContainer'>
    <View style={{ flex: 1, justifyContent: 'start', alignItems: 'start', paddingTop: useSafeAreaInsets().top, paddingBottom: 0, bottom: 0}}>
        <div class="profile_button_box">
        <div className='signoutbuttonbox'>
        <button class="signOut" role="button" onClick={() => {signOut(auth).then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })}}>
            <div class="sign_out_label">
            <p class="sign_out_point">Sign Out</p>   
            </div>
        </button>
        </div>
            </div>
    </View>
    </div>
    </>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
        }}
      />
      <Stack.Screen
        name="Themes"
        component={Themes}
        options={{}}
      />
      <Stack.Screen
        name="terms"
        component={terms}
        options={{}}
      />
      <Stack.Screen
        name="privacypolicy"
        component={privacypolicy}
        options={{}}
      />
    </Stack.Navigator>
  );
}
  
  const HomeScreen = ({navigation}) => {
    let listRef = useRef({});
    let [text, setText] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [list, setList] = React.useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [pointTitle, setPointTitle] = useState("");
    const [pointDescription, setPointDescription] = useState("");
    const [lng, setlng] = useState(0);
    const [lat, setlat] = useState(0);
    const [mapList,setMapList] = useState(null);
    const Access_Key = 'tKqmTYXWxWdvGHHlbO8OtfdtJMYaz0KXKWKyCaG61u4';
    const fetchRequest = async (img) => {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}&per_page=20`
      );
      const dataJ = await data.json();
      const result = dataJ.results;
      //console.log(result);
      return result;
    };
    const generateMarkers = useCallback(async () => {  
      setDisabled(true);
      const myInit = {
        method: "GET",
      };
      await fetch('https://grape-c45e3.web.app/generateMarkers', myInit).then(async (res) => {
        return await res.json();
      }).then(async (x)=>{
        console.log(x);
        var d = x;
        for(var i = 0; i < x.geo[0].features.length; i++){
          d.geo[0].features[i].properties.images = [];
          await fetchRequest(d.geo[0].features[i].properties.title).then((res)=>{
            for(var t = 0;t<res.length;t++){
              d.geo[0].features[i].properties.images.push({original: res[t].urls.regular, thumbnail: res[t].urls.thumb});
            }
          })
          console.log(d.geo[0].features[i].properties.images);
          // console.log(x.geo[0].features[i].geometry.coordinates[0]);
          // console.log(x.geo[0].features[i].geometry.coordinates[1]);
          // console.log(x.geo[0].features[i].properties.id);
          // console.log(x.geo[0].features[i].properties.title);
          // console.log(x.geo[0].features[i].properties.description);
          // console.log(x.geo[0].features[i].properties.color);
        }
        console.log(d);
        const byteSize = str => new Blob([str]).size;
        console.log(byteSize(JSON.stringify(d)))
        const userRef = doc(db, "users", auth.currentUser.uid);
        const j = await getDoc(userRef);
        var t = JSON.parse(j.data().data);
        t.push(d);
        await updateDoc(userRef, {
          data: JSON.stringify(t),
          lastLoggedIn: serverTimestamp()
        });
        return x;
      }).catch((err) => {
        console.log(err);
        return err;
      });
    },[disabled]);

    $('.mapButton').on("click", (async function(){
      console.log(list);
      // const d = {features: []};
      var index = $(this).attr('data-id');
      // console.log(index);
      // var data = await getDoc(doc(db,"users", auth.currentUser.uid));
      // data = JSON.parse(data.data().data);
      // var h = data[parseInt(index)];
      // console.log(data);
      // console.log(d);
      navigation.navigate('Atlas', {list: list, id: index});
    }));

    $('.shareButton').on("click", (async function(){
      var o = $(this).attr('data-id');
      const data = await getDoc(doc(db,"users", auth.currentUser.uid));
      var d = data.data().data[parseInt(o)];
      if (navigator.share) { 
        await navigator.share({
          title: `${d.title}`,
          url: `https://askatlas.org/?share=[${d}]`
        }).then(() => {
          console.log('Thanks for sharing!');
        }).catch(console.error);
        } else {
          return ;
      }
    }));

    $('.deleteButton').on("click", (async function(){
      var o = $(this).attr('data-id');
      console.log(o);
      var data = await getDoc(doc(db,"users", auth.currentUser.uid));
      data = JSON.parse(data.data().data);
      console.log(data);
      data.splice(parseInt(o),1);
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        data: JSON.stringify(data),
        lastLoggedIn: serverTimestamp()
      });
      
    }));

    $('.atlasaibutton').on("click", (function() {
      setModalVisible2(!modalVisible2);
    }))

    $(".ai").on("click", () => {
      setModalVisible2(true);
    });

function hideDice() {
  const show = document.querySelector('.send');
  show.innerHTML = `<img src=${Discuss} width="24px" height="24px"/>`;
}
function showDice() {
  const show = document.querySelector('.send');
  show.innerHTML = `<img src=${SendIcon} width="24px" height="24px"/>`;
}
    useEffect(async ()=>{
      const sub = await onSnapshot(doc(db, "users", auth.currentUser.uid), async (doc) => {
        setList(JSON.parse(doc.data().data));
        console.log(JSON.parse(doc.data().data));
        var g = JSON.parse(doc.data().data);
        document.querySelector('.box').innerHTML = '';
        for(var i = 0;i < g.length;i++){
          var h = g[i];
          console.log(h);
          var coordinateText = h.geo[0].features;
          console.log(coordinateText);
          var ctxt = '';
          for(var y = 0; y < coordinateText.length;y++){
            ctxt += coordinateText[y].properties.title + '_' + coordinateText[y].properties.description + '_'+ coordinateText[y].geometry.coordinates[0] + '_' + coordinateText[y].geometry.coordinates[1] + '~';
          }
          var txt3 = document.createElement("div");  // Create with DOM
          txt3.setAttribute('class', 'docs');
          txt3.innerHTML = `<button class="mapButton" data-id=${i} data-c="${ctxt}" data-x="${h.title}~${h.description}~${ctxt}" 
          style="    
          padding: 10px 10px;
          border: 1px solid #e1e1e1; /* Subtle border */
          border-radius: 8px;
          background-color: #ffffff; /* Minimalistic button background */
          color: #212121; /* Close to black for the text */
          font-size: 16px;
          text-align: left;
          font-weight: normal;
          transition: all 0.3s ease;
          cursor: pointer;
          width: 100%; /* Full width for better mobile responsiveness */
          margin: 8px 0; /* Space between buttons */
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          text-wrap: balance;
          ">
          <img width="24" height="24" style="margin-right: 5px" src="https://img.icons8.com/3d-fluency/94/sparkling-1.png" alt="sparkling-1"/>
          ${h.title}
          <button class="deleteButton" data-id="${i}"> 
            <img width="30" height="30" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1"/>
          </button>   
          </button>`;
          $(".box").append(txt3);
        }
      });
    }, []);

    return (
      <>
      <div className='mapContainer' style={{paddingTop: useSafeAreaInsets().top, bottom: 0}}>
        <div className='operations'>
          <div className="box">
            </div>
        </div>
      </div>
      <div>
              <div className='show'>
                <div className='showInput'>
            <TextInput style={styles.input} multiline={true} rows={1} maxLength={1000} value={text} onChangeText={(text) => setText(text)} placeholder="Enter text here" />
            </div>
            <div class="delete_point">
        <button class="button-38" disabled={disabled} onClick={async ()=>{
          hideDice();
            await generateMarkers().then(()=>{
              showDice();
            }).catch((err)=>{
              console.log(err);
              showDice();
              return ;
            })
          }}><p class="send">                    
            <img src={SendIcon} style={{width:"24px",height:"24px", borderRadius: "1rem"}}/>
          </p>
          </button>
      </div>
            </div>
      </div>
            <>
          </>
          </>
    );
  };

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth, async (user) => {
      setUser(user);
      console.log(user);
    });
  })
  return (
    <>
      {user == null ? <SignIn /> : <MyTabs />}
    </>
    
  );
}

import React, { useRef, useEffect, useState, useCallback, } from 'react';
import { useSwipeable } from 'react-swipeable';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Alert, Image, Modal, StyleSheet, Text, Pressable, View, TextInput, SafeAreaView, ScrollView} from 'react-native';
import $ from 'jquery';
import CityMapper from './assets/citymapper.png';
import Uber from './assets/uber.png';
import Waze from './assets/waze.png';
import Navmii from './assets/navmii.png'
import MapIcon from './assets/mapIcon.png';
import BillingIcon from './assets/billing.png'
import Discuss from './assets/discuss.svg'
import SparklingIcon from './assets/sparkling.png';
import SendIcon from './assets/send.png';
import GlobeIconFilled from './assets/globeIconfilled.png';
import SparklingFilled from './assets/sparklingfilled.png';
import SettingsFilled from './assets/settingsFilled.png';
import Settings3D from './assets/settings.png';
import DiceIcon from './assets/dice.png';
import SparklingIconOutline from './assets/sparklingOutline.png'
import ShareIcon2 from './assets/shareIcon2.png';
import WebsiteIcon from './assets/websiteIcon.png';
import RouteIcon from './assets/routeIcon.png';
import GlobeMarker from "./assets/globe_marker.png"
import GoogleIcon from "./assets/google.svg"
import ShareIcon from "./assets/shareIcon.png"
//import FacebookIcon from "./assets/facebook.svg"
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
import { onAuthStateChanged, FacebookAuthProvider, OAuthProvider, TwitterAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, getAdditionalUserInfo, signInAnonymously, linkWithCredential } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, doc, getDoc, updateDoc, setDoc, onSnapshot, arrayUnion, arrayRemove, serverTimestamp, deleteDoc } from "firebase/firestore";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  GabIcon,
  GabShareButton,
  HatenaIcon,
  HatenaShareButton,
  HatenaShareCount,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  OKIcon,
  OKShareButton,
  OKShareCount,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TumblrShareCount,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  VKShareCount,
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
  XIcon,
} from "react-share";
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
    paddingTop: '8px',
    margin: 0,
    height: 'fit-content',
    width: '100%',
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
    padding: '0.7rem',
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
  const imageRef = useRef(null);
  const [index, setIndex] = useState(0);
  //console.log(route.params);
  // const [userMapList,setMapList] = useState(route.params);
  const [images, setImages] = useState([]);
  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  // const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);
  // const [id,setid] = useState('');
  const [mk, setmk] = useState([]);
  // const [list,setList] = useState(undefined);
  // const [disabled, setDisabled] = useState(false);
  //setData(route.params);
  function findAncestor(el) {
    console.log("hello")
    if(el.id.length != "") {
      findAncestor(el.parentElement);
    } else {
      return el;
    }
  }
  var m = [];


  const handlers = useSwipeable({
    onSwipedDown: () => {setModalVisible(!modalVisible);},
  });
  const handlers2 = useSwipeable({
    onSwipedDown: () => {setModalVisible2(!modalVisible2);},
  });
  //var currentMarkers = [];

// let [geoJson, setgeo] = useState({type: 'FeatureCollection', features: []});
// let [text, setText] = useState('');
  // Initialize map when component mounts
  useEffect(async() => {
    if(map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12?optimize=true',
      center: [lng, lat],
      zoom: zoom
    });
    if(route.params != undefined){
      const f = route.params.list;
        console.log(f);
        console.log(route.params.id);
        var mapList = f.geo;
    if(route.params.on == true){
      console.log(route.params.on);
    const target = {
      center: [mapList[0].latlng[0],mapList[0].latlng[1]],
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
      if(route.params != undefined){
        console.log(route.params.list);
        for(var h=0;h<mk.length;h++){
          mk[h].remove();
        }
        setmk([]);
        // const f = route.params.list;
        // console.log(f);
        // console.log(route.params.id);
        // var mapList = f.geo;
        // console.log(mapList);
        for(var i=0; i<mapList.length;i++){
          //var lati = parseInt(mapList[i].latlng.split(",")[0]);
          //var long = parseInt(mapList[i].latlng.split(",")[0]);
          //console.log(mapList[i].properties.images);
          // var img = [];
          // for(var j = 0;j<mapList[i].properties.images.length;j++) {
          //   img.push({original: mapList[i].properties.images[j].urls.regular, thumbnail: mapList[i].properties.images[j].urls.thumbnail});
          // }
        const marker = new mapboxgl.Marker({
          color: mapList[i].color,
          draggable: false,
          anchor: 'center'
          }).setLngLat([mapList[i].latlng[0],mapList[i].latlng[1]])
          .addTo(map.current);
          marker.getElement().id = `${i}`;
          marker.getElement().setAttribute('data-images', JSON.stringify(mapList[i].images))
          marker.getElement().setAttribute('data-x', `${mapList[i].title}_${mapList[i].description}_${mapList[i].latlng[0]}_${mapList[i].latlng[1]}`);
          marker.getElement().addEventListener('click', (event) => {
            const r = event.target.parentElement.parentElement;
            // console.log(r.id);
            // console.log(event.target.parentElement.parentElement);
            var t = document.getElementById(`${r.id}`);
            setIndex(parseInt(r.id));
            const g = t.getAttribute('data-x').split('_');
            const y = t.getAttribute('data-images');
            console.log(JSON.parse(y));
            setImages(JSON.parse(y));
            const target = {
              center: [parseFloat(g[2]), parseFloat(g[3])],
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
            setLat(parseFloat(g[2]));
            setLng(parseFloat(g[3]));
            //event.preventDefault();
            // setImages(g[4]);
            //setmk(marker);
            setModalVisible2(true);
            //image-gallery-description
        });
    
        m.push(marker);
      }
      setmk(m);
      route.params.on = false;
    }
    }
  }
    map.current.on('style.load', () => {
       
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
    map.current.addControl(
      new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    }), "top-left");
    map.current.addControl(new mapboxgl.FullscreenControl(), "bottom-right");
    map.current.on('click', (event) => {

    })
    map.current.on('load', () => {

    })
    map.current.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
  }));
  const nav = new mapboxgl.NavigationControl({
    visualizePitch: true
});
  map.current.addControl(nav, 'bottom-right');
      class ShareButton {
      onAdd(map) {
        const div = document.createElement("div");
        div.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
        div.innerHTML = `<button class="" style="display: flex;
        align-items: center;
        padding: 5px;
        background: transparent;justify-content: center;">
          
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/share-rounded.png" alt="share-rounded"/>
        </button>`;
        //div.addEventListener("contextmenu", (e) => e.preventDefault());
        div.addEventListener("click", async () => {
          var index = parseInt(route.params.id) == undefined ? 0 : parseInt(route.params.id);
          if (navigator.share) { 
            await navigator.share({
              title: `${d.title}`,
              url: `https://askatlas.org/sharedmap?uid=${auth.currentUser.uid}&index=${index}`
            }).then(() => {
              console.log('Thanks for sharing!');
              return ;
            }).catch(console.error);
            } else {
              return ;
            }
        });
  
        return div;
      }
    }
    const shareButton = new ShareButton();
    //map.current.addControl(shareButton, "top-right");

    class nextButton {
      onAdd(map) {
        const div = document.createElement("div");
        div.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
        div.innerHTML = `<button class="" style="display: flex;
        align-items: center;
        padding: 5px;
        background: transparent;justify-content: center;">
          
        <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/marker.png" alt="marker"/>
        </button>`;
        //div.addEventListener("contextmenu", (e) => e.preventDefault());
        div.addEventListener("click", async () => {
          var index = parseInt(route.params.id) == undefined ? 0 : parseInt(route.params.id);
          const target = {
            center: [list[index][0], list[index][0]],
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
        });
  
        return div;
      }
    }
    const nextMarkerButton = new nextButton();
    map.current.addControl(nextMarkerButton, "bottom-right");
 
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  console.log(document.getElementsByClassName("image-gallery-description"));
  var t = document.getElementsByClassName("image-gallery-description");
  console.log(t.item(0));
  for (var i = 0; i < t.length; i++) {
    console.log("hello");
    console.log(t[i]);
  }
  for (var i = 0; i < document.getElementsByClassName("image-gallery-description").length; i++) {
    console.log(document.getElementsByClassName("image-gallery-description")[i].innerHTML);
  }
  return (
    <div>
      <div className='map-container' id="map" ref={mapContainerRef} />
      <>
          <Modal
              {...handlers2}
              animationType="slide"
              transparent={true}
              visible={modalVisible2}
              onShow={()=>{
                var t = document.getElementsByClassName("image-gallery-description");
                console.log(t.item(0));
                for (var i = 0; i < t.length; i++) {
                  console.log("hello");
                  console.log(t[i]);
                }
                for (var i = 0; i < document.getElementsByClassName("image-gallery-description").length; i++) {
                  console.log(document.getElementsByClassName("image-gallery-description")[i].innerHTML);
                  document.getElementsByClassName("image-gallery-description")[i].innerHTML = `Photo by <a href='${images[i].userUrl}'>${images[i].userName}</a> on <a href='https://unsplash.com/'>Unsplash</a>`
                }
              }}
              onRequestClose={() => {
                setModalVisible2(!modalVisible2);
              }}>
                <>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <div className="topBar">
                      <div className="topBarLeft"></div>
                    <div>
                      <h3>{title}</h3>
                    </div>
                    <div style={styles.titleBox}>
                  <ImageGallery
                    ref={imageRef}      
                    showIndex={true}
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
                    </div>
                    {}
                    <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                        <button style={{border: "none", display: "flex", alignItems: "center", fontSize: "24px", fontWeight: "bold"}} onClick={()=>{
                          const link = document.createElement('a');
                          link.href = images[parseInt(document.getElementsByClassName("image-gallery-index-current")[0].innerHTML)].downloadUrl;
                          link.setAttribute('download', 'image.jpg');
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                            console.log(images[parseInt(document.getElementsByClassName("image-gallery-index-current")[0].innerHTML)].downloadUrl)
                          }} className='image-gallery-custom-action card'>
                          <img style={{marginRight: '0.5rem'}} width="36" height="36" src="https://img.icons8.com/ios-glyphs/60/download--v1.png" alt="download--v1"/>
                          Download
                        </button>
                      <button style={{border: "none", display: "flex", alignItems: "center", fontSize: "24px", fontWeight: "bold"}} onClick={()=>{setModalVisible(true)}} className='image-gallery-custom-action card'>
                        <img style={{marginRight: '0.5rem'}} width="36" height="36" src="https://img.icons8.com/ios/50/east-direction.png" alt="east-direction"/>
                        Navigate
                      </button>
                    </div>
              <div className='descriptionBox'>
                <p className="mapDescription">
                  {description}
                </p>
              </div>
              </div>
              <div className="map_points">
              </div>
                </View>
                </View>
              </>
            </Modal>
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
              <div className="topBarLeft"></div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', borderBottom: '1px solid lightgrey', lineHeight: '2.5rem'}}>
                  <h3>Navigate</h3>
                </div>
                <div style={{display: 'flex', overflowY: 'visible', width: '100%'}}>
                  <div className='nav_button' style={{marginLeft: '0px'}}>
                    <a className="nav_link" href=''>
                      <img className="nav_images" width="64" height="64" src="https://img.icons8.com/external-those-icons-flat-those-icons/48/external-Google-Maps-logos-and-brands-those-icons-flat-those-icons.png" alt="external-Google-Maps-logos-and-brands-those-icons-flat-those-icons"/>
                      <p>Google Maps</p>
                    </a>
                  </div>
                  <div className='nav_button'>
                    <a className="nav_link">
                      <img className="nav_images" width="64" height="64" src="https://img.icons8.com/color/48/apple-map.png" alt="apple-map"/>                    
                      <p>Apple Maps</p>
                    </a>
                  </div>
                  <div className='nav_button'>
                    <a className="nav_link">
                      <img className="nav_images" width="64" height="64" src={CityMapper} alt="citymapper"/>                    
                      <p>Citymapper</p>
                    </a>
                  </div>
                  <div className='nav_button'>
                    <a className="nav_link">
                      <img className="nav_images" width="64" height="64" src={Waze} alt="waze"/>                    
                      <p>Waze</p>
                    </a>
                  </div>
                </div>
                <div style={{display: 'contents'}}>
                <div style={{display: 'flex', overflowY: 'visible', width: '100%'}}>
                  <div className='nav_button' style={{marginLeft: '0px'}}>
                    <a className="nav_link">
                      <img className="nav_images" width="64" height="64" src={Navmii} alt="navmii"/>                    
                      <p>Navmii</p>
                    </a>
                  </div>
                  <div className='nav_button'>
                    <a className="nav_link">
                      <img className="nav_images" width="64" height="64" src={Uber} alt="uber"/>                    
                      <p>Uber</p>
                    </a>
                  </div>
                </div>
                </div>
                </View>
                </View>
                </Modal>
          </>
          </div>
  );
};

function SignIn() {

  
  async function Initialize(user) {
    console.log(user);
    const exist = await getDoc(doc(db, 'users', user.uid));
    console.log(exist.exists());
    if(!exist.exists()){
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
const signinanon = async () => {

  await signInAnonymously(auth)
  .then(async(result) => {
    await Initialize(result.user).then((res)=>{
      return res;
    }).catch((err)=>{
      return err;
    })
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return error;
    // ...
  });
}
  //const auth = getAuth(app);
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      console.log(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      await Initialize(user).then((res)=>{
        console.log(res);
        return res;
      }).catch((err)=>{
        console.log(err);
        return err;
      });
      console.log(user);
      await result.user.getIdToken().then((idToken)=>{
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
      return error;
    });
  }

const signInWithApple = async () => {
  const provider = new OAuthProvider('apple.com');
  provider.addScope('email');
  provider.addScope('name');

  const auth = getAuth();
  await signInWithPopup(auth, provider)
  .then(async (result) => {
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    console.log(getAdditionalUserInfo(result));
    await Initialize(user).then((res)=>{
      console.log(res);
      return res;
    }).catch((err)=>{
      console.log(err);
      return err;
    })
    // Apple credential
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;
    return idToken;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The credential that was used.
    const credential = OAuthProvider.credentialFromError(error);
    return error;
    // ...
  });
}
  return (
    <>
      <div className="signin_box">
        <div className="logo_box">
        <img src={AppIcon} style={{width:"6rem",height:"6rem", borderRadius: "16px", marginBottom: "1rem"}}/>
        <p className="logo_label animate-charcter">Sign In / Sign Up</p>
        </div>
        <div className="signin_button_box">
          <button className="google-sign-in" onClick={
            async ()=>{
            return await signInWithGoogle().then((res)=>{
              console.log(res);
              return res;
              }).catch((err)=>{
                console.log(err);
                return err;
              });
              }
            }>
              <img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
            {/* <img src={GoogleIcon} style={{width:"30px",height:"30px"}}/> */}
            &nbsp;Continue with Google</button>
            <button class="apple-sign-in" onClick={
              async ()=>{
            return await signInWithApple().then((res)=>{
              console.log(res);
              return res;
              }).catch((err)=>{
                console.log(err);
                return err;
              });
              }}>
<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTI1LjU2NSw5Ljc4NWMtMC4xMjMsMC4wNzcgLTMuMDUxLDEuNzAyIC0zLjA1MSw1LjMwNWMwLjEzOCw0LjEwOSAzLjY5NSw1LjU1IDMuNzU2LDUuNTVjLTAuMDYxLDAuMDc3IC0wLjUzNywxLjk2MyAtMS45NDcsMy45NGMtMS4xMTksMS43MDMgLTIuMzYxLDMuNDIgLTQuMjQ3LDMuNDJjLTEuNzk0LDAgLTIuNDM4LC0xLjEzNSAtNC41MDgsLTEuMTM1Yy0yLjIyMywwIC0yLjg1MiwxLjEzNSAtNC41NTQsMS4xMzVjLTEuODg2LDAgLTMuMjIsLTEuODA5IC00LjQsLTMuNDk2Yy0xLjUzMywtMi4yMDggLTIuODM2LC01LjY3MyAtMi44ODIsLTljLTAuMDMxLC0xLjc2MyAwLjMwNywtMy40OTYgMS4xNjUsLTQuOTY4YzEuMjExLC0yLjA1NSAzLjM3MywtMy40NSA1LjczNCwtMy40OTZjMS44MDksLTAuMDYxIDMuNDE5LDEuMjQyIDQuNTIzLDEuMjQyYzEuMDU4LDAgMy4wMzYsLTEuMjQyIDUuMjc0LC0xLjI0MmMwLjk2NiwwLjAwMSAzLjU0MiwwLjI5MiA1LjEzNywyLjc0NXpNMTUuMDAxLDYuNjg4Yy0wLjMyMiwtMS42MSAwLjU2NywtMy4yMiAxLjM5NSwtNC4yNDdjMS4wNTgsLTEuMjQyIDIuNzI5LC0yLjA4NSA0LjE3LC0yLjA4NWMwLjA5MiwxLjYxIC0wLjQ5MSwzLjE4OSAtMS41MzMsNC4zMzljLTAuOTM1LDEuMjQyIC0yLjU0NSwyLjE3NyAtNC4wMzIsMS45OTN6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/>
&nbsp;Continue with Apple</button>
        </div>
          <p className="terms_label">By continuing you accept the <a href="">terms of use</a> and <a href="">privacy policy</a></p>
      </div>
    </>
  )

}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <View style={{width: "100%", position: 'fixed', paddingBottom: '1rem', marginBottom: 0, bottom: 0, top: 0, left: 0, right: 0}}>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Discover"
        safeAreaInsets={{ bottom: 0 }}
        screenOptions={{
          headerShown: true,
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
          name="Discover"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <img src={focused ? SparklingFilled:SparklingIconOutline} style={{ width: "24px", height: "24px",}} />
            ),
            headerShown: true,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleStyle: {
              fontSize: 42,
              fontWeight: "bold",
            },
            // headerLeft: () => (
            //   <img src={SparklingIcon} style={{ width: "42px", height: "42px", marginLeft: "10px"}} />
            // )
          }}
        />
        <Tab.Screen
        name="Atlas"
          component={MapScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <img src={focused ? GlobeIconFilled:GlobeIcon} style={{ width: "24px", height: "24px" }} />
            ),
            headerShown: true,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleStyle: {
              fontSize: 42,
              fontWeight: "bold",
            },
            // headerLeft: () => (
            //   <img src={GlobeIconFilled} style={{ width: "42px", height: "42px", marginLeft: "10px"}} />
            // )
            
          }}
        />
        <Tab.Screen
            name="Settings"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <img src={focused ? SettingsFilled:SettingsIcon} style={{ width: "24px", height: "24px" }} />
            ),
            headerShown: true,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleStyle: {
              fontSize: 42,
              fontWeight: "bold",
            },
            // headerLeft: () => (
            //   <img src={SettingsFilled} style={{ width: "42px", height: "42px", marginLeft: "10px"}} />
            // )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}

function Profile({ navigation }) {
  //const [billing, setBilling] = useState(`https://billing.stripe.com/p/login/7sI6rY1MOdMAdOM8ww?prefilled_email=${auth.currentUser.email}`);
  //let [open,setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  var au = auth.currentUser;
  if(user != null) {
    au = au.isAnonymous;
  } else {
    au = false;
  }
  console.log(au);
  console.log(user.displayName);
  const handlers = useSwipeable({
    onSwipedDown: () => {setModalVisible(!modalVisible);},
    //onTap: () => {setModalVisible(!modalVisible);},
    touchEventOptions: { passive: false },
    preventScrollOnSwipe: true,
  });
  async function Initialize(user) {
    const exist = await getDoc(doc(db, 'users', user.uid));
    console.log(user.uid);
    console.log(exist.exists);
    console.log(exist.exists());
    await setDoc(doc(db, 'users', user.uid), {
      email: null,
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
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
  //     linkWithCredential(auth.currentUser, credential)
  // .then((usercred) => {
  //   const user = usercred.user;
  //   console.log("Anonymous account successfully upgraded", user);
  // }).catch((error) => {
  //   console.log("Error upgrading anonymous account", error);
  // });
      console.log(credential);
      console.log(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      setUser(user);
      await Initialize(user).then((res)=>{
        console.log(res);
        return res;
      }).catch((err)=>{
        console.log(err);
        return err;
      });
      console.log(user);
      await result.user.getIdToken().then((idToken)=>{
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
      return error;
    });
  }

const signInWithApple = async () => {
  const provider = new OAuthProvider('apple.com');
  provider.addScope('email');
  provider.addScope('name');

  const auth = getAuth();
  await signInWithPopup(auth, provider)
  .then(async (result) => {
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    setUser(user);
    console.log(getAdditionalUserInfo(result));
    await Initialize(user).then((res)=>{
      console.log(res);
      return res;
    }).catch((err)=>{
      console.log(err);
      return err;
    })
    // Apple credential
    const credential = OAuthProvider.credentialFromResult(result);
  //   linkWithCredential(auth.currentUser, credential)
  // .then((usercred) => {
  //   const user = usercred.user;
  //   console.log("Anonymous account successfully upgraded", user);
  // }).catch((error) => {
  //   console.log("Error upgrading anonymous account", error);
  // });
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;
    return idToken;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The credential that was used.
    const credential = OAuthProvider.credentialFromError(error);
    return error;
    // ...
  });
}

  return (
    <>
    <ScrollView contentContainerStyle={{ flexGrow: 1, width: '100%', justifyContent: 'start', alignItems: 'start'}}>
    <div className='' style={{width: '100%'}}>
        <div className="profile_button_box">
        <div class="settings-container">
  <section class="settings">
    <header class="account-header">
      <h3>Sign In</h3>
    </header>
    {au ?
    <div class="account-info">
    <div className="signin_button_box">
          <button className="google-sign-in" onClick={
            async ()=>{
            return await signInWithGoogle().then((res)=>{
              console.log(res);
              return res;
              }).catch((err)=>{
                console.log(err);
                return err;
              });
              }
            }>
              <img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
            {/* <img src={GoogleIcon} style={{width:"30px",height:"30px"}}/> */}
            &nbsp;Continue with Google</button>
            <button class="apple-sign-in" onClick={
              async ()=>{
            return await signInWithApple().then((res)=>{
              console.log(res);
              return res;
              }).catch((err)=>{
                console.log(err);
                return err;
              });
              }}>
<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTI1LjU2NSw5Ljc4NWMtMC4xMjMsMC4wNzcgLTMuMDUxLDEuNzAyIC0zLjA1MSw1LjMwNWMwLjEzOCw0LjEwOSAzLjY5NSw1LjU1IDMuNzU2LDUuNTVjLTAuMDYxLDAuMDc3IC0wLjUzNywxLjk2MyAtMS45NDcsMy45NGMtMS4xMTksMS43MDMgLTIuMzYxLDMuNDIgLTQuMjQ3LDMuNDJjLTEuNzk0LDAgLTIuNDM4LC0xLjEzNSAtNC41MDgsLTEuMTM1Yy0yLjIyMywwIC0yLjg1MiwxLjEzNSAtNC41NTQsMS4xMzVjLTEuODg2LDAgLTMuMjIsLTEuODA5IC00LjQsLTMuNDk2Yy0xLjUzMywtMi4yMDggLTIuODM2LC01LjY3MyAtMi44ODIsLTljLTAuMDMxLC0xLjc2MyAwLjMwNywtMy40OTYgMS4xNjUsLTQuOTY4YzEuMjExLC0yLjA1NSAzLjM3MywtMy40NSA1LjczNCwtMy40OTZjMS44MDksLTAuMDYxIDMuNDE5LDEuMjQyIDQuNTIzLDEuMjQyYzEuMDU4LDAgMy4wMzYsLTEuMjQyIDUuMjc0LC0xLjI0MmMwLjk2NiwwLjAwMSAzLjU0MiwwLjI5MiA1LjEzNywyLjc0NXpNMTUuMDAxLDYuNjg4Yy0wLjMyMiwtMS42MSAwLjU2NywtMy4yMiAxLjM5NSwtNC4yNDdjMS4wNTgsLTEuMjQyIDIuNzI5LC0yLjA4NSA0LjE3LC0yLjA4NWMwLjA5MiwxLjYxIC0wLjQ5MSwzLjE4OSAtMS41MzMsNC4zMzljLTAuOTM1LDEuMjQyIC0yLjU0NSwyLjE3NyAtNC4wMzIsMS45OTN6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/>
&nbsp;Continue with Apple</button>
        </div>
    </div> :  
    <>     
    {/* <p class="email"><img width="24" height="24" src="https://img.icons8.com/ios/50/new-post--v1.png" alt="new-post--v1"/>&nbsp;Email: {user == null?"":user.email}</p> */}
      {/* <p class="username"><img width="24" height="24" src="https://img.icons8.com/ios/50/guest-male.png" alt="guest-male"/>&nbsp;Display Name: {user == null?"":user.displayName}</p> */}
      <button class="btn-sign-out" role="button" onClick={
        async () => {
          return await signOut(auth).then((res)=>{
    console.log(res);
    return res;
  }).catch((err)=>{
    console.log(err);
    return err;
  })
  }}>
    Sign out
  </button>
  </>
}
<div class="card_blog" style={{width: '95%', margin: 'auto', padding: '0px'}}>
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"></img>
    </div>
    <div class="card__body">
      <span class="tag tag-blue">Technology</span>
      <h4>What's new in 2024 Tech</h4>
      <p>Explore the latest trends, tips, and tech stories that are shaping the digital landscape. Dive into our expertly crafted articles designed to inspire and inform.</p>
    </div>
    <div class="card__footer">
      <div class="user" style={{alignItems: 'center', fontSize: 'larger'}}>
        <img height="48" width="48" src={AppIcon} alt="user__image" class="user__image"></img>
        <div class="user__info">
          <h5>Atlas AI</h5>
        </div>
      </div>
    </div>
  </div>
    <header class="help-header">
      <h3>Help & Support</h3>
    </header>
    <div class="help-section">
      <div className='section-container'>
        <a href="https://askatlas.org/"><img width="24" height="24" src="https://img.icons8.com/ios/50/info--v1.png" alt="info--v1"/>&nbsp;Get started</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a href="https://askatlas.org/"><img width="24" height="24" src="https://img.icons8.com/ios/50/info--v1.png" alt="info--v1"/>&nbsp;What is Ask Atlas?</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a href="https://askatlas.org/#faq"><img width="24" height="24" src="https://img.icons8.com/ios/50/info--v1.png" alt="info--v1"/>&nbsp;Help & FAQ</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
    </div>

    <header class="social-header">
      <h3>Follow Us</h3>
    </header>
    <div class="follow-us-section">
      <div className='section-container'>
        <a href="https://twitter.com/askatlasapp" class="twitter-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/twitterx--v2.png" alt="twitterx--v2"/>&nbsp;X</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61554991187515" class="discord-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/facebook--v1.png" alt="facebook--v1"/>&nbsp;Facebook</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a href="https://www.instagram.com/askatlasai?igsh=ZTZuNW16ZmxuaHl4&utm_source=qr" class="discord-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/>&nbsp;Instagram</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a href="https://www.youtube.com/channel/UC-YDDEIwSkhxRaUMNFuPaRQ" class="discord-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/youtube-play--v1.png" alt="youtube-play--v1"/>&nbsp;YouTube</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a href="https://www.linkedin.com/company/askatlas/about/?viewAsMember=true" class="discord-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin"/>&nbsp;LinkedIn</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a href="https://www.tiktok.com/@askatlasai?is_from_webapp=1&sender_device=pc" class="discord-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/tiktok--v1.png" alt="tiktok--v1"/>&nbsp;TikTok</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
    </div>

    <header class="legal-header">
      <h3>Legal</h3>
    </header>
    <div className="about-section">
      <div className='section-container'>
        <a href="#"><img width="24" height="24" src="https://img.icons8.com/ios/50/privacy-policy.png" alt="privacy-policy"/>&nbsp;Privacy policy</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a href="#"><img width="24" height="24" src="https://img.icons8.com/ios/50/terms-and-conditions.png" alt="terms-and-conditions"/>&nbsp;Terms of service</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
    </div>
    {au ? <span></span> :
    <>
    <header class="legal-header">
      <h3>Danger Area</h3>
    </header>
    <div class="account-actions">
      <div class="danger-area">
        <button class="btn-delete-account" 
        onClick={
          async()=>{
            const userRef = doc(db, "users", auth.currentUser.uid);
            await updateDoc(userRef, {
              data: '[]',
              lastLoggedIn: serverTimestamp()
            });
            return await signOut(auth).then((res)=>{
              console.log(res);
              return res;
            }).catch((err)=>{
              console.log(err);
              return err;
            })
          }}
        >Delete account</button>
      </div>
      </div>
      </>
      }
          <div class="app-version">
          Ask Atlas v1.0.1 • Build 8732
        </div>
  </section>
</div>
</div>
    </div>
    </ScrollView>
    </>
  );
}
  
  const HomeScreen = ({navigation}) => {
    let listRef = useRef({});
    const [user, setUser] = useState(auth.currentUser);
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
      console.log(result);
      return result;
    };
    const handlers = useSwipeable({
      onSwipedDown: () => {setModalVisible(!modalVisible);},
    });
    function cleanText(text) {
      // This will remove \n and \ from the text
      // \n is matched directly, while \\ is used to match a single backslash
      return text.replace(/\\n|\\/g, '');
    }
    function captureKeyValuePairs(jsonString) {
      // This regex pattern assumes that the JSON structure is simplified and keys/values are surrounded by double quotes,
      // and that values are simple strings or numbers (it won't handle nested objects or arrays correctly).
      const regex = /"\s*([^"]+?)\s*"\s*:\s*("(.*?)"|\d+)/g;
      
      let matches;
      const keyValuePairs = [];
    
      while ((matches = regex.exec(jsonString)) !== null) {
        // matches[1] will contain the key, and matches[2] will contain the value (including surrounding quotes for strings)
        keyValuePairs.push({ key: matches[1], value: matches[2] });
      }
    
      return keyValuePairs;
    }
    
    // // Example usage with a simplified JSON string:
    // const jsonString = `{
    //  "title": "Unveiling the Enchanting Beauty of Kyoto's Gardens",
    //  "description": "Kyoto, renowned for its rich cultural heritage, boasts a plethora of captivating gardens that showcase the essence of Japanese aesthetics. This prompt delves into the serene landscapes, intricate designs, and historical significance of Kyoto's most captivating gardens, offering a glimpse into the city's natural and cultural treasures."
    // }`;
    
    // const keyValuePairs = captureKeyValuePairs(jsonString);
    // console.log(keyValuePairs);
    function removeDoubleQuotes(inputString) {
      // This regex matches all double quotes
      return inputString.replace(/"/g, '');
    }
    
    // Example usage
    // const stringWithQuotes = 'This is a "sample" string with "double quotes".';
    // const cleanedString = removeDoubleQuotes(stringWithQuotes);
    
    //console.log(cleanedString); // Output: This is a sample string with double quotes.
    const generateMarkers = useCallback(async (text) => {  
      setDisabled(true);
      const myInit = {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({t: text}), // body data type must match "Content-Type" header
      };
      await fetch('https://askatlas.org/generateMarkers', myInit).then(async (res) => {
        return await res.text();
      }).then(async (x)=>{
        console.log(x);
        console.log(captureKeyValuePairs(x));
        var tt = {};
        var t = [];
        const y = captureKeyValuePairs(x);
        for(var i = 0; i < y.length; i++){
          console.log(removeDoubleQuotes(y[i].value));
          t.push(removeDoubleQuotes(y[i].value));
        }
        console.log(t);
        tt.title = t[0];
        tt.description = t[1];
        tt.geo = [];
        for(var i = 0; i < t.length; i++){
          var imagesP = [];
          if(t[i] == "Feature"){
            await fetchRequest(t[i+2]).then(async (res) => {
              console.log(res);
              res.forEach(element => {
                imagesP.push({thumbnail: element.urls.thumb, original: element.urls.regular, downloadUrl: element.links.download, description: "Photo by " + element.user.name + " on Unsplash", userName: element.user.name, userUrl: element.user.links.html});
              });
              //imagesP = res;
              console.log(imagesP);
              return res;
            }).catch((err)=>{
              console.log(err);
              return err;
            })
            tt.geo.push({"images": imagesP, "color" :t[i+1], "title": t[i+2], "description": t[i+3], "id": t[i+4], "style": t[i+5], "latlng": [parseFloat(t[i+6].split(",")[0]),parseFloat(t[i+6].split(",")[1])]});
          }
        }
        console.log(tt);
        // console.log(JSON.stringify(x));
        // console.log(cleanText(JSON.stringify(x)));
        // console.log(JSON.parse(JSON.stringify(cleanText(JSON.stringify(x)))));
        //x = JSON.parse(JSON.stringify(x));
        //console.log(x);
        if(tt.geo.length > 0){
          console.log(auth.currentUser.uid);
          const userRef = doc(db, "users", auth.currentUser.uid);
          // const j = await getDoc(userRef);
          // var z = JSON.parse(j.data().data);
          // console.log(z);
          // z.push(tt);
          // console.log(z);
          setList(tt);
          console.log(JSON.stringify(tt));
          await addDoc(collection(db, "users"),{
            data: JSON.stringify(tt),
            uid: auth.currentUser.uid,
            lastLoggedIn: serverTimestamp()
          }).catch((err)=>{
            console.log(err);
            return err;
          });
          await updateDoc(userRef, {
            // data: JSON.stringify(tt),
            lastLoggedIn: serverTimestamp()
          }).catch((err)=>{
            console.log(err);
            return err;
          });
        return x;
      } else {
        return ;
      }
      }).catch((err) => {
        console.log(err);
        return err;
      });
    },[]);

    // $('.atlasaibutton').on("click", (function() {
    //   setModalVisible2(!modalVisible2);
    // }))

    // $(".ai").on("click", () => {
    //   setModalVisible2(true);
    // });

function hideDice() {
  const show = document.querySelector('.send');
  show.innerHTML = `<img src=${Discuss} width="24px" height="24px"/>`;
}
//<img width="24" height="24" style="margin-right: 5px" src="https://img.icons8.com/3d-fluency/94/sparkling-1.png" alt="sparkling-1"/>
function showDice() {
  const show = document.querySelector('.send');
  show.innerHTML = `<img src=${SendIcon} width="24px" height="24px"/>`;
}

const discover = useCallback(async ()=>{
  document.querySelector('.box').innerHTML = '';
  console.log(auth.currentUser);
  if(auth.currentUser != null){
    const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
const querySnapshot = await getDocs(q).then((res)=>{console.log(res);return res;}).catch((err)=>{console.log(err);return err;});
if(!querySnapshot.empty){
querySnapshot.forEach((mapData) => {
// doc.data() is never undefined for query doc snapshots
//setList(JSON.parse(doc.data().data));
//console.log(JSON.parse(doc.data().data));
var g = JSON.parse(mapData.data().data);
console.log(g);
var coordinateText = g.geo;
console.log(coordinateText);
//var ctxt = '';
// for(var y = 0; y < coordinateText.length;y++){
//   ctxt += coordinateText[y].properties.title + '_' + coordinateText[y].properties.description + '_'+ coordinateText[y].geometry.coordinates[0] + '_' + coordinateText[y].geometry.coordinates[1] + '~';
// }
var txt3 = document.createElement("div");  // Create with DOM
txt3.setAttribute('class', 'docs');
txt3.innerHTML = `<button class="mapButton" data-id=${mapData.id}>${g.title}
<button class="shareButton" data-id="${mapData.id}"> 
  <img width="36" height="36" src="https://img.icons8.com/ios/50/share--v1.png" alt="share--v1"/>
</button>
<button class="deleteButton" data-id="${mapData.id}"> 
  <img width="36" height="36" src="https://img.icons8.com/ios/50/trash--v1.png" alt="trash--v1"/>
</button>   
</button>`;
$(".box").append(txt3);
});
}
}
$('.mapButton').on("click", (async function(){
  console.log("map");
  // const d = {features: []};
  var index = $(this).attr('data-id');
  console.log(index);
  var data = await getDoc(doc(db,"users", index));
  data = JSON.parse(data.data().data);
  console.log(data);
  //setList(data);
  // var h = data[parseInt(index)];
  // console.log(data);
  // console.log(d);
  navigation.navigate('Atlas', {list: data, id: index, on: true});
}));
$('.shareButton').on("click", (async function(){
  console.log("share");
  var o = $(this).attr('data-id');
  //const data = await getDoc(doc(db,"users", auth.currentUser.uid));
  //var d = data.data().data[parseInt(o)];
  setModalVisible(true);
  // if (navigator.share) { 
  //   await navigator.share({
  //     title: `${d.title}`,
  //     url: `https://askatlas.org/share?uid=${auth.currentUser.uid}&id=${o}`
  //   }).then(() => {
  //     console.log('Thanks for sharing!');
  //   }).catch(console.error);
  //   } else {
  //     return ;
  // }
}));

$('.deleteButton').on("click", (async function(){
  var o = $(this).attr('data-id');
  console.log(o);
  deleteDoc(doc(db,"users", o));
  // var data = await getDoc(doc(db,"users", auth.currentUser.uid));
  // data = JSON.parse(data.data().data);
  // console.log(data);
  // data.splice(parseInt(o),1);
  const userRef = doc(db, "users", auth.currentUser.uid);
  return await updateDoc(userRef, {
    lastLoggedIn: serverTimestamp()
  });
  discover();
  
}));


$('.card').on("click", (async function(){
  console.log("card");
  var title = $(this).attr('data-title'); 
  var description = $(this).attr('data-description');
  hideDice();
        return await generateMarkers(`${title}: ${description}`).then(()=>{
          return showDice();
        }).catch((err)=>{
          console.log(err);
          showDice();
          return ;
        });
  discover();
}));
})

    useEffect(async ()=>{
      onAuthStateChanged(auth, (user) => {
        setUser(user);
        console.log(user);
      });
      document.querySelector('.box').innerHTML = '';
      console.log(user);
      if(user != null){
        const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
const querySnapshot = await getDocs(q).then((res)=>{console.log(res);return res;}).catch((err)=>{console.log(err);return err;});
if(!querySnapshot.empty){
querySnapshot.forEach((mapData) => {
  // doc.data() is never undefined for query doc snapshots
  //setList(JSON.parse(doc.data().data));
  //console.log(JSON.parse(doc.data().data));
  var g = JSON.parse(mapData.data().data);
  console.log(g);
    var coordinateText = g.geo;
    console.log(coordinateText);
    //var ctxt = '';
    // for(var y = 0; y < coordinateText.length;y++){
    //   ctxt += coordinateText[y].properties.title + '_' + coordinateText[y].properties.description + '_'+ coordinateText[y].geometry.coordinates[0] + '_' + coordinateText[y].geometry.coordinates[1] + '~';
    // }
    var txt3 = document.createElement("div");  // Create with DOM
    txt3.setAttribute('class', 'docs');
    txt3.innerHTML = `<button class="mapButton" data-id=${mapData.id}>${g.title}
    <button class="shareButton" data-id="${mapData.id}"> 
      <img width="36" height="36" src="https://img.icons8.com/ios/50/share--v1.png" alt="share--v1"/>
    </button>
    <button class="deleteButton" data-id="${mapData.id}"> 
      <img width="36" height="36" src="https://img.icons8.com/ios/50/trash--v1.png" alt="trash--v1"/>
    </button>   
    </button>`;
    console.log("hello");
    $(".box").append(txt3);
});
    }
  }
      var suggestions = [
        {
          "category": "Beauty",
          "text": "Explore beauty secrets from the streets of Milan to the spas of Seoul."
        },
        {
          "category": "Books & Reference",
          "text": "Unearth literary classics and modern gems from around the world."
        },
        {
          "category": "Business",
          "text": "Dive into global business trends from Wall Street to emerging markets."
        },
        {
          "category": "Comics",
          "text": "Journey through the world of comics from vintage classics to modern graphic novels."
        },
        {
          "category": "Communication",
          "text": "Connect across the globe with insights from communication pioneers."
        },
        {
          "category": "Dating",
          "text": "Find romance in the world's most loved-up cities from Paris to Kyoto."
        },
        {
          "category": "Education",
          "text": "Learn with the world, from top universities to online courses."
        },
        {
          "category": "Entertainment",
          "text": "Get front-row seats to global entertainment, from cinema to live concerts."
        },
        {
          "category": "Events",
          "text": "Experience premier events from cultural festivals to tech expos."
        },
        {
          "category": "Finance",
          "text": "Navigate the finance world from stock exchanges to cryptocurrency markets."
        },
        {
          "category": "Food & Drink",
          "text": "Taste world-famous cuisines from New York bagels to Napoli pizza."
        },
        {
          "category": "Health & Fitness",
          "text": "Stay healthy with wellness trends from around the globe."
        },
        {
          "category": "House & Home",
          "text": "Decorate with style, from minimalist designs to rustic home trends."
        },
        {
          "category": "Libraries & Demo",
          "text": "Discover groundbreaking demos and libraries from Silicon Valley to Seoul."
        },
        {
          "category": "Lifestyle",
          "text": "Embrace the world's varied lifestyles, from hygge to van life."
        },
        {
          "category": "Maps & Navigation",
          "text": "Chart new territories and old paths with the best mapping tools."
        },
        {
          "category": "Medical",
          "text": "Find leading-edge medical research and historic health landmarks."
        },
        {
          "category": "Music & Audio",
          "text": "Tune into the global music scene from classical operas to the latest hits."
        },
        {
          "category": "News & Magazines",
          "text": "Stay informed with perspectives from international news to niche publications."
        },
        {
          "category": "Parenting",
          "text": "Discover parenting tips and family fun from cultures around the world."
        },
        {
          "category": "House & Home",
          "text": "Design your space with trends from minimalist Tokyo apartments to cozy Scandinavian cabins."
        },
        {
          "category": "Libraries & Demo",
          "text": "Browse historic libraries and the latest in digital book tech demos."
        },
        {
          "category": "Lifestyle",
          "text": "Adopt a lifestyle with global flair from Mediterranean diets to Nordic living."
        },
        {
          "category": "Maps & Navigation",
          "text": "Plot your next trip with historical maps and modern navigation tools."
        },
        {
          "category": "Medical",
          "text": "Locate top medical centers and breakthrough health innovations."
        },
        {
          "category": "Music & Audio",
          "text": "Tune into the world's music pulse from classical symphonies to K-pop hits."
        },
        {
          "category": "News & Magazines",
          "text": "Get the latest news from international headlines to niche magazines."
        },
        {
          "category": "Parenting",
          "text": "Navigate parenting with resources from global child-rearing practices."
        },
        {
          "category": "Personalization",
          "text": "Tailor your tech experience with custom themes and personal touches."
        },
        {
          "category": "Photography",
          "text": "Capture the world through your lens with tips from top photographers."
        },
        {
          "category": "Productivity",
          "text": "Maximize your day with productivity hacks from around the globe."
        },
        {
          "category": "Shopping",
          "text": "Shop the world's markets, from high fashion to local artisan crafts."
        },
        {
          "category": "Social",
          "text": "Connect socially with cultural insights and global networking tips."
        },
        {
          "category": "Sports",
          "text": "Score big with sports trivia and stories from athletic legends."
        },
        {
          "category": "Tools",
          "text": "Equip yourself with tools for success from DIY apps to professional suites."
        },
        {
          "category": "Travel & Local",
          "text": "Discover travel secrets from local hideaways to exotic destinations."
        },
        {
          "category": "Video Players & Editors",
          "text": "Produce stunning videos with tricks from indie filmmakers to studio pros."
        },
        {
          "category": "Weather",
          "text": "Forecast your plans with weather insights from tropical beaches to alpine resorts."
        },
        {
          "category": "Art & Design",
          "text": "Paint your world with art and design inspirations from ancient frescoes to modern digital art."
        },
        {
          "category": "Auto & Vehicles",
          "text": "Drive into the future of auto innovation from electric rides to autonomous vehicles."
        },
        {
          "category": "Social",
          "text": "Connect to vibrant social hubs from London's pubs to Tokyo's tech meetups."
        },
        {
          "category": "Sports",
          "text": "Chase the thrill of sports from Olympic stadiums to local skate parks."
        },
        {
          "category": "Tools",
          "text": "Tool up with insights into the latest tech gadgets and life hacks."
        },
        {
          "category": "Travel & Local",
          "text": "Embark on local adventures and uncover the hidden gems in your own city."
        },
        {
          "category": "Video Players & Editors",
          "text": "Streamline your video experience with the latest in playback and editing tech."
        },
        {
          "category": "Weather",
          "text": "Plan for the elements by exploring weather patterns from the Sahara to Siberia."
        },
        {
          "category": "Art & Design",
          "text": "Draw inspiration from global art scenes, from street art alleys to gallery walks."
        },
        {
          "category": "Auto & Vehicles",
          "text": "Cruise through the history and future of automobiles, from Model Ts to Teslas."
        },
        {
          "category": "Beauty",
          "text": "Discover beauty trends and timeless rituals from around the world."
        },
        {
          "category": "Books & Reference",
          "text": "Unfold the pages of world literature, from dusty archives to digital screens."
        },
        {
          "category": "Business",
          "text": "Master the market with business insights from Fortune 500s to startups."
        },
        {
          "category": "Comics",
          "text": "Dive into the world of comics, exploring origins from Gotham to Metropolis."
        },
        {
          "category": "Communication",
          "text": "Dialogue with the world, learning languages and cultures from every continent."
        },
        {
          "category": "Dating",
          "text": "Uncover romantic getaways and date night ideas from Paris to Bali."
        },
        {
          "category": "Education",
          "text": "Educate yourself anywhere, with online courses and worldwide workshops."
        },
        {
          "category": "Entertainment",
          "text": "Engage with global entertainment from cinema screens to virtual reality."
        },
        {
          "category": "Events",
          "text": "Experience global events, from cultural festivals to tech conventions."
        },
        {
          "category": "Finance",
          "text": "Navigate the world of finance, from crypto markets to stock exchanges."
        },
        {
          "category": "Food & Drink",
          "text": "Indulge in culinary tours from spicy street food to gourmet dining."
        },
        {
          "category": "Health & Fitness",
          "text": "Pursue wellness with global health trends, from meditation retreats to fitness challenges."
        },
        {
          "category": "Communication",
          "text": "Unlock the evolution of global communication from telegraphs to 5G networks."
        },
        {
          "category": "Dating",
          "text": "Find the world's most enchanting date spots, from Parisian riverbanks to Caribbean sunsets."
        },
        {
          "category": "Education",
          "text": "Trace the roots of education from ancient academies to modern virtual classrooms."
        },
        {
          "category": "Entertainment",
          "text": "Step into the spotlight of global entertainment from Hollywood to Bollywood."
        },
        {
          "category": "Events",
          "text": "Experience the world's most spectacular events from Rio's Carnival to the Super Bowl."
        },
        {
          "category": "Finance",
          "text": "Navigate the financial capitals of the world, from the stock exchanges to tech startups."
        },
        {
          "category": "Food & Drink",
          "text": "Taste culinary excellence from Michelin-starred restaurants to street food bazaars."
        },
        {
          "category": "Health & Fitness",
          "text": "Discover wellness sanctuaries and fitness trends from California to the Swiss Alps."
        },
        {
          "category": "House & Home",
          "text": "Design your dream home with inspiration from world-renowned architects and designers."
        },
        {
          "category": "Libraries & Demo",
          "text": "Visit the world's most magnificent libraries and witness the future in tech demos."
        },
        {
          "category": "Lifestyle",
          "text": "Embrace lifestyles around the world, from the minimalism of Scandinavia to the luxury of Dubai."
        },
        {
          "category": "Maps & Navigation",
          "text": "Chart your next journey with the best in maps and navigation from historic routes to modern GPS tech."
        },
        {
          "category": "Medical",
          "text": "Tour the globe's leading medical research facilities and historic health landmarks."
        },
        {
          "category": "Music & Audio",
          "text": "Experience the rhythm of the world's music capitals, from classical Vienna to jazzy New Orleans."
        },
        {
          "category": "News & Magazines",
          "text": "Stay informed with news sources from around the globe, from press halls to digital platforms."
        },
        {
          "category": "Parenting",
          "text": "Explore family-friendly destinations and educational experiences for parents and kids alike."
        },
        {
          "category": "Personalization",
          "text": "Customize your digital world, from app skins to home screen widgets."
        },
        {
          "category": "Photography",
          "text": "Capture the essence of iconic photography spots from urban landscapes to wild nature."
        },
        {
          "category": "Productivity",
          "text": "Maximize your productivity with tips from the world's most efficient cultures and systems."
        },
        {
          "category": "Shopping",
          "text": "Indulge in retail therapy at the world's most famous shopping districts and markets."
        },
        {
          "category": "Medical",
          "text": "Explore cutting-edge medical institutions from Geneva to Tokyo."
        },
        {
          "category": "Music & Audio",
          "text": "Discover iconic music venues from the Sydney Opera House to the Grand Ole Opry."
        },
        {
          "category": "News & Magazines",
          "text": "Track global news hubs from the BBC in London to Al Jazeera in Doha."
        },
        {
          "category": "Parenting",
          "text": "Find the best family-oriented locales from theme parks to educational museums."
        },
        {
          "category": "Personalization",
          "text": "Customize your world, from home decor trends to personal style hotspots."
        },
        {
          "category": "Photography",
          "text": "Snap the perfect shot at scenic wonders from the Grand Canyon to the Cliffs of Moher."
        },
        {
          "category": "Productivity",
          "text": "Boost your output with tips from top productivity experts and tools."
        },
        {
          "category": "Shopping",
          "text": "Hit the world's shopping meccas, from the streets of Milan to the malls of Dubai."
        },
        {
          "category": "Social",
          "text": "Join vibrant social scenes from New York's nightlife to Tokyo's tech meetups."
        },
        {
          "category": "Sports",
          "text": "Experience the thrill of sports from the soccer fields of Barcelona to the basketball courts of LA."
        },
        {
          "category": "Tools",
          "text": "Get the right tools for any job, from DIY projects to high-tech gadgets."
        },
        {
          "category": "Travel & Local",
          "text": "Unearth local secrets from the back alleys of Venice to the trails of Machu Picchu."
        },
        {
          "category": "Video Players & Editors",
          "text": "Cut and curate like a pro with insights from the film industry's best editors."
        },
        {
          "category": "Weather",
          "text": "Plan your day with weather insights from the world's top meteorological centers."
        },
        {
          "category": "Art & Design",
          "text": "Dive into design districts from the Bauhaus roots in Germany to the futuristic skyline of Singapore."
        },
        {
          "category": "Auto & Vehicles",
          "text": "Gear up for automotive innovations from electric vehicles to self-driving technology."
        },
        {
          "category": "Beauty",
          "text": "Discover global beauty trends, from the skincare labs of Paris to the aesthetics of Seoul."
        },
        {
          "category": "Books & Reference",
          "text": "Delve into literary classics and modern masterpieces from around the world."
        },
        {
          "category": "Business",
          "text": "Navigate the corporate world from the trading floors to startup incubators."
        },
        {
          "category": "Comics",
          "text": "Enter the universe of comics from superhero origins to indie graphic novels."
        },
        {
          "category": "Video Players & Editors",
          "text": "Edit like a pro, from Hollywood effects to viral video tricks."
        },
        {
          "category": "Weather",
          "text": "Stay ahead of the storm with forecasts from the Amazon to Antarctica."
        },
        {
          "category": "Art & Design",
          "text": "Unleash creativity from digital art trends to classic painting techniques."
        },
        {
          "category": "Auto & Vehicles",
          "text": "Rev up with the latest from electric engines to classic car rallies."
        },
        {
          "category": "Beauty",
          "text": "Glow up with beauty secrets from Paris runways to K-beauty innovations."
        },
        {
          "category": "Books & Reference",
          "text": "Immerse in stories from Shakespeare's home to the world's oldest libraries."
        },
        {
          "category": "Business",
          "text": "Conquer the boardroom with strategies from Wall St. to Silicon Valley."
        },
        {
          "category": "Comics",
          "text": "Explore comic book realms from Marvel's NYC to manga's Tokyo streets."
        },
        {
          "category": "Communication",
          "text": "Connect globally from undersea cables to satellite communications."
        },
        {
          "category": "Dating",
          "text": "Find love from Parisian cafes to the scenic overlooks of Rome."
        },
        {
          "category": "Education",
          "text": "Learn from the best, from Ivy League halls to online learning platforms."
        },
        {
          "category": "Entertainment",
          "text": "Experience thrills from Broadway stages to LA's movie magic."
        },
        {
          "category": "Events",
          "text": "Join the festivity from Rio's Carnival to Munich's Oktoberfest."
        },
        {
          "category": "Finance",
          "text": "Invest wisely from the NYSE to emerging markets across Asia."
        },
        {
          "category": "Food & Drink",
          "text": "Feast on flavors from Italy's vineyards to Mexico's street tacos."
        },
        {
          "category": "Health & Fitness",
          "text": "Get fit from yoga retreats in Bali to marathon routes in Berlin."
        },
        {
          "category": "House & Home",
          "text": "Design dream spaces from minimalist Japanese aesthetics to rustic Tuscan charm."
        },
        {
          "category": "Libraries & Demo",
          "text": "Explore innovations from Silicon Valley labs to Swiss tech demos."
        },
        {
          "category": "Lifestyle",
          "text": "Live lavishly from the fashion streets of Milan to the spas of Iceland."
        },
        {
          "category": "Maps & Navigation",
          "text": "Navigate the globe from the ancient Silk Road to GPS-guided city tours."
        },
        {
          "category": "Events",
          "text": "Dive into world-class events from the Olympics to global expos."
        },
        {
          "category": "Finance",
          "text": "Track the pulse of finance from NASDAQ to London's Square Mile."
        },
        {
          "category": "Food & Drink",
          "text": "Savor the flavors from Italian vineyards to Tokyo sushi bars."
        },
        {
          "category": "Health & Fitness",
          "text": "Spot top health retreats and fitness trends around the world."
        },
        {
          "category": "House & Home",
          "text": "Explore architectural wonders from Fallingwater to Gaudí's masterpieces."
        },
        {
          "category": "Libraries & Demo",
          "text": "Browse through history in the world's most iconic libraries."
        },
        {
          "category": "Lifestyle",
          "text": "Get the vibe of the world's lifestyle capitals, from Milan to NYC."
        },
        {
          "category": "Maps & Navigation",
          "text": "Chart your course through historic and modern navigation milestones."
        },
        {
          "category": "Medical",
          "text": "Visit the leading medical institutions from Johns Hopkins to Mayo Clinic."
        },
        {
          "category": "Music & Audio",
          "text": "Discover music meccas from Nashville's country roads to Vienna's classical halls."
        },
        {
          "category": "News & Magazines",
          "text": "Access the world's news epicenters, from the BBC to CNN."
        },
        {
          "category": "Parenting",
          "text": "Find family-friendly destinations from Disneyland to the best urban parks."
        },
        {
          "category": "Personalization",
          "text": "Personalize your space with inspirations from Parisian boutiques to Scandinavian design."
        },
        {
          "category": "Photography",
          "text": "Capture the world's most photogenic locales, from the Sahara to the Amazon."
        },
        {
          "category": "Productivity",
          "text": "Boost your efficiency with insights from Silicon Valley to Tokyo tech hubs."
        },
        {
          "category": "Shopping",
          "text": "Hit the shopping hotspots from Dubai's malls to NYC's Fifth Avenue."
        },
        {
          "category": "Social",
          "text": "Connect with social scenes from the cafes of Berlin to the beaches of Rio."
        },
        {
          "category": "Sports",
          "text": "Catch the action in sports cities from Barcelona to Boston."
        },
        {
          "category": "Tools",
          "text": "Equip yourself with the best from German engineering to Silicon Valley startups."
        },
        {
          "category": "Travel & Local",
          "text": "Uncover hidden travel treasures from the Greek Isles to the Rockies."
        },
        {
          "category": "Art & Design",
          "text": "Tap to explore the world's art capitals, from the Louvre to the Met."
        },
        {
          "category": "Auto & Vehicles",
          "text": "Discover iconic car museums and racetracks across the globe."
        },
        {
          "category": "Beauty",
          "text": "Find the beauty capitals of the world, from Paris to Seoul."
        },
        {
          "category": "Books & Reference",
          "text": "Journey to the sites of the world's most famous libraries."
        },
        {
          "category": "Business",
          "text": "Explore Wall Street and other major financial hubs."
        },
        {
          "category": "Comics",
          "text": "Uncover the homes of legendary comics, from Brussels to Tokyo."
        },
        {
          "category": "Communication",
          "text": "Visit the landmarks that shaped our global communication."
        },
        {
          "category": "Dating",
          "text": "Discover the world's most romantic spots and love bridges."
        },
        {
          "category": "Education",
          "text": "Find top universities and centers of learning worldwide."
        },
        {
          "category": "Entertainment",
          "text": "Locate the epicenters of global entertainment, from Broadway to Bollywood."
        }       
      ]
      

      function getEmoji(category){
        switch(category){
          case "Art & Design": return "🎨";
          case "Auto & Vehicles": return "🚗";
          case "Beauty": return "💄";
          case "Books & Reference": return "📚";
          case "Business": return "💼";
          case "Comics": return "📒";
          case "Communication": return "📡";
          case "Dating": return "❤️";
          case "Education": return "🎓";
          case "Entertainment": return "🎭";
          case "Events": return "🎫";
          case "Finance": return "💲";
          case "Food & Drink": return "🍔";
          case "Health & Fitness": return "💪";
          case "House & Home": return "🏠";
          case "Libraries & Demo": return "📖";
          case "Lifestyle": return "🌟";
          case "Maps & Navigation": return "🗺️";
          case "Medical": return "🏥";
          case "Music & Audio": return "🎶";
          case "News & Magazines": return "📰";
          case "Parenting": return "👪";
          case "Personalization": return "🌈";
          case "Photography": return "📸";
          case "Productivity": return "⚙️";
          case "Shopping": return "🛍️";
          case "Social": return "👥";
          case "Sports": return "⚽";
          case "Tools": return "🔧";
          case "Travel & Local": return "✈️";
          case "Video Players & Editors": return "🎬";
          case "Weather": return "☀️";
          default: return "❓";
        }
      }
      
      for(var g=0;g<8;g++){
        var c = suggestions[(Math.floor(Math.random() * suggestions.length))];
        var sug = document.createElement("div");  // Create with DOM
        sug.setAttribute('class', 'card');
        sug.setAttribute('data-title', c.category);
        sug.setAttribute('data-description', c.text);
        var e = getEmoji(c.category);
        sug.innerHTML = `<p style="font-weight: bold">${e}</p><p style="font-size: 20px">&nbsp; ${c.text}</p>`;
        $('.scrolling-wrapper').append(sug);
      }

      $('.mapButton').on("click", (async function(){
        console.log("map");
        // const d = {features: []};
        var index = $(this).attr('data-id');
        // console.log(index);
        var data = await getDoc(doc(db,"users", index));
        data = JSON.parse(data.data().data);
        console.log(data);
        //setList(data);
        // var h = data[parseInt(index)];
        // console.log(data);
        // console.log(d);
        navigation.navigate('Atlas', {list: data, id: index, on: true});
      }));
      $('.shareButton').on("click", (async function(){
        console.log("share");
        var o = $(this).attr('data-id');
        //const data = await getDoc(doc(db,"users", auth.currentUser.uid));
        //var d = data.data().data[parseInt(o)];
        setModalVisible(true);
        // if (navigator.share) { 
        //   await navigator.share({
        //     title: `${d.title}`,
        //     url: `https://askatlas.org/share?uid=${auth.currentUser.uid}&id=${o}`
        //   }).then(() => {
        //     console.log('Thanks for sharing!');
        //   }).catch(console.error);
        //   } else {
        //     return ;
        // }
      }));
  
      $('.deleteButton').on("click", (async function(){
        var o = $(this).attr('data-id');
        console.log(o);
        deleteDoc(doc(db,"users", o));
        // var data = await getDoc(doc(db,"users", auth.currentUser.uid));
        // data = JSON.parse(data.data().data);
        // console.log(data);
        // data.splice(parseInt(o),1);
        const userRef = doc(db, "users", auth.currentUser.uid);
        return await updateDoc(userRef, {
          lastLoggedIn: serverTimestamp()
        });
        discover();
        
      }));
  
  
      $('.card').on("click", (async function(){
        console.log("card");
        var title = $(this).attr('data-title'); 
        var description = $(this).attr('data-description');
        hideDice();
              return await generateMarkers(`${title}: ${description}`).then(()=>{
                return showDice();
              }).catch((err)=>{
                console.log(err);
                showDice();
                return ;
              });
        discover();
      }));
    },[]);
    discover();
    const shareUrl = 'https://askatlas.org/share/id=1234';
    const exampleImage = 'assets/icon.png'
    return (
      <>
      <div className='mapContainer' style={{paddingBottom: 0, bottom: 0}}>
        <div className='operations'>
          <div className="box">
          {/* <button class="shareButton" onClick={() => {setModalVisible(true)}}><img width="36" height="36" src="https://img.icons8.com/material-outlined/48/copy.png" alt="copy"/>
    </button> */}
            </div>
        </div>
      </div>
      <Modal
              {...handlers}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              style={{height: '60%', width: '100%'}}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                <>
      <div className="Demo__container">
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <div className="topBarLeft"></div>
        <h3 style={{marginBottom: "1rem", borderBottom: '1px solid lightgrey', lineHeight: '2.5rem'}}>Send To</h3>
        </div>
      <div className="Demo__some-network">
        <FacebookShareButton url={shareUrl} className="Demo__some-network__share-button">
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <div className='social_title'>
          Facebook
        </div>
      </div>

      <div className="Demo__some-network">
        <FacebookMessengerShareButton
          url={shareUrl}
          appId="521270401588372"
          className="Demo__some-network__share-button"
        >
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
        <div className='social_title'>Messenger</div>
      </div>

      <div className="Demo__some-network">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <XIcon size={32} round />
        </TwitterShareButton>
        <div className='social_title'>Twitter</div>
      </div>

      <div className="Demo__some-network">
        <TelegramShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <div className='social_title'>Telegram</div>
      </div>

      <div className="Demo__some-network">
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <div className='social_title'>Whatsapp</div>
      </div>

      <div className="Demo__some-network">
        <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <div className='social_title'>Linkedin</div>
      </div>

      <div className="Demo__some-network">
        <PinterestShareButton
          url={String(window.location)}
          media={`${String(window.location)}/${exampleImage}`}
          className="Demo__some-network__share-button"
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>

        <div className='social_title'>Pintrest</div>
      </div>

      <div className="Demo__some-network">
        <VKShareButton
          url={shareUrl}
          image={`${String(window.location)}/${exampleImage}`}
          className="Demo__some-network__share-button"
        >
          <VKIcon size={32} round />
        </VKShareButton>

        <div className='social_title'>VK</div>
      </div>

      <div className="Demo__some-network">
        <OKShareButton
          url={shareUrl}
          image={`${String(window.location)}/${exampleImage}`}
          className="Demo__some-network__share-button"
        >
          <OKIcon size={32} round />
        </OKShareButton>

        <div className='social_title'>OK</div>
      </div>

      <div className="Demo__some-network">
        <RedditShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="Demo__some-network__share-button"
        >
          <RedditIcon size={32} round />
        </RedditShareButton>

        <div className='social_title'>Reddit</div>
      </div>

      <div className="Demo__some-network">
        <GabShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={640}
          className="Demo__some-network__share-button"
        >
          <GabIcon size={32} round />
        </GabShareButton>
        <div className='social_title'>Gab</div>
      </div>

      <div className="Demo__some-network">
        <TumblrShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <TumblrIcon size={32} round />
        </TumblrShareButton>

        <div className='social_title'>Tumblr</div>
      </div>

      <div className="Demo__some-network">
        <LivejournalShareButton
          url={shareUrl}
          title={title}
          description={shareUrl}
          className="Demo__some-network__share-button"
        >
          <LivejournalIcon size={32} round />
        </LivejournalShareButton>
        <div className='social_title'>Live Journal</div>
      </div>

      <div className="Demo__some-network">
        <MailruShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <MailruIcon size={32} round />
        </MailruShareButton>
        <div className='social_title'>Mailru</div>
      </div>

      <div className="Demo__some-network">
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body="body"
          className="Demo__some-network__share-button"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
        <div className='social_title'>Email</div>
      </div>

      <div className="Demo__some-network">
        <ViberShareButton url={shareUrl} title={title} className="Demo__some-network__share-button">
          <ViberIcon size={32} round />
        </ViberShareButton>
        <div className='social_title'>Viber</div>
      </div>

      <div className="Demo__some-network">
        <WorkplaceShareButton
          url={shareUrl}
          quote={title}
          className="Demo__some-network__share-button"
        >
          <WorkplaceIcon size={32} round />
        </WorkplaceShareButton>
        <div className='social_title'>Workplace</div>
      </div>

      <div className="Demo__some-network">
        <LineShareButton url={shareUrl} title={title} className="Demo__some-network__share-button">
          <LineIcon size={32} round />
        </LineShareButton>
        <div className='social_title'>Line</div>
      </div>

      <div className="Demo__some-network">
        <WeiboShareButton
          url={shareUrl}
          title={title}
          image={`${String(window.location)}/${exampleImage}`}
          className="Demo__some-network__share-button"
        >
          <WeiboIcon size={32} round />
        </WeiboShareButton>
        <div className='social_title'>Weibo</div>
      </div>

      <div className="Demo__some-network">
        <PocketShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <PocketIcon size={32} round />
        </PocketShareButton>
        <div className='social_title'>Pocket</div>
      </div>

      <div className="Demo__some-network">
        <InstapaperShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <InstapaperIcon size={32} round />
        </InstapaperShareButton>
        <div className='social_title'>Instapaper</div>
      </div>

      <div className="Demo__some-network">
        <HatenaShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="Demo__some-network__share-button"
        >
          <HatenaIcon size={32} round />
        </HatenaShareButton>

        <div className='social_title'>Hatena</div>
      </div>
    </div>
    </>
    </View>
    </View>
              </Modal>
      <div class="scrolling-wrapper">
      </div>
      <div>
              <div className='show'>
                <div className='showInput'>
            <TextInput style={styles.input} multiline={true} rows={1} maxLength={1000} value={text} onChangeText={(text) => setText(text)} placeholder="Enter text here..." />
            </div>
            <div className="delete_point">
        <button className="button-38" disabled={disabled} onClick={
          async ()=>{
            hideDice();
            return await generateMarkers(text).then(()=>{
              return showDice();
            }).catch((err)=>{
              console.log(err);
              setDisabled(false);
              showDice();
              Alert.alert('There was an error processing your request. Please try again in a few minutes.', 'Error', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
              return err;
            })
            discover();
          }}>
          <p className="send">                    
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
  const [user, setUser] = useState(auth.currentUser);
  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //     console.log(user);
  //   });
  // },[user])
  useEffect(async ()=>{
    async function Initialize(user) {
      const exist = await getDoc(doc(db, 'users', user.uid));
      console.log(user.uid);
      console.log(exist.exists());
      await setDoc(doc(db, 'users', user.uid), {
        email: null,
        data: '[]',
        lastLoggedIn: "",
        isPremium: false 
      }).then((res) => {
        console.log(res);
        return res;
      }).catch((err) => {
        console.log("2318");
        console.log(err);
        return err;
      });
    }
  const signinanon = async () => {
  
    await signInAnonymously(auth)
    .then(async(result) => {
      console.log(result);
      await Initialize(result.user).then((res)=>{
        console.log(res);
        return res;
      }).catch((err)=>{
        console.log(err);
        console.log("2332");
        return err;
      })
      // Signed in..

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("2340");
      return error;
      // ...
    });
  }

  await signinanon();
  return ;
  },[user]);
  return (
    <>
      {/* {user == null ? <SignIn /> : <MyTabs />} */}
      <MyTabs />
    </>
    
  );
}

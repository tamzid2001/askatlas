import React, { useRef, useEffect, useState, useCallback } from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { Editor } from '@tinymce/tinymce-react';
import GlobeMarker from "./assets/globe_marker.png"
import GoogleIcon from "./assets/google.svg"
import FacebookIcon from "./assets/facebook.svg"
import TwitterIcon from "./assets/twitter.svg"
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
//import {IAPErrorCode, InAppPurchases} from 'expo-in-app-purchases';
import {terms, privacypolicy} from "./termsandprivacy.js"
import './App.css'
import { CopySharp, DocumentTextSharp, TrashBinSharp, PeopleSharp, LogoTwitter, LogoFacebook, AddOutline, LocationOutline, ChevronForwardOutline, PeopleCircleOutline, PersonAddOutline, TrashOutline, CheckmarkOutline, LockClosedOutline } from 'react-ionicons'
import {v4 as uuidv4} from 'uuid';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
//import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
mapboxgl.accessToken =
  'pk.eyJ1IjoidGFtbXl3YW1teSIsImEiOiJjbGF2cGZuZTgwN3d1M3ZucHdlNTVwbW1jIn0.IGJDGKvQwt1kt7LgCtuAig';
// import { 
//   AdMobBanner, 
//   AdMobInterstitial, 
//   PublisherBanner,
//   AdMobRewarded
// } from 'react-native-admob'
//import firebase from 'firebase/app';
//import 'firebase/firestore';

import { initializeApp, firebase } from 'firebase/app';
import { onAuthStateChanged, FacebookAuthProvider, OAuthProvider, TwitterAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, doc, getDoc, updateDoc, setDoc, onSnapshot } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD7Z87ErYFfFq4qI39wRjzReJtAbugJMBU",
  authDomain: "grape-c45e3.firebaseapp.com",
  projectId: "grape-c45e3",
  storageBucket: "grape-c45e3.appspot.com",
  messagingSenderId: "1030833092872",
  appId: "1:1030833092872:web:21de7452e76e1be41b14bd",
  measurementId: "G-Q5889T84P6"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
console.log(auth);

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
    backgroundColor: 'white',
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
// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';
// import Constants from 'expo-constants';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// // Can use this function below or use Expo's Push Notification Tool from: https://expo.dev/notifications
// async function sendPushNotification(expoPushToken) {
//   const message = {
//     to: expoPushToken,
//     sound: 'default',
//     title: 'Original Title',
//     body: 'And here is the body!',
//     data: { someData: 'goes here' },
//   };

//   await fetch('https://exp.host/--/api/v2/push/send', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Accept-encoding': 'gzip, deflate',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(message),
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = await Notifications.getExpoPushTokenAsync({
//       projectId: Constants.expoConfig.extra.eas.projectId,
//     });
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   return token;
// }
// function displayAd() {
//   AdMobInterstitial.setAdUnitID('your-admob-unit-id');
//   AdMobInterstitial.setTestDeviceID('EMULATOR');
//   AdMobInterstitial.requestAd(AdMobInterstitial.showAd);
// }
const MapScreen = ({navigation}) => {
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

let [geoJson, setgeo] = useState({type: 'FeatureCollection', features: []});
const mapRef = useRef(null);
  // Initialize map when component mounts
  useEffect(async() => {
    await getDoc(doc(db, "users", auth.currentUser.uid)).then((doc) => {
      console.log(doc.data().data[0].geo[0]);
      setgeo(doc.data().data[0].geo[0]);
      return doc.data().data[0].geo[0];
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
    //setgeo(userRef);
    //console.log(geoJson);
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
    mapRef.current = map;
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
      for(var i=0;i<geoJson.features.length;i++){
        ci = i;
        const marker = new mapboxgl.Marker({
          color: geoJson.features[i].properties.color,
          draggable: false
        }).setLngLat(geoJson.features[i].geometry.coordinates)
          .addTo(map);
            marker.getElement().setAttribute('data-id', '0');
            marker.getElement().classList.add('marker-1234');
            marker.getElement().addEventListener('click', (event) => {
            setid(geoJson.features[ci].properties.id);
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

  //button to create markers from prompts given to chatgpt
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
  }, geoJson); //eslint-disable-line react-hooks/exhaustive-deps
  //console.log(geoJson);
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
      console.log(mk);
    };
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
async function addPoint() {

}

async function addMap() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

// Set purchase listener
// setPurchaseListener(({ responseCode, results, errorCode }) => {
//   // Purchase was successful
//   if (responseCode === IAPResponseCode.OK) {
//     results.forEach(purchase => {
//       if (!purchase.acknowledged) {
//         console.log(`Successfully purchased ${purchase.productId}`);
//         // Process transaction here and unlock content...

//         // Then when you're done
//         finishTransactionAsync(purchase, true);
//       }
//     });
//   } else if (responseCode === IAPResponseCode.USER_CANCELED) {
//     console.log('User canceled the transaction');
//   } else if (responseCode === IAPResponseCode.DEFERRED) {
//     console.log('User does not have permissions to buy but requested parental approval (iOS only)');
//   } else {
//     if(errorCode === IAPErrorCode.UNKNOWN) {
      
//     } else if(errorCode === IAPErrorCode.PAYMENT_INVALID) {

//     } else if(errorCode === IAPErrorCode.SERVICE_DISCONNECTED) {

//     } else if(errorCode === IAPErrorCode.SERVICE_UNAVAILABLE) {

//     } else if(errorCode === IAPErrorCode.SERVICE_TIMEOUT) {

//     } else if(errorCode === IAPErrorCode.BILLING_UNAVAILABLE) {

//     } else if(errorCode === IAPErrorCode.ITEM_UNAVAILABLE) {

//     } else if(errorCode === IAPErrorCode.DEVELOPER_ERROR) {

//     } else if(errorCode === IAPErrorCode.ITEM_ALREADY_OWNED) {

//     } else if(errorCode === IAPErrorCode.ITEM_NOT_OWNED) {

//     } else if(errorCode === IAPErrorCode.CLOUD_SERVICE) {

//     } else if(errorCode === IAPErrorCode.PRIVACY_UNACKNOWLEDGED) {

//     } else if(errorCode === IAPErrorCode.UNAUTHORIZED_REQUEST) {

//     } else if(errorCode === IAPErrorCode.INVALID_IDENTIFIER) {

//     } else if(errorCode === IAPErrorCode.MISSING_PARAMS) {

//     }
//     console.warn(`Something went wrong with the purchase. Received errorCode ${errorCode}`);
//   }
// });

// async function ProductItems() {
//   const items = Platform.select({
//     ios: [
//       'dev.products.gas',
//       'dev.products.premium',
//       'dev.products.gold_monthly',
//       'dev.products.gold_yearly',
//     ],
//     android: ['gas', 'premium', 'gold_monthly', 'gold_yearly'],
//   });
  
//    // Retrieve product details
//   const { responseCode, results } = await getProductsAsync(items);
//   if (responseCode === IAPResponseCode.OK) {
//     setProducts({ items: results });
//   }
// }


function SignIn() {

  async function Initialize(user) {
    //console.log(user.uid);
    const usersRef = await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      data: [{
        "name": "",
        "geo": [{
        'type': 'FeatureCollection',
        'features': [{
          'type': 'Feature',
          'properties': {
            'message': 'Foo',
            'iconSize': [60, 60]
        },
          'geometry': {
            'type': 'Point',
            'coordinates': [-66.324462, -16.024695]
          }
        }]}]
    }],
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

const signInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
}

const signInWithTwitter = async () => {
  const provider = new TwitterAuthProvider();
  await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
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
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });
}

  return (
    <>
      <div class="signin_box">
        <div class="logo_box">
        <img src={AppIcon} style={{width:"5rem",height:"5rem"}}/>
        <p class="logo_label">Prompt Your World</p>
          <p class="logo_label">Sign In <span className="or">or</span> Sign Up</p>
        </div>
        <div className="signin_button_box">
          <button className="sign-in google" onClick={signInWithGoogle}>
            <img src={GoogleIcon} style={{width:"30px",height:"30px"}}/>
            Continue with Google</button>
        </div>
        <div class="signin_button_box">
          <button className="sign-in facebook" onClick={signInWithFacebook}>
            <img src={FacebookIcon} style={{width:"30px",height:"30px"}}/>
            Continue with Facebook</button>
        </div>
        <div class="signin_button_box">
          <button className="sign-in twitter" onClick={signInWithTwitter}>
            <img src={TwitterIcon} style={{width:"30px",height:"30px"}}/>
            Continue with X</button>
        </div>
          <p class="terms_label">By continuing you accept the <a href="">terms of use</a> and <a href="">privacy policy</a></p>
      </div>
    </>
  )

}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#ffffff00',
          headerShown: true,
          headerTransparent: false,
          tabBarStyle: {
            height: '4rem',
            borderTopColor: '#ffffff00',
            backgroundColor: '#ffffff00',
            borderRadius: '0.5rem',
            margin: '0.5rem',
            position: 'absolute',
            overflow: 'hidden',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <img src={ContentIcon} style={{ width: "40px", height: "40px" }} />
            ),

          }}
        />
        <Tab.Screen
        name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <img src={Globe} style={{ width: "40px", height: "40px" }} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
            name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <img src={Settings} style={{ width: "40px", height: "40px" }} />
            ),
            headerShown: true
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Profile({ navigation }) {
  let [open,setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function handlePremium() {
    setOpen(true)
  }

  //   InAppPurchases.connectAsync().then((result) => {
//     return result;
//   }).catch((error) => {
//     return error;
//   })

//   ProductItems().then((result)=>{
//     return result;
//   }).catch((error)=>{
//     return error;
//   })

//   async function PurchaseItem(item) {
//     InAppPurchases.purchaseItemAsync(item).then((result)=>{

//     })
//   }
  return (
    <>
    <View style={{ flex: 1, justifyContent: 'start', alignItems: 'start'}} className="header">
      {/* <section class="profile">
        <header class="header">
          <div class="details">
            <img src={User} class="profile-pic"/>
          </div>
        </header>
      </section> */}
            <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Premium Plan</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <>
            <div class="subscribe-screen">
          <div class="purchase_box">
            <div class="purchase_header">
              <h1 class="features_header">
                Premium Plan
              </h1>
            </div>
      <div class="features_box">
        <p class="features_point">Custimizable Themes & Fonts</p>
        <p class="features_point">Flexible Map Funk</p>
        <p class="features_point">Collaborate on the Globe</p>
        <p class="features_point">Add Unlimited Maps</p>
        <p class="features_point">Unlock Globle & Terrain Style</p>
      </div>
      
      <div class="purchase_button_box">
        <p class="purchase_label">Monthly</p>
        <button class="button-38" role="button">
          <div class="map_point_label">
            <p class="title_point">7 day free trial then, $5.99 a month</p>   
          </div>
        </button>
        <p class="purchase_label">Yearly</p>
        <button class="button-38" role="button">
        <div class="map_point_label">
          <p class="title_point">7 day free trial then, $49.99 a year</p>   
        </div>
        </button>
      </div>

    </div>
          </div>
            </>
          </View>
        </View>
      </Modal>
        <div class="map_points">
        <button class="profile_button" role="button" onClick={() => setModalVisible(true)}>
            <div class="map_point_label">
            <img src={Key} className='settings'/>
            <p class="title_point">Unlock Premium</p>   
          </div>
        </button>
        <button class="profile_button" role="button" target="_blank" href="">
            <div class="map_point_label">
              <img src={Community} className='settings'/>
              <p class="title_point">Share AtlasJournal</p>   
            </div>
        </button>
        {/* <a class="profile_button" role="button" target="_blank" href="">
            <div class="map_point_label">
            <img src={Rating} className='settings'/>
              <p class="title_point">Leave a Rating</p>   
            </div>
        </a>
        <a class="profile_button" role="button" target="_blank" href="">
            <div class="map_point_label">
            <img src={Review} className='settings'/>
              <p class="title_point">Write a review</p>   
            </div>
        </a>
        <a class="profile_button" role="button" target="_blank" href="">
            <div class="map_point_label">
            <img src={Sustainability} className='settings'/>
              <p class="title_point">Climate Action</p>   
            </div>
        </a>
        <a class="profile_button" role="button" target="_blank" href="">
            <div class="map_point_label">
            <img src={File} className='settings'/>
              <p class="title_point">Terms & Conditions</p>   
            </div>
        </a>
        <a class="profile_button" role="button" target="_blank" href="">
            <div class="map_point_label">
            <img src={File} className='settings'/>
              <p class="title_point">Privacy Policy</p>   
            </div>
        </a> */}
        <button class="profile_button" role="button" onClick={() => {signOut(auth).then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })}}>
            <div class="map_point_label">
            <p class="title_point">Sign Out</p>   
            </div>
        </button>
            </div>
    </View>
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

const ud = {
  email: "",
  premium: undefined,
  maps: [{
    name: "Robin",
    id: "",
    shared: "",
    type: "FeatureCollection",
    features: [{
      type: 'Feature',
      properties: {
        feature_id: "",
        photoUrls: [],
        notes: "",
        color: "",
        survey: "",
        place: "",
        lastEdited: "",
      },
      geometry: {
        'type': 'Point',
        'coordinates': []
      }
    }]
  }]
}

const initMap = {
      type: 'Feature',
      properties: {
        feature_id: "",
        photoUrls: [],
        notes: "",
        color: "",
        survey: "",
        place: "",
        lastEdited: "",
      },
      geometry: {
        'type': 'Point',
        'coordinates': []
      }
  };

const initList2 = [{
  "name": "",
  "pin": 1234,
  "geo": {
  'type': 'FeatureCollection',
  'features': [
  {
    'type': 'Feature',
    'properties': {
      'message': 'Foo',
      'iconSize': [60, 60],
      'color': '#000000'
  },
    'geometry': {
      'type': 'Point',
      'coordinates': [-66.324462, -16.024695]
    }
  },
  {
    'type': 'Feature',
    'properties': {
      'message': 'Bar',
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
    'iconSize': [40, 40]
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-63.292236, -18.281518]
    }
  }
  ]
  }
}];

const listReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          list: state.list.concat({ name: action.name, id: action.id, type: 'FeatureCollection', shared: "", features: initMap }),
        };

      case 'DELETE_ITEM':
        const newList = state.list.filter((r, i)=>{
          return r.id != action.id;
        })
        //db(collection(db, 'users'))
        return {
          ...state,
          list: newList
        }
        case 'COPY_ITEM':
          return {
            ...state,
            list: state.list.concat({ name: action.name, id: action.id, type: 'FeatureCollection', shared: "", features: action.features}),
          }
      default:
        throw new Error();
    }
  };
  
  const HomeScreen = () => {
    const [list, setList] = React.useState({});
    const [user, setUser] = useState(auth.user);
    useEffect(async ()=>{
      onAuthStateChanged(auth, async (user) => {
        setUser(user);
      });
      await getDoc(doc(db, "users", auth.currentUser.uid)).then((doc) => {
        console.log(doc.data());
        setList(doc.data());
        //setgeo(doc.data().data[0].geo[0]);
        return doc.data();
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    }, list);
    const [listData, dispatchListData] = React.useReducer(listReducer, {
      list: list.data || ud.maps,
      isShowList: true,
    });
    const [name, setName] = React.useState('');
    //const usersRef = db.getCollection('users');
    function handleChange(event) {
      setName(event.target.value);
    }
  
    async function handleAdd() {
      dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4(), features: initMap });
      setName('');
    }
  
    return (
      <div>
        <AddItem
          name={name}
          onChange={handleChange}
          onAdd={handleAdd}
        />
        <div className='operations'>
        <List list={listData.list} />
        </div>
      </div>
    );
  };
  
  const AddItem = ({ name, onChange, onAdd }) => (
    <div class="add_box">
      <input class="form__input" type="text" placeholder=" Create a map..." value={name} onChange={onChange} />
      <button class="add_button" type="button" onClick={onAdd}>
        <img src={MapMarker} className='add_map'/>
      </button>
    </div>
  );
  //start here
  const List = ({ list, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [mapList,setList] = useState(null);

    function deleteList(listId) {
      //const userData = db.collection('users').doc(u.uid).get();
      //const d = (await userData).data;
      //const json = JSON.parse(d.geoData);
      const index = list.findIndex((item, index)=>{
        if(item.id == listId){
          return index;
        }
      });
      if (index > -1) { // only splice array when item is found
       list.splice(index, 1); // 2nd parameter means remove one item only
      }
    }

    function collaborate() {
      if (navigator.share) { 
        navigator.share({
          title: 'Collaborate with {user}',
          url: 'https://atlasjournal?share=${share-key}'
        }).then(() => {
          console.log('Thanks for sharing!');
        }).catch(console.error);
        } else {
          //shareDialog.classList.add('is-open');
      }
    }

    function copy() {
      list.push({name: title, id: uuidv4(), geo: mapList});
    }

    function exportToJSON() {
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
      var downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", list[0].name + ".json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove(); 
    }

    function deleteMap() {
      const listIndex = list.findIndex(title);
      if(listIndex > 0) {

      }
    }

    function handleBottomSheet(itemName,itemGeo) {
        setModalVisible(true);
        setTitle(itemName);
        setList(itemGeo);
    }

    function gotoPoint() {

    }

    return (
      <>
    <div class="box">
      {list.map((item) => (
        <>
        <button class="map_button" role="button" key={item.id} onClick={() => handleBottomSheet(item.name, item.geo)}>
        <img src={GlobeMarker} className='globe'/>
        <h3>{item.name}</h3>
        </button>
      
      </>
      ))}
      <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
        </Pressable>
          <input
              className="form__input mt-1 block w-full bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0"
              type="text"
              placeholder="Text input field in a sticky header"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
        <div class="map_points">
          <p class="point-title">{list.length} memories</p>
          <div class="points-containe">
        <button class="button-38 point" role="button">
            <div class="map_point_label">
            <p class="title_point">Title Point</p>   
            </div> 
        </button>
        </div>
        <div class="map_functions">
          <button class="button-38" role="button" onClick={copy}>
              <div class="map_point_label">
              Copy 
              </div> 
          </button>
          <button class="button-38" role="button" onClick={collaborate}>
              <div class="map_point_label">
              Share   
              </div> 
          </button>
          <button class="button-38" role="button" onClick={exportToJSON}>
            <div class="map_point_label">
            Export
            </div> 
          </button>
            <button class="button-38" role="button" onClick={deleteList}>
              <div class="map_point_label">
              Delete
              </div> 
            </button>
        </div>
        </div>
        </>
      </Modal>
    </>
    </div>
    </>
  )
};


//end here
export default function App() {
  const [user, setUser] = useState(null);
  // const [expoPushToken, setExpoPushToken] = useState('');
  // const [notification, setNotification] = useState(false);
  // const notificationListener = useRef();
  // const responseListener = useRef();

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     setNotification(notification);
  //   });

  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //     console.log(response);
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);
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
    //<SignIn />
    //<MyTabs />
    
  );
}

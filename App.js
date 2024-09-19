import React, { useRef, useEffect, useState, useCallback, } from 'react';
import { useSwipeable } from 'react-swipeable';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { hexToCSSFilter, HexToCssConfiguration } from 'hex-to-css-filter';
import { Router, Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { SearchBar } from 'react-native-elements';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Linking, TouchableOpacity, useWindowDimensions, Alert, Image, Modal, StyleSheet, Text, Pressable, View, TextInput, SafeAreaView, ScrollView, NativeModules} from 'react-native';
import $ from 'jquery';
import RenderHtml from 'react-native-render-html';
import LikeOutline from './assets/likeoutline.png';
import LikeFilled from './assets/likefilled.png';
import CityMapper from './assets/citymapper.png';
import CloseButton from './assets/close.svg';
import CloseButtonWhite from './assets/cross-white.png';
import AppleMapsLogo from './assets/applemapslogo.png';
import climatebadge from './assets/StripeClimateBadge.svg';
import askatlasaithumbnail from './assets/askatlasaithumbnail.jpeg';
import askatlasaivideo from './assets/askatlasaivideo.mp4';
import Uber from './assets/uber.png';
import Waze from './assets/waze.png';
import Navmii from './assets/navmii.png'
import MapIcon from './assets/mapIcon.png';
import BillingIcon from './assets/billing.png'
import Discuss from './assets/discuss.svg'
import SparklingIcon from './assets/sparkling.png';
import SendIcon from './assets/send.png';
import GlobeIconFilled from './assets/globeiconfilled.png';
import SparklingFilled from './assets/sparklingfilled.png';
import SettingsFilled from './assets/settingsfilled.png';
import GeminiPro from './assets/geminipro.png';
import Blog from './assets/blogiconoutline.png';
import BlogFilled from './assets/blogiconfilled.png';
import Blogger from './assets/blogger.png';
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
import MarkerSVG from "./assets/markercolorpopup.svg"
import TwoMarkers from "./assets/two_markers.png"
import Trash from "./assets/trash.png"
import Contacts from "./assets/contacts.png"
import File from "./assets/file.png"
import Review from "./assets/review.png"
import Lock from "./assets/lock.png"
import Rating from "./assets/rating.png"
import Community from "./assets/communityempty.png"
import CommunityFilled from "./assets/communityfilled.png"
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
import { getFirestore, query, getDocs, collection, where, orderBy, addDoc, doc, getDoc, updateDoc, setDoc, limit, onSnapshot, arrayUnion, arrayRemove, serverTimestamp, deleteDoc } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from '@firebase/messaging';
import { Helmet } from 'react-helmet';
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
const analytics = getAnalytics();
const messaging = getMessaging(app);
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'G-22HJ6GSR49',
}
const tagManagerArgs2 = {
  gtmId: 'AW-16493182687',
}
//AW-16493182687
TagManager.initialize(tagManagerArgs)
TagManager.initialize(tagManagerArgs2)
const api_key_geolocation = "1e697e8285b34190a228cd2836c338a6";
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 0,
  },
  centeredView2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  shareView: {
    paddingTop: '8px',
    margin: 0,
    height: 'fit-content',
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    padding: '0px 35px',
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
  modalView: {
    paddingTop: '8px',
    margin: 0,
    height: '90vh',
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
  modalView2: {
    paddingTop: '8px',
    margin: 0,
    height: '25vh',
    width: '90%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    borderRadius: '1rem',
    padding: 15,
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
  productView: {
    paddingTop: '8px',
    margin: 0,
    height: '100vh',
    width: '100%',
    backgroundColor: "#f4f4f8",
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
},
});


// const LikeButton = ({ initialLikes = 0 }) => {
//   const [likes, setLikes] = useState(initialLikes);
//   const [isLiked, setIsLiked] = useState(false);

//   const handleLike = () => {
//     if (!isLiked) {
//       setLikes(prevLikes => prevLikes + 1);
//       setIsLiked(true);
//     }
//   };

//   return (
//     <div style={{
//       display: 'flex',
//       alignItems: 'center',
//       gap: '10px'
//     }}>
//       <button 
//         onClick={handleLike}
//         style={{
//           background: 'none',
//           border: 'none',
//           cursor: isLiked ? 'default' : 'pointer',
//           padding: 0,
//           display: 'flex',
//           alignItems: 'center'
//         }}
//         disabled={isLiked}
//       >
//         <img 
//           src={isLiked ? LikeFilled : LikeOutline} 
//           alt={isLiked ? "Liked" : "Not liked"}
//           style={{
//             width: '24px',
//             height: '24px'
//           }}
//         />
//       </button>
//       <span style={{
//         fontSize: '16px',
//         fontWeight: 'bold'
//       }}>
//         {likes} {likes === 1 ? 'Like' : 'Likes'}
//       </span>
//     </div>
//   );
// };

const Privacy = ({navigation, route}) => {
  return (
    <>
    <ScrollView contentContainerStyle={{height: "80vh", flexGrow: 1, width: '100%', justifyContent: 'start', alignItems: 'start'}} style={aboutUsStyles.container}>
      <View style={aboutUsStyles.contentContainer}>
      <div style={{backgroundColor: '#ffffff', color: "#000000"}}>
      <p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
        <strong><span style={{fontFamily: 'Times New Roman'}}>GDPR Compliance</span></strong>
      </p>
      <p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
        <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>The EU's General Data Protection Regulations (GDPR) take effect on May 25th, 2018. I agree with the spirit of these regulations and am willing to support all laws that enable internet users to remain sovereign individuals. I aspire to embrace privacy by design and, whenever possible, to not collect and store personally identifiable information. I only collect information that helps me deliver a better service and experience for you when browsing this site, reading my content, and engaging with my products.</span>
      </p>
      <p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
        <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>At any time, you are free to ask me to unsubscribe you from my email newsletter or request your information to be exported and sent to you for review. Just reply to the email in question and include 'GDPR' in the subject line, as well as the specifics of your request. I'm here to help.</span>
      </p>
      <p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
        <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</span>
      </p>
      <p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
        <strong><span style={{fontFamily: 'Times New Roman'}}>Information We Collect</span></strong>
      </p>
      <p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
        <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>We collect the information you provide us when you subscribe to our newsletter, leave a comment, or fill out a contact form. This information may include your name, email address, and any other personal information you choose to provide.</span>
      </p>
      <p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
        <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>We also collect information automatically when you visit our website, including your IP address, browser type, and device type. This information is collected through the use of cookies and similar technologies.</span>
      </p>
      <p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
        <strong><span style={{fontFamily: 'Times New Roman'}}>How Do We Use Your Information?</span></strong>
      </p>
      <p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
        <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</span>
      </p>
      <ul style={{margin: 0, paddingLeft: 0}}>
        <li style={{marginTop: 14, marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
          <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>To personalize the user's experience and to allow us to deliver the type of content and product offerings in which you are most interested.</span>
        </li>
        <li style={{marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
          <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>To improve our website in order to better serve you.</span>
        </li>
        <li style={{marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
          <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>To allow us to better service you in responding to your customer service requests.</span>
        </li>
        <li style={{marginLeft: 27.6, marginBottom: 14, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
          <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>To administer a contest, promotion, survey, or other site feature.</span>
        </li>
      </ul>
      <p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>How Do We Protect Visitor Information?</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible. We use regular Malware Scanning.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>Do We Use 'Cookies'?</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>We Use Cookies To:</span></strong>
</p>
<ul style={{margin: 0, paddingLeft: 0}}>
  <li style={{marginTop: 14, marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Understand and save users' preferences for future visits.</span>
  </li>
  <li style={{marginLeft: 27.6, marginBottom: 14, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future.</span>
  </li>
</ul>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>We may also use trusted third-party services that track this information on our behalf. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies. If you disable cookies off, some features will be disabled. It won't affect the users experience that make your site experience more efficient and some of our services will not function properly. However, you can still place orders via email.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>Third Party Disclosure</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.</span>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>Third Party Links</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>Google</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>Google's advertising requirements can be summed up by</span>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}> </span>
  <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en" style={{textDecoration: 'none'}}>
    <u><span style={{fontFamily: 'Times New Roman', color: '#000000'}}>Google's Advertising Principles</span></u>
  </a>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>. They are put in place to provide a positive experience for users. We may use Google AdSense Advertising on our website. Google, as a third party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</span>
</p>

<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>California Online Privacy Protection Act</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require a person or company in the United States (and conceivably the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.</span>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>See more</span>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}> </span>
  <a href="http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf" style={{textDecoration: 'none'}}>
    <u><span style={{fontFamily: 'Times New Roman', color: '#000000'}}>here</span></u>
  </a>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 18, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>According To CalOPPA We Agree To The Following:</span></strong>
</p>
<ul style={{margin: 0, paddingLeft: 0}}>
  <li style={{marginTop: 14, marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Users can visit our site anonymously.</span>
  </li>
  <li style={{marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Once this privacy policy is created, we will add a link to it on our home page, or as a minimum on the first significant page after entering our website.</span>
  </li>
  <li style={{marginLeft: 27.6, marginBottom: 14, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Our Privacy Policy link includes the word 'Privacy', and can be easily be found on the page specified above.</span>
  </li>
</ul>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>Users will be notified of any privacy policy changes:</span>
</p>
<ul style={{margin: 0, paddingLeft: 0}}>
  <li style={{marginTop: 14, marginLeft: 27.6, marginBottom: 14, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}> </span>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>On our Privacy Policy Page</span>
  </li>
</ul>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>Users are able to change their personal information:</span>
</p>
<ul style={{margin: 0, paddingLeft: 0}}>
  <li style={{marginTop: 14, marginLeft: 27.6, marginBottom: 14, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>By emailing us</span>
  </li>
</ul>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>How Does Our Site Handle Do Not Track Signals?</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>We honor do not track signals and do not track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>Does Our Site Allow Third Party Behavioral Tracking?</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>It's also important to note that we allow third-party behavioral tracking.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>COPPA (Children Online Privacy Protection Act)</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>When it comes to the collection of personal information from children under 13, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, the nation's consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</span>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>We do not specifically market to children under 13.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>Fair Information Practices</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</span>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</span>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>We will notify the users via email within 7 business days. We also agree to the individual redress principle, which requires that individuals have a right to pursue legally enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or a government agency to investigate and/or prosecute non-compliance by data processors.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>CAN SPAM Act</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 18, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>We Collect Your Email Address In Order To:</span></strong>
</p>
<ul style={{margin: 0, paddingLeft: 0}}>
  <li style={{marginTop: 14, marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Send information, respond to inquiries, and/or other requests or questions.</span>
  </li>
  <li style={{marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Process orders and to send information and updates pertaining to orders</span>
  </li>
  <li style={{marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>We may also send you additional information related to your product and/or service.</span>
  </li>
  <li style={{marginLeft: 27.6, marginBottom: 14, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred</span>
  </li>
</ul>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 18, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>To Be In Accordance With CANSPAM We Agree To The Following:</span></strong>
</p>
<ul style={{margin: 0, paddingLeft: 0}}>
  <li style={{marginTop: 14, marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>NOT use false, or misleading subjects or email addresses</span>
  </li>
  <li style={{marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Identify the message as an advertisement in some reasonable way</span>
  </li>
  <li style={{marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Include the physical address of our business or site headquarters</span>
  </li>
  <li style={{marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Monitor third party email marketing services for compliance, if one is used.</span>
  </li>
  <li style={{marginLeft: 27.6, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Honour opt-out/unsubscribe requests quickly</span>
  </li>
  <li style={{marginLeft: 27.6, marginBottom: 14, lineHeight: 'normal', paddingLeft: 8.4, fontFamily: 'serif', fontSize: 10, color: '#7a7a7a', backgroundColor: '#ffffff'}}>
    <span style={{fontFamily: 'Roboto', fontSize: 14.5}}>Allow users to unsubscribe by using the link at the bottom of each email</span>
  </li>
</ul>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>If at any time you would like to unsubscribe from receiving future emails, you can email us at or follow the instructions at the bottom of each email, and we will promptly remove you from ALL correspondence.</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>Agreeing To Terms</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>If you do not agree to hrwisor.com's privacy policy as posted here on this website, please do not consent to the setting of cookies and the collection and storage of your personally identifiable information.</span>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>Your explicit consent indicates acceptance of this privacy policy in its entirety</span>
</p>
<p style={{marginTop: 0, marginBottom: 21, lineHeight: 'normal', fontSize: 21, backgroundColor: '#ffffff'}}>
  <strong><span style={{fontFamily: 'Times New Roman'}}>Contacting Us</span></strong>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>If there are any questions regarding this privacy policy you may contact us</span>
</p>
<p style={{marginTop: 0, marginBottom: 18.75, lineHeight: 'normal', fontSize: 14.5, backgroundColor: '#ffffff'}}>
  <span style={{fontFamily: 'Times New Roman', color: '#818181'}}>Last Updated on June 21, 2024</span>
</p>
<p style={{marginTop: 0, marginBottom: 8}}>&nbsp;</p>
</div>
      </View>
    </ScrollView>
    </>
  );
};

const About = ({navigation, route}) => {
  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <ScrollView contentContainerStyle={{height: "80vh", flexGrow: 1, width: '100%', justifyContent: 'start', alignItems: 'start'}} style={aboutUsStyles.container}>
      <View style={aboutUsStyles.contentContainer} >
        <Text style={aboutUsStyles.header}>Welcome to Ask Atlas AI</Text>
        <Text style={aboutUsStyles.subheader}>Revolutionizing Knowledge Discovery</Text>

        <Image
          source={{ uri: 'https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Replace with actual Ask Atlas AI logo or image
          style={aboutUsStyles.image}
        />

        <Text style={aboutUsStyles.welcomeText}>
          Welcome to Ask Atlas AI, your cutting-edge companion in the quest for knowledge and understanding. We're not just another AI application; we're your personal gateway to a world of information, tailored to your unique learning style and intellectual curiosity.
        </Text>

        <Text style={aboutUsStyles.descriptionText}>
          At Ask Atlas AI, we believe that knowledge should be accessible, engaging, and personalized. Born from the frustration of limited traditional search engines and learning platforms, our founder envisioned a tool that could provide quick, accurate, and context-aware answers to complex queries. This vision has materialized into a powerful AI-driven platform that's changing the way people interact with information.

          Our application harnesses the power of advanced natural language processing (NLP) algorithms and state-of-the-art machine learning models. These technologies work in harmony to not just understand your questions, but to comprehend the intent behind them, delivering responses that are not only accurate but also relevant to your specific needs.

          But Ask Atlas AI goes beyond mere text-based interactions. We've incorporated immersive 3D exploration capabilities, allowing you to visualize complex concepts in a way that traditional learning methods simply can't match. Whether you're a student grappling with abstract scientific theories, a professional seeking to understand intricate business processes, or simply a curious mind eager to explore the world around you, our 3D visualizations bring ideas to life.

          What truly sets Ask Atlas AI apart is its ability to learn and adapt. As you interact with the platform, it gains insights into your learning preferences, your areas of interest, and your knowledge gaps. This allows us to provide an increasingly personalized experience, suggesting new areas of exploration and adapting our teaching methods to suit your individual needs.

          We're more than just a tool; we're a community of learners, thinkers, and innovators. Join us in our mission to democratize knowledge and empower individuals to reach their full intellectual potential. With Ask Atlas AI, the future of learning is here, and it's personalized, engaging, and always at your fingertips.
        </Text>

        <Text style={aboutUsStyles.featuresHeader}>Key Features:</Text>
        <Text style={aboutUsStyles.featureItem}>• AI-powered personalized learning experience</Text>
        <Text style={aboutUsStyles.featureItem}>• Advanced natural language processing for intuitive interactions</Text>
        <Text style={aboutUsStyles.featureItem}>• Immersive 3D exploration of complex concepts</Text>
        <Text style={aboutUsStyles.featureItem}>• Real-time updates and seamless cross-platform functionality</Text>
        <Text style={aboutUsStyles.featureItem}>• Adaptive learning modules tailored to your progress</Text>

        <TouchableOpacity 
          style={aboutUsStyles.learnMoreButton} 
          onPress={() => handleLinkPress('https://askatlas.org/')}
        >
          <Text style={aboutUsStyles.learnMoreButtonText}>Explore Ask Atlas AI</Text>
        </TouchableOpacity>

        <Text style={aboutUsStyles.contactHeader}>Contact Us</Text>
        <Text style={aboutUsStyles.contactText}>Phone: +1 (555) 123-4567</Text>
        <Text style={aboutUsStyles.contactText}>Email: info@askatlas.ai</Text>

        <Text style={aboutUsStyles.locationHeader}>Our Location</Text>

        <View style={aboutUsStyles.socialLinksContainer}>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.linkedin.com/company/askatlas')}>
            <Text style={aboutUsStyles.socialLink}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://twitter.com/askatlasapp')}>
            <Text style={aboutUsStyles.socialLink}>Twitter/X</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.instagram.com/askatlasai')}>
            <Text style={aboutUsStyles.socialLink}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.facebook.com/AskAtlasAI')}>
            <Text style={aboutUsStyles.socialLink}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.tiktok.com/@askatlasai')}>
            <Text style={aboutUsStyles.socialLink}>TikTok</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={aboutUsStyles.footer}>
        <TouchableOpacity 
          style={aboutUsStyles.footerItem}
          onPress={() => handleLinkPress('https://askatlas.org/')}
        >
          <Text style={aboutUsStyles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={aboutUsStyles.footerItem}
          onPress={() => handleLinkPress('https://github.com/tamzid2001/askatlas')}
        >
          <Text style={aboutUsStyles.footerText}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={aboutUsStyles.footerItem}
          onPress={() => handleLinkPress('http://www.youtube.com/@AskAtlasAI')}
        >
          <Text style={aboutUsStyles.footerText}>YouTube</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={aboutUsStyles.footerItem}
          onPress={() => handleLinkPress('https://paypal.me/tamzidullah?country.x=US&locale.x=en_US')}
        >
          <Text style={aboutUsStyles.footerText}>Support Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const aboutUsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  welcomeText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 15,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    textAlign: 'justify',
  },
  featuresHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  featureItem: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  learnMoreButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  learnMoreButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  locationHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  socialLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  socialLink: {
    color: '#007AFF',
    fontSize: 16,
    margin: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#333',
  },
  footerItem: {
    padding: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});

const searchBarStyle = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  containerStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    padding: 0,
  },
  inputContainerStyle: {
    backgroundColor: '#e1e8ee',
  },
  inputStyle: {
    color: '#86939e',
  },
});

const Contact = ({ navigation, route }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const recipient = 'askatlasapp@gmail.com';
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(`
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}

        Message: ${formData.message}
      `);

      const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

      Linking.openURL(mailtoLink)
        .then(() => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        })
        .catch(err => {
          console.error('An error occurred', err);
          Alert.alert('Error', 'Unable to send email. Please try again later.');
        });
    }
  };

  const handleChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
    if (errors[name]) {
      setErrors(prevState => ({ ...prevState, [name]: null }));
    }
  };

  return (
    <ScrollView contentContainerStyle={{ height: '80vh', flexGrow: 1, width: '100%', justifyContent: 'start', alignItems: 'start'}} style={contactFormStyles.container}>
      <View style={contactFormStyles.formContainer}>
        <Text style={contactFormStyles.title}>Contact Us</Text>
        <Text style={contactFormStyles.subheader}>We'd love to hear from you!</Text>

        <Image
          source={{ uri: 'https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
          style={contactFormStyles.image}
        />

        <Text style={contactFormStyles.infoText}>Location: 123 Main St, Anytown, USA</Text>
        <Text style={contactFormStyles.infoText}>Phone: (555) 123-4567</Text>

        {isSubmitted && (
          <Text style={contactFormStyles.successMessage}>
            Thank you for your message! We'll get back to you soon.
          </Text>
        )}

        <TextInput
          style={contactFormStyles.input}
          placeholder="Name"
          onChangeText={(text) => handleChange('name', text)}
          value={formData.name}
        />
        {errors.name && <Text style={contactFormStyles.errorText}>{errors.name}</Text>}

        <TextInput
          style={contactFormStyles.input}
          placeholder="Email"
          onChangeText={(text) => handleChange('email', text)}
          value={formData.email}
          keyboardType="email-address"
        />
        {errors.email && <Text style={contactFormStyles.errorText}>{errors.email}</Text>}

        <TextInput
          style={contactFormStyles.input}
          placeholder="Phone"
          onChangeText={(text) => handleChange('phone', text)}
          value={formData.phone}
          keyboardType="phone-pad"
        />

        <TextInput
          style={contactFormStyles.input}
          placeholder="Subject"
          onChangeText={(text) => handleChange('subject', text)}
          value={formData.subject}
        />
        {errors.subject && <Text style={contactFormStyles.errorText}>{errors.subject}</Text>}

        <TextInput
          style={contactFormStyles.messageInput}
          placeholder="Message"
          onChangeText={(text) => handleChange('message', text)}
          value={formData.message}
          multiline
          numberOfLines={4}
        />
        {errors.message && <Text style={contactFormStyles.errorText}>{errors.message}</Text>}

        <TouchableOpacity style={contactFormStyles.submitButton} onPress={handleSubmit}>
          <Text style={contactFormStyles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const contactFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 75,
  },
  infoText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  messageInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  successMessage: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#333',
  },
  footerItem: {
    padding: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});

const BlogScreenContent = ({navigation, route}) => {
  const blogger = route.params?.list || [];
  console.log(blogger);
  const width = useWindowDimensions();
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, width: '100%', justifyContent: 'start', alignItems: 'start'}}>
      <View style={styles.centeredView}>
      <button 
  onClick={() => navigation.goBack()}
  style={{
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden'
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#0056b3';
    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '#007bff';
    e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
  }}
  onMouseDown={(e) => {
    e.target.style.transform = 'scale(0.98)';
  }}
  onMouseUp={(e) => {
    e.target.style.transform = 'scale(1)';
  }}
>
  Go Back
</button>
            <article>
              <h1>{blogger.title}</h1>
              <RenderHtml
                source={{ html: blogger.content }}
              />
            </article>
      </View>
    </ScrollView>
  );
}

const BlogScreenHome = ({navigation, route}) => {
  const [blogContent, setBlogContent] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  var bloggerID = "5902394823299789380";
  var APIKey = "AIzaSyBsDXIX3XJ3q-0bp-2f0OGnZ2y6dCQ97PE";
  async function fetchBloggerPosts(bloggerID, APIKey) {
    const url = `https://www.googleapis.com/blogger/v3/blogs/${bloggerID}/posts?key=${APIKey}&fetchBodies=true&fetchImages=true&maxResults=100`;
  
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error.message);
      throw error;
    }
  }
  const filteredBlogContent = blogContent.filter(blog => 
    blog.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    fetchBloggerPosts(bloggerID, APIKey)
      .then(data => {
        for(var i=0; i<data.length; i++) {
          console.log(data[i].title)
        }
        setBlogContent(data);
        console.log(data)
      //   const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/i;
      //   data.map((blog, index) => {
      //     const match = blog.content.match(regex);
      //     if (match) {
      //       const hrefValue = match[2];
      //       console.log("Extracted href:", hrefValue);
      //     } else {
      //       console.log("No href attribute found");
      //     }
      // })
    })
      .catch(error => console.error(error));
  }, []);
  return (
    <>
    <ScrollView contentContainerStyle={{flexGrow: 1, width: '100%', justifyContent: 'start', alignItems: 'start'}}>
    <View style={styles.centeredView}>
    <header style={{
      backgroundColor: "#2c3e50",
      padding: "0.5rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      width: "100vw"
    }}>
      <nav style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowX: "auto",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
        msOverflowStyle: "none",
        scrollbarWidth: "none"
      }}>
        <button 
          onClick={() => {navigation.navigate("Discover")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Home
        </button>
        <button 
          onClick={() => {navigation.navigate("About")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          About
        </button>
        <button 
          onClick={() => {navigation.navigate("Contact")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Contact
        </button>
        <button 
          onClick={() => {navigation.navigate("Privacy")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Privacy
        </button>
        <button 
          onClick={() => {navigation.navigate("Blog")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          User Stories
        </button>
      </nav>
    </header>
    <SearchBar 
          placeholder="Search Here..."
          lightTheme 
          round 
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)} 
          autoCorrect={true} 
          containerStyle={searchBarStyle.containerStyle}
          inputContainerStyle={searchBarStyle.inputContainerStyle}
          inputStyle={searchBarStyle.inputStyle}
        /> 
      {filteredBlogContent.map(blog => (
            <button onClick={() => navigation.navigate("Content", {list: blog})} class="card_blog" style={{width: '95%', margin: 'auto', padding: '0px', marginTop: '1rem'}}>
            <div class="card__header">
              <img src={blog.images != undefined ? blog.images[0].url:"https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="card__image" class="card__image" width="100%"></img>
            </div>
            {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/JDCIGcAETEg?si=5rBbXjqFeQ98thMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <div class="card__body">
              <span class="tag tag-blue">Technology</span>
              <h4>{blog.title}</h4>
            </div>
            <div class="card__footer">
              <div class="user" style={{alignItems: 'center', fontSize: 'larger'}}>
                <img height="48" width="48" src={AppIcon} alt="user__image" class="user__image"></img>
                <div class="user__info">
                  <h4>Atlas AI</h4>
                </div>
              </div>
            </div>
          </button>
      ))}
    </View>
    </ScrollView>
    </>
  );
}
const Stack = createStackNavigator();

const BlogScreen = ({navigation, route}) => {
  return (
      <Stack.Navigator
            initialRouteName="Blog"
            screenOptions={{
              headerMode: 'screen',
              headerTintColor: 'black',
              headerStyle: { backgroundColor: 'white' },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 32,
                color: 'black',
              }
            }}
      >
        <Stack.Screen name="Blog" component={BlogScreenHome}/>
        <Stack.Screen name="Content" component={BlogScreenContent} />
      </Stack.Navigator>
  );
}

const HeaderStack = createStackNavigator();

const Header = ({navigation, route}) => {
  return (
    <NavigationContainer>
      <HeaderStack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerMode: 'screen',
              headerTintColor: 'black',
              headerStyle: { backgroundColor: 'white' },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 32,
                color: 'black',
              }
            }}
      >
        <HeaderStack.Screen name="Home" component={MyTabs}/>
        <HeaderStack.Screen name="About" component={About}/>
        <HeaderStack.Screen name="Blog" component={BlogScreenHome}/>
        <HeaderStack.Screen name="Contact" component={Contact} />
        <HeaderStack.Screen name="Privacy" component={Privacy}/>
      </HeaderStack.Navigator>
      </NavigationContainer>
  );
}

const MapScreen = ({navigation, route}) => {
  const imageRef = useRef(null);
  var usertext2 = useRef('');
  const [index, setIndex] = useState(0);
  const [reviewLink, setReviewLink] = useState("https://play.google.com/store/apps/details?id=com.firebaseapp.atlasai.twa");
  const [googleMapsLink, setGoogleMapslink] = useState("");
  const [appleMapsLink, setAppleMapslink] = useState("");
  const [wazeMapsLink, setWazeMapslink] = useState("");
  const [citymapperMapsLink, setCityMapperlink] = useState("");
  //console.log(route.params);
  // const [userMapList,setMapList] = useState(route.params);
  const [images, setImages] = useState([]);
  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  // const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(10);
  // const [id,setid] = useState('');
  const [mk, setmk] = useState([]);
  const [popuplist,setPopupList] = useState([]);
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
  var p = [];
  const handlers = useSwipeable({
    onSwipedDown: () => {setModalVisible(!modalVisible);},
  });
  const handlers2 = useSwipeable({
    onSwipedDown: () => {setModalVisible2(!modalVisible2);},
  });
  //var currentMarkers = [];
  function copyToClipboard() {
    const userId = auth.currentUser.uid;
    // const textarea = document.createElement('textarea');
    // textarea.value = userId;
    // document.body.appendChild(textarea);
    // textarea.select();
    // document.execCommand('copy');
    // document.body.removeChild(textarea);
    navigator.clipboard.writeText(userId);
    logEvent(analytics, 'copy_uid');
    return;
}
// let [geoJson, setgeo] = useState({type: 'FeatureCollection', features: []});
// let [text, setText] = useState('');
  // Initialize map when component mounts
  async function get_user_location() {
    await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=1e697e8285b34190a228cd2836c338a6`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Request-Control-Allow-Origin': '*',
      },
    }).then(async (response) => {
      var g = await response.json();
      console.log(g);
      console.log(g.latitude);
      console.log(g.longitude);
      setLat(parseFloat(g.latitude));
      setLng(parseFloat(g.longitude));
      if(map.current != null && route.params == undefined) {
        const target = {
          center: [parseFloat(g.longitude), parseFloat(g.latitude)],
          zoom: 8,
          bearing: 70,
          pitch: 85
          };
        map.current.flyTo({
         ...target, // Fly to the selected target
          zoom: 16, // Maintain the current zoom level
          bearing: 70, // Maintain the current bearing angle
          pitch: 85, // Maintain the current pitch angle
        });
      }
      return g;
    }).catch((err)=>{
      console.log(err);
      return err;
    })
  }

const nextMarkerF = useCallback((x, y) => {
  const target = {
    center: [x, y],
    zoom: 10,
    bearing: 70,
    pitch: 85
    };
  map.current.flyTo({
    ...target, // Fly to the selected target
    duration: 5000, // Animate over 12 seconds
    essential: true // This animation is considered essential with
    //respect to prefers-reduced-motion
    });
});

  const mapMe = useCallback(async () => {
    console.log(route.params);
    if(auth.currentUser != null){
      const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
      const data = await getDoc(doc(db,"users", auth.currentUser.uid));
      console.log(data);
      //console.log(data.data().isPremium);
      //var f = data.data().isPremium;
      const querySnapshot = await getDocs(q).then((res)=>{console.log(res);return res;}).catch((err)=>{console.log(err);return err;});
      var o = querySnapshot.size;
    }
      if(route.params != undefined && map.current != null){
        console.log(route.params.list);
        const f = route.params.list;
          console.log(f);
          console.log(route.params.id);
          var mapList = f.geo;
      if(route.params.on == true){
        console.log(route.params.on);
      const target = {
        center: [mapList[0].latlng[0],mapList[0].latlng[1]],
        zoom: 11,
        bearing: 70,
        pitch: 85
        };
      map.current.flyTo({
        ...target, // Fly to the selected target
        duration: 5000, // Animate over 12 seconds
        essential: true // This animation is considered essential with
        //respect to prefers-reduced-motion
        });
        if(route.params != undefined){
          console.log(route.params.list);
          console.log(mk);
          for(var h=0;h<mk.length;h++){
            mk[h].remove();
          }
          setmk([]);
          console.log(popuplist);
          console.log(p);
          for(var u = 0;u < p.length;u++) {
            console.log(p[u]);
            p[u].remove();
          }
          setPopupList([]);
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
                // create the popup
                if(!isNaN(mapList[i].latlng[0]) && !isNaN(mapList[i].latlng[1])) {
                var popupHTML = `<div style='display: flex;align-items: center'><div style="display: flex;flex-direction: column"><p style="font-weight: bold;font-size:large;align-items: center;display: flex;"><img width="20px" height="20px" style="filter: ${hexToCSSFilter(mapList[i].color).filter}" src=${MarkerSVG} />${mapList[i].title}</p><p style="font-weight: normal;font-size:small">${mapList[i].sentence}</p></div></div>`;
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHTML).setLngLat([mapList[i].latlng[0],mapList[i].latlng[1]]).addTo(map.current);
            p.push(popup);
          const marker = new mapboxgl.Marker({
            color: mapList[i].color,
            draggable: false,
            anchor: 'center'
            }).setLngLat([mapList[i].latlng[0],mapList[i].latlng[1]]).addTo(map.current);
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
                zoom: 16,
                bearing: 70,
                pitch: 85
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
              //setImages(g[4]);
              //setmk(marker);
              setModalVisible2(true);
              //image-gallery-description
          });
          m.push(marker);
          console.log(m);
        }
        }
        setmk(m);
        setPopupList(p);
        console.log(m);
        console.log(mk);
        console.log(p);
        route.params.on = false;
      }
      }
    }
  }, [route.params]);
  mapMe();
  useEffect(async() => {
    console.log(route.params);
    console.log("hello");
    //   console.log(res);
    //   setLat(res.latitude);
    //   setLng(res.longitude);
    //   return res;
    // }).catch((err)=>{
    //   console.log(err);
    //   return err;
    // })
    // if(auth.currentUser != null){
    //   const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
    //   const data = await getDoc(doc(db,"users", auth.currentUser.uid));
    //   console.log(data);
    //   console.log(data.data().isPremium);
    //   var f = data.data().isPremium;
    //   const querySnapshot = await getDocs(q).then((res)=>{console.log(res);return res;}).catch((err)=>{console.log(err);return err;});
    //   var o = querySnapshot.size;
    //   if(o > 5 && f == false) {
    //     setModalVisible3(true);
    //   }
    // }
    if(map.current) return;
    // console.log(lng);
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/standard',
      center: [lng, lat],
      zoom: zoom
    });
    var user_location = await get_user_location();
    console.log(user_location);
    if(route.params != undefined){
      const f = route.params.list;
        console.log(f);
        console.log(route.params.id);
        var mapList = f.geo;
    if(route.params.on == true){
      console.log(route.params.on);
    const target = {
      center: [mapList[0].latlng[0],mapList[0].latlng[1]],
      zoom: 8,
      bearing: 70,
      pitch: 85
      };
    map.current.flyTo({
      ...target, // Fly to the selected target
      duration: 5000, // Animate over 12 seconds
      essential: true // This animation is considered essential with
      //respect to prefers-reduced-motion
      });
      if(route.params != undefined){
        console.log(route.params.list);
        console.log(mk);
        for(var h=0;h<mk.length;h++){
          mk[h].remove();
        }
        setmk([]);
        console.log(p);
        console.log(popuplist)
        for(var u = 0;u < p.length;u++) {
          p[u].remove();
        }
        setPopupList([]);
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
          var popupHTML = `<div style='display: flex; align-items: center'><div style="display: flex;flex-direction: column"><p style="font-weight: bold;font-size:large"><img width="20px" height="20px" style="filter: ${hexToCSSFilter(mapList[i].color).filter}" src=${MarkerSVG} />${mapList[i].title}</p><p style="font-weight: normal;font-size:small;align-items: center;display: flex;">${mapList[i].sentence}</p></div></div>`;
          p.push(popup);
          const popup = new mapboxgl.Popup({ offset: 25, closeOnClick: false }).setHTML(popupHTML).setLngLat([mapList[i].latlng[0],mapList[i].latlng[1]]).addTo(map.current);
        
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
            // console.log('hrllo')
            const target = {
              center: [parseFloat(g[2]), parseFloat(g[3])],
              zoom: 16,
              bearing: 70,
              pitch: 85
              };
            map.current.flyTo({
              ...target, // Fly to the selected target
              duration: 5000, // Animate over 12 seconds
              essential: true // This animation is considered essential with
              //respect to prefers-reduced-motion
              });
              // var googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${parseFloat(g[2])}%2C${parseFloat(g[3])}`
              // setGoogleMapslink(googleMapsLink);
              // var appleMapsLink = `http://maps.apple.com/?ll=${parseFloat(g[2])},${parseFloat(g[3])}`;
              // setAppleMapslink(appleMapsLink);
              // var cityMapperLink = `https://citymapper.com/directions?endcoord=${parseFloat(g[2])}%2C${parseFloat(g[3])}`;
              // setCityMapperlink(cityMapperLink);
              // var wazeLink = `https://www.waze.com/ul?ll=${parseFloat(g[2])}%2C${parseFloat(g[3])}&navigate=yes`;
              // setWazeMapslink(wazeLink);
            setTitle(g[0]);
            setDescription(g[1]);
            setLat(parseFloat(g[2]));
            setLng(parseFloat(g[3]));
            console.log("hello");
            //event.preventDefault();
            // setImages(g[4]);
            //setmk(marker);
            setModalVisible2(true);
            setModalVisible4(true);
            logEvent("open_modal");
            console.log("hello");
            //image-gallery-description
        });
    
        m.push(marker);
      }
      setmk(m);
      console.log(m);
      console.log(mk);
      console.log(p);
      for(var i=0; i<mk.length;i++){
        console.log(mk[i]);
      }
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

  const nav = new mapboxgl.NavigationControl({
    visualizePitch: true
});
  map.current.addControl(nav, 'bottom-right');

  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  // console.log(document.getElementsByClassName("image-gallery-description"));
  // var t = document.getElementsByClassName("image-gallery-description");
  // console.log(t.item(0));
  // for (var i = 0; i < t.length; i++) {
  //   //console.log("hello");
  //   console.log(t[i]);
  // }
  // for (var i = 0; i < document.getElementsByClassName("image-gallery-description").length; i++) {
  //   console.log(document.getElementsByClassName("image-gallery-description")[i].innerHTML);
  // }
  function getOS() {
    const userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }

  
  return (
    <div>
      <div className='map-container' id="map" ref={mapContainerRef} />
      <>
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible2}
              onShow={()=>{
                for (var i = 0; i < document.getElementsByClassName("image-gallery-description").length; i++) {
                  console.log(document.getElementsByClassName("image-gallery-description")[i].innerHTML);
                  console.log(images[i]);
                  document.getElementsByClassName("image-gallery-description")[i].innerHTML = `Photo by <a style="color: white" rel="noopener noreferrer" href='${images[i].userUrl}?utm_source=atlasai&utm_medium=referral'>${images[i].userName}</a> on <a style="color: white" rel="noopener noreferrer" href='https://unsplash.com/?utm_source=atlasai&utm_medium=referral'>Unsplash</a>`
                }
              }}
              onRequestClose={async () => {
                setModalVisible2(!modalVisible2);
                const data = await getDoc(doc(db,"users", auth.currentUser.uid));
                //f = data.data().isPremium;

              }}>
                <>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <div className="topBar">
                      <div className="topBarClose">
                        <img height="36" width="36" src={CloseButton} alt="close" onClick={() => setModalVisible2(!modalVisible2)}/>
                      </div>
                    <div>
                      <h3>{title}</h3>
                    </div>
                    <ScrollView contentContainerStyle={{ height: '80vh', flexGrow: 1, width: '100%', justifyContent: 'start', alignItems: 'start'}}>
                    <div style={styles.titleBox}>
                  <ImageGallery
                    ref={imageRef}      
                    showIndex={true}
                    showBullets={false}
                    infinite={true}
                    showThumbnails={true}
                    showFullscreenButton={true}
                    showGalleryFullscreenButton={true}
                    showPlayButton={true}
                    showGalleryPlayButton={true}
                    showNav={false}
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
                    <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                      <button style={{border: "none", display: "flex", alignItems: "center", fontSize: "20px", fontWeight: "bold", color: "black"}} onClick={
                        ()=>{
                          const link = document.createElement('a');
                          link.href = "https://expedia.com/affiliates/expedia-home.IUD9rBj";
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                          }} className='image-gallery-custom-action card'>
                        <img style={{marginRight: '0.5rem'}} width="30" height="30" src="https://img.icons8.com/color/48/expedia.png" alt="expedia"/>
                        Expedia
                      </button>
                    </div>
              <div className='descriptionBox'>
                <p className="mapDescription">
                  {description}
                </p>
                {/* <>
                <div style={{backgroundColor: 'white'}}>
              <div className='show'>
                <div className='showInput'>
            <TextInput ref={usertext2} style={styles.input} multiline={true} rows={1} maxLength={1000} onChangeText={(text) => {usertext2.current.value = text;}} placeholder="Explore the Atlas here..."/>
            </div>
            <div className="delete_point">
        <button className="button-38" disabled={true} onClick={
          async ()=>{
            if(usertext2.current.value != ""){
            //hideDice();
            //setDisabled(true);
            await generateMarkers(usertext2.current.value).then(()=>{
              //window.location.reload();
              //setDisabled(false);
              return showDice();
            }).catch((err)=>{
              console.log(err);
              //setDisabled(false);
              //showDice();
              return err;
            })
          }
          }}>
          <p className="send">                    
            <img src={SendIcon} style={{width:"24px",height:"24px", borderRadius: "1rem"}}/>
          </p>
          </button>
      </div>
            </div>
      </div>
                </> */}
              </div>
              </ScrollView>
              </div>
              <div className="map_points">
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
    console.log(exist.exists());
    if(!exist.exists()){
    const usersRef = await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      lastLoggedIn: "",
      isPremium: false,
      fcmToken: null 
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
          <p className="terms_label">By continuing you accept the <a rel="noopener noreferrer" href="https://askatlas.org">terms of use</a> and <a rel="noopener noreferrer" href="https://askatlas.org">privacy policy</a></p>
      </div>
    </>
  )

}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <View style={{width: "100%", position: 'fixed', paddingBottom: '1rem', marginBottom: 0, bottom: 0, top: 0, left: 0, right: 0}}>
    {/* <NavigationContainer> */}
      <Tab.Navigator
        initialRouteName="Home"
        safeAreaInsets={{ bottom: 0 }}
        screenOptions={{
          headerShown: true,
          headerTransparent: false,
          tabBarShowLabel: false,
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
              <img src={focused ? SparklingFilled:SparklingIconOutline} style={{ width: "34px", height: "34px",}} />
            ),
            headerShown: true,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleStyle: {
              fontSize: 32,
              fontWeight: "bold",
            },
            tabBarShowLabel: false
          }}
        />
        <Tab.Screen
        name="Atlas"
          component={MapScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <img src={focused ? GlobeIconFilled:GlobeIcon} style={{ width: "34px", height: "34px" }} />
            ),
            headerShown: false,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleStyle: {
              fontSize: 32,
              fontWeight: "bold",
            },
            tabBarShowLabel: false
          }}
        />
        <Tab.Screen
        name="Community"
          component={CommunityScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <img src={focused ? CommunityFilled:Community} style={{ width: "34px", height: "34px" }} />
            ),
            headerShown: true,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleStyle: {
              fontSize: 32,
              fontWeight: "bold",
            },
            tabBarShowLabel: false
            
          }}
        />
                <Tab.Screen
        name="Blog"
          component={BlogScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <img src={Blogger} style={{ width: "34px", height: "34px" }} />
            ),
            headerShown: false,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleStyle: {
              fontSize: 32,
              fontWeight: "bold",
            },
            tabBarShowLabel: false
          }}
        />
        <Tab.Screen
            name="Settings"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <img src={focused ? SettingsFilled:SettingsIcon} style={{ width: "34px", height: "34px" }} />
            ),
            headerShown: true,
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleStyle: {
              fontSize: 32,
              fontWeight: "bold",
            },
            tabBarShowLabel: false
          }}
        />
      </Tab.Navigator>
    {/* </NavigationContainer> */}
    </View>
  );
}

function Profile({ navigation }) {
  //const [billing, setBilling] = useState(`https://billing.stripe.com/p/login/7sI6rY1MOdMAdOM8ww`);
  //let [open,setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  var au = auth.currentUser;
  if(user != null) {
    au = au.isAnonymous;
  } else {
    au = false;
  }
  //console.log(au);
  //console.log(user.displayName);
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
      //console.log(credential);
      console.log(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      //console.log(user);
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
    <ScrollView contentContainerStyle={{height: "80vh", flexGrow: 1, width: '100%', justifyContent: 'start', alignItems: 'start'}}>
    <header style={{
      backgroundColor: "#2c3e50",
      padding: "0.5rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      width: "100vw"
    }}>
      <nav style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowX: "auto",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
        msOverflowStyle: "none",
        scrollbarWidth: "none"
      }}>
        <button 
          onClick={() => {navigation.navigate("Discover")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Home
        </button>
        <button 
          onClick={() => {navigation.navigate("About")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          About
        </button>
        <button 
          onClick={() => {navigation.navigate("Contact")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Contact
        </button>
        <button 
          onClick={() => {navigation.navigate("Privacy")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Privacy
        </button>
        <button 
          onClick={() => {navigation.navigate("Blog")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          User Stories
        </button>
      </nav>
    </header>
    <div className='' style={{width: '100%'}}>
    <iframe style={{width: '100%', height: "65vh"}} src="https://docs.google.com/forms/d/e/1FAIpQLScHGwqFDKBv9it8a5tTzdEOm0uT_bvECw5VhhBCPhKfWliQUQ/viewform?embedded=true" width="640" height="910" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <div className="profile_button_box">
        <div class="settings-container">
  <section class="settings">
  {/* <button onClick={()=> setModalVisible3(true)} class="p_button" role="button">
            <div class="profile_label">
            <img src={SparklingIcon} className='settings'/>
            <p style={{color: "#000000"}}class="profile_title_point">Premium Plan</p>   
          </div>
        </button>
  <a class="p_button stripe" role="button" target='_blank' href={billing}>
            <div class="profile_label">
            <img src={BillingIcon} className='settings'/>
            <p class="profile_title_point">Manage Billing</p>   
          </div>
        </a> */}
        {/* <a class="p_button" role="button" rel="noopener noreferrer" target='_blank' href="https://climate.stripe.com/AnsUPH">
            <div class="profile_label">
            <img src={climatebadge} className='settings'/>
            <p style={{color: "#000000"}} class="profile_title_point">Our Commitment to Climate Change</p>   
          </div>
        </a> */}
<div class="card_blog" style={{width: '95%', margin: 'auto', padding: '0px', marginTop: '1rem'}}>
    {/* <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="100%"></img>
    </div> */}
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JDCIGcAETEg?si=5rBbXjqFeQ98thMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
        <a rel="noopener noreferrer" href="https://askatlas.org/"><img width="24" height="24" src="https://img.icons8.com/ios/50/info--v1.png" alt="info--v1"/>&nbsp;Get started</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a rel="noopener noreferrer" href="https://askatlas.org/"><img width="24" height="24" src="https://img.icons8.com/ios/50/info--v1.png" alt="info--v1"/>&nbsp;What is Ask Atlas AI?</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a rel="noopener noreferrer" href="https://askatlas.org/#faq"><img width="24" height="24" src="https://img.icons8.com/ios/50/info--v1.png" alt="info--v1"/>&nbsp;Help & FAQ</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
    </div>
    <header class="social-header">
      <h3>Follow Us</h3>
    </header>
    <div class="follow-us-section">
      <div className='section-container'>
        <a rel="noopener noreferrer" href="https://twitter.com/askatlasapp" class="twitter-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/twitterx--v2.png" alt="twitterx--v2"/>&nbsp;X</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61554991187515" class="discord-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/facebook--v1.png" alt="facebook--v1"/>&nbsp;Facebook</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a rel="noopener noreferrer" href="https://www.instagram.com/askatlasai?igsh=ZTZuNW16ZmxuaHl4&utm_source=qr" class="discord-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/>&nbsp;Instagram</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a rel="noopener noreferrer" href="https://www.youtube.com/channel/UC-YDDEIwSkhxRaUMNFuPaRQ" class="discord-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/youtube-play--v1.png" alt="youtube-play--v1"/>&nbsp;YouTube</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a rel="noopener noreferrer" href="https://www.linkedin.com/company/askatlas/about/?viewAsMember=true" class="discord-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin"/>&nbsp;LinkedIn</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a rel="noopener noreferrer" href="https://www.tiktok.com/@askatlasai?is_from_webapp=1&sender_device=pc" class="discord-link"><img width="24" height="24" src="https://img.icons8.com/ios/50/tiktok--v1.png" alt="tiktok--v1"/>&nbsp;TikTok</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
    </div>

    <header class="legal-header">
      <h3>Legal</h3>
    </header>
    <div className="about-section">
      <div className='section-container'>
        <a rel="noopener noreferrer" href="https://askatlas.org/privacy"><img width="24" height="24" src="https://img.icons8.com/ios/50/privacy-policy.png" alt="privacy-policy"/>&nbsp;Privacy policy</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
      <div className='section-container'>
        <a rel="noopener noreferrer" href="https://askatlas.org/terms"><img width="24" height="24" src="https://img.icons8.com/ios/50/terms-and-conditions.png" alt="terms-and-conditions"/>&nbsp;Terms of service</a>
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/chevron-right.png" alt="chevron-right"/>
      </div>
    </div>
          <div class="app-version">
          Ask Atlas v1.0.1 • Build 8732<br></br>UID: {user.uid}
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
    var usertext = useRef('');
    const [disabled, setDisabled] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [list, setList] = React.useState({});
    const [title, setTitle] = useState("Ask Atlas AI");
    const [description, setDescription] = useState("");
    const [pointTitle, setPointTitle] = useState("");
    const [pointDescription, setPointDescription] = useState("");
    const [lng, setlng] = useState(0);
    const [lat, setlat] = useState(0);
    const [mapList,setMapList] = useState(null);
    const [shareUrl, setShare] = useState("");
    const sh = useRef('');
    const Access_Key = 'tKqmTYXWxWdvGHHlbO8OtfdtJMYaz0KXKWKyCaG61u4';
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
      //onTap: () => {setModalVisible(!modalVisible)}
    });

    const handlers2 = useSwipeable({
      onSwipedDown: () => {setModalVisible2(!modalVisible2);},
      //onTap: () => {setModalVisible(!modalVisible)}
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
    // function removeDoubleQuotes(inputString) {
    //   // This regex matches all double quotes and new lines
    //   return inputString.replace(/"|\n/g, '');
    // }
    function removeDoubleQuotes(inputString) {
      return inputString.replace(/["/\\\\]/g, '');
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
        //console.log(x);
        //console.log(captureKeyValuePairs(x));
        var tt = {};
        var t = [];
        const y = captureKeyValuePairs(x);
        for(var i = 0; i < y.length; i++){
          //console.log(removeDoubleQuotes(y[i].value));
          t.push(removeDoubleQuotes(y[i].value));
        }
        //console.log(t);
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
            tt.geo.push({"images": imagesP, "color" :t[i+1], "title": t[i+2], "description": t[i+3], "id": t[i+4], "style": t[i+5], "latlng": [parseFloat(t[i+6].split(",")[0]),parseFloat(t[i+6].split(",")[1])], "sentence": t[i+7]});;
          }
        }
        console.log(tt);
        // console.log(JSON.stringify(x));
        // console.log(cleanText(JSON.stringify(x)));
        // console.log(JSON.parse(JSON.stringify(cleanText(JSON.stringify(x)))));
        //x = JSON.parse(JSON.stringify(x));
        //console.log(x);
        if(tt.geo.length > 0){
          //console.log(auth.currentUser.uid);
          const userRef = doc(db, "users", auth.currentUser.uid);
          // const j = await getDoc(userRef);
          // var z = JSON.parse(j.data().data);
          // console.log(z);
          // z.push(tt);
          // console.log(z);
          setList(tt);
          //console.log(JSON.stringify(tt));
          await addDoc(collection(db, "users"),{
            data: JSON.stringify(tt),
            uid: auth.currentUser.uid,
            lastLoggedIn: serverTimestamp(),
            postedOn: serverTimestamp()
          }).then((res) => {return res;}).catch((err)=>{
            console.log(err);
            return err;
          });
          await addDoc(collection(db, "posts"),{
            data: JSON.stringify(tt),
            lastLoggedIn: serverTimestamp()
          }).then((res) => {return res;}).catch((err)=>{
            console.log(err);
            return err;
          });
          await updateDoc(userRef, {
            // data: JSON.stringify(tt),
            lastLoggedIn: serverTimestamp()
          }).then((res) => {return res;}).catch((err)=>{
            console.log(err);
            return err;
          });
        return x;
      } else {
        //please try again later
        return ;
      }
      }).catch((err) => {
        console.log(err);
        //Alert(err.message);
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

async function discover() {
  var o = 0;
  var f;
  if(document.querySelector('.box') != null) {
    document.querySelector('.box').innerHTML = '';
  }
  //console.log(auth.currentUser);
  if(auth.currentUser != null){
    const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
    const data = await getDoc(doc(db,"users", auth.currentUser.uid));
    console.log(data);
    //console.log(data.data().isPremium);
    f = data.data().isPremium;
const querySnapshot = await getDocs(q).then((res)=>{console.log(res);return res;}).catch((err)=>{console.log(err);return err;});
o = querySnapshot.size;
if(!querySnapshot.empty){
  logEvent(analytics, 'show_all');
  //console.log(querySnapshot.size);
querySnapshot.forEach((mapData) => {
  //console.log(mapData.data());
// doc.data() is never undefined for query doc snapshots
//setList(JSON.parse(doc.data().data));
//console.log(JSON.parse(doc.data().data));
var g = JSON.parse(mapData.data().data);
//console.log(g);
//var coordinateText = g.geo;
//console.log(coordinateText);
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
var txt4 = document.createElement("div");  // Create with DOM
txt4.innerHTML = `<button class="shareButton" data-id="${mapData.id}"> 
  <img width="36" height="36" src="https://img.icons8.com/ios/50/share--v1.png" alt="share--v1"/>
</button>
<button class="deleteButton" data-id="${mapData.id}"> 
  <img width="36" height="36" src="https://img.icons8.com/ios/50/trash--v1.png" alt="trash--v1"/>
</button> `;
$(".box").append(txt3);
//$(".box").append(txt4);
});
} else {
  //console.log("empty");
  document.querySelector(".box").innerHTML = `
  <p style="display: flex;justify-content: center;font-size: 24px;font-weight: bold;text-align:center;width: 100%" >Ask Atlas AI is a AI Travel Guide and Planning App that you need.</p>
  <video width="100%" height="240" controls poster=${askatlasaithumbnail}>
  <source src=${askatlasaivideo} type="video/mp4"></source>
  Your browser does not support the video tag.
</video>
<div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
<button class="button-38">
  <p className="send">                    
    <img src=${SendIcon} style="width:24px;height:24px; borderRadius: 1rem"/>
  </p>
  </button>
  <p>Prompt your Atlas places to explore.</p>
</div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-emojis-web-and-social-media-flatart-icons-outline-flatarticons.png" alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Use AI-powered suggestion cards</p>
  </div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src=${GlobeIcon} alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Gain expert insight anywhere on our Atlas</p>
  </div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
  <button class="button-38" style="padding: '10px'">
  <p class="send">                    
    <img src="https://img.icons8.com/ios/50/apple-camera.png" alt="apple-camera" style="width:24px; height:24px"/>
  </p>
  </button>
  <p>Enjoy world-class photography</p>
</div>
    <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src=${ShareIcon} alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Share with friends & family!</p>
  </div>
  <h3 style="display: flex; justify-content: center;width: 100%;font-size: 24px;font-weight: bold">Powered by</h3>
  <div style="display: flex; flex-direction: cloumn; justify-content: center; align-items: center;width: 100%"> 
    <img src=${GeminiPro} style="width: 60%"></img>
  </div>`
}
}
$('.mapButton').off("click");
$('.shareButton').off("click");
$('.deleteButton').off("click");
$('.card').off("click");

$('.mapButton').on("click", (async function(){
  // if(o > 5 && f == false){
  //   setModalVisible2(true);
  //   return;
  // }
  console.log("map");
  // const d = {features: []};
  var index = $(this).attr('data-id');
  //console.log(index);
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
  //console.log("share");
  // if(o > 5 && f == false){
  //   setModalVisible2(true);
  //   return;
  // }
  var index = $(this).attr('data-id');
  //var title = $(this).attr('data-title');
  //console.log(title);
  //sh.current = `https://askatlas.org/sharedmap?uid=${index}`;
  //console.log(sh.current);
  setShare(`https://askatlas.org/sharedmap?uid=${index}`);
  //console.log(sh.current);
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
  logEvent(analytics, 'share_button_click');
  return;
}));

$('.deleteButton').on("click", (async function(){
  var o = $(this).attr('data-id');
  console.log(o);
  await deleteDoc(doc(db,"users", o));
  await discover().then(()=>{
    return ;
  }).catch((err)=>{
    console.log(err);
    return err;
  });
  // var data = await getDoc(doc(db,"users", auth.currentUser.uid));
  // data = JSON.parse(data.data().data);
  // console.log(data);
  // data.splice(parseInt(o),1);
  const userRef = doc(db, "users", auth.currentUser.uid);
  logEvent(analytics, 'delete_button');
  return await updateDoc(userRef, {
    lastLoggedIn: serverTimestamp()
  });
}));


$('.card').on("click", (async function(){
  var title = $(this).attr('data-title'); 
  var description = $(this).attr('data-description');
  hideDice();
  setDisabled(true);
        await generateMarkers(`${title}: ${description}`).then(()=>{
          setDisabled(false);
          window.location.reload();
          showDice()
          return true;
        }).catch((err)=>{
          console.log(err);
          setDisabled(false);
          showDice();
          return false;
        });
  logEvent(analytics, 'card_button');
  return await discover().then(()=>{
    setDisabled(false);
    return ;
  }).catch((err)=>{
    console.log(err);
    setDisabled(false);
    logEvent(analytics, 'error_card_map_item')
    return err;
  });
}));
}

    useEffect(async ()=>{
      //setModalVisible2(true);
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
  logEvent(analytics, 'show_all');
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
    //console.log("hello");
    //$(".box").append(txt3);
});
    } else {
      $(".box").innerHTML = `
  <p style="display: flex;justify-content: center;font-size: 24px;font-weight: bold;text-align:center;width: 100%" >Ask Atlas AI is a AI Travel Guide and Planning App that you need.</p>
  <video width="100%" height="240" controls poster=${askatlasaithumbnail}>
  <source src=${askatlasaivideo} type="video/mp4"></source>
  Your browser does not support the video tag.
</video>
<div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
<button class="button-38">
  <p className="send">                    
    <img src=${SendIcon} style="width:24px;height:24px; borderRadius: 1rem"/>
  </p>
  </button>
  <p>Prompt your Atlas places to explore.</p>
</div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-emojis-web-and-social-media-flatart-icons-outline-flatarticons.png" alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Use AI-powered suggestion cards</p>
  </div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src=${GlobeIcon} alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Gain expert insight anywhere on our Atlas</p>
  </div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
  <button class="button-38" style="padding: '10px'">
  <p class="send">                    
    <img src="https://img.icons8.com/ios/50/apple-camera.png" alt="apple-camera" style="width:24px; height:24px"/>
  </p>
  </button>
  <p>Enjoy world-class photography</p>
</div>
    <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src=${ShareIcon} alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Share with friends & family!</p>
  </div>
  <h3 style="display: flex; justify-content: center;width: 100%;font-size: 24px;font-weight: bold">Powered by</h3>
  <div style="display: flex; flex-direction: cloumn; justify-content: center; align-items: center;width: 100%"> 
    <img src=${GeminiPro} style="width: 60%"></img>
  </div>`
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
        logEvent(analytics, 'atlas_button');
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
        logEvent(analytics, 'share_button');
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
        logEvent(analytics, 'delete_map_item');
        var o = $(this).attr('data-id');
        console.log(o);
        await deleteDoc(doc(db,"users", o));
        // var data = await getDoc(doc(db,"users", auth.currentUser.uid));
        // data = JSON.parse(data.data().data);
        // console.log(data);
        // data.splice(parseInt(o),1);
        await discover().then(()=>{
          //console.log("discover");
          return;
        }).catch((err)=>{
          console.log(err);
          return err;
        })
        const userRef = doc(db, "users", auth.currentUser.uid);
        return await updateDoc(userRef, {
          lastLoggedIn: serverTimestamp()
        });
        
      }));
  
  
      $('.card').on("click", (async function(){
        console.log("card");
        logEvent(analytics, 'clicked_on_card');
        var title = $(this).attr('data-title'); 
        var description = $(this).attr('data-description');
        hideDice();
        setDisabled(true);
              await generateMarkers(`${title}: ${description}`).then(()=>{
                window.location.reload();
                setDisabled(false);
                showDice()
                return true;
              }).catch((err)=>{
                setDisabled(false);
                console.log(err);
                showDice();
                return false;
              });
        await discover().then(()=>{
          setDisabled(false);
          //console.log("discover");
          return;
        }).catch((err)=>{
          setDisabled(false);
          console.log(err);
          return err;
        })
      }));
    },[]);
    discover();
    const exampleImage = 'assets/icon.png';
    return (
      <>
    <header style={{
      backgroundColor: "#2c3e50",
      padding: "0.5rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <nav style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowX: "auto",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
        msOverflowStyle: "none",
        scrollbarWidth: "none"
      }}>
        <button 
          onClick={() => {navigation.navigate("Discover")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Home
        </button>
        <button 
          onClick={() => {navigation.navigate("About")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          About
        </button>
        <button 
          onClick={() => {navigation.navigate("Contact")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Contact
        </button>
        <button 
          onClick={() => {navigation.navigate("Privacy")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Privacy
        </button>
        <button 
          onClick={() => {navigation.navigate("Blog")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          User Stories
        </button>
      </nav>
    </header>
      {/* <button onClick={()=>{navigation.navigate("About")}}>About</button> */}
      <ScrollView>
      <div className='mapContainer' style={{paddingBottom: 0}}>
        <div className='operations'>
          <div className="box">
          {/* <h3>Ask Atlas AI is a AI Travel Guide and Planning App that you need.</h3>
  <br></br>
          <video width="320" height="240" controls>
  <source src={askatlasaivideo} type="video/mp4"></source>
  Your browser does not support the video tag.
</video> */}
          {/* <button class="shareButton" onClick={() => {setModalVisible(true)}}><img width="36" height="36" src="https://img.icons8.com/material-outlined/48/copy.png" alt="copy"/>
    </button> */}
            </div>
        </div>
      </div>
      <Helmet>
        <script src="//servedby.studads.com/ads/ads.php?t=MjA3MDM7MTQwMzY7c3F1YXJlLnNxdWFyZV9ib3g=&index=1"></script>
      </Helmet>
      </ScrollView>
      <Modal
animationType="slide"
transparent={true}
visible={modalVisible2}
onShow={()=>{}}
onRequestClose={() => {
  setModalVisible2(!modalVisible2);
  //setModalVisible4(true);
}}>
<View style={styles.centeredView}>
<>
        <div className="signin_box">
        <div className="topBar2">
        <div className="topBarClose">
          <img height="36" width="36" src={CloseButton} alt="close" onClick={() => setModalVisible2(!modalVisible2)}/>
        </div>
      </div>
          <div className="logo_box">
            <img src={AppIcon} style={{width:"5rem",height:"5rem", borderRadius: "16px", marginBottom: "1rem"}}/>
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
  <img alt="appleIcon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTI1LjU2NSw5Ljc4NWMtMC4xMjMsMC4wNzcgLTMuMDUxLDEuNzAyIC0zLjA1MSw1LjMwNWMwLjEzOCw0LjEwOSAzLjY5NSw1LjU1IDMuNzU2LDUuNTVjLTAuMDYxLDAuMDc3IC0wLjUzNywxLjk2MyAtMS45NDcsMy45NGMtMS4xMTksMS43MDMgLTIuMzYxLDMuNDIgLTQuMjQ3LDMuNDJjLTEuNzk0LDAgLTIuNDM4LC0xLjEzNSAtNC41MDgsLTEuMTM1Yy0yLjIyMywwIC0yLjg1MiwxLjEzNSAtNC41NTQsMS4xMzVjLTEuODg2LDAgLTMuMjIsLTEuODA5IC00LjQsLTMuNDk2Yy0xLjUzMywtMi4yMDggLTIuODM2LC01LjY3MyAtMi44ODIsLTljLTAuMDMxLC0xLjc2MyAwLjMwNywtMy40OTYgMS4xNjUsLTQuOTY4YzEuMjExLC0yLjA1NSAzLjM3MywtMy40NSA1LjczNCwtMy40OTZjMS44MDksLTAuMDYxIDMuNDE5LDEuMjQyIDQuNTIzLDEuMjQyYzEuMDU4LDAgMy4wMzYsLTEuMjQyIDUuMjc0LC0xLjI0MmMwLjk2NiwwLjAwMSAzLjU0MiwwLjI5MiA1LjEzNywyLjc0NXpNMTUuMDAxLDYuNjg4Yy0wLjMyMiwtMS42MSAwLjU2NywtMy4yMiAxLjM5NSwtNC4yNDdjMS4wNTgsLTEuMjQyIDIuNzI5LC0yLjA4NSA0LjE3LC0yLjA4NWMwLjA5MiwxLjYxIC0wLjQ5MSwzLjE4OSAtMS41MzMsNC4zMzljLTAuOTM1LDEuMjQyIC0yLjU0NSwyLjE3NyAtNC4wMzIsMS45OTN6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/>
  &nbsp;Continue with Apple</button>
          </div>
            <p className="terms_label">By continuing you accept the <a rel="noopener noreferrer" href="https://askatlas.org/">terms of use</a> and <a rel="noopener noreferrer" href="https://askatlas.org/">privacy policy</a></p>
        </div>
      </>
</View>
</Modal>
      <Modal
              {...handlers}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              style={{height: 'fit-content', width: '100%'}}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
                <View style={styles.centeredView}>
                  <View style={styles.shareView}>
                <>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <div className="topBarLeft"></div>
      <div className="topBarClose">
                        <img height="36" width="36" src={CloseButton} alt="close" onClick={() => setModalVisible(!modalVisible)}/>
                      </div>
        <h3 style={{marginBottom: "1rem", borderBottom: '1px solid lightgrey', lineHeight: '2.5rem', width: '100vw', display: 'flex', justifyContent: 'center'}}>Share</h3>
        </div>
      <div className="Demo__container" style={{width: "99vw", display: 'flex', flexDirection: 'row', overflowX: "scroll"}}>
      <div className="Demo__some-network" style={{marginLeft: '1rem'}}>
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

      <div className="Demo__some-network" style={{marginRight: '1rem'}}>
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
    <div style={{backgroundColor: 'white', bottom: '0px', position: 'relative'}}>
      <div class="scrolling-wrapper" style={{backgroundColor: 'white'}}>
      </div>
      <div style={{backgroundColor: 'white'}}>
              <div className='show'>
                <div className='showInput'>
            <TextInput ref={usertext} style={styles.input} multiline={true} rows={1} maxLength={1000} onChangeText={(text) => {usertext.current.value = text;}} placeholder="Explore the Atlas here..."/>
            </div>
            <div className="delete_point">
        <button className="button-38" disabled={disabled} onClick={
          async ()=>{
            if(usertext.current.value != ""){
            hideDice();
            setDisabled(true);
            // var t = "";
            // var userLat;
            // var userLong;
            // if ("geolocation" in navigator) {
            //   navigator.geolocation.getCurrentPosition((position) => {
            //     userLat = position.coords.latitude
            //     userLong = position.coords.longitude;
            //   });
            //   t = text + ". The user is location at longitude, latitude coordinates : " + userLong + "," + userLat + ", respectively";
            // } else {
            //   t = text;
            // }
            await generateMarkers(usertext.current.value).then(()=>{
              window.location.reload();
              setDisabled(false);
              return showDice();
            }).catch((err)=>{
              console.log(err);
              setDisabled(false);
              showDice();
              Alert.alert('There was an error processing your request. Please try again in a few minutes.', 'Error', [
                {text: 'OK', onPress: () => logEvent(analytics, 'error_send_map_item')},
              ]);
              return err;
            })
            return await discover().then((res)=>{
              console.log(res);
              return res;
            }).catch((err)=>{
              console.log(err);
              return err;
            })
          }
          }}>
          <p className="send">                    
            <img src={SendIcon} style={{width:"24px",height:"24px", borderRadius: "1rem"}}/>
          </p>
          </button>
      </div>
            </div>
      </div>
      {/* <img src={askatlasaithumbnail} style={{height: '150px', width: '100%'}}></img> */}
      </div>
            <>
          </>
          </>
    );
  };

  const CommunityScreen = ({navigation}) => {
    let listRef = useRef({});
    const [user, setUser] = useState(auth.currentUser);
    const [disabled, setDisabled] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [list, setList] = React.useState({});
    const [title, setTitle] = useState("Ask Atlas AI");
    const [shareUrl, setShare] = useState("");
    const Access_Key = 'tKqmTYXWxWdvGHHlbO8OtfdtJMYaz0KXKWKyCaG61u4';
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

    const handlers = useSwipeable({
      onSwipedDown: () => {setModalVisible(!modalVisible);},
      //onTap: () => {setModalVisible(!modalVisible)}
    });

    const handlers2 = useSwipeable({
      onSwipedDown: () => {setModalVisible2(!modalVisible2);},
      //onTap: () => {setModalVisible(!modalVisible)}
    });

    // $('.atlasaibutton').on("click", (function() {
    //   setModalVisible2(!modalVisible2);
    // }))

    // $(".ai").on("click", () => {
    //   setModalVisible2(true);
    // });

async function discover2() {
  $('.box2').innerHTML =  "";
  //document.querySelector('.box2').innerHTML = '';
  console.log(auth.currentUser);
  if(auth.currentUser != null){
    const q = query(collection(db, "users"), where("postedOn", "!=", ""), limit(50), orderBy("postedOn", "desc"));
    const data = await getDoc(doc(db,"users", auth.currentUser.uid));
    // f = data.data().isPremium;
const querySnapshot = await getDocs(q).then((res)=>{console.log(res);return res;}).catch((err)=>{console.log(err);return err;});
//o = querySnapshot.size;
if(!querySnapshot.empty){
  logEvent(analytics, 'show_all');
querySnapshot.forEach((mapData) => {
var g = JSON.parse(mapData.data().data);
var txt3 = document.createElement("div");  // Create with DOM
txt3.setAttribute('class', 'docs');
txt3.innerHTML = `<button class="mapButton" data-id=${mapData.id}>${g.title}
<button class="shareButton" data-id="${mapData.id}"> 
  <img width="36" height="36" src="https://img.icons8.com/ios/50/share--v1.png" alt="share--v1"/>
</button>  
</button>`;
{/* <div style="display: flex; align-items: center; gap: 10px;">
        <button id="likeButton" style="background: none; border: none; padding: 0; display: flex; align-items: center; cursor: pointer;">
            <img id="likeImage" src="${LikeOutline}" alt="Not liked" style="width: 24px; height: 24px;">
        </button>
        <span id="likeCount" style="font-size: 16px; font-weight: bold;">0 Likes</span>
    </div> */}
$(".box2").append(txt3);
});
} else {
  document.querySelector(".box2").innerHTML = `
  <p style="display: flex;justify-content: center;font-size: 24px;font-weight: bold;text-align:center;width: 100%" >Ask Atlas AI is a AI Travel Guide and Planning App that you need.</p>
  <video width="100%" height="240" controls poster=${askatlasaithumbnail}>
  <source src=${askatlasaivideo} type="video/mp4"></source>
  Your browser does not support the video tag.
</video>
<div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
<button class="button-38">
  <p className="send">                    
    <img src=${SendIcon} style="width:24px;height:24px; borderRadius: 1rem"/>
  </p>
  </button>
  <p>Prompt your Atlas places to explore.</p>
</div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-emojis-web-and-social-media-flatart-icons-outline-flatarticons.png" alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Use AI-powered suggestion cards</p>
  </div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src=${GlobeIcon} alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Gain expert insight anywhere on our Atlas</p>
  </div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
  <button class="button-38" style="padding: '10px'">
  <p class="send">                    
    <img src="https://img.icons8.com/ios/50/apple-camera.png" alt="apple-camera" style="width:24px; height:24px"/>
  </p>
  </button>
  <p>Enjoy world-class photography</p>
</div>
    <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src=${ShareIcon} alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Share with friends & family!</p>
  </div>
  <h3 style="display: flex; justify-content: center;width: 100%;font-size: 24px;font-weight: bold">Powered by</h3>
  <div style="display: flex; flex-direction: cloumn; justify-content: center; align-items: center;width: 100%"> 
    <img src=${GeminiPro} style="width: 60%"></img>
  </div>`
}
}
$('.mapButton').off("click");
$('.shareButton').off("click");
let likes = 0;
let isLiked = false;

$('#likeButton').on('click', function() {
    if (!isLiked) {
        likes++;
        isLiked = true;
        $('#likeImage').attr('src', `${LikeFilled}`).attr('alt', 'Liked');
        $(this).css('cursor', 'default').prop('disabled', true);
        updateLikeCount();
    }
});

function updateLikeCount() {
    $('#likeCount').text(likes + (likes === 1 ? ' Like' : ' Likes'));
}
$('.mapButton').on("click", (async function(){
  var index = $(this).attr('data-id');
  var data = await getDoc(doc(db,"users", index));
  data = JSON.parse(data.data().data);
  console.log(data);
  navigation.navigate('Atlas', {list: data, id: index, on: true});
}));
$('.shareButton').on("click", (function(){
  var index = $(this).attr('data-id');
  setShare(`https://askatlas.org/sharedmap?uid=${index}`);
  setModalVisible(true);
  logEvent(analytics, 'share_button_click');
  return;
}));
}

    useEffect(async ()=>{
      onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
      $('.box2').innerHTML = '';
      //document.querySelector('.box2').innerHTML = '';
      if(user != null){
        const q = query(collection(db, "users"), where("postedOn", "!=", ""), limit(50), orderBy("postedOn", "desc"));
const querySnapshot = await getDocs(q).then((res)=>{console.log(res);return res;}).catch((err)=>{console.log(err);return err;});
{/* <button class="shareButton" data-id="${mapData.id}"> 
<img width="36" height="36" src="https://img.icons8.com/ios/50/share--v1.png" alt="share--v1"/>
</button> */}
if(!querySnapshot.empty){
  logEvent(analytics, 'open_community_tab');
querySnapshot.forEach((mapData) => {
  var g = JSON.parse(mapData.data().data);
    var txt3 = document.createElement("div");  // Create with DOM
    txt3.setAttribute('class', 'docs');
    txt3.innerHTML = `<button class="mapButton" data-id=${mapData.id}>${g.title}
  
    </button>`;
  //   <button class="shareButton" style="background: none; border: none; padding: 0; display: flex; align-items: center; cursor: pointer;" data-id="${mapData.id}"> 
  //   <img width="24" height="24" src="https://img.icons8.com/ios/50/share--v1.png" alt="share--v1"/>
  // </button>
    var txt4 = document.createElement("div");  // Create with DOM
    txt4.innerHTML = `    
    <div style="display: flex; align-items: center; gap: 10px;">
        <button class="shareButton" data-id="${mapData.id}"> 
      <img width="24" height="24" src="https://img.icons8.com/ios/50/share--v1.png" alt="share--v1"/>
    </button>
            <span id="" style="font-size: 16px; font-weight: bold;">Share</span>
    </div>`;
//     <button class="likeButton" style="background: none; border: none; padding: 0; display: flex; align-items: center; cursor: pointer;">
//     <img class="likeImage" src="${LikeOutline}" alt="Not liked" style="width: 24px; height: 24px;">
// </button>
// <span id="likeCount" style="font-size: 16px; font-weight: bold;">0 Likes</span>
    //console.log("hello");
    $(".box2").append(txt3);
    $(".box2").append(txt4);
});
    } else {
      $(".box2").innerHTML = `
  <p style="display: flex;justify-content: center;font-size: 24px;font-weight: bold;text-align:center;width: 100%" >Ask Atlas AI is a AI Travel Guide and Planning App that you need.</p>
  <video width="100%" height="240" controls poster=${askatlasaithumbnail}>
  <source src=${askatlasaivideo} type="video/mp4"></source>
  Your browser does not support the video tag.
</video>
<div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
<button class="button-38">
  <p className="send">                    
    <img src=${SendIcon} style="width:24px;height:24px; borderRadius: 1rem"/>
  </p>
  </button>
  <p>Prompt your Atlas places to explore.</p>
</div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-emojis-web-and-social-media-flatart-icons-outline-flatarticons.png" alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Use AI-powered suggestion cards</p>
  </div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src=${GlobeIcon} alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Gain expert insight anywhere on our Atlas</p>
  </div>
  <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
  <button class="button-38" style="padding: '10px'">
  <p class="send">                    
    <img src="https://img.icons8.com/ios/50/apple-camera.png" alt="apple-camera" style="width:24px; height:24px"/>
  </p>
  </button>
  <p>Enjoy world-class photography</p>
</div>
    <div style="width: 100%;display: flex;flex-direction: row; justify-content: center; align-items: center">
    <button class="button-38" style="padding: '10px'">
    <p class="send">                    
      <img src=${ShareIcon} alt="external-emojis-web-and-social-media-flatart-icons-outline-flatarticons" style="width:24px; height:24px"/>
    </p>
    </button>
    <p>Share with friends & family!</p>
  </div>
  <h3 style="display: flex; justify-content: center;width: 100%;font-size: 24px;font-weight: bold">Powered by</h3>
  <div style="display: flex; flex-direction: cloumn; justify-content: center; align-items: center;width: 100%"> 
    <img src=${GeminiPro} style="width: 50%"></img>
  </div>`
    }
  }

      $('.mapButton').on("click", (async function(){
        console.log("map");
        logEvent(analytics, 'atlas_button');
        var index = $(this).attr('data-id');
        var data = await getDoc(doc(db,"users", index));
        data = JSON.parse(data.data().data);
        console.log(data);
        navigation.navigate('Atlas', {list: data, id: index, on: true});
      }));

      $('.shareButton').on("click", (function(){
        console.log("share");
        logEvent(analytics, 'share_button');
        var o = $(this).attr('data-id');
        setModalVisible(true);
      }));

      let likes = 0;
let isLiked = false;

$('.likeButton').on('click', function() {
    if (!isLiked) {
        likes++;
        isLiked = true;
        $(this).attr('src', `${LikeFilled}`).attr('alt', 'Liked');
        $(this).css('cursor', 'default').prop('disabled', true);
        updateLikeCount();
    }
});

function updateLikeCount() {
    $(this).text(likes + (likes === 1 ? ' Like' : ' Likes'));
}

    },[]);
    //discover2()
    //.then((res)=>{return res}).catch((err)=>{return err});
    const exampleImage = 'assets/icon.png';
    return (
      <>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}> 
      <header style={{
      backgroundColor: "#2c3e50",
      padding: "0.5rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      width: "100vw"
    }}>
      <nav style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowX: "auto",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
        msOverflowStyle: "none",
        scrollbarWidth: "none"
      }}>
        <button 
          onClick={() => {navigation.navigate("Discover")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Home
        </button>
        <button 
          onClick={() => {navigation.navigate("About")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          About
        </button>
        <button 
          onClick={() => {navigation.navigate("Contact")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Contact
        </button>
        <button 
          onClick={() => {navigation.navigate("Privacy")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          Privacy
        </button>
        <button 
          onClick={() => {navigation.navigate("Blog")}} 
          style={{
            backgroundColor: "transparent",
            color: "#ecf0f1",
            border: "none",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease",
            margin: "0 0.25rem",
            flexShrink: 0
          }}
        >
          User Stories
        </button>
      </nav>
    </header>
      <div className='mapContainer2' style={{paddingBottom: 0}}>
        <div className='operations2'>
          <div className="box2">
          
            </div>
        </div>
      </div>
      </ScrollView>
      <Modal
              {...handlers}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              style={{height: 'fit-content', width: '100%'}}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
                <View style={styles.centeredView}>
                  <View style={styles.shareView}>
                <>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <div className="topBarLeft"></div>
      <div className="topBarClose">
                        <img height="36" width="36" src={CloseButton} alt="close" onClick={() => setModalVisible(!modalVisible)}/>
                      </div>
        <h3 style={{marginBottom: "1rem", borderBottom: '1px solid lightgrey', lineHeight: '2.5rem', width: '100vw', display: 'flex', justifyContent: 'center'}}>Share</h3>
        </div>
      <div className="Demo__container" style={{width: "99vw", display: 'flex', flexDirection: 'row', overflowX: "scroll"}}>
      <div className="Demo__some-network" style={{marginLeft: '1rem'}}>
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

      <div className="Demo__some-network" style={{marginRight: '1rem'}}>
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
  const setupNotifications = async () => {
    try {
      // Request permission for notifications
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // Get the FCM token
        const token = await getToken(messaging);
        console.log('FCM Token:', token);
      } else {
        console.log('Notification permission denied.');
      }
      // Handle foreground notifications
      onMessage(messaging, (payload) => {
        console.log('Foreground Message:', payload);
        // Handle the notification or update your UI
      });
    } catch (error) {
      console.error('Error setting up notifications:', error);
    }
  };

  useEffect(async ()=>{
    // await setupNotifications().then(async ()=>{
    //   console.log('notifications set up');
    //   var token = await getToken(messaging);
    //   console.log(token);
    //   await updateDoc(doc(db, 'users', user.uid), {
    //     fcmToken: token,
    //   }).then((res) => {
    //     console.log(res);
    //     return res;
    //   }).catch((err) => {
    //     console.log(err);
    //     return err;
    //   });
    // });

    async function Initialize(user) {
      const exist = await getDoc(doc(db, 'users', user.uid));
      // console.log(user.uid);
      // console.log(exist.exists());
      await setDoc(doc(db, 'users', user.uid), {
        email: null,
        lastLoggedIn: "",
        isPremium: false,
        fcmToken: null,
        username: null,
      }).then((res) => {
        console.log(res);
        return res;
      }).catch((err) => {
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
        //console.log("2332");
        return err;
      })
      // Signed in..

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //console.log("2340");
      return error;
      // ...
    });
  }

  await signinanon();
  logEvent(analytics, 'app_login');
  function getOS() {
    const userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }
  //requestUserPermission();
  //getToken();
  return ;
  },[user]);
  return (
    <>
      <Helmet>
    <title>Ask Atlas AI - Your AI Assistant</title>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://mapmyconcern.web.app"/>
    <meta property="og:title" content="Ask Atlas AI - Your AI Assistant"/>
    <meta property="og:description" content="Discover the power of AI with Ask Atlas. Get instant answers, creative solutions, and expert assistance on any topic."/>
    <meta property="og:image" content="https://www.askatlas.ai/images/og-image.jpg"/>
    
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@AskAtlasAI"/>
    <meta name="twitter:title" content="Ask Atlas AI - Your AI Assistant"/>
    <meta name="twitter:description" content="Discover the power of AI with Ask Atlas. Get instant answers, creative solutions, and expert assistance on any topic."/>
    <meta name="twitter:image" content="https://www.askatlas.ai/images/twitter-image.jpg"/>
    
    <meta name="description" content="Ask Atlas AI is your go-to AI assistant for instant answers, creative solutions, and expert assistance on any topic. Explore the future of AI-powered knowledge today."/>
    <link rel="canonical" href="https://mapmyconcern.web.app/"/>
    <meta name="robots" content="index, follow"/>
    <meta name="monetag" content="7fd82d15532277ea660d30f8f07a6d79"></meta>
    {/* <script src='./firebase.js'></script>
    <script src="./firebase-messaging-sw.js"></script> */}
    {/* <script src="https://alwingulla.com/88/tag.min.js" data-zone="77681" async data-cfasync="false"></script> */}
    <script type="application/ld+json">
    {`
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Ask Atlas AI",
      "image": "https://www.askatlas.org/images/logo.jpg",
      "url": "https://www.askatlas.org",
      "telephone": "+1-347-658-2121",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 AI Street",
        "addressLocality": "Tech City",
        "addressRegion": "CA",
        "postalCode": "90210",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "00:00",
        "closes": "23:00"
      },
      "sameAs": [
        "https://www.facebook.com/AskAtlasAI",
        "https://twitter.com/AskAtlasAI",
        "https://www.instagram.com/askatlasai",
        "https://www.linkedin.com/company/askatlasai",
        "https://www.youtube.com/channel/askatlasai"
      ]
    `}
    </script>
        <script>{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-22HJ6GSR49');
    </script>
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16493182687"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16493182687');`}
</script>
<script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','G-22HJ6GSR49');`}</script>
{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5322412772082850"
     crossorigin="anonymous"></script> */}
      </Helmet>
      {/* {user == null ? <SignIn /> : <MyTabs />} */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Header />} />
          <Route index exact path="blog" element={<BlogScreenHome />} />
          <Route index exact path="about" element={<About />} />
          <Route index exact path="contact" element={<Contact />} />
          <Route index exact path="privacy" element={<Privacy />} />
          {/* <Route path="terms" element={<Terms />} /> */}
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
      {/* <MyTabs /> */}
    </>
    
  );
}

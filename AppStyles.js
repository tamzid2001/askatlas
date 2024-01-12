import {StyleSheet} from 'react-native';


const appstyles = StyleSheet.create({
    "*": {
      boxSizing: "border-box",
      margin: "0",
      padding: "0",
      fontFamily: "'Arial', sans-serif"
    },
    ".subscribe-screen": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    ".purchase_box": {
      background: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      maxWidth: "350px",
      margin: "10px",
      textAlign: "center",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column"
    },
    ".purchase_header h1.features_header": {
      color: "#333",
      marginBottom: "1rem"
    },
    ".features_box": {
      textAlign: "center",
      marginBottom: "2rem",
      lineHeight: "1.5rem",
      display: "flex",
      justifyContent: "start",
      flexDirection: "column",
      margin: "10px"
    },
    ".features_point": {
      fontSize: "1rem",
      color: "#333",
      margin: "2px",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      flexDirection: "row"
    },
    ".features_point svg": {
      marginRight: "0.5rem",
      fill: "#10b981",
      width: "25px",
      height: "25px"
    },
    ".purchase_label": {
      fontWeight: "bold",
      margin: "1rem 0",
      textAlign: "center",
      justifyContent: "center",
      fontSize: "16px"
    },
    ".button-38": {
      display: "flex",
      width: ["100%", "auto"],
      padding: ".75rem 1rem",
      margin: "0.5rem",
      borderRadius: ".5rem",
      border: "0",
      backgroundColor: "#FFFFFF",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      alignItems: "center",
      justifyContent: "space-between",
      boxSizing: "border-box",
      color: "#111827",
      fontFamily:
        '"Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      fontSize: ".875rem",
      fontWeight: 600,
      lineHeight: "1.25rem",
      textAlign: "center",
      textDecoration: "none #D1D5DB solid",
      textDecorationThickness: "auto",
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      userSelect: "none",
      WebkitUserSelect: "none",
      touchAction: "manipulation"
    },
    ".button-38:hover": { backgroundColor: "rgb(249,250,251)" },
    ".title_point": {
      color: "#333",
      fontSize: "24px !important",
      marginLeft: "1rem !important"
    },
    "@media (max-width: 768px)": [
      {
        ".subscribe-screen": { height: "auto", padding: "20px" },
        ".purchase_box": { width: "100%", maxWidth: "none" }
      },
      {
        ".form__input": { fontSize: "0.9rem" },
        ".point-title": { fontSize: "1rem" },
        ".title_point": { fontSize: "0.9rem" }
      }
    ],
    ".App": { textAlign: "center" },
    ".App-logo": { height: "40vmin", pointerEvents: "none" },
    "@media (prefers-reduced-motion: no-preference)": {
      ".App-logo": { animation: "App-logo-spin infinite 20s linear" }
    },
    ".App-header": {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white"
    },
    ".App-link": { color: "#61dafb" },
    "@keyframes App-logo-spin": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" }
    },
    "input[type=checkbox]": { height: "0", width: "0", visibility: "hidden" },
    label: {
      cursor: "pointer",
      textIndent: "-9999px",
      width: "200px",
      height: "100px",
      background: "grey",
      display: "block",
      borderRadius: "100px",
      position: "relative"
    },
    "label:after": {
      content: "''",
      position: "absolute",
      top: "5px",
      left: "5px",
      width: "90px",
      height: "90px",
      background: "#fff",
      borderRadius: "90px",
      transition: "0.3s"
    },
    "input:checked + label": { background: "#bada55" },
    "input:checked + label:after": {
      left: "calc(100% - 5px)",
      transform: "translateX(-100%)"
    },
    "label:active:after": { width: "130px" },
    ".info_box": {
      backgroundColor: "#ffffff",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      maxWidth: "300px",
      margin: "10px"
    },
    ".info_box .last-edited": {
      fontFamily: "'Arial', sans-serif",
      color: "#333333",
      fontSize: "14px",
      lineHeight: 1.6,
      marginBottom: "10px"
    },
    ".info_box .last-edited:last-child": { marginBottom: "0" },
    '@import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700")': true,
    "@keyframes moveBackground": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" }
    },
    ".signin_box": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      backgroundColor: "#fcfcfc",
      width: "100%",
      margin: "1rem",
      background: "rgba(255, 255, 255, 0.8)",
      padding: ["20px", "0"],
      backgroundRepeat: "no-repeat",
      backgroundPositionY: "120%",
      backgroundSize: "auto",
      backgroundImage: "url('./assets/background.png')",
      maxWidth: "400px",
      textAlign: "center",
      height: "100vh"
    },
    ".logo_box": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    },
    ".logo_box img": { height: "80px", width: "80px" },
    ".logo_label": {
      fontSize: "28px",
      color: "#000000",
      fontWeight: "bold",
      marginTop: "1rem"
    },
    ".signin_button_box": { width: "100%", marginBottom: "1rem" },
    ".sign-in": {
      width: "100%",
      padding: "1rem",
      fontSize: "16px",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      transition: "box-shadow 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: "1rem"
    },
    ".terms_label": {
      position: "fixed",
      bottom: "0",
      left: "0",
      width: "100%",
      fontSize: "12px",
      color: "#ffffff",
      textAlign: "center",
      padding: "1rem",
      marginTop: "2rem",
      display: "block",
      fontWeight: "bold"
    },
    ".content": { paddingBottom: "3rem" },
    ".google": { backgroundColor: "#DB4437", color: "white", fontWeight: "bold" },
    ".facebook": {
      backgroundColor: "#4267B2",
      color: "white",
      fontWeight: "bold"
    },
    ".twitter": {
      backgroundColor: "#000000",
      color: "white",
      fontWeight: "bold"
    },
    ".or": { fontSize: "16px" },
    "@media (max-width: 600px)": [
      { ".signin_box": { padding: "20px" } },
      {
        ".signin_box": {
          margin: "0",
          width: "100%",
          maxWidth: "none",
          borderRadius: "0"
        }
      }
    ],
    body: { margin: "0", fontFamily: "'Lato', sans-serif" },
    ".header": {
      color: "white",
      clipPath: "ellipse(100vw 60vh at 50% 50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      margin: "10px"
    },
    ".details": {
      textAlign: "center",
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    ".profile-pic": { height: "4rem", width: "4rem", objectFit: "center" },
    ".heading": {
      fontWeight: "bold",
      fontSize: "3rem",
      margin: "1rem",
      color: "#000",
      marginTop: "2rem",
      marginBottom: "2rem"
    },
    ".map_points": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      width: "100%",
      maxHeight: "60vh",
      overflowY: "auto"
    },
    ".box": {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f8f9fa",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      marginBottom: "10px",
      padding: "10px",
      alignItems: "center",
      gap: "10px"
    },
    ".add_box": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      margin: "20px"
    },
    ".form__input": {
      fontSize: "1rem",
      padding: "1rem",
      border: "none",
      borderRadius: ["0.5rem !important", "5rem"],
      outline: "none",
      width: "90%",
      maxWidth: "300px",
      margin: "1rem",
      height: "3rem",
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      fontFamily: "'Roboto', sans-serif",
      color: "#333",
      backgroundColor: "rgb(255, 255, 255)",
      display: "block",
      borderBottom: "0.3rem solid transparent",
      transition: "all 0.3s"
    },
    ".form__input:focus": {
      borderColor: "#007bff",
      boxShadow: "0 0 0 3px rgba(0, 123, 255, 0.25)"
    },
    ".add_button": {
      backgroundColor: "#FFFFFF",
      border: "0",
      borderRadius: "0.5rem",
      padding: "0.5rem",
      cursor: "pointer",
      lineHeight: "1.25rem",
      outline: "none",
      width: "fit-content",
      margin: "1rem",
      boxSizing: "border-box",
      color: "#111827",
      fontFamily:
        '"Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      fontSize: ".875rem",
      fontWeight: 600,
      textAlign: "center",
      textDecoration: "none #D1D5DB solid",
      textDecorationThickness: "auto",
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      userSelect: "none",
      WebkitUserSelect: "none",
      touchAction: "manipulation"
    },
    ".add_button:focus,\n.add_button:hover": {
      backgroundColor: "#0056b3",
      outline: "none"
    },
    ".add_button .add_map": { width: "25px", height: "25px" },
    ".point-title": {
      fontSize: "1.25rem",
      textAlign: "left",
      padding: "0.5rem 1rem",
      color: "#333"
    },
    ".points-containe": { display: "flex", flexDirection: "column" },
    ".map_point_label": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      justifyItems: "center"
    },
    svg: { height: "24px", width: "24px", fill: "#666" },
    ".map_functions": {
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem",
      flexDirection: "row",
      overflow: "auto",
      whiteSpace: "nowrap",
      marginBottom: "0.5rem",
      marginLeft: "0.5rem"
    },
    ".map_functions .button-38": {
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    },
    ".settings": { width: "2rem" },
    ".profile": { width: "100%" },
    ".color_picker": { margin: "5%" },
    ".notes": { margin: "10px", width: "-webkit-fill-available" },
    ".notes_box": { margin: "10px" },
    ".features_header": {
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "bold",
      margin: "10px"
    },
    ".purchase_button_box": {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      margin: "10px",
      textAlign: "center"
    },
    ".features_point span": { paddingLeft: "10px" },
    ".field": {
      width: "100%",
      height: "56px",
      borderRadius: "4px",
      position: "relative",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      transition: "0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out"
    },
    ".field:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.45)",
      boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
    },
    ".field.active": {
      backgroundColor: "#ffffff",
      boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.2)"
    },
    ".field.active input": { padding: "24px 16px 8px 16px" },
    ".field.active input + label": { top: "4px", opacity: 1, color: "#512da8" },
    ".field.locked": { pointerEvents: "none" },
    ".field input": {
      width: "100%",
      height: "56px",
      position: "relative",
      padding: "0px 16px",
      border: "none",
      borderRadius: "4px",
      fontFamily: '"Gotham SSm A", "Gotham SSm B", sans-serif',
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "normal",
      backgroundColor: "transparent",
      color: "#282828",
      outline: "none",
      boxShadow: "0px 4px 20px 0px transparent",
      transition:
        "0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,\n    0.1s padding ease-in-out",
      WebkitAppearance: "none"
    },
    ".field input::-webkit-input-placeholder": {
      color: "rgba(255, 255, 255, 0.8)"
    },
    ".field input::-moz-placeholder": { color: "rgba(255, 255, 255, 0.8)" },
    ".field input:-ms-input-placeholder": { color: "rgba(255, 255, 255, 0.8)" },
    ".field input:-moz-placeholder": { color: "rgba(255, 255, 255, 0.8)" },
    ".field input + label": {
      position: "absolute",
      top: "24px",
      left: "16px",
      fontFamily: '"Gotham SSm A", "Gotham SSm B", sans-serif',
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "24px",
      color: "#ffffff",
      opacity: 0,
      pointerEvents: "none",
      transition: "0.1s all ease-in-out"
    },
    ".field input + label.error": { color: "#ec392f" },
    ".field p.predicted": {
      position: "absolute",
      top: "8px",
      left: "16px",
      fontFamily: '"Gotham SSm A", "Gotham SSm B", sans-serif',
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      color: "#e0e0e0",
      opacity: 1,
      pointerEvents: "none"
    },
    ".profile_button": {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "space-between",
      height: "fit-content",
      borderRadius: ["0.5rem !important", "0px"],
      margin: "0.5rem",
      border: "0",
      boxSizing: "border-box",
      color: "#111827",
      fontFamily:
        '"Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      fontSize: ".875rem",
      fontWeight: 600,
      lineHeight: "1.25rem",
      padding: ".75rem 1rem",
      textAlign: "center",
      textDecoration: "none #D1D5DB solid",
      textDecorationThickness: "auto",
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      cursor: "pointer",
      userSelect: "none",
      WebkitUserSelect: "none",
      touchAction: "manipulation"
    },
    ".profile_button_signout": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      border: "0",
      borderRadius: "0px",
      boxSizing: "border-box",
      color: "red",
      fontFamily:
        '"Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      fontSize: ".875rem",
      fontWeight: 600,
      lineHeight: "1.25rem",
      padding: ".75rem 1rem",
      textAlign: "center",
      textDecoration: "none #D1D5DB solid",
      textDecorationThickness: "auto",
      cursor: "pointer",
      userSelect: "none",
      WebkitUserSelect: "none",
      touchAction: "manipulation",
      marginBottom: "10px"
    },
    ".purchase_header": { textAlign: "center" },
    ".other_label": { fontSize: "16px", color: "grey", margin: "4%" },
    ".operations": {
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      maxHeight: "60vh",
      padding: "10px"
    },
    ".map_button": {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: "transparent",
      border: "none",
      padding: "0",
      cursor: "pointer",
      textAlign: "left"
    },
    ".map_button:hover,\n.map_button:focus": {
      backgroundColor: "#e2e6ea",
      outline: "none"
    },
    ".globe": { width: "5rem", height: "5rem", marginRight: "10px" },
    ".box h3": {
      margin: "0",
      fontSize: "16px",
      color: "#333",
      fontWeight: "normal"
    },
    ".contacts": {
      margin: "0px",
      marginTop: "1rem",
      borderRadius: ["0px", "0px"],
      width: "-webkit-fill-available",
      backgroundColor: "#FFFFFF",
      border: "0",
      boxSizing: "border-box",
      color: "#111827",
      fontFamily:
        '"Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      fontSize: ".875rem",
      fontWeight: 600,
      lineHeight: "1.25rem",
      padding: ".75rem 1rem",
      textAlign: "center",
      textDecoration: "none #D1D5DB solid",
      textDecorationThickness: "auto",
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      cursor: "pointer",
      userSelect: "none",
      WebkitUserSelect: "none",
      touchAction: "manipulation"
    },
    ".add_map": { height: "2rem", width: "2rem" },
    "html, body": {
      width: "100%",
      height: "100%",
      fontFamily: "'Arial', sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #ece9e6, #ffffff)"
    },
    ".logo_box .logo_label": {
      fontSize: "24px",
      marginBottom: "2rem",
      color: "#333"
    },
    ".sign-in:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
    ".sign-in img": { marginRight: "10px" },
    ".intro_box": { backgroundColor: "#000", height: "100px", width: "100px" },
    ".button-38:focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    },
    ".button-38:focus-visible": { boxShadow: "none" }
  });

  export default appstyles;
  
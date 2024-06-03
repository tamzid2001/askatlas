async function get_user_loca() {
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
      // setLat(parseFloat(g.latitude));
      // setLng(parseFloat(g.longitude));
      // if(map.current != null && route.params == undefined) {
      //   const target = {
      //     center: [parseFloat(g.longitude), parseFloat(g.latitude)],
      //     zoom: 8,
      //     bearing: 0,
      //     pitch: 0
      //     };
      //   map.current.flyTo({
      //    ...target, // Fly to the selected target
      //     zoom: 16, // Maintain the current zoom level
      //     bearing: 0, // Maintain the current bearing angle
      //     pitch: 0, // Maintain the current pitch angle
      //   });
      // }
      return true;
    }).catch((err)=>{
      console.log(err);
      return false;
    });
    return true;
  }

  const Access_Key = 'tKqmTYXWxWdvGHHlbO8OtfdtJMYaz0KXKWKyCaG61u4';
  const fetchRequestImages = async (img) => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}&per_page=20`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    return true;
  };

  async function generateMarkers() {
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
      body: JSON.stringify({t: "Explore the wonders of Mesopotamia"}), // body data type must match "Content-Type" header
    };
  await fetch('https://askatlas.org/generateMarkers', myInit).then(async (res) => {
    console.log(await res.text());
    return true;
  }).then(async (x)=>{
    console.log(x);
    return true;
  }).catch((err) => {
    console.log(err);
    //Alert(err.message);
    return false;
  });
  return true;
}

export {get_user_loca, generateMarkers, fetchRequestImages};


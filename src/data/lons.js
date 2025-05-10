const lons = {
  babarmahal: { name: "Babarmahal", lat: 27.6931086, lng: 85.3229449 },
  "bhabar-mahal": { name: "bhabar mahal", lat: 27.6917369, lng: 85.3257874 },
  bhadrakali: { name: "Bhadrakali", lat: 27.6993518, lng: 85.3177129 },
  "bhimsengola-stop": {
    name: "Bhimsengola stop",
    lat: 27.7009154,
    lng: 85.3418155,
  },
  buddhanagar: { name: "Buddhanagar", lat: 27.6900272, lng: 85.3294069 },
  "ciy-center-stop": {
    name: "Ciy Center Stop",
    lat: 27.7098049,
    lng: 85.3270834,
  },
  damkal: { name: "Damkal", lat: 27.675972, lng: 85.3159258 },
  gathaghar: { name: "gathaghar", lat: 27.6740623, lng: 85.3731666 },
  "ghantaghar-stop": {
    name: "Ghantaghar (घण्टाघर) stop",
    lat: 27.7080425,
    lng: 85.3171161,
  },
  "harihar-bhawan": {
    name: "Harihar Bhawan",
    lat: 27.6810962,
    lng: 85.3176805,
  },
  jawalakhel: { name: "Jawalakhel", lat: 27.6731669, lng: 85.3136149 },
  jwagal: { name: "Jwagal", lat: 27.6855201, lng: 85.3181419 },
  "kamaladi-road-stop": {
    name: "Kamaladi Road (कमलादी) stop",
    lat: 27.7079957,
    lng: 85.3212617,
  },
  kaushaltar: { name: "kaushaltar", lat: 27.6746332, lng: 85.3643148 },
  "kcm-stop": { name: "KCM stop", lat: 27.6958676, lng: 85.3528159 },
  koteshwore: { name: "koteshwore", lat: 27.6788696, lng: 85.3497112 },
  kupandole: { name: "Kupandole", lat: 27.6881731, lng: 85.3161266 },
  "lagankhel-bus-stop": {
    name: "Lagankhel bus stop",
    lat: 27.6671965,
    lng: 85.3223108,
  },
  lokanthali: { name: "Lokanthali", lat: 27.6749056, lng: 85.3602862 },
  "maiti-devi-chowk": {
    name: "Maiti Devi chowk",
    lat: 27.7038954,
    lng: 85.3328246,
  },
};

function init() {
  let arr = [];
  Object.keys(lons).map((item) => arr.push(`lons['${item}']`));

  console.log(arr.join(","));
}
init();

export default lons;

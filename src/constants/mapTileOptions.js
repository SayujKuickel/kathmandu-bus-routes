export const DEFAULT_MAP_TILE = "carto-light";

export const mapTileOptions = {
  openstreetmap: {
    id: "openstreetmap",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: `'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'`,
    // icon: "https://b.basemaps.cartocdn.com/light_all/18/193208/110063.png",
    icon: "/assets/layerMaps/openstreetmap.png",
  },
  "carto-dark": {
    id: "carto-dark",
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    // icon: "https://b.basemaps.cartocdn.com/dark_all/18/193208/110063.png",
    icon: "/assets/layerMaps/carto-dark.png",
  },
  "carto-light": {
    id: "carto-light",
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    // icon: "https://a.tile.openstreetmap.org/18/193208/110063.png",
    icon: "/assets/layerMaps/carto-light.png",
  },
};

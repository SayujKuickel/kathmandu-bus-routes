export const DEFAULT_MAP_TILE = "carto-light";

export const mapTileOptions = {
  openstreetmap: {
    id: "openstreetmap",
    name: "Openstreetmap",
    mapTypeLabel: "Detailed",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: `'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'`,
    icon: "/assets/layerMaps/openstreetmap.jpg",
  },
  "carto-light": {
    id: "carto-light",
    name: "Carto Light",
    mapTypeLabel: "Light Minimal",
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    icon: "/assets/layerMaps/carto-light.jpg",
  },
  "carto-dark": {
    id: "carto-dark",
    name: "Carto Dark",
    mapTypeLabel: "Dark Minimal",
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    icon: "/assets/layerMaps/carto-dark.jpg",
  },
};

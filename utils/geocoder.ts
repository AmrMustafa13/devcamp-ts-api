import nodeGeocoder from "node-geocoder";

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  apiKey: process.env.GEO_LOCATION_API_KEY,
  formatter: null,
};

export const geocoder = nodeGeocoder(options as any);

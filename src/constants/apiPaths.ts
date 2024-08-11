const BFF_API = "https://hd233pu1s1.execute-api.eu-north-1.amazonaws.com";

const API_PATHS = {
  // product: "https://hty4a25t2i.execute-api.eu-north-1.amazonaws.com/prod/",
  product: `${BFF_API}/product`,
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: "https://moh7jtvle7.execute-api.eu-north-1.amazonaws.com/prod/",
  bff: BFF_API,
  // cart: "https://s28nswt1pl.execute-api.eu-north-1.amazonaws.com",
  cart: `${BFF_API}/cart`,
};

export default API_PATHS;

import { SHOP_API_BASE_URL, SHOP_API_KEY } from "@env";

export const GET_SITES = () => {
  var myHeaders = new Headers();
  myHeaders.append("api_key", SHOP_API_KEY);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${SHOP_API_BASE_URL}/sites}`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const GET_LOCALE = () => {
  var myHeaders = new Headers();
  myHeaders.append("api_key", SHOP_API_KEY);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${SHOP_API_BASE_URL}/sites/:site/locales}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const GET_CATEGORY = () => {
  var myHeaders = new Headers();
  myHeaders.append("api_key", SHOP_API_KEY);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `${SHOP_API_BASE_URL}/categories?locale=en_US&publisherId=TEST}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const GET_ALL_PRODUCTS = (text) => {
  var myHeaders = new Headers();
  myHeaders.append("api_key", SHOP_API_KEY);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `${SHOP_API_BASE_URL}/products/?locale=en_US&publisherId=TEST&term=${text}`,
    requestOptions
  );
};

export const GET_PRODUCT = (id) => {
  var myHeaders = new Headers();
  myHeaders.append("api_key", SHOP_API_KEY);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `${SHOP_API_BASE_URL}/products/${id}?locale=en_US&publisherId=TEST`,
    requestOptions
  );
};

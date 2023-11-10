/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-extraneous-dependencies */
// import Router from "next/router";
import _, { isObject, isEmpty, isArray, isString } from "lodash";
import BaseSetting from "./setting";
import axios from "axios";

const defaultHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// Not Used
export default function fetchHelper(
  url,
  data = {},
  method = "GET",
  headers = defaultHeader,
  formData = false
) {
  const head = { ...headers };

  let options = {
    method,
    headers: head,
  };
  if (method === "POST" || method === "PUT") {
    options = { ...options, body: formData ? data : JSON.stringify(data) };
  }
  console.log(`💥️~ apiUrl ->`, BaseSetting.apiUrl + url, options);
  return fetch(`${BaseSetting.apiUrl}${url}`, options)
    .then((res) => {
      const newData = res.json().then((response) => {
        if (response && response.message === "Unauthorised") {
          setTimeout(() => {
            // Router.push("/");
          }, 1000);
          return Promise.resolve(response);
        }

        let nData = response;
        if (isObject(response) && !isEmpty(response) && response.code) {
          let obj = {};
          if (response.code == 401 || response.code == 403) {
            console.log(`💥️~ response.code ->`, response.code);
            localStorage.clear();
            window.location.replace("/");
            return Promise.resolve(nData);
          } else if (
            isArray(response.problems) &&
            response.problems.length > 0
          ) {
            obj.message = response.problems[0];
            obj.code = response.code;
            nData = obj;
          }
        }

        return Promise.resolve(nData);
      });
      return Promise.resolve(newData);
    })
    .catch((error) => Promise.reject(error));
}

export function getApiData(
  endpoint,
  method,
  data,
  headers,
  skipBaseUrl = false
) {
  const authState = {};
  const token = authState?.auth?.accessToken || "";
  const authHeaders = {
    "Content-Type": "application/json",
    authorization: token ? `Bearer ${token}` : "",
  };

  return new Promise((resolve, reject) => {
    let query = "";
    let qs = "";
    for (const key in data) {
      query += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
    }
    const params = {};
    params.method = method.toLowerCase() === "get" ? "get" : "post";
    params.headers = !_.isEmpty(headers) ? headers : authHeaders;

    if (params.method === "post") {
      if (
        params.headers &&
        params.headers["Content-Type"] &&
        params.headers["Content-Type"] === "application/json"
      ) {
        params.body = JSON.stringify(data);
      } else {
        params.body = query;
      }
    } else {
      qs = !_.isEmpty(query) ? `?${query}` : "";
    }

    console.log(`💥️~ getApiData ~ params ->`, params);

    if (
      params.method === "post" &&
      params.headers &&
      params.headers["Content-Type"] &&
      params.headers["Content-Type"] === "application/json"
    ) {
      console.log(JSON.stringify(data));
    } else {
      let str = "";
      if (data && Object.keys(data).length > 0) {
        Object.keys(data).map((dk) => {
          str += `${dk}:${data[dk]}\n`;
        });
      }
      console.log(str);
    }

    const url = skipBaseUrl ? endpoint : BaseSetting.apiUrl + endpoint + qs;
    console.log(`💥️~ GetApiData ~ url ->`, url);
    fetch(url, params)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.code == 402) {
          localStorage.clear();
          window.location.replace("/");
          resolve(responseJson);
        } else if (
          isObject(responseJson) &&
          isString(responseJson.message) &&
          responseJson.message === "Unauthorized" &&
          endpoint !== "delete-token"
        ) {
          console.log("Unauthorized===>>>");
          // store.dispatch(AuthAction.setAccessToken(''));
          // store.dispatch(AuthAction.setUserData({}));
          // navigation.navigate('RedirectLS');
          resolve(responseJson);
        } else {
          resolve(responseJson);
        }
      })
      .catch((err) => {
        console.log(`💥️~ getApiData ~ err ->`, err);
        reject(err);
      });
  });
}

// not Used
export function getAPIProgressData(
  endpoint,
  method,
  data,
  headers = false,
  onProgress = null
) {
  const isOnline = window.navigator.onLine;
  if (isOnline) {
    return new Promise(async (resolve, reject) => {
      const authState = {};
      const token = authState?.auth?.accessToken || "";

      const authHeaders = {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      };

      const url = BaseSetting.apiUrl + endpoint;
      const oReq = new XMLHttpRequest();
      oReq.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded * 100) / event.total;
          if (onProgress) {
            onProgress(progress);
          }
        }
      });

      var FormData = require("form-data");
      var form = new FormData();
      if (data && Object.keys(data).length > 0) {
        Object.keys(data).map((k) => form.append(k, data[k]));
      }
      console.log(`💥️~ data ->`, data);

      // if (headers) {
      //   hData.Authorization = headers;
      // }

      let options = {
        method: method,
        headers: headers ? headers : authHeaders,
        body: form,
      };

      delete options.headers["Content-Type"];

      console.log(`💥️~ options ->`, options);
      console.log(`💥️~ url ->`, url);

      fetch(url, options)
        .then((res) => res.json())
        .then(function (result) {
          console.log(`💥️ ~ result ->`, result);
          if (result.code == 402) {
            console.log("💥️~ Error 402 ---->", result.code);
            localStorage.clear();
            window.location.replace("/");
            resolve(result);
          } else {
            resolve(result);
          }
        })
        .catch((err) => {
          console.log("Catch Part", err);
          reject(err);
        });
    });
  }
}

export function getAxiosApi(endpoint, method, data, headers) {
  const isOnline = window.navigator.onLine;
  if (isOnline) {
    return new Promise(async (resolve, reject) => {
      const authState = {};
      const token = authState?.auth?.accessToken || "";
      const authHeaders = {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      };

      const url = BaseSetting.apiUrl + endpoint;
      const apiMethod = method.toLowerCase() === "get" ? "get" : "post";
      const header = headers ? headers : authHeaders;

      const options = {
        method: apiMethod,
        url: url,
        data: data,
        headers: header,
      };
      console.log(`💥️~ getAxiosApi ~ options ->`, options);

      axios(options)
        .then((result) => {
          if (result.data.code == 402) {
            console.log("💥️~ Error 402 ---->", result.code);
            localStorage.clear();
            window.location.replace("/");
            resolve(result.data);
          } else {
            resolve(result.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

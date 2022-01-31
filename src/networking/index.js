import axios from "axios";

export const postFormCall = async (url, data, headers) => {
    document.body.classList.add("network-active");
    return axios({
        method: "post",
        url: url,
        data: data,
        headers: headers,
    }).catch(function (error) {
        if (!error.response) {
            // network error
        } else {
            const { data } = error.response;
            return data;
        }
    });
};

export const postCall = async (url, data, headers, params) => {
    document.body.classList.add("network-active");
    return axios({
        method: "post",
        url: url,
        data: data,
        headers: headers,
        params: params,
    }).catch(function (error) {
        if (!error.response) {
            // network error
           // interceptor(100);
        } else {
            const { data } = error.response;
            return data;
        }
    });
};

export const getCall = async (url,  headers, params) => {
    return axios({
        method: "get",
        url: url,
        params: params,
        headers: headers,
    }).catch(function (error) {
        if (!error.response) {
            // network error
        } else {
            const { data } = error.response;
            return data;
        }
    });
};

export const putCall = async (url, data, headers, params) => {
    document.body.classList.add("network-active");
    return axios({
        method: "put",
        url: url,
        data: data,
        headers: headers,
        params: params,
    }).catch(function (error) {
        if (!error.response) {
            // network error
           // interceptor(100);
        } else {
            const { data } = error.response;
            return data;
        }
    });
};

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
            const { status } = error.response;
            return status;
        }
    });
};

export const postCall = async (url, data, params, headers) => {
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
            interceptor(100);
        } else {
            const { status } = error.response;
            return status;
        }
    });
};

export const getCall = async (url, params, headers) => {
    return axios({
        method: "get",
        url: url,
        params: params,
        headers: headers,
    }).catch(function (error) {
        if (!error.response) {
            // network error
        } else {
            const { status } = error.response;
            return status;
        }
    });
};

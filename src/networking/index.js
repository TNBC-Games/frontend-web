import axios from "axios";
import { rsaEncryption, aesEncryption } from "./security";
import { getReference } from "../utils/utilityFunctions";

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
    let finalData;
    if (process.env.isEncrypted === "true") {
        let password = getReference();
        let rsakey = rsaEncryption(password);
        let encryptedData = await encryptData(password, data);
        finalData = { data: encryptedData };
        var keyvalue = { Key: rsakey };
        headers = Object.assign(keyvalue);
    } else {
        finalData = data;
        headers = Object.assign("");
    }
    return axios({
        method: "post",
        url: url,
        data: finalData,
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

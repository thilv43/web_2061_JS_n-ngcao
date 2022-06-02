const Instance = "http://localhost:3001";

function apiGet(uri) {
    return fetch(Instance + uri).then((res) => res.json());
}

function apiGetCallback(uri, callback) {
    return fetch(Instance + uri).then((res) => res.json()).then((data) => callback(data));
}

function getImage(url, callback) {
    return fetch(url).then((data) => callback(data));
}

export {
    apiGet,
    apiGetCallback,
    getImage,
};
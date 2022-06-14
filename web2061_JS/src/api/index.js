const Instance = "http://localhost:3001";

function apiUpdate(uri, data){
    return fetch(Instance + uri, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

    }).then(res => res.json())
}
function apiAdd(uri, data) {
    return fetch(Instance + uri, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res =>  res.json())
}
function apiDelete(uri, data){
    return fetch(Instance + uri, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res =>  res.json())
}

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
    apiDelete,
    apiAdd,
    apiUpdate,
    apiGet,
    apiGetCallback,
    getImage,
};
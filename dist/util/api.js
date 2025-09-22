export var api = function (url, init) {
    return fetch(url, init)
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
};

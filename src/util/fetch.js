const fetchData = (url, opts) => {
    let requestUrl = url;
    if (opts && opts.data) {
        requestUrl += opts.data.join('&');
    }

    let timeoutId = null;

    return new Promise((resolve, reject) => {
        if (opts && typeof opts.timeout === 'number') {
            timeoutId = setTimeout(() => {
                const errorMessage = 'request timeout';
                reject(new Error(errorMessage));
            }, opts.timeout);
        }

        fetch(requestUrl, {
            credentials: 'same-origin',
            headers: { 'content-type': 'application/json' },
            ...(opts || {})
        })
            .then(
                res => {
                    clearTimeout(timeoutId);
                    return res;
                },
                () => clearTimeout(timeoutId)
            )
            .then(res => resolve(res))
            .catch(reject);
    });
};

export default fetchData;

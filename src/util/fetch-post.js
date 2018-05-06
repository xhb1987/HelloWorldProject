import fetchData from './fetch';

const fetchPost = (url, data) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => {
                try {
                    if (!response) {
                        throw new Error('invalid response');
                    }

                    resolve(response.json());
                } catch (e) {
                    throw e;
                }
            })
            .catch(reject);
    });
};

export default fetchPost;

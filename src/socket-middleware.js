export default function socketMiddleWare(socket) {
    return ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }

        const { promise, type, types, ...rest } = action;

        if (type !== 'socket' || !promise) {
            return next(action);
        }

        const [REQUEST, SUCCESS, FAILURE] = types;
        next({ ...rest, type: REQUEST });
        console.log(promise);
        return promise(socket)
            .then(result => {
                console.log(result);
                return next({ ...rest, result, type: SUCCESS });
            })
            .catch(error => {
                console.log(error);
                return next({ ...rest, error, type: FAILURE });
            });
    };
}

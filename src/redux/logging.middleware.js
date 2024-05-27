export function loggingMiddleware({ dispatch, getState }) {
    return next => {
        return action => {
            if (typeof action === 'function') {
                console.log('dispatching a function')
                return action(dispatch, getState)
            }
            return next(action)
        }
    }
}
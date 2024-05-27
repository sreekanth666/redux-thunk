import { configureStore } from '@reduxjs/toolkit'
import productSlice from './product.slice'
import { loggingMiddleware } from './logging.middleware'

const store = configureStore({
    reducer: {
        productSlice
    },
    middleware: () => [loggingMiddleware],
})

export default store
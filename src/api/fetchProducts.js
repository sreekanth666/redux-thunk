import axios from "axios"
import { setProducts } from "../redux/product.slice"

export function fetchProducts() {
    return async function (dispatch) {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            console.log(response.data)
            dispatch(setProducts(response.data))
        } catch (error) {
            console.error(error);
        }
    }
}
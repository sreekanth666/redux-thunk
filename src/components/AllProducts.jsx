import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setProducts } from '../redux/product.slice';
import axios from 'axios';
import { fetchProducts } from '../api/fetchProducts';
import { useEffect } from 'react';

function AllProducts() {

    function* fibonacci() {
        let a = 0, b = 1
        while (true) {
            yield a
            b = a + b
            a = b - a
            console.log("Generator function: ", a);
            // if (a == 3) {
            //     return
            // }
        }
    }
    const numbers = fibonacci()
    console.log(numbers.next().value)
    console.log(numbers.next().value)
    console.log(numbers.next().value)
    console.log(numbers.next().value)
    console.log(numbers.next().value)
    console.log(numbers.next().value)
    console.log(numbers.next().value)
    console.log(numbers.next().value)


    return (
        <div className='container'>
            <h1>All Products</h1>
        </div>
    );
}

export default AllProducts;
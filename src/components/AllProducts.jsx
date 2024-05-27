import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setProducts } from '../redux/product.slice';
import axios from 'axios';
import { fetchProducts } from '../api/fetchProducts';

function AllProducts() {
    const allProducts = useSelector((state) => (state.productSlice.allProducts))
    const dispatch = useDispatch()

    const InitializeProducts = () => {
        // fetchProducts(dispatch)
        dispatch(fetchProducts())
    }
    return (
        <div className='container'>
            <h1>All Products</h1>
            <button className='btn btn-primary' onClick={InitializeProducts}>Initialize Products</button>
            <div className='mt-5 d-flex gap-2 flex-wrap'>
                {
                    allProducts.length > 0 ?
                        allProducts.map((product, index) => (
                            <div className="card" style={{ width: "10rem" }} key={index}>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                </div>
                            </div>
                        ))
                        :
                        <p>No Products</p>
                }
            </div>
        </div>
    );
}

export default AllProducts;
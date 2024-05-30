import { co } from 'co';
import React, { useEffect, useState } from 'react';

function UsingCo() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function* fetchData() {
        try {
            const response = yield fetch('https://fakestoreapi.com/products');
            const products = yield response.json();
            return products;
        } catch (err) {
            throw err;
        }
    }

    useEffect(() => {
        co(fetchData)
            .then((products) => {
                setData(products);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='container'>
            <h1>All Products</h1>
            <ul>
                {data.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default UsingCo;

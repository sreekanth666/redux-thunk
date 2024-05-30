import React, { useEffect, useState } from 'react';

function CoLogicUsingGenerator() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function* fetchProducts() {
        try {
            const response = yield fetch('https://fakestoreapi.com/products');
            const products = yield response.json();
            return products;
        } catch (err) {
            throw err;
        }
    }

    useEffect(() => {
        const runGenerator = async (generator) => {
            const iterator = generator();

            const iterate = async (result) => {
                if (result.done) return result.value;
                try {
                    const value = await result.value;
                    return iterate(iterator.next(value));
                } catch (err) {
                    return iterator.throw(err);
                }
            };

            try {
                const products = await iterate(iterator.next());
                setData(products);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        runGenerator(fetchProducts);
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

export default CoLogicUsingGenerator;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [singleProduct, setSingleProduct] = useState([]);
    const { furnitureId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/furnitures/${furnitureId}`)
            .then((res) => res.json())
            .then((data) => setSingleProduct(data));
    }, [furnitureId]);


    return (
        <div>
            <h1>{singleProduct.productName}</h1>
        </div>
    );
};

export default ProductDetails;
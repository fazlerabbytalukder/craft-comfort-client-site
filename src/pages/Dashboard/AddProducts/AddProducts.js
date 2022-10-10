import React, { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const initialProduct = {
    productName: "",
    ProductDes: "",
    category: null,
    price: 0,
    review: 0,
    img: '',
    reviewNumber: 0,
}

const AddProducts = () => {
    const [productData, setProductData] = useState(initialProduct);
    const [addProductSuccess, setAddProductSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!productData.img) {
            return;
        }
        fetch('http://localhost:5000/furnitures', {
            headers: {
                "content-type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddProductSuccess(true);
                    setProductData(initialProduct);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (
        <form className='flex flex-col space-y-3' onSubmit={handleSubmit}>
            <input
                placeholder="Food Name"
                required
                value={productData.productName}
                onChange={e => setProductData({ ...productData, productName: e.target.value })}
                name="productName"
                type="text" />
            <input
                placeholder="Description"
                required
                value={productData.ProductDes}
                onChange={e => setProductData({ ...productData, ProductDes: e.target.value })}
                name="ProductDes"
                type="text" />
            <select value={productData.category} onChange={(e) => setProductData({ ...productData, category: (e.target.value) })}>
                <option></option>
                <option>Lounges & Sofa</option>
                <option>outdoor</option>
                <option>office</option>
                <option>mattresses</option>
                <option>beadroom</option>
                <option>living & dining</option>
            </select>
            <input
                placeholder="Price"
                required
                value={productData.price}
                onChange={e => setProductData({ ...productData, price: parseFloat(e.target.value)})}
                name="price"
                type="number" />
            <input
                placeholder="Review"
                required
                value={productData.review}
                onChange={e => setProductData({ ...productData, review: parseFloat(e.target.value)})}
                name="review"
                type="number" />
            <input
                placeholder="Review Number"
                required
                value={productData.reviewNumber}
                onChange={e => setProductData({ ...productData, reviewNumber: parseFloat(e.target.value)})}
                name="reviewNumber"
                type="number" />
            <input
                placeholder="Give Image Link"
                required
                value={productData.img}
                onChange={e => setProductData({ ...productData, img: e.target.value })}
                name="img"
                type="text" />
            


            {/* success section  */}
            {addProductSuccess && (<div className='bg-green-700/60 py-3 rounded text-white flex items-center px-4 mb-4'>
                <p className='mr-3'><BsFillCheckCircleFill /></p>
                <p>Successfully product added</p>
            </div>)}

            <button type='submit' className='px-4 py-2 font-semibold block bg-primary text-ternary text-center dark:bg-main'>Submit</button>
        </form>
    );
};

export default AddProducts;
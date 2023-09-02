import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialProduct = {
    productName: "",
    ProductDes: "",
    category: null,
    price: "",
    review: null,
    img: '',
    reviewNumber: "",
    quantity: 0
}

const AddProducts = () => {
    const [productData, setProductData] = useState(initialProduct);

    const handleSubmit = e => {
        e.preventDefault();
        if (!productData.img) {
            return;
        }
        fetch('https://craft-comfort-server-site.onrender.com/furnitures', {
            headers: {
                "content-type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfully Added Product', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                    setProductData(initialProduct);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (
        <div className=''>
            <h1 className='text-center text-2xl uppercase font-semibold py-3 text-primary dark:text-main'>Add New Product</h1>
            <form className='space-y-3' onSubmit={handleSubmit}>
                <div className='lg:flex lg:justify-between lg:space-x-3'>
                    <div className='w-full'>
                        <div className="relative flex flex-col">
                            <label for="productName" className="leading-7 text-sm text-gray-600">Food Name:</label>
                            <input
                                placeholder="Food Name"
                                required
                                value={productData.productName}
                                onChange={e => setProductData({ ...productData, productName: e.target.value })}
                                name="productName"
                                type="text"
                                className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative flex flex-col">
                            <label for="ProductDes" className="leading-7 text-sm text-gray-600">Description</label>
                            <textarea
                                rows="5"
                                cols="55"
                                placeholder="Description"
                                required
                                value={productData.ProductDes}
                                onChange={e => setProductData({ ...productData, ProductDes: e.target.value })}
                                name="ProductDes"
                                type="text"
                                className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative flex flex-col">
                            <label for="category" className="leading-7 text-sm text-gray-600">Select Category</label>
                            <select value={productData.category} onChange={(e) => setProductData({ ...productData, category: (e.target.value) })} className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                <option>Lounges & Sofa</option>
                                <option>outdoor</option>
                                <option>office</option>
                                <option>mattresses</option>
                                <option>beadroom</option>
                                <option>living & dining</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="relative flex flex-col">
                            <label for="price" className="leading-7 text-sm text-gray-600">Price</label>
                            <input
                                placeholder="Price"
                                required
                                value={productData.price}
                                onChange={e => setProductData({ ...productData, price: parseFloat(e.target.value) })}
                                name="price"
                                type="number"
                                className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative flex flex-col">
                            <label for="category" className="leading-7 text-sm text-gray-600">Select Stars</label>
                            <select value={productData.review} onChange={(e) => setProductData({ ...productData, review: parseFloat(e.target.value) })} className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="relative flex flex-col">
                            <label for="category" className="leading-7 text-sm text-gray-600">Select Quantity</label>
                            <select value={productData.quantity} onChange={(e) => setProductData({ ...productData, quantity: parseFloat(e.target.value) })} className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                <option>0</option>
                            </select>
                        </div>
                        <div className="relative flex flex-col">
                            <label for="reviewNumber" className="leading-7 text-sm text-gray-600">Review Number</label>
                            <input
                                placeholder="Review Number"
                                required
                                value={productData.reviewNumber}
                                onChange={e => setProductData({ ...productData, reviewNumber: parseFloat(e.target.value) })}
                                name="reviewNumber"
                                type="number"
                                className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative flex flex-col">
                            <label for="imageLink" className="leading-7 text-sm text-gray-600">Image Link</label>
                            <input
                                placeholder="Give Image Link"
                                required
                                value={productData.img}
                                onChange={e => setProductData({ ...productData, img: e.target.value })}
                                name="img"
                                type="text"
                                className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                </div>

                <button type='submit' className='w-full px-4 py-2 font-semibold block bg-primary text-ternary text-center dark:bg-main rounded'>ADD PRODUCT</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddProducts;
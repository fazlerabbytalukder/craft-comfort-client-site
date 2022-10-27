import React, { useContext } from 'react';
import Heading from '../AllComponents/Heading';
import NawArrival from './NawArrival';
import useProducts from '../../../Hooks/useProducts';
import useCart from '../../../Hooks/useCart';
import { addToDb } from '../../../utilities/fakedb';
import { DataProvider } from '../../../contexts/DataProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NawArrivals = () => {
    const [furniture] = useProducts();
    const [cart, setCart] = useCart();
    const { quantity } = useContext(DataProvider);

    const handleAddToCart = (selectedFurnitures) => {
        let newCart = [];
        const exist = cart.find(furniture => furniture._id === selectedFurnitures.id);
        if (!exist) {
            selectedFurnitures.quantity = 1;
            newCart = [...cart, selectedFurnitures];
        } else {
            const rest = cart.filter(furniture => furniture._id !== selectedFurnitures.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedFurnitures._id);

        quantity();

        toast.success('Successfully added', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    return (
        <div className='bg-[#F8F9FC] dark:bg-[#0F172A] pb-8'>
            {/* heading components  */}
            <Heading title="New Arrival" description="This is our new products and here you find all Latest Product" />

            {/* product container  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                        {
                            furniture.slice(furniture.length - 4, furniture.length).map(furniture => <NawArrival key={furniture._id} furniture={furniture} handleAddToCart={handleAddToCart} ToastContainer={ToastContainer} />)
                        }
                    </div>
                </div>
            </section>
            {/* product container end  */}
        </div>
    );
};

export default NawArrivals;
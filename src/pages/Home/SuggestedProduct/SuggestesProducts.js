import React, { useContext } from 'react';
import Heading from '../AllComponents/Heading';
import { ImSpinner10 } from "react-icons/im";
import SuggestedProduct from './SuggestedProduct';
import useProducts from '../../../Hooks/useProducts';
import useCart from '../../../Hooks/useCart';
import { addToDb } from '../../../utilities/fakedb';
import { DataProvider } from '../../../contexts/DataProvider';

const SuggestesProducts = () => {
    const [furniture, isLoading] = useProducts();
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
    }

    return (
        <div className='bg-[#F8F9FC] dark:bg-[#0F172A] pb-8'>
            {/* heading components  */}
            <Heading title="recomanded for you" description="This is your suggested products and here you find all favourite Product" />

            {/* loading added if item not shown */}
            {isLoading && <div className='flex justify-center items-center'><ImSpinner10 className='animate-spin text-5xl' /></div>}

            {/* product container  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                        {
                            furniture.slice(furniture.sort(() => Math.random() - 0.5),4).map(furniture => <SuggestedProduct key={furniture._id} furniture={furniture} handleAddToCart={handleAddToCart} />)
                        }
                    </div>
                </div>
            </section>
            {/* product container end  */}
        </div>
    );
};

export default SuggestesProducts;
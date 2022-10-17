import { useEffect, useState } from "react";

const useProducts = () => {
    const [furnitures, setFurnitures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5000/furnitures`)
            .then(res => res.json())
            .then(data => {
                setFurnitures(data);
                setIsLoading(false);
            });
    }, [])

    return [furnitures, setFurnitures, isLoading, setIsLoading];
}

export default useProducts;
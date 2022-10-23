import { useEffect, useState } from "react";

const useAllUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://craft-comfort-server.onrender.com/allusers`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, [])

    return [users, setUsers];
}

export default useAllUser;
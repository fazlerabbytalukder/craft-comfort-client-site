import { useEffect, useState } from "react";

const useAllUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allusers`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, [])

    return [users, setUsers];
}

export default useAllUser;
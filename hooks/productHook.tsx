import axios from 'axios';
import React, { useEffect, useState } from 'react'


const baseURL = "http://localhost:5000/api/products"


export const getProducts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(baseURL);
            setData(response.data);
        };
        fetchData();
    }, []);

    return  data ;
};

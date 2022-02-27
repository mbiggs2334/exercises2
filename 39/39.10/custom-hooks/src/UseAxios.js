import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import axios from 'axios';

const UseAxios = (url) => {
    const [data, setData] = useState([]);
    const addToData = async (name='') => {
        const response = await axios.get(typeof(name) === 'object' ? url : url + name);
        
        setData((data) =>[
            ...data,
            {...response.data, id: uuid()}
        ]);
    };
    return [data, addToData]
};

export default UseAxios;
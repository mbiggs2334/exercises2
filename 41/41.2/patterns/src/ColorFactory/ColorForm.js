import React, { useState } from 'react';
import './ColorForm.css';

const ColorForm = ({addColor}) => {

    const INITIAL_STATE = {
        colorName: '',
        colorValue: '#000000'
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        setFormData(INITIAL_STATE);
    };

    return (
        <form className="ColorForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="colorName">Name of color: </label>
                <input
                    id="colorName"
                    type="text"
                    name="colorName"
                    placeholder="Color Name..."
                    value={formData.colorName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="colorValue">Color: </label>
                <input 
                    id="colorValue"
                    type="color"
                    name="colorValue"
                    onChange={handleChange}
                    value={formData.colorValue}
                />
            </div>
            <button>Add Color</button>
        </form>
    )
};

export default ColorForm;
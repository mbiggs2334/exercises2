import React, { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        height: '',
        width: '',
        color: '#000000'
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE);
    };

    return (
        <form className="NewBoxForm-form" onSubmit={handleSubmit}>
            <label htmlFor="height">Height: </label>
            <input
                id="height"
                type="number"
                name="height"
                min={25}
                max={250}
                data-testid="height-input"
                placeholder="Height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="width">Width: </label>
            <input
                id="width"
                type="number"
                name="width"
                min={25}
                max={250}
                data-testid="width-input"
                placeholder="Width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="color">Color: </label>
            <input
                id="color"
                type="color"
                name="color"
                data-testid="color-input"
                placeholder="Color"
                value={formData.color}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )
};

export default NewBoxForm;
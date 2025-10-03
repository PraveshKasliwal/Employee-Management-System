import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'

const API_URL = import.meta.env.VITE_API_URL;

const AddEmployeeForm = ({ employee, onClose, onEmployeeSaved }) => {
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        email: "",
    });

    // prefill form if editing
    useEffect(() => {
        if (employee) {
            setFormData({
                name: employee.name || "",
                position: employee.position || "",
                email: employee.email || "",
            });
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (employee) {
                // Editing existing employee
                response = await axios.put(`${API_URL}/${employee._id}`, formData);
            } else {
                // Adding new employee
                response = await axios.post(API_URL, formData);
            }

            const savedEmployee = response.data;

            // fallback in case backend doesn't return full data
            const employeeData = {
                name: savedEmployee?.name || formData.name,
                position: savedEmployee?.position || formData.position,
                email: savedEmployee?.email || formData.email,
                _id: savedEmployee?._id,
            };

            onEmployeeSaved(employeeData);
            onClose();
        } catch (error) {
            console.error("Error saving employee:", error);
        }
    };

    return (
        <form className='employee-detail-form' onSubmit={handleSubmit}>
            <h2>{employee ? "Edit Employee" : "Add Employee"}</h2>

            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Employee Name"
                    autoComplete='off'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete='off'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Position</label>
                <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    autoComplete='off'
                    value={formData.position}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='add-employee-button-container'>
                <button type="submit">
                    {employee ? "Save Changes" : "Add Employee"}
                </button>
            </div>
        </form>
    );
};

export default AddEmployeeForm;
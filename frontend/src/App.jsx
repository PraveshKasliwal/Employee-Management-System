import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import { IoIosSearch } from "react-icons/io";
import Modal from './components/Modal';
import AddEmployeeForm from './components/AddEmployeeForm';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  // fetch employees from backend
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(API_URL);
        setEmployees(response.data.data);
        setFilteredEmployees(response.data.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  // filter employees based on search term
  useEffect(() => {
    const results = employees.filter(employee => {
      if (!employee) return false;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        (employee.name?.toLowerCase() || '').includes(lowerCaseSearchTerm) ||
        (employee.position?.toLowerCase() || '').includes(lowerCaseSearchTerm) ||
        (employee.email?.toLowerCase() || '').includes(lowerCaseSearchTerm)
      );
    });
    setFilteredEmployees(results);
  }, [searchTerm, employees]);

  // handle adding or updating employee in state
  const handleEmployeeSaved = (savedEmployee) => {
    if (editingEmployee) {
      setEmployees(prevEmployees =>
        prevEmployees.map(emp =>
          emp._id === savedEmployee._id
            ? { ...emp, ...savedEmployee }
            : emp
        )
      );
    } else {
      // add new employee
      setEmployees(prevEmployees => [...prevEmployees, savedEmployee]);
      console.log(`Employess: ${JSON.stringify(employees)}`);
    }
    setEditingEmployee(null); // reset editing state
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (!confirmDelete) return;
    try {
      await axios.delete(`http://localhost:8000/api/employees/${id}`);
      setEmployees((prev) => prev.filter((emp) => emp._id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };


  // open add employee modal
  const openAddModal = () => {
    setEditingEmployee(null);
    setIsModalOpen(true);
  };

  // open edit employee modal
  const openEditModal = (employee) => {
    console.log('employee: ', employee);
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header onAddClick={openAddModal} />

        <div className="search-container">
          <div className="search-input-wrapper">
            <span className="material-symbols-outlined search-icon">
              <IoIosSearch className='icon' />
            </span>
            <input
              className="search-input"
              placeholder="Search employees by name, email or position"
              type="text"
              autoComplete='off'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <EmployeeTable
          employees={filteredEmployees}
          onEdit={openEditModal}
          onDelete={handleDelete}
        />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <AddEmployeeForm
            employee={editingEmployee}
            onClose={() => setIsModalOpen(false)}
            onEmployeeSaved={handleEmployeeSaved}
          />
        </Modal>
      </main>
    </div>
  );
};

export default App;
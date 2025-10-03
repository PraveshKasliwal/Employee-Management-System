import React from 'react';
import axios from 'axios';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {

  return (
    <div className="table-container">
      {
        employees.length === 0 ? (
          <p className="no-employees">No employees found.</p>
        ) : (
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee._id}>
                  <td className="cell-name">{employee.name}</td>
                  <td className="cell-muted">{employee.email}</td>
                  <td className="cell-muted">{employee.position}</td>
                  <td className="text-right cell-actions">
                    <button
                      className="action-button-edit"
                      onClick={() => onEdit(employee)}
                    >
                      Edit
                    </button>
                    <button
                      className="action-button-delete"
                      onClick={() => onDelete(employee._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  );
};

export default EmployeeTable;

const Employee = require("../models/employee.js");

// GET all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.json({ data: employees });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET an employee by id
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).json({ error: "Employee not found" });
        res.json({ data: employee });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// POST (create) a new employee
exports.createEmployee = async (req, res) => {
    try {
        const { name, email, position } = req.body;
        const newEmployee = new Employee({ name, email, position });
        const savedEmployee = await newEmployee.save();
        // The frontend expects the ID of the new employee, MongoDB calls it _id
        res.status(201).json(savedEmployee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// PUT (update) an employee
exports.updateEmployee = async (req, res) => {
    try {
        const { name, email, position } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            { name, email, position },
            { new: true, runValidators: true } // return updated doc
        );
        if (!updatedEmployee) return res.status(404).json({ error: "Employee not found" });

        // return the updated employee object
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE an employee
exports.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) return res.status(404).json({ error: "Employee not found" });
        res.json({ message: "Employee deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
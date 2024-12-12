import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Box, Typography } from "@mui/material";
import { useSnackbar } from 'notistack'; // For notifications
import axios from 'axios';

function Employees() {
  const [open, setOpen] = useState(false);  // For managing the dialog state
  const [employeeData, setEmployeeData] = useState({
    name: "",
    department: "",
    role: "",
    image: null,
  });
  const [employees, setEmployees] = useState([]);  // Ensure employees is an array
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  // Departments and Roles - You can modify these as per your use case
  const departments = ['HR', 'Engineering', 'Sales'];
  const roles = ['Manager', 'Developer', 'Salesperson'];

  // Dummy data for employees (Replace with API call later)
  useEffect(() => {
    const fetchEmployees = () => {
      const dummyEmployees = [
        {
          name: 'John Doe',
          department: 'Engineering',
          role: 'Developer',
          salary: '₹50,000',
          imageUrl: 'https://via.placeholder.com/50', // Placeholder image
        },
        {
          name: 'Jane Smith',
          department: 'Sales',
          role: 'Salesperson',
          salary: '₹40,000',
          imageUrl: 'https://via.placeholder.com/50', // Placeholder image
        },
        {
          name: 'David Johnson',
          department: 'HR',
          role: 'Manager',
          salary: '₹60,000',
          imageUrl: 'https://via.placeholder.com/50', // Placeholder image
        },
      ];
      setEmployees(dummyEmployees);
    };

    fetchEmployees();
  }, []);

  // Open the form
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close the form
  const handleClose = () => {
    setOpen(false);
  };

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  // Handle image file input
  const handleImageChange = (e) => {
    setEmployeeData({
      ...employeeData,
      image: e.target.files[0],
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", employeeData.name);
    formData.append("department", employeeData.department);
    formData.append("role", employeeData.role);
    formData.append("image", employeeData.image);

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/api/employees', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      enqueueSnackbar('Employee created successfully!', { variant: 'success' });
      handleClose(); // Close the form
      setEmployeeData({ name: "", department: "", role: "", image: null }); // Reset form
    } catch (error) {
      enqueueSnackbar('Failed to create employee. Try again!', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Employees
      </Typography>
      <Typography variant="body1" paragraph>
        Manage employee records here.
      </Typography>
      
      {/* Button to open the form */}
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create Employee
      </Button>

      {/* Search Bar */}
      <TextField
        label="Search Employees"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginTop: 2, marginBottom: 2 }}
      />

      {/* Employee Table */}
      <Box sx={{ marginTop: 2 }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Profile Image</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.role}</td>
                <td>{employee.salary}</td> {/* Assuming you have a 'salary' field */}
                <td><img src={employee.imageUrl} alt={employee.name} width={50} height={50} /></td> {/* Assuming you have an 'imageUrl' field */}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      {/* Dialog (Pop-up Form) */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Employee</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            {/* Employee Name */}
            <TextField
              label="Employee Name"
              name="name"
              value={employeeData.name}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />

            {/* Department */}
            <TextField
              select
              label="Department"
              name="department"
              value={employeeData.department}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            >
              {departments.map((dept, index) => (
                <MenuItem key={index} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </TextField>

            {/* Role */}
            <TextField
              select
              label="Role"
              name="role"
              value={employeeData.role}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            >
              {roles.map((role, index) => (
                <MenuItem key={index} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>

            {/* Image Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              style={{ marginBottom: '1rem' }}
            />

            {/* Submit Button */}
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary" disabled={loading}>
                {loading ? 'Submitting...' : 'Create Employee'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Employees;

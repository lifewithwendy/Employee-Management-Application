import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const handleUpdate = (employeeId) => {
    navigate(`/employee/${employeeId}`);
  }

  const handleDelete = async (employeeId) => {
      try {
        const response = await fetch(`http://localhost:8080/api/employee/${employeeId}`, {
          method: "DELETE",
        });
    
        if (!response.ok) {
          throw new Error("Failed to delete employee");
        }
    
        setEmployees((prevEmployees) =>
          prevEmployees.filter((emp) => emp.id !== employeeId)
        );
    
        console.log(`Employee with ID ${employeeId} deleted successfully`);
      } catch (error) {
        console.error(`Error deleting Employee with ID: ${employeeId}`, error);
      }
    };
    
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("http://localhost:8080/api/employees");
      const data = await response.json();
      setEmployees(data);
      console.log(data);
    };
    fetchEmployees();
  }, []);

  return (
    <div className="center-form">
      <Container className='mt-5'>
        <Row className="w-100">
          <Col>
            <h1 className='text-center mb-4'>Employees</h1>
            <Table
              striped
              bordered
              hover
              responsive
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.length > 0 ? (
                  employees.map((employee, index) => (
                    <tr key={employee.id}>
                      <td>{index + 1}</td>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.department}</td>
                      <td>
                        <Button
                          variant='outline-secondary'
                          className='w-100 me-2'
                          onClick={() => {handleUpdate(employee.id)}}
                        >
                          Edit
                        </Button>
                        <Button
                          variant='outline-danger'
                          className='w-100'
                          onClick={() => {handleDelete(employee.id)}}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='5'>No Employees</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

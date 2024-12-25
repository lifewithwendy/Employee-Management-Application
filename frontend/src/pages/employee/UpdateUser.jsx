import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';



const UpdateUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
      });

    const { id } = useParams();
    const navigate = useNavigate();

    const handleInputForm = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        // console.log(formData); // Log form data
    
      };
    
      const  handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); // Log form data
        try {
            const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
              method: "PATCH",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(formData)
            }) 
            const data = await response.json();
            console.log("Employee Updated: ", data);
            navigate("/");
        } catch (error) {
            console.log("There was a Error", error.message);
        }
      };


    useEffect(() => {
        const loadEmployer = async () => {
            // Fetching user data from API
            const response = await fetch(`http://localhost:8080/api/employee/${id}`);
            const data = await response.json();
            setFormData(data);
            console.log(formData);
        }
        loadEmployer();
    },[])
  return (
    <div className='center-form'>
      <h1>Update Employee Details</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Name'
            name='name'
            value={formData.name}
            onChange={handleInputForm}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            name='email'
            value={formData.email}
            onChange={handleInputForm}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPhone'>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Phone'
            name='phone'
            value={formData.phone}
            onChange={handleInputForm}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicDepartment'>
          <Form.Label>Department</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Department'
            name='department'
            value={formData.department}
            onChange={handleInputForm}
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='w-100'>
          Update
        </Button>
      </Form>
    </div>
  )
}

export default UpdateUser

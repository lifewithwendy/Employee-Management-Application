# Employee Management Application

This project is a **Simple Employee Management Application** built using **Spring Boot** for the backend and **React** for the frontend. It provides features for adding, viewing, updating, and deleting employee records.

---

## Tech Stack

### Backend:
- **Spring Boot**: Java-based framework for building the backend REST APIs.
- **MySQL**: Relational database used for storing employee data.
- **JPA (Java Persistence API)**: For database interaction.

### Frontend:
- **React**: JavaScript library for building the user interface.
- **Bootstrap**: CSS framework for responsive and modern UI design.

---

## Features
- **Add Employee**: Allows adding a new employee with details such as name, email, phone, and department.
- **View Employee**: Displays a list of employees with their details.
- **Update Employee**: Allows updating employee details.
- **Delete Employee**: Deletes an employee record.

---

## Prerequisites
1. **Java JDK 17 or later**
2. **Node.js** (for React)
3. **MySQL Database**
4. **Maven** (for dependency management)
5. **Spring Boot Tools** (optional for IDE support)

---

## Setup Instructions

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Configure database connection in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
   spring.datasource.username=root
   spring.datasource.password=password
   spring.jpa.hibernate.ddl-auto=update
   ```
4. Build and run the application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```

---

## API Endpoints
- **POST /api/employee**: Add a new employee.
- **GET /api/employees**: Retrieve all employees.
- **GET /api/employee/{id}**: Retrieve an employee by ID.
- **PATCH /api/employee/{id}**: Update an existing employee.
- **DELETE /api/employee/{id}**: Delete an employee.

---

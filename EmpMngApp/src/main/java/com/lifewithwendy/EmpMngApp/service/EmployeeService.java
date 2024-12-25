package com.lifewithwendy.EmpMngApp.service;

import com.lifewithwendy.EmpMngApp.entity.Employee;
import com.lifewithwendy.EmpMngApp.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
//@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
//        System.out.println("Employee Service Constructor called\n");
        this.employeeRepository = employeeRepository;
    }

    public Employee postEmployee(Employee employee) {
//        System.out.println("postEmployee method called\n");
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public void deleteEmployee(Long ID) {
        if(!employeeRepository.existsById(ID)){
            throw new EntityNotFoundException("Employee with ID: "+ ID +" not found");
        }
        employeeRepository.deleteById(ID);
    }

    public Employee getEmployeeById(Long ID) {
        return employeeRepository.findById(ID).orElse(null);
    }

    public Employee updateEmployee(Long ID, Employee employee) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(ID);
        if(optionalEmployee.isPresent()){
            //update the employee
            Employee existingEmployee = optionalEmployee.get();
            existingEmployee.setName(employee.getName());
            existingEmployee.setEmail(employee.getEmail());
            existingEmployee.setPhone(employee.getPhone());
            existingEmployee.setDepartment(employee.getDepartment());

            return employeeRepository.save(existingEmployee);
        }
        return null;
    }
}

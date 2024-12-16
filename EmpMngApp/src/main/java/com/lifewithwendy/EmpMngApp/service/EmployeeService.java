package com.lifewithwendy.EmpMngApp.service;

import com.lifewithwendy.EmpMngApp.entity.Employee;
import com.lifewithwendy.EmpMngApp.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
}

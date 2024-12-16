package com.lifewithwendy.EmpMngApp.controller;

import com.lifewithwendy.EmpMngApp.entity.Employee;
import com.lifewithwendy.EmpMngApp.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
//@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @PostMapping("/employee")
    public Employee addEmployee(@RequestBody Employee employee) {
//        System.out.println("Employee details in addEmployee are: \n" + employee.getId() + "\n" + employee.getName() + "\n" + employee.getPhone() + "\n" + employee.getDepartment());
        return employeeService.postEmployee(employee);
    }
}

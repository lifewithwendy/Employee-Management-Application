# declare employeee entity to store data
as lombok is not working properly in jdk23 explicitly declred constructors and getters and setters
```java
//employee
package com.lifewithwendy.EmpMngApp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String email;

    private String phone;

    private String department;

    public String getPhone() {
        return phone;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getDepartment() {
        return department;
    }
}

```

```java
//employeeService
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


```

```java
//employee controler to declare api access point
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

```
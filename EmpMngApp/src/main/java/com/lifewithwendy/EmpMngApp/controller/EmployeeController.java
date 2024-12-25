package com.lifewithwendy.EmpMngApp.controller;

import com.lifewithwendy.EmpMngApp.entity.Employee;
import com.lifewithwendy.EmpMngApp.service.EmployeeService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
// @RequiredArgsConstructor
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

    @GetMapping("employees")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @DeleteMapping("/employee/{ID}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long ID) {
        try {
            employeeService.deleteEmployee(ID);
            return new ResponseEntity<>("Employee with ID " + ID + " deleted succesfully", HttpStatus.OK);
        }catch (EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/employee/{ID}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long ID) {
        Employee employee = employeeService.getEmployeeById(ID);

        if(employee == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(employee);
    }

    @PatchMapping("/employee/{ID}")
    public ResponseEntity<?> updateEmployee(@PathVariable Long ID, @RequestBody Employee employee) {
        Employee updatedEmployee = employeeService.updateEmployee(ID, employee);

        if(updatedEmployee == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(updatedEmployee);
    }

}

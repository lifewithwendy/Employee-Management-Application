package com.lifewithwendy.EmpMngApp.repository;

import com.lifewithwendy.EmpMngApp.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}

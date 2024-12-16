# go to [spring boot](https://start.spring.io/) and initiate app
add the required dependencies when initializing,
in this case 
    1 Spring Web
    2 Spring Data JPA
    3 MySQL Driver
    4 Lombok 


## database connection to MySQL 
update src/resources/application properties to connect with the database
```java
    spring.application.name=EmpMngApp

    spring.datasource.url = jdbc:mysql://localhost:3306/employee_db
    spring.datasource.username=root
    spring.datasource.password=
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
```

### create the first getController
create a class in the same folder as the main and create api access points, by using http://localhost:8080/ we can acces the website
```java
package com.lifewithwendy.EmpMngApp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controler {

    @GetMapping("/")
    public String home() {
        return "Hello World";
    }
}
```

#### add the models to the main class(EmpMngApp)
//EmpMng/entity/Employee.java
```java
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
    private  long id;

    private String name;

    private String email;

    private String phone;

    private String department;

}
```

//EmpMng/repositary/EmployeeRepositary.java
```java
package com.lifewithwendy.EmpMngApp.repositary;

import com.lifewithwendy.EmpMngApp.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepositary extends JpaRepository<Employee, Long> {

}

```
//EmpMng/repositary/EmployeeService.java
```java
package com.lifewithwendy.EmpMngApp.service;

import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
}


```


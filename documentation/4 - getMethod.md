# after creating the front end to fetch the data create the api endpints. Update endpoint to get all employess
```java
//employeeController.java
// add the get endpoint
@GetMapping("employees")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }
```

```java
//employeeService.java
// add the get service for the service
  public List<Employee> getAllEmployees() {
      return employeeRepository.findAll();
  }
```

## after creating the front end to fetch the data create the api endpints. Update endpoint to delete the employee
```java
//employeeController.java
// add the get endpoint
@DeleteMapping("/employee/{ID}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long ID) {
        try {
            employeeService.deleteEmployee(ID);
            return new ResponseEntity<>("Employee with ID " + ID + " deleted succesfully", HttpStatus.OK);
        }catch (EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
```

```java
//employeeService.java
// add the get service for the service
public void deleteEmployee(Long ID) {
    if(!employeeRepository.existsById(ID)){
        throw new EntityNotFoundException("Employee with ID: "+ ID +" not found");
    }
    employeeRepository.deleteById(ID);
}
```

### after creating the front end to fetch the data create the api endpints. Update endpoint to get the employeedetails using the id
```java
//employeeController.java
// add the get endpoint
@GetMapping("/employee/{ID}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long ID) {
        Employee employee = employeeService.getEmployeeById(ID);

        if(employee == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(employee);
    }
```

```java
//employeeService.java
// add the get service for the service
public Employee getEmployeeById(Long ID) {
    return employeeRepository.findById(ID).orElse(null);
}

```


#### after creating the front end to fetch the data create the api endpints. Update endpoint to get the update the employee
```java
//employeeController.java
// add the get endpoint
@PatchMapping("/employee/{ID}")
    public ResponseEntity<?> updateEmployee(@PathVariable Long ID, @RequestBody Employee employee) {
        Employee updatedEmployee = employeeService.updateEmployee(ID, employee);

        if(updatedEmployee == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(updatedEmployee);
    }
```

```java
//employeeService.java
// add the get service for the service
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

```
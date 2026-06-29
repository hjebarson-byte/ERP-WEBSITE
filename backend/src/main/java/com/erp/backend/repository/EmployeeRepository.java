package com.erp.backend.repository;

import com.erp.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findByEmail(String email);

    boolean existsByEmail(String email);

    List<Employee> findByDepartment(String department);

    List<Employee> findByPosition(String position);

    List<Employee> findByStatus(Employee.EmployeeStatus status);

    @Query("SELECT e FROM Employee e WHERE e.firstName LIKE %:keyword% OR e.lastName LIKE %:keyword% OR e.email LIKE %:keyword% OR e.department LIKE %:keyword%")
    List<Employee> searchEmployees(@Param("keyword") String keyword);

    @Query("SELECT COUNT(e) FROM Employee e WHERE e.status = :status")
    long countByStatus(@Param("status") Employee.EmployeeStatus status);

    @Query("SELECT e FROM Employee e WHERE e.department = :department ORDER BY e.salary DESC")
    List<Employee> findEmployeesByDepartmentOrderBySalary(@Param("department") String department);
}

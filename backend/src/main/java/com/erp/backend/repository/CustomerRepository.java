package com.erp.backend.repository;

import com.erp.backend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Optional<Customer> findByEmail(String email);

    boolean existsByEmail(String email);

    List<Customer> findByNameContainingIgnoreCase(String name);

    List<Customer> findByCompany(String company);

    @Query("SELECT c FROM Customer c WHERE c.name LIKE %:keyword% OR c.email LIKE %:keyword% OR c.company LIKE %:keyword%")
    List<Customer> searchCustomers(@Param("keyword") String keyword);

    @Query("SELECT c FROM Customer c ORDER BY c.totalSpent DESC")
    List<Customer> findTopCustomers();
}

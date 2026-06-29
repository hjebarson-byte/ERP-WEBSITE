package com.erp.backend.service;

import com.erp.backend.model.Customer;
import com.erp.backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerById(Long id) {
        return customerRepository.findById(id);
    }

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(Long id, Customer customerDetails) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        customer.setName(customerDetails.getName());
        customer.setEmail(customerDetails.getEmail());
        customer.setPhone(customerDetails.getPhone());
        customer.setAddress(customerDetails.getAddress());
        customer.setCompany(customerDetails.getCompany());

        return customerRepository.save(customer);
    }

    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    public Optional<Customer> getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email);
    }

    public List<Customer> searchCustomers(String keyword) {
        return customerRepository.searchCustomers(keyword);
    }

    public List<Customer> getTopCustomers() {
        return customerRepository.findTopCustomers();
    }

    public List<Customer> getCustomersByCompany(String company) {
        return customerRepository.findByCompany(company);
    }

    public Customer updatePurchaseStats(Long customerId, Integer purchases, java.math.BigDecimal amount) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));
        
        customer.setTotalPurchases(customer.getTotalPurchases() + purchases);
        customer.setTotalSpent(customer.getTotalSpent().add(amount));
        
        return customerRepository.save(customer);
    }
}

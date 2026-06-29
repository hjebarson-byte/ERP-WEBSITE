package com.erp.backend.config;

import com.erp.backend.model.*;
import com.erp.backend.repository.*;
import com.erp.backend.model.Employee.EmployeeStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public void run(String... args) {
        // Initialize sample data if tables are empty
        if (productRepository.count() == 0) {
            initializeProducts();
        }
        if (customerRepository.count() == 0) {
            initializeCustomers();
        }
        if (userRepository.count() == 0) {
            initializeUsers();
        }
        if (employeeRepository.count() == 0) {
            initializeEmployees();
        }
    }

    private void initializeProducts() {
        Product[] products = {
            new Product(null, "Wireless Bluetooth Headphones", new BigDecimal("79.99"), 
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", 
                "Electronics", "Premium wireless headphones with noise cancellation and 30-hour battery life.", 
                new BigDecimal("4.5"), 50),
            new Product(null, "Smart Watch Pro", new BigDecimal("199.99"), 
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", 
                "Electronics", "Advanced smartwatch with health monitoring, GPS, and water resistance.", 
                new BigDecimal("4.8"), 30),
            new Product(null, "Leather Laptop Bag", new BigDecimal("89.99"), 
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500", 
                "Accessories", "Genuine leather laptop bag with multiple compartments and padded sleeve.", 
                new BigDecimal("4.3"), 25),
            new Product(null, "Running Shoes", new BigDecimal("129.99"), 
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", 
                "Footwear", "Lightweight running shoes with advanced cushioning technology.", 
                new BigDecimal("4.7"), 40),
            new Product(null, "Minimalist Desk Lamp", new BigDecimal("45.99"), 
                "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500", 
                "Home", "Modern LED desk lamp with adjustable brightness and color temperature.", 
                new BigDecimal("4.4"), 60),
            new Product(null, "Ceramic Coffee Mug Set", new BigDecimal("34.99"), 
                "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500", 
                "Home", "Set of 4 handcrafted ceramic mugs in assorted colors.", 
                new BigDecimal("4.6"), 45),
            new Product(null, "Portable Power Bank", new BigDecimal("49.99"), 
                "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500", 
                "Electronics", "20000mAh power bank with fast charging and dual USB ports.", 
                new BigDecimal("4.5"), 55),
            new Product(null, "Cotton T-Shirt", new BigDecimal("24.99"), 
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", 
                "Clothing", "100% organic cotton t-shirt, comfortable and breathable.", 
                new BigDecimal("4.2"), 100),
            new Product(null, "Wireless Mouse", new BigDecimal("29.99"), 
                "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500", 
                "Electronics", "Ergonomic wireless mouse with precision tracking and long battery life.", 
                new BigDecimal("4.4"), 70),
            new Product(null, "Yoga Mat", new BigDecimal("39.99"), 
                "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500", 
                "Sports", "Non-slip yoga mat with extra cushioning for comfort.", 
                new BigDecimal("4.6"), 35),
            new Product(null, "Sunglasses", new BigDecimal("59.99"), 
                "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500", 
                "Accessories", "Polarized sunglasses with UV protection and lightweight frame.", 
                new BigDecimal("4.3"), 40),
            new Product(null, "Backpack", new BigDecimal("69.99"), 
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", 
                "Accessories", "Durable backpack with laptop compartment and multiple pockets.", 
                new BigDecimal("4.7"), 30)
        };

        for (Product product : products) {
            productRepository.save(product);
        }
    }

    private void initializeCustomers() {
        Customer[] customers = {
            new Customer(null, "John Doe", "john.doe@example.com", "+1234567890", 
                "123 Main St, City, Country", "Tech Corp", 5, new BigDecimal("499.95")),
            new Customer(null, "Jane Smith", "jane.smith@example.com", "+1234567891", 
                "456 Oak Ave, Town, Country", "Digital Solutions", 3, new BigDecimal("299.97")),
            new Customer(null, "Bob Johnson", "bob.johnson@example.com", "+1234567892", 
                "789 Pine Rd, Village, Country", "StartUp Inc", 8, new BigDecimal("799.92")),
            new Customer(null, "Alice Brown", "alice.brown@example.com", "+1234567893", 
                "321 Elm St, City, Country", "Creative Agency", 2, new BigDecimal("149.98")),
            new Customer(null, "Charlie Wilson", "charlie.wilson@example.com", "+1234567894", 
                "654 Maple Dr, Town, Country", "Wilson Enterprises", 4, new BigDecimal("399.96"))
        };

        for (Customer customer : customers) {
            customerRepository.save(customer);
        }
    }

    private void initializeUsers() {
        User admin = new User();
        admin.setName("Admin User");
        admin.setEmail("admin@erp.com");
        admin.setPassword("$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"); // "admin123"
        admin.setRole("ADMIN");
        admin.setIsActive(true);
        userRepository.save(admin);

        User user = new User();
        user.setName("Regular User");
        user.setEmail("user@erp.com");
        user.setPassword("$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"); // "admin123"
        user.setRole("USER");
        user.setIsActive(true);
        userRepository.save(user);
    }

    private void initializeEmployees() {
        Employee[] employees = {
            new Employee(null, "Michael", "Scott", "michael.scott@erp.com", "+1234567895", 
                "Management", "Regional Manager", new BigDecimal("75000.00"), 
                LocalDate.of(2020, 1, 15), EmployeeStatus.ACTIVE, "123 Office Park"),
            new Employee(null, "Dwight", "Schrute", "dwight.schrute@erp.com", "+1234567896", 
                "Sales", "Assistant Regional Manager", new BigDecimal("55000.00"), 
                LocalDate.of(2020, 2, 1), EmployeeStatus.ACTIVE, "456 Sales Blvd"),
            new Employee(null, "Jim", "Halpert", "jim.halpert@erp.com", "+1234567897", 
                "Sales", "Sales Representative", new BigDecimal("45000.00"), 
                LocalDate.of(2020, 3, 10), EmployeeStatus.ACTIVE, "789 Sales Ave"),
            new Employee(null, "Pam", "Beesly", "pam.beesly@erp.com", "+1234567898", 
                "Reception", "Receptionist", new BigDecimal("35000.00"), 
                LocalDate.of(2020, 1, 20), EmployeeStatus.ACTIVE, "101 Front Desk"),
            new Employee(null, "Ryan", "Howard", "ryan.howard@erp.com", "+1234567899", 
                "IT", "Temp", new BigDecimal("30000.00"), 
                LocalDate.of(2023, 6, 1), EmployeeStatus.ON_LEAVE, "202 IT Center")
        };

        for (Employee employee : employees) {
            employeeRepository.save(employee);
        }
    }
}

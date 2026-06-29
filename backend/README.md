# ERP Backend - Spring Boot

A comprehensive Spring Boot backend for the ERP system, providing REST APIs for inventory management, sales, customers, finance, HR, and more.

## Technology Stack

- **Java 17** - Programming language
- **Spring Boot 3.2.0** - Application framework
- **Spring Data JPA** - Database access
- **H2 Database** - In-memory database (development)
- **MySQL** - Production database option
- **Maven** - Build tool
- **Lombok** - Reduce boilerplate code
- **ModelMapper** - DTO mapping

## Project Structure

```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/erp/backend/
│   │   │   ├── config/          # Configuration classes
│   │   │   │   ├── CorsConfig.java
│   │   │   │   └── DataInitializer.java
│   │   │   ├── controller/      # REST controllers
│   │   │   │   ├── ProductController.java
│   │   │   │   ├── CustomerController.java
│   │   │   │   ├── OrderController.java
│   │   │   │   ├── TransactionController.java
│   │   │   │   ├── InvoiceController.java
│   │   │   │   ├── EmployeeController.java
│   │   │   │   └── DashboardController.java
│   │   │   ├── model/           # Entity classes
│   │   │   │   ├── Product.java
│   │   │   │   ├── User.java
│   │   │   │   ├── Customer.java
│   │   │   │   ├── Order.java
│   │   │   │   ├── OrderItem.java
│   │   │   │   ├── Transaction.java
│   │   │   │   ├── Invoice.java
│   │   │   │   └── Employee.java
│   │   │   ├── repository/      # JPA repositories
│   │   │   │   ├── ProductRepository.java
│   │   │   │   ├── UserRepository.java
│   │   │   │   ├── CustomerRepository.java
│   │   │   │   ├── OrderRepository.java
│   │   │   │   ├── TransactionRepository.java
│   │   │   │   ├── InvoiceRepository.java
│   │   │   │   └── EmployeeRepository.java
│   │   │   ├── service/         # Business logic
│   │   │   │   ├── ProductService.java
│   │   │   │   ├── CustomerService.java
│   │   │   │   ├── OrderService.java
│   │   │   │   ├── TransactionService.java
│   │   │   │   ├── InvoiceService.java
│   │   │   │   └── EmployeeService.java
│   │   │   └── ErpBackendApplication.java
│   │   └── resources/
│   │       └── application.properties
└── pom.xml
```

## Features

### API Endpoints

#### Products (`/api/products`)
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/{id}` - Update product
- `DELETE /api/products/{id}` - Delete product
- `GET /api/products/category/{category}` - Get products by category
- `GET /api/products/search?keyword=` - Search products
- `GET /api/products/low-stock` - Get low stock products
- `GET /api/products/out-of-stock` - Get out of stock products
- `PATCH /api/products/{id}/stock?quantity=` - Update product stock

#### Customers (`/api/customers`)
- `GET /api/customers` - Get all customers
- `GET /api/customers/{id}` - Get customer by ID
- `POST /api/customers` - Create new customer
- `PUT /api/customers/{id}` - Update customer
- `DELETE /api/customers/{id}` - Delete customer
- `GET /api/customers/email/{email}` - Get customer by email
- `GET /api/customers/search?keyword=` - Search customers
- `GET /api/customers/top` - Get top customers by spending
- `GET /api/customers/company/{company}` - Get customers by company

#### Orders (`/api/orders`)
- `GET /api/orders` - Get all orders
- `GET /api/orders/{id}` - Get order by ID
- `GET /api/orders/number/{orderNumber}` - Get order by number
- `POST /api/orders` - Create new order
- `PUT /api/orders/{id}` - Update order
- `DELETE /api/orders/{id}` - Delete order
- `GET /api/orders/customer/{customerId}` - Get orders by customer
- `GET /api/orders/status/{status}` - Get orders by status
- `GET /api/orders/search?keyword=` - Search orders
- `GET /api/orders/date-range?start=&end=` - Get orders by date range
- `PATCH /api/orders/{id}/status?status=` - Update order status

#### Transactions (`/api/transactions`)
- `GET /api/transactions` - Get all transactions
- `GET /api/transactions/{id}` - Get transaction by ID
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/{id}` - Update transaction
- `DELETE /api/transactions/{id}` - Delete transaction
- `GET /api/transactions/type/{type}` - Get transactions by type
- `GET /api/transactions/category/{category}` - Get transactions by category
- `GET /api/transactions/status/{status}` - Get transactions by status
- `GET /api/transactions/search?keyword=` - Search transactions
- `GET /api/transactions/summary/income` - Get total income
- `GET /api/transactions/summary/expenses` - Get total expenses
- `GET /api/transactions/summary/profit` - Get net profit

#### Invoices (`/api/invoices`)
- `GET /api/invoices` - Get all invoices
- `GET /api/invoices/{id}` - Get invoice by ID
- `POST /api/invoices` - Create new invoice
- `PUT /api/invoices/{id}` - Update invoice
- `DELETE /api/invoices/{id}` - Delete invoice
- `GET /api/invoices/customer/{customerId}` - Get invoices by customer
- `GET /api/invoices/status/{status}` - Get invoices by status
- `GET /api/invoices/overdue` - Get overdue invoices
- `GET /api/invoices/summary/pending` - Get total pending amount
- `PATCH /api/invoices/{id}/status?status=` - Update invoice status

#### Employees (`/api/employees`)
- `GET /api/employees` - Get all employees
- `GET /api/employees/{id}` - Get employee by ID
- `POST /api/employees` - Create new employee
- `PUT /api/employees/{id}` - Update employee
- `DELETE /api/employees/{id}` - Delete employee
- `GET /api/employees/department/{department}` - Get employees by department
- `GET /api/employees/status/{status}` - Get employees by status
- `GET /api/employees/search?keyword=` - Search employees
- `PATCH /api/employees/{id}/status?status=` - Update employee status

#### Dashboard (`/api/dashboard`)
- `GET /api/dashboard` - Get dashboard statistics
- `GET /api/dashboard/revenue` - Get revenue overview
- `GET /api/dashboard/recent-activity` - Get recent activity

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- MySQL (optional, for production)

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build the project:
```bash
mvn clean install
```

3. Run the application:
```bash
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

### Database Configuration

#### Development (H2)
The application uses H2 in-memory database by default. Access the H2 console at:
```
http://localhost:8080/h2-console
```
- JDBC URL: `jdbc:h2:mem:erpdb`
- Username: `sa`
- Password: (leave empty)

#### Production (MySQL)
1. Create a MySQL database:
```sql
CREATE DATABASE erp_db;
```

2. Update `application.properties`:
```properties
# Comment out H2 configuration
# spring.datasource.url=jdbc:h2:mem:erpdb
# spring.datasource.driverClassName=org.h2.Driver

# Uncomment MySQL configuration
spring.datasource.url=jdbc:mysql://localhost:3306/erp_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update
```

3. Add MySQL dependency to `pom.xml` (already included)

## Data Initialization

The application automatically initializes with sample data on first startup:
- 12 sample products
- 5 sample customers
- 2 users (admin and regular user)
- 5 sample employees

Default credentials:
- Admin: `admin@erp.com` / `admin123`
- User: `user@erp.com` / `admin123`

## CORS Configuration

The backend is configured to accept requests from any origin with CORS enabled. This can be modified in `CorsConfig.java` for production.

## Testing

Run the test suite:
```bash
mvn test
```

## Building for Production

Create a JAR file:
```bash
mvn clean package
```

Run the JAR file:
```bash
java -jar target/backend-1.0.0.jar
```

## API Documentation

Test the APIs using:
- Swagger UI (if configured)
- Postman
- cURL

Example cURL command:
```bash
curl -X GET http://localhost:8080/api/products
```

## Integration with Frontend

The React frontend should be configured to make API calls to:
```
http://localhost:8080/api
```

Update the frontend API base URL in your React application to point to the Spring Boot backend.

## Development

### Adding New Endpoints

1. Create entity in `model/`
2. Create repository interface in `repository/`
3. Create service class in `service/`
4. Create controller in `controller/`
5. Add CORS annotation: `@CrossOrigin(origins = "*")`

### Project Status

- ✅ Product Management
- ✅ Customer Management
- ✅ Order Management
- ✅ Transaction Management
- ✅ Invoice Management
- ✅ Employee Management
- ✅ Dashboard Statistics
- ✅ Data Initialization
- ✅ CORS Configuration
- ⏳ Authentication & Authorization (to be added)
- ⏳ File Upload (to be added)
- ⏳ Email Notifications (to be added)

## License

This project is part of the ERP System and is available for internal use.

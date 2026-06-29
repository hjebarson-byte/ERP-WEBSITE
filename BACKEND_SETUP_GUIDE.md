# ERP Application - Complete Setup Guide

## 📋 Prerequisites

### Required Software:
1. **Java 17 or higher**
   - Download: https://adoptium.net/temurin/releases/?version=17
   - Install and verify: `java -version`

2. **Maven 3.6+**
   - Download: https://maven.apache.org/download.cgi
   - Extract and add to system PATH
   - Verify: `mvn -version`

3. **Node.js 16+** (Already installed based on project)
   - Verify: `node -version`
   - Verify: `npm -version`

## 🚀 Quick Start Guide

### Step 1: Install Backend Dependencies

```bash
cd backend
mvn clean install
```

### Step 2: Start the Backend

```bash
cd backend
mvn spring-boot:run
```

The backend will start on:
- **API Base URL**: `http://localhost:8080`
- **H2 Console**: `http://localhost:8080/h2-console`

### Step 3: Start the Frontend (New Terminal)

```bash
cd "C:\Users\jazzj\CascadeProjects\ERP - WEBSITE"
npm run dev
```

The frontend will start on:
- **Application URL**: `http://localhost:5173`

## 🔗 Integration Configuration

### Update Frontend API Configuration

The React frontend needs to be configured to call the Spring Boot backend. Currently, the frontend uses mock data. Here's how to integrate:

#### Option 1: Create API Service

Create `src/services/api.ts`:

```typescript
const API_BASE_URL = 'http://localhost:8080/api';

export const api = {
  // Products
  getProducts: () => fetch(`${API_BASE_URL}/products`).then(res => res.json()),
  getProduct: (id: number) => fetch(`${API_BASE_URL}/products/${id}`).then(res => res.json()),
  createProduct: (product: any) => fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  }).then(res => res.json()),

  // Customers
  getCustomers: () => fetch(`${API_BASE_URL}/customers`).then(res => res.json()),
  createCustomer: (customer: any) => fetch(`${API_BASE_URL}/customers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customer)
  }).then(res => res.json()),

  // Orders
  getOrders: () => fetch(`${API_BASE_URL}/orders`).then(res => res.json()),
  createOrder: (order: any) => fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  }).then(res => res.json()),

  // Dashboard
  getDashboardStats: () => fetch(`${API_BASE_URL}/dashboard`).then(res => res.json()),
  getRevenueOverview: () => fetch(`${API_BASE_URL}/dashboard/revenue`).then(res => res.json()),
};
```

#### Option 2: Update Existing Components

Replace mock data calls with API calls in your components.

## 🧪 Testing the Backend

### Test API Endpoints

```bash
# Test products
curl http://localhost:8080/api/products

# Test customers
curl http://localhost:8080/api/customers

# Test dashboard
curl http://localhost:8080/api/dashboard

# Test orders
curl http://localhost:8080/api/orders
```

### Access H2 Database Console

1. Navigate to: `http://localhost:8080/h2-console`
2. Enter credentials:
   - JDBC URL: `jdbc:h2:mem:erpdb`
   - Username: `sa`
   - Password: (leave empty)
3. Click "Connect"
4. Run SQL queries to view data

## 📊 Available API Endpoints

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `PUT /api/products/{id}` - Update product
- `DELETE /api/products/{id}` - Delete product
- `GET /api/products/search?keyword=` - Search products

### Customers
- `GET /api/customers` - Get all customers
- `POST /api/customers` - Create customer
- `GET /api/customers/search?keyword=` - Search customers

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create order
- `PATCH /api/orders/{id}/status` - Update order status

### Transactions
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create transaction
- `GET /api/transactions/summary/income` - Get total income

### Dashboard
- `GET /api/dashboard` - Get dashboard statistics
- `GET /api/dashboard/revenue` - Get revenue overview

## 🔧 Troubleshooting

### Backend won't start:
1. Check Java version: `java -version` (must be 17+)
2. Check Maven installation: `mvn -version`
3. Check if port 8080 is already in use
4. Try: `mvn clean install` before running

### Frontend won't start:
1. Check Node.js version: `node -version`
2. Delete `node_modules` and run `npm install`
3. Check if port 5173 is already in use

### CORS errors:
- The backend has CORS configured to allow all origins
- If you still get CORS errors, check browser console for details

### Database connection issues:
- H2 console: `http://localhost:8080/h2-console`
- Check `application.properties` for database configuration

## 📝 Sample Data

The backend automatically initializes with:
- **12 Products** across various categories
- **5 Customers** with purchase history
- **2 Users** (admin@erp.com / admin123, user@erp.com / admin123)
- **5 Employees** across different departments

## 🎯 Next Steps

1. Install Java 17 and Maven
2. Start the backend: `cd backend && mvn spring-boot:run`
3. Start the frontend: `npm run dev`
4. Update frontend components to use API calls
5. Test the integration

## 📚 Additional Resources

- Spring Boot Documentation: https://spring.io/projects/spring-boot
- React Documentation: https://react.dev
- Maven Documentation: https://maven.apache.org/guides/

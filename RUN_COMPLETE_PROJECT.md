# 🚀 Complete Guide to Run the ERP Project

## 📋 System Requirements Check

### ✅ Your Current System Status:
- **Node.js**: v24.16.0 ✅ (Excellent - Required: 16+)
- **npm**: 11.13.0 ✅ (Perfect - Required: 8+)
- **Java**: 26.0.1 ✅ (Excellent - Required: 17+)
- **Maven**: ❌ Not installed (Required for backend)

### 🔧 Required Installation:
You need to install **Maven** to run the backend. Everything else is ready!

---

## 🎯 Quick Start (3 Options)

### **Option 1: Run Frontend Only (No Backend)**
If you want to see the frontend with mock data:

```bash
# Navigate to project root
cd "C:\Users\jazzj\CascadeProjects\ERP - WEBSITE"

# Install dependencies (if not already done)
npm install

# Start the frontend
npm run dev
```

**Access**: `http://localhost:5173`

---

### **Option 2: Install Maven and Run Full Stack**
For complete frontend + backend integration:

#### **Step 1: Install Maven**

**Download Maven:**
1. Go to: https://maven.apache.org/download.cgi
2. Download: `apache-maven-3.9.5-bin.zip` (or latest version)
3. Extract to: `C:\Program Files\Apache\maven`

**Add to System PATH:**
1. Search for "Environment Variables" in Windows
2. Click "Edit the system environment variables"
3. Click "Environment Variables"
4. Under "System variables", find "Path" and click "Edit"
5. Click "New" and add: `C:\Program Files\Apache\maven\bin`
6. Click OK on all dialog boxes
7. **Restart your terminal/command prompt**

**Verify Installation:**
```bash
mvn --version
```

#### **Step 2: Start the Backend**

```bash
# Navigate to backend directory
cd backend

# Build the project (first time only)
mvn clean install

# Start the backend
mvn spring-boot:run
```

**Backend will start on**: `http://localhost:8080`

#### **Step 3: Start the Frontend** (New Terminal)

```bash
# Navigate to project root
cd "C:\Users\jazzj\CascadeProjects\ERP - WEBSITE"

# Start the frontend
npm run dev
```

**Frontend will start on**: `http://localhost:5173`

#### **Step 4: Access the Application**

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8080/api
- **H2 Database Console**: http://localhost:8080/h2-console

---

### **Option 3: Use Maven Wrapper (No Maven Installation Required)**

I've created Maven wrapper files. You can run the backend without installing Maven globally:

#### **Step 1: Download Maven Wrapper Files**

The wrapper files are already created in your project:
- `backend/.mvn/wrapper/maven-wrapper.properties`

#### **Step 2: Download Maven Wrapper JAR**

You need to download the Maven wrapper JAR file:

1. Go to: https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.2.0/maven-wrapper.jar
2. Download the JAR file
3. Place it in: `backend/.mvn/wrapper/maven-wrapper.jar`

#### **Step 3: Run with Wrapper**

**Windows:**
```bash
cd backend
.\mvnw.cmd spring-boot:run
```

**Or use the batch script I created:**
```bash
# From project root
start-app.bat
```

---

## 📝 Detailed Step-by-Step Guide

### **Phase 1: Frontend Setup (Already Ready!)**

#### **1. Install Frontend Dependencies**
```bash
cd "C:\Users\jazzj\CascadeProjects\ERP - WEBSITE"
npm install
```

#### **2. Start Frontend Development Server**
```bash
npm run dev
```

**Frontend Features:**
- ✅ React 18 with TypeScript
- ✅ Modern UI with TailwindCSS
- ✅ All ERP modules (Dashboard, Inventory, Sales, etc.)
- ✅ Uses mock data (products.ts)
- ✅ Fully functional without backend

**Access**: Open http://localhost:5173 in your browser

---

### **Phase 2: Backend Setup (Requires Maven)**

#### **1. Install Maven (Required)**

**Method A: Manual Installation**
```bash
# Download from: https://maven.apache.org/download.cgi
# Extract to: C:\Program Files\Apache\maven
# Add to PATH: C:\Program Files\Apache\maven\bin
```

**Method B: Using Chocolatey (Recommended)**
```bash
# Install Chocolatey if not already installed
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install Maven
choco install maven -y
```

**Method C: Using Scoop**
```bash
# Install Scoop if not already installed
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestObject -Uri https://get.scoop.sh | Invoke-Expression

# Install Maven
scoop install maven
```

#### **2. Verify Maven Installation**
```bash
mvn --version
```

**Expected Output:**
```
Apache Maven 3.9.5 (or later)
Maven home: C:\Program Files\Apache\maven
Java version: 26.0.1, vendor: Oracle Corporation
```

#### **3. Start the Backend**
```bash
cd backend
mvn spring-boot:run
```

**First Run**: Maven will download dependencies (takes 2-5 minutes)

**Backend Features:**
- ✅ Spring Boot 3.2.0 with Java 26
- ✅ REST API endpoints
- ✅ H2 in-memory database
- ✅ Sample data auto-populated
- ✅ CORS enabled for frontend

**Backend Logs** (Look for these):
```
Started ErpBackendApplication in X.XXX seconds
Tomcat started on port(s): 8080 (http)
```

---

### **Phase 3: Access the Complete System**

#### **Frontend Application**
```
http://localhost:5173
```
- Dashboard with statistics
- Inventory management
- Sales and orders
- Customer management
- Finance tracking
- HR management
- Reports and analytics
- Settings

#### **Backend API Endpoints**
```
http://localhost:8080/api/products      - Get all products
http://localhost:8080/api/customers     - Get all customers
http://localhost:8080/api/orders        - Get all orders
http://localhost:8080/api/dashboard     - Get dashboard stats
```

#### **H2 Database Console**
```
http://localhost:8080/h2-console
```
- **JDBC URL**: `jdbc:h2:mem:erpdb`
- **Username**: `sa`
- **Password**: (leave empty)

---

## 🛠️ Alternative Running Methods

### **Method 1: Using Provided Batch Script**

I've created `start-app.bat` for easy startup:

```bash
# From project root
start-app.bat
```

This script will:
1. Guide you through backend startup
2. Guide you through frontend startup
3. Provide access URLs

### **Method 2: Run Backend in Background**

**Windows PowerShell:**
```powershell
# Start backend in background
Start-Process cmd -ArgumentList "/c mvn spring-boot:run" -WorkingDirectory "backend"

# Start frontend
npm run dev
```

### **Method 3: Use IDE**

**IntelliJ IDEA:**
1. Open backend folder as Maven project
2. Right-click `ErpBackendApplication.java`
3. Select "Run 'ErpBackendApplication'"

**VS Code:**
1. Install "Spring Boot Extension Pack"
2. Open backend folder
3. Click "Run" button in Spring Boot dashboard

---

## 🔍 Testing the Setup

### **Test Frontend**
```bash
# Open browser
http://localhost:5173

# Navigate through pages:
- Dashboard
- Inventory
- Sales
- Customers
- Finance
- HR
- Reports
- Settings
```

### **Test Backend API**
```bash
# Test products endpoint
curl http://localhost:8080/api/products

# Test dashboard endpoint
curl http://localhost:8080/api/dashboard

# Test customers endpoint
curl http://localhost:8080/api/customers
```

### **Test Database**
```bash
# Open H2 Console
http://localhost:8080/h2-console

# Run SQL queries
SELECT * FROM products;
SELECT * FROM customers;
SELECT * FROM orders;
```

---

## 🚨 Troubleshooting

### **Frontend Issues**

#### **Port 5173 Already in Use**
```bash
# Kill process on port 5173
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use different port
npm run dev -- --port 3000
```

#### **Module Not Found Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### **Build Errors**
```bash
# Clear Vite cache
rm -rf .vite
npm run dev
```

### **Backend Issues**

#### **Maven Not Found**
```bash
# Verify Maven installation
mvn --version

# If not found, reinstall Maven or add to PATH
```

#### **Port 8080 Already in Use**
```bash
# Kill process on port 8080
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Or change port in application.properties
# server.port=8081
```

#### **Java Version Issues**
```bash
# Check Java version
java -version

# If wrong version, set JAVA_HOME
set JAVA_HOME=C:\Program Files\Java\jdk-26
```

#### **Maven Dependency Download Failures**
```bash
# Clear Maven cache
cd %USERPROFILE%\.m2\repository
# Delete corrupted folders

# Try again
mvn clean install -U
```

#### **Database Connection Issues**
```bash
# Check H2 console is accessible
http://localhost:8080/h2-console

# Verify database URL in application.properties
# spring.datasource.url=jdbc:h2:mem:erpdb
```

### **Integration Issues**

#### **CORS Errors**
- Backend has CORS configured for all origins
- If still getting CORS errors, check browser console
- Verify backend is running on port 8080

#### **API Connection Failures**
```bash
# Test backend is running
curl http://localhost:8080/api/dashboard

# Check backend logs for errors
# Verify CORS configuration
```

---

## 📊 What You'll See When Running

### **Frontend (http://localhost:5173)**
- Modern gradient-based UI design
- Sidebar navigation with icons
- Dashboard with statistics cards
- Interactive data tables
- Modal dialogs for forms
- Responsive design for all devices

### **Backend (http://localhost:8080)**
- Spring Boot startup banner
- Database initialization logs
- Sample data loading messages
- API endpoint mappings
- H2 console availability

### **Sample Data**
- **12 Products** with various categories
- **5 Customers** with purchase history
- **2 Users** (admin and regular)
- **5 Employees** across departments

---

## 🎯 Recommended Approach

### **For Testing Frontend Only:**
```bash
npm run dev
```
- Quick setup, no additional installation needed
- Uses mock data, fully functional UI
- Perfect for UI/UX testing

### **For Full Stack Development:**
```bash
# Install Maven first, then:
cd backend && mvn spring-boot:run
# New terminal:
npm run dev
```
- Complete system with real backend
- REST API integration
- Database persistence
- Production-ready architecture

### **For Quick Backend Test:**
```bash
cd backend
mvn spring-boot:run
# Test API endpoints with curl or Postman
```

---

## 📞 Quick Reference

### **Useful Commands**
```bash
# Frontend
npm run dev          # Start frontend
npm run build        # Build for production
npm run preview      # Preview production build

# Backend
mvn spring-boot:run  # Start backend
mvn clean install    # Build project
mvn test             # Run tests

# System
netstat -ano | findstr :8080    # Check port 8080
netstat -ano | findstr :5173    # Check port 5173
taskkill /PID <PID> /F          # Kill process
```

### **Access URLs**
- Frontend: http://localhost:5173
- Backend API: http://localhost:8080/api
- H2 Console: http://localhost:8080/h2-console
- API Health: http://localhost:8080/actuator/health (if configured)

### **Default Credentials**
- Admin: admin@erp.com / admin123
- User: user@erp.com / admin123
- H2 Database: sa / (empty)

---

## 🎉 Success Indicators

### **Frontend Running Successfully:**
```
VITE v5.1.4  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### **Backend Running Successfully:**
```
Started ErpBackendApplication in X.XXX seconds
Tomcat started on port(s): 8080 (http)
```

### **Both Running:**
- Frontend accessible at http://localhost:5173
- Backend API responding at http://localhost:8080/api
- H2 console accessible at http://localhost:8080/h2-console
- Sample data loaded in database

---

## 🚀 Next Steps After Running

1. **Explore the Frontend**
   - Navigate through all modules
   - Test the UI components
   - Check responsive design

2. **Test the Backend**
   - Try API endpoints with curl/Postman
   - Check H2 console for data
   - Review sample data

3. **Integration** (Optional)
   - Create API service in frontend
   - Replace mock data with API calls
   - Test full stack functionality

4. **Development**
   - Start building new features
   - Modify existing components
   - Add new API endpoints

---

**Your system is ready to run! The only missing piece is Maven installation for the backend.** 

**Choose your option:**
- **Quick**: Run frontend only (no Maven needed)
- **Complete**: Install Maven and run full stack
- **Alternative**: Use Maven wrapper (no installation needed)

Good luck with your ERP project! 🎉

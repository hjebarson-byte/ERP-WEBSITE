package com.erp.backend.controller;

import com.erp.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private InvoiceService invoiceService;

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getDashboardStats() {
        Map<String, Object> stats = new HashMap<>();

        // Product stats
        long totalProducts = productService.getAllProducts().size();
        long lowStockProducts = productService.getLowStockProducts().size();
        stats.put("totalProducts", totalProducts);
        stats.put("lowStockProducts", lowStockProducts);

        // Customer stats
        long totalCustomers = customerService.getAllCustomers().size();
        stats.put("totalCustomers", totalCustomers);

        // Order stats
        long totalOrders = orderService.getAllOrders().size();
        long completedOrders = orderService.countOrdersByStatus(com.erp.backend.model.Order.OrderStatus.COMPLETED);
        long pendingOrders = orderService.countOrdersByStatus(com.erp.backend.model.Order.OrderStatus.PENDING);
        stats.put("totalOrders", totalOrders);
        stats.put("completedOrders", completedOrders);
        stats.put("pendingOrders", pendingOrders);

        // Transaction stats
        BigDecimal totalIncome = transactionService.getTotalIncome();
        BigDecimal totalExpenses = transactionService.getTotalExpenses();
        BigDecimal netProfit = transactionService.getNetProfit();
        stats.put("totalIncome", totalIncome);
        stats.put("totalExpenses", totalExpenses);
        stats.put("netProfit", netProfit);

        // Invoice stats
        long pendingInvoices = invoiceService.countInvoicesByStatus(com.erp.backend.model.Invoice.InvoiceStatus.PENDING);
        BigDecimal totalPendingAmount = invoiceService.getTotalPendingAmount();
        stats.put("pendingInvoices", pendingInvoices);
        stats.put("totalPendingAmount", totalPendingAmount);

        // Employee stats
        long totalEmployees = employeeService.getAllEmployees().size();
        long activeEmployees = employeeService.countEmployeesByStatus(com.erp.backend.model.Employee.EmployeeStatus.ACTIVE);
        stats.put("totalEmployees", totalEmployees);
        stats.put("activeEmployees", activeEmployees);

        return ResponseEntity.ok(stats);
    }

    @GetMapping("/revenue")
    public ResponseEntity<Map<String, Object>> getRevenueOverview() {
        Map<String, Object> revenue = new HashMap<>();

        BigDecimal totalIncome = transactionService.getTotalIncome();
        BigDecimal totalExpenses = transactionService.getTotalExpenses();
        BigDecimal netProfit = transactionService.getNetProfit();

        revenue.put("totalIncome", totalIncome);
        revenue.put("totalExpenses", totalExpenses);
        revenue.put("netProfit", netProfit);

        // Calculate profit margin
        if (totalIncome.compareTo(BigDecimal.ZERO) > 0) {
            BigDecimal profitMargin = netProfit.divide(totalIncome, 4, java.math.RoundingMode.HALF_UP)
                    .multiply(new BigDecimal("100"));
            revenue.put("profitMargin", profitMargin);
        } else {
            revenue.put("profitMargin", BigDecimal.ZERO);
        }

        return ResponseEntity.ok(revenue);
    }

    @GetMapping("/recent-activity")
    public ResponseEntity<Map<String, Object>> getRecentActivity() {
        Map<String, Object> activity = new HashMap<>();

        // Recent orders
        activity.put("recentOrders", orderService.getAllOrders().stream()
                .sorted((o1, o2) -> o2.getOrderDate().compareTo(o1.getOrderDate()))
                .limit(5)
                .toList());

        // Recent transactions
        activity.put("recentTransactions", transactionService.getAllTransactions().stream()
                .sorted((t1, t2) -> t2.getTransactionDate().compareTo(t1.getTransactionDate()))
                .limit(5)
                .toList());

        // Overdue invoices
        activity.put("overdueInvoices", invoiceService.getOverdueInvoices());

        return ResponseEntity.ok(activity);
    }
}

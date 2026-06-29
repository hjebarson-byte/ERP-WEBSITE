package com.erp.backend.controller;

import com.erp.backend.model.Transaction;
import com.erp.backend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "*")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public ResponseEntity<List<Transaction>> getAllTransactions() {
        List<Transaction> transactions = transactionService.getAllTransactions();
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable Long id) {
        return transactionService.getTransactionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/number/{transactionNumber}")
    public ResponseEntity<Transaction> getTransactionByNumber(@PathVariable String transactionNumber) {
        return transactionService.getTransactionByNumber(transactionNumber)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction) {
        Transaction createdTransaction = transactionService.createTransaction(transaction);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTransaction);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Transaction> updateTransaction(@PathVariable Long id, @RequestBody Transaction transaction) {
        try {
            Transaction updatedTransaction = transactionService.updateTransaction(id, transaction);
            return ResponseEntity.ok(updatedTransaction);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
        transactionService.deleteTransaction(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Transaction>> getTransactionsByType(@PathVariable Transaction.TransactionType type) {
        List<Transaction> transactions = transactionService.getTransactionsByType(type);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Transaction>> getTransactionsByCategory(@PathVariable String category) {
        List<Transaction> transactions = transactionService.getTransactionsByCategory(category);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<Transaction>> getTransactionsByStatus(@PathVariable Transaction.TransactionStatus status) {
        List<Transaction> transactions = transactionService.getTransactionsByStatus(status);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Transaction>> searchTransactions(@RequestParam String keyword) {
        List<Transaction> transactions = transactionService.searchTransactions(keyword);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/date-range")
    public ResponseEntity<List<Transaction>> getTransactionsByDateRange(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDate) {
        List<Transaction> transactions = transactionService.getTransactionsByDateRange(startDate, endDate);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/summary/income")
    public ResponseEntity<BigDecimal> getTotalIncome() {
        BigDecimal totalIncome = transactionService.getTotalIncome();
        return ResponseEntity.ok(totalIncome);
    }

    @GetMapping("/summary/expenses")
    public ResponseEntity<BigDecimal> getTotalExpenses() {
        BigDecimal totalExpenses = transactionService.getTotalExpenses();
        return ResponseEntity.ok(totalExpenses);
    }

    @GetMapping("/summary/profit")
    public ResponseEntity<BigDecimal> getNetProfit() {
        BigDecimal netProfit = transactionService.getNetProfit();
        return ResponseEntity.ok(netProfit);
    }

    @GetMapping("/count/{status}")
    public ResponseEntity<Long> countTransactionsByStatus(@PathVariable Transaction.TransactionStatus status) {
        long count = transactionService.countTransactionsByStatus(status);
        return ResponseEntity.ok(count);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Transaction> updateTransactionStatus(
            @PathVariable Long id,
            @RequestParam Transaction.TransactionStatus status) {
        try {
            Transaction transaction = transactionService.updateTransactionStatus(id, status);
            return ResponseEntity.ok(transaction);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}

package com.erp.backend.service;

import com.erp.backend.model.Transaction;
import com.erp.backend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public Optional<Transaction> getTransactionById(Long id) {
        return transactionRepository.findById(id);
    }

    public Optional<Transaction> getTransactionByNumber(String transactionNumber) {
        return transactionRepository.findByTransactionNumber(transactionNumber);
    }

    public Transaction createTransaction(Transaction transaction) {
        if (transaction.getTransactionNumber() == null || transaction.getTransactionNumber().isEmpty()) {
            transaction.setTransactionNumber(generateTransactionNumber());
        }
        return transactionRepository.save(transaction);
    }

    public Transaction updateTransaction(Long id, Transaction transactionDetails) {
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Transaction not found"));

        transaction.setType(transactionDetails.getType());
        transaction.setCategory(transactionDetails.getCategory());
        transaction.setDescription(transactionDetails.getDescription());
        transaction.setAmount(transactionDetails.getAmount());
        transaction.setStatus(transactionDetails.getStatus());

        return transactionRepository.save(transaction);
    }

    public void deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
    }

    public List<Transaction> getTransactionsByType(Transaction.TransactionType type) {
        return transactionRepository.findByType(type);
    }

    public List<Transaction> getTransactionsByCategory(String category) {
        return transactionRepository.findByCategory(category);
    }

    public List<Transaction> getTransactionsByStatus(Transaction.TransactionStatus status) {
        return transactionRepository.findByStatus(status);
    }

    public List<Transaction> searchTransactions(String keyword) {
        return transactionRepository.searchTransactions(keyword);
    }

    public List<Transaction> getTransactionsByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        return transactionRepository.findByTransactionDateBetween(startDate, endDate);
    }

    public BigDecimal getTotalIncome() {
        return transactionRepository.sumByTypeAndStatus(Transaction.TransactionType.INCOME)
                .orElse(BigDecimal.ZERO);
    }

    public BigDecimal getTotalExpenses() {
        return transactionRepository.sumByTypeAndStatus(Transaction.TransactionType.EXPENSE)
                .orElse(BigDecimal.ZERO);
    }

    public BigDecimal getNetProfit() {
        return getTotalIncome().subtract(getTotalExpenses());
    }

    public long countTransactionsByStatus(Transaction.TransactionStatus status) {
        return transactionRepository.countByStatus(status);
    }

    private String generateTransactionNumber() {
        return "TXN" + System.currentTimeMillis();
    }

    public Transaction updateTransactionStatus(Long id, Transaction.TransactionStatus status) {
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Transaction not found"));
        
        transaction.setStatus(status);
        return transactionRepository.save(transaction);
    }
}

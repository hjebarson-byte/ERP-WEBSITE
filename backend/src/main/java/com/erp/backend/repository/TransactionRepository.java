package com.erp.backend.repository;

import com.erp.backend.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    Optional<Transaction> findByTransactionNumber(String transactionNumber);

    List<Transaction> findByType(Transaction.TransactionType type);

    List<Transaction> findByCategory(String category);

    List<Transaction> findByStatus(Transaction.TransactionStatus status);

    List<Transaction> findByTransactionDateBetween(LocalDateTime startDate, LocalDateTime endDate);

    @Query("SELECT t FROM Transaction t WHERE t.transactionNumber LIKE %:keyword% OR t.description LIKE %:keyword% OR t.category LIKE %:keyword%")
    List<Transaction> searchTransactions(@Param("keyword") String keyword);

    @Query("SELECT SUM(t.amount) FROM Transaction t WHERE t.type = :type AND t.status = 'COMPLETED'")
    BigDecimal sumByTypeAndStatus(@Param("type") Transaction.TransactionType type);

    @Query("SELECT COUNT(t) FROM Transaction t WHERE t.status = :status")
    long countByStatus(@Param("status") Transaction.TransactionStatus status);
}

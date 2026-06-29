package com.erp.backend.repository;

import com.erp.backend.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

    Optional<Invoice> findByInvoiceNumber(String invoiceNumber);

    List<Invoice> findByCustomer_Id(Long customerId);

    List<Invoice> findByStatus(Invoice.InvoiceStatus status);

    List<Invoice> findByDueDateBefore(LocalDate date);

    List<Invoice> findByDueDateBetween(LocalDate startDate, LocalDate endDate);

    @Query("SELECT i FROM Invoice i WHERE i.invoiceNumber LIKE %:keyword% OR i.customer.name LIKE %:keyword%")
    List<Invoice> searchInvoices(@Param("keyword") String keyword);

    @Query("SELECT SUM(i.amount) FROM Invoice i WHERE i.status = :status")
    BigDecimal sumByStatus(@Param("status") Invoice.InvoiceStatus status);

    @Query("SELECT COUNT(i) FROM Invoice i WHERE i.status = :status")
    long countByStatus(@Param("status") Invoice.InvoiceStatus status);

    @Query("SELECT i FROM Invoice i WHERE i.status = 'PENDING' AND i.dueDate < :date")
    List<Invoice> findOverdueInvoices(@Param("date") LocalDate date);
}

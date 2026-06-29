package com.erp.backend.service;

import com.erp.backend.model.Invoice;
import com.erp.backend.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    public List<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }

    public Optional<Invoice> getInvoiceById(Long id) {
        return invoiceRepository.findById(id);
    }

    public Optional<Invoice> getInvoiceByNumber(String invoiceNumber) {
        return invoiceRepository.findByInvoiceNumber(invoiceNumber);
    }

    public Invoice createInvoice(Invoice invoice) {
        if (invoice.getInvoiceNumber() == null || invoice.getInvoiceNumber().isEmpty()) {
            invoice.setInvoiceNumber(generateInvoiceNumber());
        }
        return invoiceRepository.save(invoice);
    }

    public Invoice updateInvoice(Long id, Invoice invoiceDetails) {
        Invoice invoice = invoiceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Invoice not found"));

        invoice.setCustomer(invoiceDetails.getCustomer());
        invoice.setAmount(invoiceDetails.getAmount());
        invoice.setDueDate(invoiceDetails.getDueDate());
        invoice.setStatus(invoiceDetails.getStatus());
        invoice.setNotes(invoiceDetails.getNotes());

        // Update paid date if status changes to PAID
        if (invoiceDetails.getStatus() == Invoice.InvoiceStatus.PAID && invoice.getPaidDate() == null) {
            invoice.setPaidDate(LocalDate.now());
        }

        return invoiceRepository.save(invoice);
    }

    public void deleteInvoice(Long id) {
        invoiceRepository.deleteById(id);
    }

    public List<Invoice> getInvoicesByCustomer(Long customerId) {
        return invoiceRepository.findByCustomer_Id(customerId);
    }

    public List<Invoice> getInvoicesByStatus(Invoice.InvoiceStatus status) {
        return invoiceRepository.findByStatus(status);
    }

    public List<Invoice> searchInvoices(String keyword) {
        return invoiceRepository.searchInvoices(keyword);
    }

    public List<Invoice> getInvoicesByDueDateRange(LocalDate startDate, LocalDate endDate) {
        return invoiceRepository.findByDueDateBetween(startDate, endDate);
    }

    public List<Invoice> getOverdueInvoices() {
        return invoiceRepository.findOverdueInvoices(LocalDate.now());
    }

    public BigDecimal getTotalPendingAmount() {
        return invoiceRepository.sumByStatus(Invoice.InvoiceStatus.PENDING)
                .orElse(BigDecimal.ZERO);
    }

    public long countInvoicesByStatus(Invoice.InvoiceStatus status) {
        return invoiceRepository.countByStatus(status);
    }

    private String generateInvoiceNumber() {
        return "INV" + System.currentTimeMillis();
    }

    public Invoice updateInvoiceStatus(Long id, Invoice.InvoiceStatus status) {
        Invoice invoice = invoiceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Invoice not found"));
        
        invoice.setStatus(status);
        
        if (status == Invoice.InvoiceStatus.PAID && invoice.getPaidDate() == null) {
            invoice.setPaidDate(LocalDate.now());
        }
        
        return invoiceRepository.save(invoice);
    }
}

package com.erp.backend.repository;

import com.erp.backend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    Optional<Order> findByOrderNumber(String orderNumber);

    List<Order> findByCustomer_Id(Long customerId);

    List<Order> findByStatus(Order.OrderStatus status);

    List<Order> findByOrderDateBetween(LocalDateTime startDate, LocalDateTime endDate);

    @Query("SELECT o FROM Order o WHERE o.orderNumber LIKE %:keyword% OR o.customer.name LIKE %:keyword%")
    List<Order> searchOrders(@Param("keyword") String keyword);

    @Query("SELECT o FROM Order o WHERE o.status = :status ORDER BY o.orderDate DESC")
    List<Order> findOrdersByStatusSortedByDate(@Param("status") Order.OrderStatus status);

    @Query("SELECT COUNT(o) FROM Order o WHERE o.status = :status")
    long countByStatus(@Param("status") Order.OrderStatus status);
}

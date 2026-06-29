package com.erp.backend.service;

import com.erp.backend.model.Order;
import com.erp.backend.model.OrderItem;
import com.erp.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public Optional<Order> getOrderByNumber(String orderNumber) {
        return orderRepository.findByOrderNumber(orderNumber);
    }

    public Order createOrder(Order order) {
        if (order.getOrderNumber() == null || order.getOrderNumber().isEmpty()) {
            order.setOrderNumber(generateOrderNumber());
        }
        return orderRepository.save(order);
    }

    public Order updateOrder(Long id, Order orderDetails) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        order.setCustomer(orderDetails.getCustomer());
        order.setTotal(orderDetails.getTotal());
        order.setStatus(orderDetails.getStatus());
        order.setItems(orderDetails.getItems());
        order.setNotes(orderDetails.getNotes());

        // Update dates based on status
        if (orderDetails.getStatus() == Order.OrderStatus.SHIPPED && order.getShippedDate() == null) {
            order.setShippedDate(LocalDateTime.now());
        }
        if (orderDetails.getStatus() == Order.OrderStatus.DELIVERED && order.getDeliveredDate() == null) {
            order.setDeliveredDate(LocalDateTime.now());
        }

        return orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    public List<Order> getOrdersByCustomer(Long customerId) {
        return orderRepository.findByCustomer_Id(customerId);
    }

    public List<Order> getOrdersByStatus(Order.OrderStatus status) {
        return orderRepository.findByStatus(status);
    }

    public List<Order> searchOrders(String keyword) {
        return orderRepository.searchOrders(keyword);
    }

    public List<Order> getOrdersByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        return orderRepository.findByOrderDateBetween(startDate, endDate);
    }

    public long countOrdersByStatus(Order.OrderStatus status) {
        return orderRepository.countByStatus(status);
    }

    private String generateOrderNumber() {
        return "ORD" + System.currentTimeMillis();
    }

    public Order updateOrderStatus(Long id, Order.OrderStatus status) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        
        order.setStatus(status);
        
        if (status == Order.OrderStatus.SHIPPED && order.getShippedDate() == null) {
            order.setShippedDate(LocalDateTime.now());
        }
        if (status == Order.OrderStatus.DELIVERED && order.getDeliveredDate() == null) {
            order.setDeliveredDate(LocalDateTime.now());
        }
        
        return orderRepository.save(order);
    }
}

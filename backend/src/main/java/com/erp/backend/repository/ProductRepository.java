package com.erp.backend.repository;

import com.erp.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findByName(String name);

    List<Product> findByCategory(String category);

    List<Product> findByStockLessThan(Integer stock);

    @Query("SELECT p FROM Product p WHERE p.name LIKE %:keyword% OR p.category LIKE %:keyword%")
    List<Product> searchProducts(@Param("keyword") String keyword);

    @Query("SELECT p FROM Product p WHERE p.stock > 0 ORDER BY p.stock ASC")
    List<Product> findLowStockProducts();
}

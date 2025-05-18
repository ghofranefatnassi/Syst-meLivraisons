package com.example.demo.repository;

import com.example.demo.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface ProduitRepository extends JpaRepository<Produit, Integer> {

    // 1. Basic queries
    List<Produit> findByStockGreaterThanEqual(Integer minStock);
    
    List<Produit> findByNomContaining(String nom);
    
    List<Produit> findByPrixBetween(Double minPrix, Double maxPrix);

    // 2. Combined condition query
    List<Produit> findByNomContainingAndPrixBetween(String nom, Double minPrix, Double maxPrix);

    // 3. Flexible search with null handling
    @Query("SELECT p FROM Produit p WHERE " +
           "(:nom IS NULL OR p.nom LIKE %:nom%) AND " +
           "(:minPrix IS NULL OR p.prix >= :minPrix) AND " +
           "(:maxPrix IS NULL OR p.prix <= :maxPrix)")
    List<Produit> searchProduits(
            @Param("nom") String nom,
            @Param("minPrix") Double minPrix,
            @Param("maxPrix") Double maxPrix);

    // 4. Low stock alert
    @Query("SELECT p FROM Produit p WHERE p.stock <= :threshold")
    List<Produit> findLowStockProducts(@Param("threshold") Integer threshold);

    // 5. Find by exact name match
    Produit findByNom(String nom);
}
package com.example.demo.repository;

import com.example.demo.model.LigneCommande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LigneCommandeRepository extends JpaRepository<LigneCommande, Integer> {
    List<LigneCommande> findByCommandeId(Integer commandeId);
    List<LigneCommande> findByProduitId(Integer produitId);
}
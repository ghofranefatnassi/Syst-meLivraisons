package com.example.demo.repository;

import com.example.demo.model.Livraison;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LivraisonRepository extends JpaRepository<Livraison, Integer> {
    Optional<Livraison> findByCommandeId(Integer commandeId);
    List<Livraison> findByTransporteurId(Integer transporteurId);
}
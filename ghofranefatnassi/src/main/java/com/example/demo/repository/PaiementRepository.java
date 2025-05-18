package com.example.demo.repository;

import com.example.demo.model.Paiement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PaiementRepository extends JpaRepository<Paiement, Integer> {
    Optional<Paiement> findByCommandeId(Integer commandeId);
    List<Paiement> findByStatut(String statut);
}
package com.example.demo.repository;

import com.example.demo.model.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommandeRepository extends JpaRepository<Commande, Integer> {
    List<Commande> findByClientId(Integer clientId);
    
    @Query("SELECT c FROM Commande c WHERE c.statut = :status")
    List<Commande> findByStatus(String status);
}
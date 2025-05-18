package com.example.demo.repository;

import com.example.demo.model.Transporteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransporteurRepository extends JpaRepository<Transporteur, Integer> {
    @Query("SELECT t FROM Transporteur t ORDER BY CAST(t.note AS double) DESC")
    List<Transporteur> findAllOrderByNoteDesc();
    
    List<Transporteur> findByNomContaining(String nom);
}
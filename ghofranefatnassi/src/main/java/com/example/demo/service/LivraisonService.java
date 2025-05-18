package com.example.demo.service;

import com.example.demo.model.Livraison;
import com.example.demo.repository.LivraisonRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LivraisonService {
    private final LivraisonRepository livraisonRepository;

    public LivraisonService(LivraisonRepository livraisonRepository) {
        this.livraisonRepository = livraisonRepository;
    }

    public Livraison getByCommande(Integer commandeId) {
        return livraisonRepository.findByCommandeId(commandeId)
                .orElseThrow(() -> new RuntimeException("Livraison not found"));
    }

    public Livraison createLivraison(Livraison livraison) {
        return livraisonRepository.save(livraison);
    }

    public Livraison updateStatus(Integer id, String status) {
        Livraison livraison = livraisonRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Livraison not found"));
        livraison.setStatut(status);
        return livraisonRepository.save(livraison);
    }

    public String getTrackingInfo(Integer id) {
        Livraison livraison = livraisonRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Livraison not found"));
        return "Tracking info for delivery " + id + ": Status - " + livraison.getStatut();
    }
}
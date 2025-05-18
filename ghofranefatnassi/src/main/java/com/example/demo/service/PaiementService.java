package com.example.demo.service;

import com.example.demo.model.Paiement;
import com.example.demo.repository.PaiementRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PaiementService {
    private final PaiementRepository paiementRepository;

    public PaiementService(PaiementRepository paiementRepository) {
        this.paiementRepository = paiementRepository;
    }

    public Paiement getByCommande(Integer commandeId) {
        return paiementRepository.findByCommandeId(commandeId)
                .orElseThrow(() -> new RuntimeException("Paiement not found"));
    }

    public Paiement processPaiement(Paiement paiement) {
        paiement.setStatut("PAID");
        return paiementRepository.save(paiement);
    }

    public Paiement updateStatus(Integer id, String status) {
        Paiement paiement = paiementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Paiement not found"));
        paiement.setStatut(status);
        return paiementRepository.save(paiement);
    }

    public Paiement processRefund(Integer id) {
        Paiement paiement = paiementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Paiement not found"));
        paiement.setStatut("REFUNDED");
        return paiementRepository.save(paiement);
    }
}
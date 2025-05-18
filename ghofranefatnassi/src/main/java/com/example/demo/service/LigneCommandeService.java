package com.example.demo.service;

import com.example.demo.model.LigneCommande;
import com.example.demo.repository.LigneCommandeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class LigneCommandeService {
    private final LigneCommandeRepository ligneCommandeRepository;

    public LigneCommandeService(LigneCommandeRepository ligneCommandeRepository) {
        this.ligneCommandeRepository = ligneCommandeRepository;
    }

    public List<LigneCommande> getByCommande(Integer commandeId) {
        return ligneCommandeRepository.findByCommandeId(commandeId);
    }

    public LigneCommande createLigneCommande(LigneCommande ligneCommande) {
        return ligneCommandeRepository.save(ligneCommande);
    }

    public void deleteLigneCommande(Integer id) {
        ligneCommandeRepository.deleteById(id);
    }
}
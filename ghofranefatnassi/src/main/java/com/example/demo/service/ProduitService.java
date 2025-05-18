package com.example.demo.service;

import com.example.demo.model.Produit;
import com.example.demo.repository.ProduitRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProduitService {
    private final ProduitRepository produitRepository;

    public ProduitService(ProduitRepository produitRepository) {
        this.produitRepository = produitRepository;
    }

    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    public Produit getProduitById(Integer id) {
        return produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produit not found"));
    }

    public Produit createProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    public Produit updateProduit(Integer id, Produit produitDetails) {
        Produit produit = getProduitById(id);
        produit.setNom(produitDetails.getNom());
        produit.setStock(produitDetails.getStock());
        produit.setPrix(produitDetails.getPrix());
        return produitRepository.save(produit);
    }

    public void deleteProduit(Integer id) {
        produitRepository.deleteById(id);
    }

    public List<Produit> getProduitsByMinStock(Integer minStock) {
        return produitRepository.findByStockGreaterThanEqual(minStock);
    }

    public Produit updateStock(Integer id, Integer quantity) {
        Produit produit = getProduitById(id);
        produit.setStock(quantity);
        return produitRepository.save(produit);
    }

    public List<Produit> searchProduits(String nom, Double minPrix, Double maxPrix) {
        if (nom != null && minPrix != null && maxPrix != null) {
            return produitRepository.findByNomContainingAndPrixBetween(nom, minPrix, maxPrix);
        } else if (nom != null) {
            return produitRepository.findByNomContaining(nom);
        } else if (minPrix != null && maxPrix != null) {
            return produitRepository.findByPrixBetween(minPrix, maxPrix);
        }
        return produitRepository.findAll();
    }
}
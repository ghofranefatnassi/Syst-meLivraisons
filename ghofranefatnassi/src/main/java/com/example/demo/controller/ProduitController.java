package com.example.demo.controller;

import com.example.demo.model.Produit;
import com.example.demo.service.ProduitService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produits")
public class ProduitController {

    private final ProduitService produitService;

    public ProduitController(ProduitService produitService) {
        this.produitService = produitService;
    }

    @GetMapping
    public ResponseEntity<List<Produit>> getAllProduits() {
        return ResponseEntity.ok(produitService.getAllProduits());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produit> getProduitById(@PathVariable Integer id) {
        return ResponseEntity.ok(produitService.getProduitById(id));
    }

    @PostMapping
    public ResponseEntity<Produit> createProduit(@RequestBody Produit produit) {
        return new ResponseEntity<>(produitService.createProduit(produit), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produit> updateProduit(
            @PathVariable Integer id,
            @RequestBody Produit produit) {
        return ResponseEntity.ok(produitService.updateProduit(id, produit));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduit(@PathVariable Integer id) {
        produitService.deleteProduit(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/stock/{minStock}")
    public ResponseEntity<List<Produit>> getProduitsByMinStock(@PathVariable Integer minStock) {
        return ResponseEntity.ok(produitService.getProduitsByMinStock(minStock));
    }

    @PutMapping("/{id}/stock")
    public ResponseEntity<Produit> updateStock(
            @PathVariable Integer id,
            @RequestParam Integer quantity) {
        return ResponseEntity.ok(produitService.updateStock(id, quantity));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Produit>> searchProduits(
            @RequestParam(required = false) String nom,
            @RequestParam(required = false) Double minPrix,
            @RequestParam(required = false) Double maxPrix) {
        return ResponseEntity.ok(produitService.searchProduits(nom, minPrix, maxPrix));
    }
}
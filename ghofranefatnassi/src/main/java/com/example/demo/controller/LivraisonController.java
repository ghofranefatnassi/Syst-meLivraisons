package com.example.demo.controller;

import com.example.demo.model.Livraison;
import com.example.demo.service.LivraisonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/livraisons")
public class LivraisonController {
    private final LivraisonService livraisonService;

    public LivraisonController(LivraisonService livraisonService) {
        this.livraisonService = livraisonService;
    }

    @GetMapping("/commande/{commandeId}")
    public ResponseEntity<Livraison> getLivraisonByCommande(@PathVariable Integer commandeId) {
        return ResponseEntity.ok(livraisonService.getByCommande(commandeId));
    }

    @PostMapping
    public ResponseEntity<Livraison> scheduleLivraison(@RequestBody Livraison livraison) {
        return new ResponseEntity<>(livraisonService.createLivraison(livraison), HttpStatus.CREATED);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Livraison> updateLivraisonStatus(
            @PathVariable Integer id,
            @RequestParam String newStatus) {
        return ResponseEntity.ok(livraisonService.updateStatus(id, newStatus));
    }


}
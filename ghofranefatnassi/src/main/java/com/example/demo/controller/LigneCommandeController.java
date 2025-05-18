package com.example.demo.controller;

import com.example.demo.model.LigneCommande;
import com.example.demo.service.LigneCommandeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lignes-commande")
public class LigneCommandeController {

    private final LigneCommandeService ligneCommandeService;

    public LigneCommandeController(LigneCommandeService ligneCommandeService) {
        this.ligneCommandeService = ligneCommandeService;
    }

    @GetMapping("/commande/{commandeId}")
    public ResponseEntity<List<LigneCommande>> getByCommande(@PathVariable Integer commandeId) {
        return ResponseEntity.ok(ligneCommandeService.getByCommande(commandeId));
    }

    @PostMapping
    public ResponseEntity<LigneCommande> createLigneCommande(@RequestBody LigneCommande ligneCommande) {
        return new ResponseEntity<>(ligneCommandeService.createLigneCommande(ligneCommande), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLigneCommande(@PathVariable Integer id) {
        ligneCommandeService.deleteLigneCommande(id);
        return ResponseEntity.noContent().build();
    }
}
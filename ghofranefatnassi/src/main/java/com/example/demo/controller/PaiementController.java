package com.example.demo.controller;

import com.example.demo.model.Paiement;
import com.example.demo.service.PaiementService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/paiements")
public class PaiementController {
    private final PaiementService paiementService;

    public PaiementController(PaiementService paiementService) {
        this.paiementService = paiementService;
    }

    @GetMapping("/commande/{commandeId}")
    public ResponseEntity<Paiement> getPaiementByCommande(@PathVariable Integer commandeId) {
        return ResponseEntity.ok(paiementService.getByCommande(commandeId));
    }

    @PostMapping
    public ResponseEntity<Paiement> processPaiement(@RequestBody Paiement paiement) {
        return new ResponseEntity<>(paiementService.processPaiement(paiement), HttpStatus.CREATED);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Paiement> updatePaiementStatus(
            @PathVariable Integer id,
            @RequestParam String newStatus) {
        return ResponseEntity.ok(paiementService.updateStatus(id, newStatus));
    }

    @PostMapping("/{id}/refund")
    public ResponseEntity<Paiement> processRefund(@PathVariable Integer id) {
        return ResponseEntity.ok(paiementService.processRefund(id));
    }
}
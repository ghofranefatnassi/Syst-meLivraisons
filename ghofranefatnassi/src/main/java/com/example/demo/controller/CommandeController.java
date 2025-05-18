package com.example.demo.controller;

import com.example.demo.model.Commande;
import com.example.demo.service.CommandeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/commandes")
public class CommandeController {
    private final CommandeService commandeService;

    public CommandeController(CommandeService commandeService) {
        this.commandeService = commandeService;
    }

    @GetMapping
    public ResponseEntity<List<Commande>> getAllCommandes() {
        return ResponseEntity.ok(commandeService.getAllCommandes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Commande> getCommandeById(@PathVariable Integer id) {
        return ResponseEntity.ok(commandeService.getCommandeById(id));
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Commande>> getCommandesByClient(@PathVariable Integer clientId) {
        return ResponseEntity.ok(commandeService.getCommandesByClient(clientId));
    }

    @PostMapping
    public ResponseEntity<Commande> createCommande(@RequestBody Commande commande) {
        return new ResponseEntity<>(commandeService.createCommande(commande), HttpStatus.CREATED);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Commande> updateCommandeStatus(
            @PathVariable Integer id, 
            @RequestParam String newStatus) {
        return ResponseEntity.ok(commandeService.updateStatus(id, newStatus));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCommande(@PathVariable Integer id) {
        commandeService.deleteCommande(id);
        return ResponseEntity.noContent().build();
    }
}
package com.example.demo.service;

import com.example.demo.model.Commande;
import com.example.demo.repository.CommandeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CommandeService {
    private final CommandeRepository commandeRepository;

    public CommandeService(CommandeRepository commandeRepository) {
        this.commandeRepository = commandeRepository;
    }

    public List<Commande> getAllCommandes() {
        return commandeRepository.findAll();
    }

    public Commande getCommandeById(Integer id) {
        return commandeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Commande not found"));
    }

    public Commande createCommande(Commande commande) {
        return commandeRepository.save(commande);
    }

    public Commande updateStatus(Integer id, String status) {
        Commande commande = getCommandeById(id);
        commande.setStatut(status);
        return commandeRepository.save(commande);
    }

    public List<Commande> getCommandesByClient(Integer clientId) {
        return commandeRepository.findByClientId(clientId);
    }

    public void deleteCommande(Integer id) {
        commandeRepository.deleteById(id);
    }
}
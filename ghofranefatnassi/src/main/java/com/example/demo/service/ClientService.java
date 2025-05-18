package com.example.demo.service;

import com.example.demo.model.Client;
import com.example.demo.repository.ClientRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ClientService {
    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Client getClientById(Integer id) {
        return clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));
    }

    public Client createClient(Client client) {
        if (clientRepository.existsByEmail(client.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        return clientRepository.save(client);
    }

    public Client updateClient(Integer id, Client clientDetails) {
        Client client = getClientById(id);
        client.setNom(clientDetails.getNom());
        client.setAdresse(clientDetails.getAdresse());
        return clientRepository.save(client);
    }

    public void deleteClient(Integer id) {
        clientRepository.deleteById(id);
    }
}
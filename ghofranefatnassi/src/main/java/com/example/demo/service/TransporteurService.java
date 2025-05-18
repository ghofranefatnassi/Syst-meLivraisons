package com.example.demo.service;

import com.example.demo.model.Transporteur;
import com.example.demo.repository.TransporteurRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TransporteurService {
    private final TransporteurRepository transporteurRepository;

    public TransporteurService(TransporteurRepository transporteurRepository) {
        this.transporteurRepository = transporteurRepository;
    }

    public List<Transporteur> getAllTransporteurs() {
        return transporteurRepository.findAll();
    }

    public Transporteur createTransporteur(Transporteur transporteur) {
        return transporteurRepository.save(transporteur);
    }

    public Transporteur updateNote(Integer id, Double note) {
        Transporteur transporteur = transporteurRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Transporteur not found"));
        transporteur.setNote(note.toString());
        return transporteurRepository.save(transporteur);
    }

    public List<Transporteur> getTopRatedTransporteurs() {
        return transporteurRepository.findAllOrderByNoteDesc();
    }
}
package com.example.demo.controller;

import com.example.demo.model.Transporteur;
import com.example.demo.service.TransporteurService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transporteurs")
public class TransporteurController {

    private final TransporteurService transporteurService;

    public TransporteurController(TransporteurService transporteurService) {
        this.transporteurService = transporteurService;
    }

    @GetMapping
    public ResponseEntity<List<Transporteur>> getAllTransporteurs() {
        return ResponseEntity.ok(transporteurService.getAllTransporteurs());
    }

    @PostMapping
    public ResponseEntity<Transporteur> createTransporteur(@RequestBody Transporteur transporteur) {
        return new ResponseEntity<>(transporteurService.createTransporteur(transporteur), HttpStatus.CREATED);
    }

    @PutMapping("/{id}/note")
    public ResponseEntity<Transporteur> updateNote(
            @PathVariable Integer id,
            @RequestParam Double note) {
        return ResponseEntity.ok(transporteurService.updateNote(id, note));
    }

    @GetMapping("/top-rated")
    public ResponseEntity<List<Transporteur>> getTopRatedTransporteurs() {
        return ResponseEntity.ok(transporteurService.getTopRatedTransporteurs());
    }
}
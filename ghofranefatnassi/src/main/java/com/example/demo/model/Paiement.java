package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "paiement")
public class Paiement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idP")
    private Integer id;
    
    @OneToOne
    @JoinColumn(name = "commande", nullable = false)
    private Commande commande;
    
    @Column(name = "dateP", nullable = false)
    private LocalDate date;
    
    @Column(name = "statutP", nullable = false, length = 50)
    private String statut;
    
    @Column(nullable = false, length = 50)
    private String mode;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Commande getCommande() {
		return commande;
	}

	public void setCommande(Commande commande) {
		this.commande = commande;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	public Paiement(Integer id, Commande commande, LocalDate date, String statut, String mode) {
		super();
		this.id = id;
		this.commande = commande;
		this.date = date;
		this.statut = statut;
		this.mode = mode;
	}

	public Paiement() {
		super();
		// TODO Auto-generated constructor stub
	}
    
   
    
}
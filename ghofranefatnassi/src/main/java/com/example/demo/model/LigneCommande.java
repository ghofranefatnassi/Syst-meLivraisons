package com.example.demo.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "lignecommande")
public class LigneCommande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idLC")
    private Integer id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "commande", nullable = false)
    private Commande commande;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "produit", nullable = false)
    private Produit produit;
    
    @Column(name = "quantité", nullable = false)
    private Integer quantite;
    
    @Column(name = "prix_unitaire", nullable = false, precision = 10, scale = 0)
    private BigDecimal prixUnitaire;

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

	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	public Integer getQuantite() {
		return quantite;
	}

	public void setQuantite(Integer quantite) {
		this.quantite = quantite;
	}

	public BigDecimal getPrixUnitaire() {
		return prixUnitaire;
	}

	public void setPrixUnitaire(BigDecimal prixUnitaire) {
		this.prixUnitaire = prixUnitaire;
	}

	public LigneCommande(Integer id, Commande commande, Produit produit, Integer quantite, BigDecimal prixUnitaire) {
		super();
		this.id = id;
		this.commande = commande;
		this.produit = produit;
		this.quantite = quantite;
		this.prixUnitaire = prixUnitaire;
	}

	public LigneCommande() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    // Constructors, getters, and setters
}
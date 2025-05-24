package com.example.demo.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "produit")
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idPr") // Matches DB column name
    private Integer id;
    
    
    @Column(name = "nomPro", nullable = false, length = 50)
    private String nom;
    
    @Column(nullable = false)
    private Integer stock;
    
    @Column(nullable = false, precision = 11, scale = 0)
    private BigDecimal prix;
    
    @OneToMany(mappedBy = "produit")
    private List<LigneCommande> lignesCommande;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Integer getStock() {
		return stock;
	}

	public void setStock(Integer stock) {
		this.stock = stock;
	}

	public BigDecimal getPrix() {
		return prix;
	}

	public void setPrix(BigDecimal prix) {
		this.prix = prix;
	}

	public List<LigneCommande> getLignesCommande() {
		return lignesCommande;
	}

	public void setLignesCommande(List<LigneCommande> lignesCommande) {
		this.lignesCommande = lignesCommande;
	}

	public Produit(Integer id, String nom, Integer stock, BigDecimal prix, List<LigneCommande> lignesCommande) {
		super();
		this.id = id;
		this.nom = nom;
		this.stock = stock;
		this.prix = prix;
		this.lignesCommande = lignesCommande;
	}

	public Produit() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.math.BigDecimal;

@Entity
@Table(name = "livraison")
public class Livraison {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idLi")
    private Integer id;
    
    @OneToOne
    @JoinColumn(name = "commande", nullable = false)
    private Commande commande;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "transporteur", nullable = false)
    private Transporteur transporteur;
    
    @Column(name = "date_livraison", nullable = false)
    private LocalDate dateLivraison;
    
    @Column(name = "coût", nullable = false, precision = 10, scale = 0)
    private BigDecimal cout;
    
    @Column(name = "statutLi", nullable = false, length = 50)
    private String statut;

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

	public Transporteur getTransporteur() {
		return transporteur;
	}

	public void setTransporteur(Transporteur transporteur) {
		this.transporteur = transporteur;
	}

	public LocalDate getDateLivraison() {
		return dateLivraison;
	}

	public void setDateLivraison(LocalDate dateLivraison) {
		this.dateLivraison = dateLivraison;
	}

	public BigDecimal getCout() {
		return cout;
	}

	public void setCout(BigDecimal cout) {
		this.cout = cout;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public Livraison(Integer id, Commande commande, Transporteur transporteur, LocalDate dateLivraison, BigDecimal cout,
			String statut) {
		super();
		this.id = id;
		this.commande = commande;
		this.transporteur = transporteur;
		this.dateLivraison = dateLivraison;
		this.cout = cout;
		this.statut = statut;
	}

	public Livraison() {
		super();
		// TODO Auto-generated constructor stub
	}
    
   
    
}
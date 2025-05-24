package com.example.demo.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "commande")
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCom") // Matches DB column name
    private Integer id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client", nullable = false)
    private Client client;
    
    @Column(nullable = false)
    private LocalDate date;
    
    @Column(nullable = false, length = 50)
    private String statut;
    
    @Column(name = "montant_total", nullable = false, precision = 10, scale = 0)
    private BigDecimal montantTotal;
    
    @OneToMany(mappedBy = "commande", cascade = CascadeType.ALL)
    private List<LigneCommande> lignesCommande;
    
    @OneToOne(mappedBy = "commande", cascade = CascadeType.ALL)
    private Livraison livraison;
    
    @OneToOne(mappedBy = "commande", cascade = CascadeType.ALL)
    private Paiement paiement;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
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

	public BigDecimal getMontantTotal() {
		return montantTotal;
	}

	public void setMontantTotal(BigDecimal montantTotal) {
		this.montantTotal = montantTotal;
	}

	public List<LigneCommande> getLignesCommande() {
		return lignesCommande;
	}

	public void setLignesCommande(List<LigneCommande> lignesCommande) {
		this.lignesCommande = lignesCommande;
	}

	public Livraison getLivraison() {
		return livraison;
	}

	public void setLivraison(Livraison livraison) {
		this.livraison = livraison;
	}

	public Paiement getPaiement() {
		return paiement;
	}

	public void setPaiement(Paiement paiement) {
		this.paiement = paiement;
	}

	public Commande(Integer id, Client client, LocalDate date, String statut, BigDecimal montantTotal,
			List<LigneCommande> lignesCommande, Livraison livraison, Paiement paiement) {
		super();
		this.id = id;
		this.client = client;
		this.date = date;
		this.statut = statut;
		this.montantTotal = montantTotal;
		this.lignesCommande = lignesCommande;
		this.livraison = livraison;
		this.paiement = paiement;
	}

	public Commande() {
		super();
		// TODO Auto-generated constructor stub
	}
        
    
}
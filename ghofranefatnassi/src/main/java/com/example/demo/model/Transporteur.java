package com.example.demo.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "transporteur")
public class Transporteur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idT")
    private Integer id;
    
    @Column(name = "nomT", nullable = false, length = 50)
    private String nom;
    
    @Column(nullable = false, length = 50)
    private String telephone;
    
    @Column(nullable = false, length = 50)
    private String note;
    
    @OneToMany(mappedBy = "transporteur")
    private List<Livraison> livraisons;

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

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public List<Livraison> getLivraisons() {
		return livraisons;
	}

	public void setLivraisons(List<Livraison> livraisons) {
		this.livraisons = livraisons;
	}

	public Transporteur(Integer id, String nom, String telephone, String note, List<Livraison> livraisons) {
		super();
		this.id = id;
		this.nom = nom;
		this.telephone = telephone;
		this.note = note;
		this.livraisons = livraisons;
	}

	public Transporteur() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}
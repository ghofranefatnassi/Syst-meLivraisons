package com.example.demo.model;

import java.util.List;
import java.util.Objects;

import jakarta.persistence.*;

@Entity
@Table(name = "client")
public class Client {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer id;
	 @Column(nullable = false, length = 50)
	    private String nom;
	    
	    @Column(nullable = false, length = 50, unique = true)
	    private String email;
	    
	    @Column(nullable = false, length = 50)
	    private String adresse;
	    
	    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
	    private List<Commande> commandes;

	    public Client(String nom, String email, String adresse) {
	        this.nom = nom;
	        this.email = email;
	        this.adresse = adresse;
	    }
	    
		public Client() {}

		public Client(Integer id, String nom, String email, String adresse, List<Commande> commandes) {
			super();
			this.id = id;
			this.nom = nom;
			this.email = email;
			this.adresse = adresse;
			this.commandes = commandes;
		}

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

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getAdresse() {
			return adresse;
		}

		public void setAdresse(String adresse) {
			this.adresse = adresse;
		}

		public List<Commande> getCommandes() {
			return commandes;
		}

		public void setCommandes(List<Commande> commandes) {
			this.commandes = commandes;
		}

		// equals() and hashCode()
	    @Override
	    public boolean equals(Object o) {
	        if (this == o) return true;
	        if (o == null || getClass() != o.getClass()) return false;
	        Client client = (Client) o;
	        return Objects.equals(id, client.id) && 
	               Objects.equals(email, client.email);
	    }

	    @Override
	    public int hashCode() {
	        return Objects.hash(id, email);
	    }

	    // toString()
	    @Override
	    public String toString() {
	        return "Client{" +
	                "id=" + id +
	                ", nom='" + nom + '\'' +
	                ", email='" + email + '\'' +
	                ", adresse='" + adresse + '\'' +
	                '}';
	    }

	    // Business methods
	    public void addCommande(Commande commande) {
	        commandes.add(commande);
	        commande.setClient(this);
	    }

	    public void removeCommande(Commande commande) {
	        commandes.remove(commande);
	        commande.setClient(null);
	    }
		
		
	    
}

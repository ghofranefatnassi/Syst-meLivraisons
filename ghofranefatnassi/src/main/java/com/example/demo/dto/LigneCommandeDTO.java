package com.example.demo.dto;

import jakarta.validation.constraints.*;
import lombok.Data;
import java.math.BigDecimal;

@Data
public class LigneCommandeDTO {
    private Integer id;

    @NotNull(message = "Product ID is required")
    private Integer produitId;

    @NotNull(message = "Quantity is required")
    @Min(value = 1, message = "Quantity must be at least 1")
    private Integer quantite;

    @NotNull(message = "Unit price is required")
    @DecimalMin(value = "0.01", message = "Price must be greater than 0")
    private BigDecimal prixUnitaire;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getProduitId() {
		return produitId;
	}

	public void setProduitId(Integer produitId) {
		this.produitId = produitId;
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

	public LigneCommandeDTO(Integer id, @NotNull(message = "Product ID is required") Integer produitId,
			@NotNull(message = "Quantity is required") @Min(value = 1, message = "Quantity must be at least 1") Integer quantite,
			@NotNull(message = "Unit price is required") @DecimalMin(value = "0.01", message = "Price must be greater than 0") BigDecimal prixUnitaire) {
		super();
		this.id = id;
		this.produitId = produitId;
		this.quantite = quantite;
		this.prixUnitaire = prixUnitaire;
	}

	public LigneCommandeDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}
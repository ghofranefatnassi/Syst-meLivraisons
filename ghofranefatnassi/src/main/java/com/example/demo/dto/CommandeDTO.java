package com.example.demo.dto;

import jakarta.validation.constraints.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
public class CommandeDTO {
    private Integer id;

    @NotNull(message = "Client ID is required")
    private Integer clientId;

    private LocalDate date;

    @NotBlank(message = "Order status is required")
    private String statut;

    @NotNull(message = "Total amount is required")
    @DecimalMin(value = "0.01", message = "Amount must be greater than 0")
    private BigDecimal montantTotal;

    @NotEmpty(message = "Order must contain at least one item")
    private List<LigneCommandeDTO> lignesCommande;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getClientId() {
		return clientId;
	}

	public void setClientId(Integer clientId) {
		this.clientId = clientId;
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

	public List<LigneCommandeDTO> getLignesCommande() {
		return lignesCommande;
	}

	public void setLignesCommande(List<LigneCommandeDTO> lignesCommande) {
		this.lignesCommande = lignesCommande;
	}

	public CommandeDTO(Integer id, @NotNull(message = "Client ID is required") Integer clientId, LocalDate date,
			@NotBlank(message = "Order status is required") String statut,
			@NotNull(message = "Total amount is required") @DecimalMin(value = "0.01", message = "Amount must be greater than 0") BigDecimal montantTotal,
			@NotEmpty(message = "Order must contain at least one item") List<LigneCommandeDTO> lignesCommande) {
		super();
		this.id = id;
		this.clientId = clientId;
		this.date = date;
		this.statut = statut;
		this.montantTotal = montantTotal;
		this.lignesCommande = lignesCommande;
	}

	public CommandeDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}
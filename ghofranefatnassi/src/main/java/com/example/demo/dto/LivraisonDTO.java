package com.example.demo.dto;

import jakarta.validation.constraints.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class LivraisonDTO {
    private Integer id;

    @NotNull(message = "Order ID is required")
    private Integer commandeId;

    @NotNull(message = "Carrier ID is required")
    private Integer transporteurId;

    @NotNull(message = "Delivery date is required")
    @FutureOrPresent(message = "Delivery date must be today or in the future")
    private LocalDate dateLivraison;

    @NotNull(message = "Shipping cost is required")
    @DecimalMin(value = "0.00", message = "Cost cannot be negative")
    private BigDecimal cout;

    @NotBlank(message = "Delivery status is required")
    private String statut;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCommandeId() {
		return commandeId;
	}

	public void setCommandeId(Integer commandeId) {
		this.commandeId = commandeId;
	}

	public Integer getTransporteurId() {
		return transporteurId;
	}

	public void setTransporteurId(Integer transporteurId) {
		this.transporteurId = transporteurId;
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

	public LivraisonDTO(Integer id, @NotNull(message = "Order ID is required") Integer commandeId,
			@NotNull(message = "Carrier ID is required") Integer transporteurId,
			@NotNull(message = "Delivery date is required") @FutureOrPresent(message = "Delivery date must be today or in the future") LocalDate dateLivraison,
			@NotNull(message = "Shipping cost is required") @DecimalMin(value = "0.00", message = "Cost cannot be negative") BigDecimal cout,
			@NotBlank(message = "Delivery status is required") String statut) {
		super();
		this.id = id;
		this.commandeId = commandeId;
		this.transporteurId = transporteurId;
		this.dateLivraison = dateLivraison;
		this.cout = cout;
		this.statut = statut;
	}

	public LivraisonDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}
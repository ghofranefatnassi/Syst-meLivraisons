package com.example.demo.dto;

import jakarta.validation.constraints.*;
import lombok.Data;
import java.time.LocalDate;

@Data
public class PaiementDTO {
    private Integer id;

    @NotNull(message = "Order ID is required")
    private Integer commandeId;

    private LocalDate date;

    @NotBlank(message = "Payment status is required")
    private String statut;

    @NotBlank(message = "Payment method is required")
    private String mode;

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

	public PaiementDTO(Integer id, @NotNull(message = "Order ID is required") Integer commandeId, LocalDate date,
			@NotBlank(message = "Payment status is required") String statut,
			@NotBlank(message = "Payment method is required") String mode) {
		super();
		this.id = id;
		this.commandeId = commandeId;
		this.date = date;
		this.statut = statut;
		this.mode = mode;
	}

	public PaiementDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}
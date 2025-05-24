package com.example.demo.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class TransporteurDTO {
    private Integer id;

    @NotBlank(message = "Carrier name is required")
    @Size(max = 50, message = "Name must be less than 50 characters")
    private String nom;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Invalid phone number format")
    private String telephone;

    @NotNull(message = "Rating is required")
    @DecimalMin(value = "0.0", message = "Rating must be at least 0")
    @DecimalMax(value = "5.0", message = "Rating must be at most 5")
    private Double note;

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

	public Double getNote() {
		return note;
	}

	public void setNote(Double note) {
		this.note = note;
	}

	public TransporteurDTO(Integer id,
			@NotBlank(message = "Carrier name is required") @Size(max = 50, message = "Name must be less than 50 characters") String nom,
			@NotBlank(message = "Phone number is required") @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Invalid phone number format") String telephone,
			@NotNull(message = "Rating is required") @DecimalMin(value = "0.0", message = "Rating must be at least 0") @DecimalMax(value = "5.0", message = "Rating must be at most 5") Double note) {
		super();
		this.id = id;
		this.nom = nom;
		this.telephone = telephone;
		this.note = note;
	}

	public TransporteurDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}
package com.example.demo.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class ClientDTO {
    private Integer id;

    @NotBlank(message = "Client name is required")
    @Size(max = 50, message = "Name must be less than 50 characters")
    private String nom;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Size(max = 50, message = "Email must be less than 50 characters")
    private String email;

    @NotBlank(message = "Address is required")
    @Size(max = 50, message = "Address must be less than 50 characters")
    private String adresse;

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

	public ClientDTO(Integer id,
			@NotBlank(message = "Client name is required") @Size(max = 50, message = "Name must be less than 50 characters") String nom,
			@NotBlank(message = "Email is required") @Email(message = "Invalid email format") @Size(max = 50, message = "Email must be less than 50 characters") String email,
			@NotBlank(message = "Address is required") @Size(max = 50, message = "Address must be less than 50 characters") String adresse) {
		super();
		this.id = id;
		this.nom = nom;
		this.email = email;
		this.adresse = adresse;
	}

	public ClientDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}
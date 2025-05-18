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
}
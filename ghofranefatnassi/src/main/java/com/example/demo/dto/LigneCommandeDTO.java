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
}
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
}
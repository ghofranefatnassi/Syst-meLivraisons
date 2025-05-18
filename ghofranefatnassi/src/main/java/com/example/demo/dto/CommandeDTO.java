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
}
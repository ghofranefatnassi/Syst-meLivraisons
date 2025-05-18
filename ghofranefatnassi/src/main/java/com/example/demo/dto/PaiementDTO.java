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
}
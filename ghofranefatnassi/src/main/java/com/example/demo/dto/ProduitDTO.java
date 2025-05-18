package com.example.demo.dto;

import jakarta.validation.constraints.*;
import lombok.Data;
import java.math.BigDecimal;

@Data
public class ProduitDTO {
    private Integer id;

    @NotBlank(message = "Product name is required")
    @Size(max = 50, message = "Name must be less than 50 characters")
    private String nom;

    @NotNull(message = "Stock quantity is required")
    @Min(value = 0, message = "Stock cannot be negative")
    private Integer stock;

    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.01", message = "Price must be greater than 0")
    @Digits(integer = 10, fraction = 2, message = "Invalid price format")
    private BigDecimal prix;
}
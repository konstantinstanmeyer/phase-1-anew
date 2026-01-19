package com.cocktailapp.controller;

import com.cocktailapp.model.Drink;
import com.cocktailapp.service.DrinkService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drinks")
public class DrinkController {
    
    private final DrinkService drinkService;
    
    public DrinkController(DrinkService drinkService) {
        this.drinkService = drinkService;
    }
    
    @GetMapping("/by-ingredient")
    public ResponseEntity<List<Drink>> getDrinksByIngredient(@RequestParam String ingredient) {
        List<Drink> drinks = drinkService.getDrinksByIngredient(ingredient);
        return ResponseEntity.ok(drinks);
    }
}
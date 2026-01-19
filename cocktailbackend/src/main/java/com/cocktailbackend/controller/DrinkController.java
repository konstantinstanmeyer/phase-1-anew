package com.cocktailbackend.controller;

import com.cocktailbackend.model.Drink;
import com.cocktailbackend.service.DrinkService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drinks")
public class DrinkController {
    
    private final DrinkService drinkService;
    
    public DrinkController(DrinkService drinkService) {
        this.drinkService = drinkService;
         System.out.println("running!");
    }

    @GetMapping("/test")
    public String test() {
        return "OK";
    }
    
    @GetMapping("/by-ingredient")
    public ResponseEntity<List<Drink>> getDrinksByIngredient(@RequestParam String ingredient) {
        List<Drink> drinks = drinkService.getDrinksByIngredient(ingredient);
        return ResponseEntity.ok(drinks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Drink> getDrinkById(@PathVariable String id) {
        Drink drink = drinkService.getDrinkById(id);
        if (drink == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(drink);
    }
}
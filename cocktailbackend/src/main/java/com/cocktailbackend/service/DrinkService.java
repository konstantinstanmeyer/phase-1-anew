package com.cocktailapp.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import com.cocktailapp.model.Drink;
import com.cocktailapp.model.DrinkResponse;

import java.util.Collection;
import java.util.List;

@Service
public class DrinkService {
    private final WebClient webClient;
    
    public DrinkService(WebClient webClient) {
        this.webClient = webClient;
    }

    public List<Drink> getDrinksByIngredient(String ingredient) {
        DrinkResponse response = webClient.get()
                .uri("/filter.php?i=" + ingredient)
                .retrieve()
                .bodyToMono(DrinkResponse.class)
                .block();
        
        // edge-case error handling for incorrent queries (presuming api endpoints will always return drinks with project's approach)
        if (response == null || response.getDrinks() == null) {
            return Collections.emptyList();
        }
        
        // avoiding unnecessary bloat on initial, surface-level query
        return response.getDrinks().stream()
                .limit(5)
                .map(drink -> getDrinkById(drink.getIdDrink()))
                .filter(drink -> drink != null)
                .toList();
    }
}